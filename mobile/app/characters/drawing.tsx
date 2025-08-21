import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Platform,
  StatusBar as RNStatusBar,
  Alert,
  PanResponder,
  PanResponderInstance,
} from 'react-native';
import { Text, Surface } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { useRouter, useLocalSearchParams, Stack } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import Svg, { Path, G } from 'react-native-svg';
import { captureRef } from 'react-native-view-shot';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  FadeIn,
  SlideInUp,
} from 'react-native-reanimated';

import { Colors } from '@/constants/Colors';
import { getCharacterById } from '@/data/characters';
import { useApi } from '@/hooks/useAPI';

const { width, height } = Dimensions.get('window');
const CANVAS_HEIGHT = height * 0.5;
const REFERENCE_HEIGHT = height * 0.25;

const getStatusBarHeight = () => {
  if (Platform.OS === 'ios') {
    return 44;
  } else {
    return RNStatusBar.currentHeight || 24;
  }
};

interface PathData {
  data: string;
  color: string;
  strokeWidth: number;
}

interface Point {
  x: number;
  y: number;
}

export default function DrawingScreen() {
  const router = useRouter();
  const { id, name } = useLocalSearchParams<{ id: string; name?: string }>();
  const statusBarHeight = getStatusBarHeight();
  
  // Character data
  const character = getCharacterById(id || '1');
  
  // Drawing state
  const [paths, setPaths] = useState<PathData[]>([]);
  const [currentPath, setCurrentPath] = useState<string>('');
  const [currentStrokeWidth, setCurrentStrokeWidth] = useState<number>(12);
  const [currentColor, setCurrentColor] = useState<string>(Colors.primary);
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  
  // Canvas reference for capture
  const canvasRef = useRef<View>(null);
  
  // API hook for character recognition
  const { result, loading, error, sendToAPI, clearResult } = useApi();
  
  // Animation values
  const fadeAnim = useSharedValue(0);
  const scaleAnim = useSharedValue(0.8);
  
  useEffect(() => {
    fadeAnim.value = withSpring(1);
    scaleAnim.value = withSpring(1);
  }, []);

  // Pan responder for drawing
  const panResponder: PanResponderInstance = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    
    onPanResponderGrant: (evt) => {
      const { locationX, locationY } = evt.nativeEvent;
      const newPath = `M${locationX.toFixed(2)},${locationY.toFixed(2)}`;
      setCurrentPath(newPath);
      setIsDrawing(true);
    },
    
    onPanResponderMove: (evt) => {
      const { locationX, locationY } = evt.nativeEvent;
      setCurrentPath(prev => `${prev} L${locationX.toFixed(2)},${locationY.toFixed(2)}`);
    },
    
    onPanResponderRelease: () => {
      if (currentPath) {
        setPaths(prev => [...prev, {
          data: currentPath,
          color: currentColor,
          strokeWidth: currentStrokeWidth,
        }]);
        setCurrentPath('');
      }
      setIsDrawing(false);
    },
  });

  const clearCanvas = () => {
    setPaths([]);
    setCurrentPath('');
    clearResult();
  };

  const undoLastStroke = () => {
    setPaths(prev => prev.slice(0, -1));
    clearResult();
  };

  const captureDrawing = async (): Promise<string | null> => {
    try {
      if (!canvasRef.current) return null;
      
      const uri = await captureRef(canvasRef.current, {
        format: 'jpg',
        quality: 0.8,
        result: 'tmpfile',
      });
      
      return uri;
    } catch (error) {
      console.error('Error capturing drawing:', error);
      return null;
    }
  };

  const checkDrawing = async () => {
    if (paths.length === 0) {
      Alert.alert('No Drawing', 'Please draw something first!');
      return;
    }

    try {
      const imageUri = await captureDrawing();
      
      if (!imageUri) {
        Alert.alert('Error', 'Failed to capture your drawing. Please try again.');
        return;
      }

      // Clear previous result and send to API
      clearResult();
      sendToAPI(imageUri);
      
    } catch (error) {
      console.error('Error checking drawing:', error);
      Alert.alert('Error', 'Failed to analyze your drawing. Please try again.');
    }
  };

  const renderResult = () => {
    if (!result) return null;

    if (result.error) {
      return (
        <Animated.View entering={FadeIn} style={styles.resultContainer}>
          <Surface style={[styles.resultCard, styles.errorCard]} elevation={2}>
            <MaterialCommunityIcons name="close-circle" size={48} color={Colors.error} />
            <Text style={styles.resultTitle}>Recognition Failed</Text>
            <Text style={styles.resultMessage}>{result.error}</Text>
          </Surface>
        </Animated.View>
      );
    }

    const predictedClass = result.class || result.predicted_class || result.label || 'Unknown';
    const confidence = result.confidence || result.probability || result.score || 0;
    const isCorrect = predictedClass.toLowerCase().includes(character?.name.toLowerCase() || '') ||
                     character?.name.toLowerCase().includes(predictedClass.toLowerCase()) ||
                     predictedClass.toLowerCase() === character?.name.toLowerCase();

    return (
      <Animated.View entering={FadeIn} style={styles.resultContainer}>
        <Surface style={[styles.resultCard, isCorrect ? styles.successCard : styles.warningCard]} elevation={4}>
          <MaterialCommunityIcons 
            name={isCorrect ? "check-circle" : "alert-circle"} 
            size={48} 
            color={isCorrect ? Colors.success : Colors.warning} 
          />
          <Text style={styles.resultTitle}>
            {isCorrect ? "Great Job! 🎉" : "Keep Practicing! 💪"}
          </Text>
          <Text style={styles.resultMessage}>
            {isCorrect 
              ? `Perfect! You drew "${character?.name}" correctly!`
              : `I detected "${predictedClass}" instead of "${character?.name}". Try again!`
            }
          </Text>
          {confidence > 0 && (
            <Text style={styles.confidenceText}>
              Confidence: {(confidence * 100).toFixed(1)}%
            </Text>
          )}
          
          {isCorrect && (
            <TouchableOpacity 
              style={styles.continueButton}
              onPress={() => router.back()}
            >
              <LinearGradient
                colors={[Colors.success, '#28a745']}
                style={styles.continueButtonGradient}
              >
                <MaterialCommunityIcons name="check" size={20} color="white" />
                <Text style={styles.continueButtonText}>Continue Learning</Text>
              </LinearGradient>
            </TouchableOpacity>
          )}
        </Surface>
      </Animated.View>
    );
  };

  const strokeWidthOptions = [12, 16];
  const colorOptions = [Colors.primary, '#000000'];

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: fadeAnim.value,
      transform: [{ scale: scaleAnim.value }],
    };
  });

  if (!character) {
    return (
      <View style={styles.container}>
        <Text>Character not found</Text>
      </View>
    );
  }

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style="dark" />
      
      <View style={styles.container}>
        {/* Header */}
        <LinearGradient
          colors={[Colors.primary, Colors.primaryDark]}
          style={[styles.header, { paddingTop: statusBarHeight + 10 }]}
        >
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <MaterialCommunityIcons name="arrow-left" size={24} color="white" />
          </TouchableOpacity>
          
          <View style={styles.headerContent}>
            <Text style={styles.headerTitle}>Practice Drawing</Text>
            <Text style={styles.headerSubtitle}>Draw: {character.name}</Text>
          </View>
        </LinearGradient>

        {/* Reference Character */}
        <Animated.View entering={SlideInUp.delay(200)} style={styles.referenceSection}>
          <Surface style={styles.referenceCard} elevation={2}>
            <Text style={styles.referenceTitle}>Reference Character</Text>
            <View style={styles.referenceImageContainer}>
              <Image 
                source={character.image}
                style={styles.referenceImage}
                contentFit="contain"
              />
            </View>
            <Text style={styles.referenceText}>/{character.pronunciation}/</Text>
          </Surface>
        </Animated.View>

        {/* Drawing Canvas */}
        <Animated.View style={[styles.canvasSection, animatedStyle]}>
          <Surface style={styles.canvasCard} elevation={3}>
            <Text style={styles.canvasTitle}>Your Drawing</Text>
            
            <View style={styles.canvasContainer}>
              <View
                ref={canvasRef}
                style={styles.canvas}
                {...panResponder.panHandlers}
              >
                <Svg width="100%" height="100%" style={styles.svgCanvas}>
                  <G>
                    {paths.map((path, index) => (
                      <Path
                        key={index}
                        d={path.data}
                        stroke={path.color}
                        strokeWidth={path.strokeWidth}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                    ))}
                    {currentPath && (
                      <Path
                        d={currentPath}
                        stroke={currentColor}
                        strokeWidth={currentStrokeWidth}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                    )}
                  </G>
                </Svg>
              </View>
            </View>

            {/* Drawing Controls */}
            <View style={styles.controlsContainer}>
              {/* Stroke Width */}
              <View style={styles.controlSection}>
                <Text style={styles.controlLabel}>Brush Size</Text>
                <View style={styles.strokeWidthContainer}>
                  {strokeWidthOptions.map((width) => (
                    <TouchableOpacity
                      key={width}
                      style={[
                        styles.strokeWidthButton,
                        currentStrokeWidth === width && styles.strokeWidthButtonActive
                      ]}
                      onPress={() => setCurrentStrokeWidth(width)}
                    >
                      <View 
                        style={[
                          styles.strokeWidthPreview, 
                          { 
                            width: width + 8, 
                            height: width + 8,
                            backgroundColor: currentStrokeWidth === width ? Colors.primary : Colors.textSecondary
                          }
                        ]} 
                      />
                    </TouchableOpacity>
                  ))}
                </View>
              </View>

              {/* Colors */}
              <View style={styles.controlSection}>
                <Text style={styles.controlLabel}>Color</Text>
                <View style={styles.colorContainer}>
                  {colorOptions.map((color) => (
                    <TouchableOpacity
                      key={color}
                      style={[
                        styles.colorButton,
                        { backgroundColor: color },
                        currentColor === color && styles.colorButtonActive
                      ]}
                      onPress={() => setCurrentColor(color)}
                    />
                  ))}
                </View>
              </View>
            </View>

            {/* Action Buttons */}
            <View style={styles.actionButtons}>
              <TouchableOpacity 
                style={styles.secondaryButton} 
                onPress={undoLastStroke}
                disabled={paths.length === 0}
              >
                <MaterialCommunityIcons name="undo" size={20} color={Colors.textSecondary} />
                <Text style={styles.secondaryButtonText}>Undo</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.secondaryButton} 
                onPress={clearCanvas}
                disabled={paths.length === 0}
              >
                <MaterialCommunityIcons name="delete" size={20} color={Colors.error} />
                <Text style={[styles.secondaryButtonText, { color: Colors.error }]}>Clear</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={[styles.primaryButton, loading && styles.buttonDisabled]} 
                onPress={checkDrawing}
                disabled={loading || paths.length === 0}
              >
                <LinearGradient
                  colors={loading ? ['#C7C7CC', '#C7C7CC'] : [Colors.primary, Colors.primaryLight]}
                  style={styles.primaryButtonGradient}
                >
                  {loading ? (
                    <MaterialCommunityIcons name="loading" size={20} color="white" />
                  ) : (
                    <MaterialCommunityIcons name="check" size={20} color="white" />
                  )}
                  <Text style={styles.primaryButtonText}>
                    {loading ? 'Checking...' : 'Check'}
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </Surface>
        </Animated.View>

        {/* Results */}
        {renderResult()}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  // Header
  header: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  headerContent: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: 'white',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.9)',
  },

  // Reference Section
  referenceSection: {
    marginHorizontal: 16,
    marginBottom: 16,
  },
  referenceCard: {
    backgroundColor: Colors.surface,
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
  },
  referenceTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.textPrimary,
    marginBottom: 12,
  },
  referenceImageContainer: {
    width: 80,
    height: 80,
    backgroundColor: Colors.backgroundSecondary,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  referenceImage: {
    width: 60,
    height: 60,
  },
  referenceText: {
    fontSize: 14,
    fontStyle: 'italic',
    color: Colors.textSecondary,
  },

  // Canvas Section
  canvasSection: {
    flex: 1,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  canvasCard: {
    backgroundColor: Colors.surface,
    borderRadius: 16,
    padding: 16,
    flex: 1,
  },
  canvasTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.textPrimary,
    marginBottom: 12,
    textAlign: 'center',
  },
  canvasContainer: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: Colors.border,
    borderStyle: 'dashed',
    marginBottom: 16,
    overflow: 'hidden',
  },
  canvas: {
    flex: 1,
    minHeight: 200,
  },
  svgCanvas: {
    flex: 1,
  },

  // Controls
  controlsContainer: {
    gap: 12,
    marginBottom: 16,
  },
  controlSection: {
    gap: 8,
  },
  controlLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.textPrimary,
  },
  strokeWidthContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  strokeWidthButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.backgroundSecondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  strokeWidthButtonActive: {
    borderColor: Colors.primary,
    backgroundColor: Colors.primaryLight,
  },
  strokeWidthPreview: {
    borderRadius: 10,
  },
  colorContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  colorButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 3,
    borderColor: 'transparent',
  },
  colorButtonActive: {
    borderColor: '#666',
  },

  // Action Buttons
  actionButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  secondaryButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: Colors.backgroundSecondary,
    borderRadius: 12,
    gap: 6,
  },
  secondaryButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.textSecondary,
  },
  primaryButton: {
    flex: 2,
    borderRadius: 12,
    overflow: 'hidden',
  },
  primaryButtonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    gap: 6,
  },
  primaryButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
  },
  buttonDisabled: {
    opacity: 0.6,
  },

  // Results
  resultContainer: {
    margin: 16,
  },
  resultCard: {
    backgroundColor: Colors.surface,
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
  },
  successCard: {
    borderWidth: 2,
    borderColor: Colors.success,
  },
  warningCard: {
    borderWidth: 2,
    borderColor: Colors.warning,
  },
  errorCard: {
    borderWidth: 2,
    borderColor: Colors.error,
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.textPrimary,
    marginTop: 12,
    marginBottom: 8,
  },
  resultMessage: {
    fontSize: 14,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 8,
  },
  confidenceText: {
    fontSize: 12,
    color: Colors.textSecondary,
    fontStyle: 'italic',
  },
  continueButton: {
    marginTop: 16,
    borderRadius: 12,
    overflow: 'hidden',
  },
  continueButtonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    gap: 8,
  },
  continueButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
});