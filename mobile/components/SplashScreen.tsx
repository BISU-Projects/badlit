import React, { useEffect } from 'react';
import { View, StyleSheet, Text, Platform, StatusBar as RNStatusBar } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
  withSequence,
  Easing,
  interpolate,
} from 'react-native-reanimated';

interface SplashScreenProps {
  onFinish: () => void;
}

const KulitanCharacter = ({ delay, character, translation }: { delay: number; character: string; translation: string }) => {
  const characterOpacity = useSharedValue(0);
  const translationOpacity = useSharedValue(0);
  const arrowOpacity = useSharedValue(0);

  useEffect(() => {
    // Show Kulitan character first
    characterOpacity.value = withDelay(
      delay,
      withTiming(1, { duration: 600, easing: Easing.out(Easing.quad) })
    );
    
    // Show arrow
    arrowOpacity.value = withDelay(
      delay + 400,
      withTiming(1, { duration: 300 })
    );
    
    // Show translation
    translationOpacity.value = withDelay(
      delay + 700,
      withTiming(1, { duration: 600, easing: Easing.out(Easing.quad) })
    );
  }, [delay]);

  const characterStyle = useAnimatedStyle(() => {
    return {
      opacity: characterOpacity.value,
      transform: [
        {
          scale: interpolate(characterOpacity.value, [0, 1], [0.5, 1]),
        },
        {
          translateY: interpolate(characterOpacity.value, [0, 1], [10, 0]),
        },
      ],
    };
  });

  const arrowStyle = useAnimatedStyle(() => {
    return {
      opacity: arrowOpacity.value,
      transform: [
        {
          scale: interpolate(arrowOpacity.value, [0, 1], [0.8, 1]),
        },
      ],
    };
  });

  const translationStyle = useAnimatedStyle(() => {
    return {
      opacity: translationOpacity.value,
      transform: [
        {
          scale: interpolate(translationOpacity.value, [0, 1], [0.5, 1]),
        },
        {
          translateY: interpolate(translationOpacity.value, [0, 1], [10, 0]),
        },
      ],
    };
  });

  return (
    <View style={styles.characterContainer}>
      <Animated.Text style={[styles.kulitanChar, characterStyle]}>
        {character}
      </Animated.Text>
      <Animated.Text style={[styles.arrow, arrowStyle]}>
        →
      </Animated.Text>
      <Animated.Text style={[styles.latinChar, translationStyle]}>
        {translation}
      </Animated.Text>
    </View>
  );
};

const WritingAnimation = () => {
  const strokeProgress = useSharedValue(0);

  useEffect(() => {
    strokeProgress.value = withDelay(
      500,
      withTiming(1, { duration: 2000, easing: Easing.out(Easing.quad) })
    );
  }, []);

  const strokeStyle = useAnimatedStyle(() => {
    return {
      width: interpolate(strokeProgress.value, [0, 1], [0, 120]),
      opacity: strokeProgress.value,
    };
  });

  return (
    <View style={styles.writingContainer}>
      <Animated.View style={[styles.stroke, strokeStyle]} />
    </View>
  );
};

export default function SplashScreen({ onFinish }: SplashScreenProps) {
  const textOpacity = useSharedValue(0);
  const logoScale = useSharedValue(0);

  useEffect(() => {
    // Show logo first
    logoScale.value = withTiming(1, { 
      duration: 800, 
      easing: Easing.out(Easing.back(1.5)) 
    });
    
    // Show text after characters start appearing
    textOpacity.value = withDelay(
      1200,
      withTiming(1, { duration: 800 })
    );

    // Finish animation after all characters have appeared
    const totalDuration = 4500; // 4.5 seconds total
    setTimeout(() => {
      onFinish();
    }, totalDuration);
  }, []);

  const textAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: textOpacity.value,
      transform: [
        {
          translateY: interpolate(textOpacity.value, [0, 1], [20, 0]),
        },
      ],
    };
  });

  const logoStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(logoScale.value, [0, 1], [0.3, 1]),
        },
      ],
      opacity: logoScale.value,
    };
  });

  return (
    <>
      {/* Fixed Status Bar Configuration */}
      <StatusBar style="dark" />
      {/* Additional native status bar configuration for Android */}
      {Platform.OS === 'android' && (
        <RNStatusBar
          barStyle="dark-content"
          translucent={true}
        />
      )}
      
      <View style={styles.container}>
        {/* Logo/Brand area */}
        <Animated.View style={[styles.logoContainer, logoStyle]}>
          <Text style={styles.logoText}>ᜃᜓᜎᜒᜆ᜔</Text>
          <WritingAnimation />
        </Animated.View>

        {/* Character translation examples */}
        <View style={styles.translationContainer}>
          <KulitanCharacter delay={800} character="ᜃ" translation="KA" />
          <KulitanCharacter delay={1200} character="ᜎ" translation="LA" />
          <KulitanCharacter delay={1600} character="ᜋ" translation="MA" />
        </View>
        
        <Animated.Text style={[styles.loadingText, textAnimatedStyle]}>
          KuliTra
        </Animated.Text>
        
        <Animated.Text style={[styles.subText, textAnimatedStyle]}>
          Kulitan Character Translation
        </Animated.Text>
        
        <Animated.Text style={[styles.loadingSubText, textAnimatedStyle]}>
          Translating ancient script...
        </Animated.Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fefefe',
    paddingHorizontal: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logoText: {
    fontSize: 36,
    color: '#8B4513',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  writingContainer: {
    height: 3,
    width: 120,
    backgroundColor: '#E5E5E5',
    borderRadius: 1.5,
    overflow: 'hidden',
  },
  stroke: {
    height: 3,
    backgroundColor: '#8B4513',
    borderRadius: 1.5,
  },
  translationContainer: {
    alignItems: 'center',
    marginBottom: 40,
    gap: 20,
  },
  characterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  kulitanChar: {
    fontSize: 32,
    color: '#8B4513',
    fontWeight: 'bold',
    width: 40,
    textAlign: 'center',
  },
  arrow: {
    fontSize: 20,
    color: '#D2691E',
    fontWeight: 'bold',
  },
  latinChar: {
    fontSize: 24,
    color: '#4A4A4A',
    fontWeight: 'bold',
    width: 40,
    textAlign: 'center',
  },
  loadingText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#8B4513',
    marginTop: 20,
    textAlign: 'center',
    letterSpacing: 1,
  },
  subText: {
    fontSize: 16,
    color: '#D2691E',
    marginTop: 5,
    textAlign: 'center',
    fontWeight: '600',
  },
  loadingSubText: {
    fontSize: 14,
    color: '#8B7355',
    marginTop: 8,
    textAlign: 'center',
    fontStyle: 'italic',
  },
});