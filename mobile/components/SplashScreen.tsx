import React, { useEffect } from 'react';
import { View, StyleSheet, Text, Platform, StatusBar as RNStatusBar } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
  withSequence,
  withRepeat,
  Easing,
  interpolate,
} from 'react-native-reanimated';

interface SplashScreenProps {
  onFinish: () => void;
}

const LoadingDots = () => {
  const dot1 = useSharedValue(0.3);
  const dot2 = useSharedValue(0.3);
  const dot3 = useSharedValue(0.3);

  useEffect(() => {
    const animateDots = () => {
      dot1.value = withSequence(
        withTiming(1, { duration: 500, easing: Easing.out(Easing.quad) }),
        withTiming(0.3, { duration: 500 })
      );
      dot2.value = withDelay(200, withSequence(
        withTiming(1, { duration: 500, easing: Easing.out(Easing.quad) }),
        withTiming(0.3, { duration: 500 })
      ));
      dot3.value = withDelay(400, withSequence(
        withTiming(1, { duration: 500, easing: Easing.out(Easing.quad) }),
        withTiming(0.3, { duration: 500 })
      ));
    };

    const startAnimation = () => {
      animateDots();
      const interval = setInterval(animateDots, 1800);
      return interval;
    };

    const delayTimeout = setTimeout(() => {
      const interval = startAnimation();
      return () => clearInterval(interval);
    }, 1000);

    return () => clearTimeout(delayTimeout);
  }, []);

  const dot1Style = useAnimatedStyle(() => ({
    opacity: dot1.value,
    transform: [{ scale: interpolate(dot1.value, [0.3, 1], [0.8, 1.2]) }]
  }));

  const dot2Style = useAnimatedStyle(() => ({
    opacity: dot2.value,
    transform: [{ scale: interpolate(dot2.value, [0.3, 1], [0.8, 1.2]) }]
  }));

  const dot3Style = useAnimatedStyle(() => ({
    opacity: dot3.value,
    transform: [{ scale: interpolate(dot3.value, [0.3, 1], [0.8, 1.2]) }]
  }));

  return (
    <View style={styles.loadingDotsContainer}>
      <Animated.View style={[styles.dot, dot1Style]} />
      <Animated.View style={[styles.dot, dot2Style]} />
      <Animated.View style={[styles.dot, dot3Style]} />
    </View>
  );
};

const LogoIcon = () => {
  const scale = useSharedValue(0);
  const rotate = useSharedValue(0);

  useEffect(() => {
    scale.value = withTiming(1, { 
      duration: 800, 
      easing: Easing.out(Easing.back(1.2)) 
    });
    
    rotate.value = withSequence(
      withTiming(5, { duration: 800 }),
      withRepeat(
        withSequence(
          withTiming(-2, { duration: 2000, easing: Easing.inOut(Easing.quad) }),
          withTiming(2, { duration: 2000, easing: Easing.inOut(Easing.quad) })
        ),
        -1,
        true
      )
    );
  }, []);

  const logoStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: scale.value },
      { rotate: `${rotate.value}deg` }
    ],
  }));

  return (
    <Animated.View style={[styles.logoIcon, logoStyle]}>
      <Text style={styles.logoIconText}>Kt</Text>
    </Animated.View>
  );
};

export default function SplashScreen({ onFinish }: SplashScreenProps) {
  const textOpacity = useSharedValue(0);
  const subtitleOpacity = useSharedValue(0);
  const loadingOpacity = useSharedValue(0);

  useEffect(() => {
    // Staggered text animations
    textOpacity.value = withDelay(
      400,
      withTiming(1, { duration: 600, easing: Easing.out(Easing.quad) })
    );

    subtitleOpacity.value = withDelay(
      700,
      withTiming(1, { duration: 600, easing: Easing.out(Easing.quad) })
    );

    loadingOpacity.value = withDelay(
      1000,
      withTiming(1, { duration: 600, easing: Easing.out(Easing.quad) })
    );

    // Finish animation
    const totalDuration = 4000;
    setTimeout(() => {
      onFinish();
    }, totalDuration);
  }, [onFinish]);

  const textAnimatedStyle = useAnimatedStyle(() => ({
    opacity: textOpacity.value,
    transform: [
      { translateY: interpolate(textOpacity.value, [0, 1], [20, 0]) },
    ],
  }));

  const subtitleAnimatedStyle = useAnimatedStyle(() => ({
    opacity: subtitleOpacity.value,
    transform: [
      { translateY: interpolate(subtitleOpacity.value, [0, 1], [15, 0]) },
    ],
  }));

  const loadingAnimatedStyle = useAnimatedStyle(() => ({
    opacity: loadingOpacity.value,
    transform: [
      { translateY: interpolate(loadingOpacity.value, [0, 1], [10, 0]) },
    ],
  }));

  return (
    <>
      <StatusBar style="dark" />
      {Platform.OS === 'android' && (
        <RNStatusBar
          barStyle="dark-content"
          translucent={true}
        />
      )}
      
      <View style={styles.container}>
        {/* Logo */}
        <LogoIcon />

        {/* Main Title */}
        <Animated.Text style={[styles.mainTitle, textAnimatedStyle]}>
          KuliTra
        </Animated.Text>

        {/* Subtitle */}
        <Animated.Text style={[styles.subtitle, subtitleAnimatedStyle]}>
          Kulitan Character Translation
        </Animated.Text>

        {/* Loading Animation */}
        <Animated.View style={[styles.loadingSection, loadingAnimatedStyle]}>
          <LoadingDots />
          <Text style={styles.loadingText}>
            Loading translation tools...
          </Text>
        </Animated.View>
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
    paddingHorizontal: 40,
  },
  logoIcon: {
    width: 80,
    height: 80,
    borderRadius: 20,
    backgroundColor: '#8B4513',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    shadowColor: '#8B4513',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
  logoIconText: {
    fontSize: 32,
    color: '#fefefe',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#8B4513',
    marginBottom: 8,
    letterSpacing: 1.5,
  },
  subtitle: {
    fontSize: 16,
    color: '#D2691E',
    marginBottom: 50,
    textAlign: 'center',
    fontWeight: '500',
  },
  loadingSection: {
    alignItems: 'center',
    gap: 20,
  },
  loadingDotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#8B4513',
  },
  loadingText: {
    fontSize: 14,
    color: '#8B7355',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});