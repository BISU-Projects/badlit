import React, { useRef, useEffect, useState } from 'react';
import { 
  StyleSheet, 
  ScrollView, 
  View, 
  TouchableOpacity,
  Dimensions,
  Platform,
  StatusBar as RNStatusBar,
  Alert,
} from 'react-native';
import { Text, Surface, Chip, Divider } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AudioPlayer, useAudioPlayer, useAudioPlayerStatus } from 'expo-audio';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
  withSpring,
  interpolate,
  Extrapolation,
  FadeIn,
  SlideInUp,
} from 'react-native-reanimated';
import { Colors } from '@/constants/Colors';
// Import from centralized data source
import { getCharacterById, KulitanCharacter } from '@/data/characters';

const { width, height } = Dimensions.get('window');
const HEADER_HEIGHT = 300;
const CONTENT_OVERLAP = 40;

// Get status bar height
const getStatusBarHeight = () => {
  if (Platform.OS === 'ios') {
    return 44;
  } else {
    return RNStatusBar.currentHeight || 24;
  }
};

export default function CharacterDetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const statusBarHeight = getStatusBarHeight();
  const scrollY = useSharedValue(0);
  
  // Get character data from centralized source
  const character = getCharacterById(id || '1');
  
  // Audio player setup with new expo-audio
  const player = useAudioPlayer();
  const status = useAudioPlayerStatus(player);
  
  const isPlaying = status.isLoaded && status.playing;

  const playCharacterSound = async () => {
    if (!character) return;

    try {
      // Stop current playback if playing
      if (isPlaying) {
        player.pause();
        return;
      }

      // Use the audio directly from character data
      if (character.audio) {
        player.replace(character.audio);
        player.play();
      } else {
        // Fallback: Show alert with pronunciation
        Alert.alert('Audio', `Pronunciation: /${character.pronunciation}/`);
      }

    } catch (error) {
      console.error('Error playing sound:', error);
      // Fallback alert
      Alert.alert('Audio', `Pronunciation: /${character.pronunciation}/`);
    }
  };

  // Fallback if character not found
  if (!character) {
    return (
      <View style={styles.container}>
        <Text>Character not found</Text>
      </View>
    );
  }

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  const headerAnimatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollY.value,
      [0, HEADER_HEIGHT - 100],
      [1, 0],
      Extrapolation.CLAMP
    );
    
    const scale = interpolate(
      scrollY.value,
      [0, HEADER_HEIGHT],
      [1, 1.2],
      Extrapolation.CLAMP
    );

    return {
      opacity,
      transform: [{ scale }],
    };
  });

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Common': return Colors.success;
      case 'Uncommon': return Colors.warning;
      case 'Rare': return Colors.error;
      default: return Colors.textSecondary;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Basic Vowel': return '#FF6B6B';
      case 'Basic Consonant': return '#4ECDC4';
      case 'Consonant with I': return '#45B7D1';
      case 'Consonant with U': return '#96CEB4';
      case 'Consonant with E': return '#FFEAA7';
      case 'Consonant with O': return '#DDA0DD';
      case 'Final Consonant': return '#98D8C8';
      default: return Colors.primary;
    }
  };

  return (
    <>
      <StatusBar style="light" />
      {Platform.OS === 'android' && (
        <RNStatusBar barStyle="light-content" translucent={true} />
      )}

      <View style={styles.container}>
        <Animated.ScrollView
          style={styles.scrollView}
          onScroll={scrollHandler}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Hero Character Display Section */}
          <View style={styles.characterDisplayContainer}>
            <LinearGradient
              colors={['#af1400', '#d41e00']}
              style={styles.gradientBackground}
            >
              <Animated.View style={[styles.characterDisplayWrapper, headerAnimatedStyle]}>
                {/* Large Kulitan Character */}
                <Text style={styles.heroCharacter}>{character.character}</Text>
                
                {/* Sound Button */}
                <TouchableOpacity
                  style={styles.soundButton}
                  onPress={playCharacterSound}
                >
                  <MaterialCommunityIcons 
                    name={isPlaying ? "pause" : "volume-medium"} 
                    size={32} 
                    color="white" 
                  />
                  {isPlaying && (
                    <View style={styles.playingIndicator}>
                      <MaterialCommunityIcons name="play" size={16} color={Colors.primary} />
                    </View>
                  )}
                </TouchableOpacity>
                
                <LinearGradient
                  colors={['transparent', 'rgba(0,0,0,0.3)']}
                  style={styles.characterOverlay}
                />
              </Animated.View>
            </LinearGradient>
            
            {/* Back Button */}
            <TouchableOpacity 
              style={styles.backButton}
              onPress={() => router.back()}
            >
              <MaterialCommunityIcons name="arrow-left" size={24} color="white" />
            </TouchableOpacity>
            
            {/* Character Info */}
            <Animated.View style={[styles.characterInfo, headerAnimatedStyle]}>  
              <Text style={styles.characterName}>{character.name}</Text>
              <Text style={styles.pronunciation}>/{character.pronunciation}/</Text>
              <Text style={styles.soundDescription}>{character.soundDescription}</Text>
            </Animated.View>
          </View>

          {/* Main Content */}
          <Animated.View 
            entering={SlideInUp.delay(200)}
            style={[styles.contentContainer, { marginTop: -CONTENT_OVERLAP }]}
          >
            <Surface style={styles.mainContent} elevation={4}>
              {/* Description Section */}
              <Animated.View entering={FadeIn.delay(300)} style={styles.section}>
                <Text style={styles.sectionTitle}>About This Character</Text>
                <Text style={styles.description}>{character.description}</Text>
              </Animated.View>

              <Divider style={styles.divider} />

              {/* Character Properties */}
              <Animated.View entering={FadeIn.delay(400)} style={styles.section}>
                <Text style={styles.sectionTitle}>Character Properties</Text>
                <View style={styles.propertiesGrid}>
                  <View style={styles.propertyItem}>
                    <MaterialCommunityIcons name="script-text" size={24} color={Colors.primary} />
                    <Text style={styles.propertyLabel}>Type</Text>
                    <Text style={styles.propertyValue}>{character.type}</Text>
                  </View>
                  
                  {/* Enhanced Sound Property with Clickable Audio */}
                  <TouchableOpacity 
                    style={styles.propertyItem}
                    onPress={playCharacterSound}
                  >
                    <MaterialCommunityIcons 
                      name={isPlaying ? "pause" : "volume-medium"} 
                      size={24} 
                      color={isPlaying ? Colors.primary : Colors.info} 
                    />
                    <Text style={styles.propertyLabel}>Sound (Tap to Play)</Text>
                    <Text style={styles.propertyValue}>/{character.pronunciation}/</Text>
                    {/* {isPlaying && (
                      <Text style={styles.playingText}>Playing...</Text>
                    )} */}
                  </TouchableOpacity>
                  
                  <View style={styles.propertyItem}>
                    <MaterialCommunityIcons name="map-marker" size={24} color={Colors.success} />
                    <Text style={styles.propertyLabel}>Origin</Text>
                    <Text style={styles.propertyValue}>{character.origin}</Text>
                  </View>
                  <View style={styles.propertyItem}>
                    <MaterialCommunityIcons name="tag" size={24} color={Colors.warning} />
                    <Text style={styles.propertyLabel}>Category</Text>
                    <Text style={styles.propertyValue}>{character.category}</Text>
                  </View>
                </View>
              </Animated.View>

              <Divider style={styles.divider} />

              {/* Characteristics */}
              <Animated.View entering={FadeIn.delay(500)} style={styles.section}>
                <Text style={styles.sectionTitle}>Key Characteristics</Text>
                <View style={styles.characteristicsList}>
                  {character.characteristics.map((characteristic, index) => (
                    <View key={index} style={styles.characteristicItem}>
                      <View style={styles.bulletPoint} />
                      <Text style={styles.characteristicText}>{characteristic}</Text>
                    </View>
                  ))}
                </View>
              </Animated.View>

              <Divider style={styles.divider} />

              {/* Uses */}
              <Animated.View entering={FadeIn.delay(600)} style={styles.section}>
                <Text style={styles.sectionTitle}>Usage in Writing</Text>
                <View style={styles.usesContainer}>
                  {character.uses.map((use, index) => (
                    <Chip
                      key={index}
                      mode="outlined"
                      style={styles.useChip}
                      textStyle={styles.useChipText}
                    >
                      {use}
                    </Chip>
                  ))}
                </View>
              </Animated.View>

              <Divider style={styles.divider} />

              {/* Learning Tips */}
              <Animated.View entering={FadeIn.delay(700)} style={styles.section}>
                <Text style={styles.sectionTitle}>Learning Tips</Text>
                <Text style={styles.learningText}>{character.learningTips}</Text>
              </Animated.View>

              {/* Combinations */}
              <Animated.View entering={FadeIn.delay(800)} style={styles.section}>
                <Text style={styles.sectionTitle}>Related Combinations</Text>
                <View style={styles.combinationsContainer}>
                  {character.combinations.map((combination, index) => (
                    <View key={index} style={styles.combinationItem}>
                      <Text style={styles.combinationText}>{combination}</Text>
                    </View>
                  ))}
                </View>
              </Animated.View>

              {/* Additional Info */}
              {character.writingInstructions && (
                <Animated.View entering={FadeIn.delay(900)} style={styles.section}>
                  <Text style={styles.sectionTitle}>Writing Instructions</Text>
                  <View style={styles.additionalInfo}>
                    <View style={styles.infoRow}>
                      <MaterialCommunityIcons name="pencil" size={20} color={Colors.primary} />
                      <Text style={styles.writingInstructions}>{character.writingInstructions}</Text>
                    </View>
                  </View>
                </Animated.View>
              )}

              {/* Bottom Spacing */}
              <View style={styles.bottomSpacing} />
            </Surface>
          </Animated.View>
        </Animated.ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  // Scroll View
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },

  // Hero Character Display Section
  characterDisplayContainer: {
    height: HEADER_HEIGHT,
    position: 'relative',
  },
  gradientBackground: {
    flex: 1,
  },
  characterDisplayWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroCharacter: {
    fontSize: 120,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  
  // Sound Button
  soundButton: {
    position: 'absolute',
    bottom: 60,
    right: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  playingIndicator: {
    position: 'absolute',
    top: -5,
    right: -5,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  characterOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '60%',
  },
  
  // Back Button
  backButton: {
    position: 'absolute',
    top: getStatusBarHeight() + 10,
    left: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  
  characterInfo: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 24,
  },
  badgeContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    gap: 8,
  },
  rarityChip: {
    alignSelf: 'flex-start',
  },
  rarityChipText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
  categoryChip: {
    alignSelf: 'flex-start',
  },
  categoryChipText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
  characterName: {
    fontSize: 32,
    fontWeight: '700',
    color: 'white',
    marginBottom: 4,
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  pronunciation: {
    fontSize: 18,
    fontStyle: 'italic',
    color: 'rgba(255,255,255,0.9)',
    marginBottom: 8,
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  soundDescription: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },

  // Content Container
  contentContainer: {
    flex: 1,
  },
  mainContent: {
    backgroundColor: Colors.surface,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 24,
    minHeight: height - HEADER_HEIGHT + CONTENT_OVERLAP + 100,
  },

  // Sections
  section: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.textPrimary,
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: Colors.textSecondary,
  },
  
  // Dividers
  divider: {
    marginHorizontal: 24,
    marginBottom: 24,
    backgroundColor: Colors.border,
  },

  // Character Properties (Enhanced for Audio)
  propertiesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  propertyItem: {
    flex: 1,
    minWidth: '45%',
    backgroundColor: Colors.backgroundSecondary,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  propertyLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.textSecondary,
    marginTop: 8,
    marginBottom: 4,
    textAlign: 'center',
  },
  propertyValue: {
    fontSize: 14,
    color: Colors.textPrimary,
    textAlign: 'center',
    fontWeight: '500',
  },
  playingText: {
    fontSize: 10,
    color: Colors.primary,
    marginTop: 4,
    fontStyle: 'italic',
  },

  // Characteristics
  characteristicsList: {
    gap: 12,
  },
  characteristicItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  bulletPoint: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.primary,
    marginRight: 12,
    marginTop: 8,
  },
  characteristicText: {
    flex: 1,
    fontSize: 15,
    lineHeight: 22,
    color: Colors.textSecondary,
  },

  // Uses
  usesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  useChip: {
    backgroundColor: Colors.primaryLight,
    borderColor: Colors.primary,
  },
  useChipText: {
    color: Colors.primary,
    fontSize: 12,
    fontWeight: '500',
  },

  // Learning Tips
  learningText: {
    fontSize: 15,
    lineHeight: 22,
    color: Colors.textSecondary,
  },

  // Combinations
  combinationsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  combinationItem: {
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#af1400',
  },
  combinationText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#af1400',
  },

  // Additional Info
  additionalInfo: {
    gap: 12,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  writingInstructions: {
    fontSize: 15,
    color: Colors.textSecondary,
    flex: 1,
    lineHeight: 22,
  },

  bottomSpacing: {
    height: 100,
  },
});