import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Platform,
  StatusBar as RNStatusBar,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';

const { width } = Dimensions.get('window');

// Get status bar height
const getStatusBarHeight = () => {
  if (Platform.OS === 'ios') {
    return 44; // Standard iOS status bar height
  } else {
    return RNStatusBar.currentHeight || 24; // Android status bar height
  }
};

export default function HomeScreen() {
  const statusBarHeight = getStatusBarHeight();
  
  // Navigation handlers
  const handleCameraNavigation = () => {
    router.push('/(tabs)/recognition');
  };

  const handleCharactersNavigation = () => {
    router.push('/(tabs)/characters');
  };
  
  return (
    <>
      <StatusBar style="auto" translucent />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Header Section */}
        <View style={[styles.header, { marginTop: statusBarHeight }]}>
          <View style={styles.headerContent}>
            <Text style={styles.welcomeText}>Welcome to</Text>
            <Text style={styles.appName}>KuliTra</Text>
            <Text style={styles.subtitle}>
              Discover and translate the ancient Kapampangan script
            </Text>
          </View>
          <View style={styles.headerImage}>
            <View style={styles.kulitanSymbol}>
              <Text style={styles.symbolText}>ᜃᜓᜎᜒᜆᜈ᜔</Text>
            </View>
          </View>
        </View>

        {/* Main Features Section */}
        <View style={styles.featuresContainer}>
          <Text style={styles.sectionTitle}>Features</Text>
          
          {/* Recognition Feature Card */}
          <TouchableOpacity 
            style={styles.featureCard} 
            activeOpacity={0.8}
            onPress={handleCameraNavigation}
          >
            <View style={styles.featureIconContainer}>
              <View style={styles.recognitionIcon}>
                <Text style={styles.iconText}>📷</Text>
              </View>
            </View>
            <View style={styles.featureContent}>
              <Text style={styles.featureTitle}>Scan & Translate</Text>
              <Text style={styles.featureDescription}>
                Use your camera to scan Kulitan text and instantly translate it to English or Tagalog
              </Text>
              <View style={styles.featureBadge}>
                <Text style={styles.badgeText}>Recognition</Text>
              </View>
            </View>
            <View style={styles.arrowIcon}>
              <Text style={styles.arrow}>→</Text>
            </View>
          </TouchableOpacity>

          {/* Explore Feature Card */}
          <TouchableOpacity 
            style={styles.featureCard} 
            activeOpacity={0.8}
            onPress={handleCharactersNavigation}
          >
            <View style={styles.featureIconContainer}>
              <View style={styles.exploreIcon}>
                <Text style={styles.iconText}>📚</Text>
              </View>
            </View>
            <View style={styles.featureContent}>
              <Text style={styles.featureTitle}>Learn Kulitan</Text>
              <Text style={styles.featureDescription}>
                Explore the rich history and learn to read and write the ancient Kapampangan script
              </Text>
              <View style={styles.featureBadge}>
                <Text style={styles.badgeText}>Explore</Text>
              </View>
            </View>
            <View style={styles.arrowIcon}>
              <Text style={styles.arrow}>→</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Quick Stats Section */}
        <View style={styles.statsContainer}>
          <Text style={styles.sectionTitle}>About Kulitan</Text>
          <View style={styles.statsGrid}>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>17th</Text>
              <Text style={styles.statLabel}>Century</Text>
              <Text style={styles.statDesc}>Origin period</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>37</Text>
              <Text style={styles.statLabel}>Characters</Text>
              <Text style={styles.statDesc}>Basic symbols</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>100+</Text>
              <Text style={styles.statLabel}>Words</Text>
              <Text style={styles.statDesc}>In database</Text>
            </View>
          </View>
        </View>

        {/* Bottom Spacing */}
        <View style={styles.bottomSpacing} />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 40,
    backgroundColor: '#af1400',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerContent: {
    flex: 1,
  },
  welcomeText: {
    fontSize: 16,
    color: '#FFFFFF',
    opacity: 0.9,
    marginBottom: 4,
  },
  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.8,
    lineHeight: 20,
    maxWidth: '90%',
  },
  headerImage: {
    marginLeft: 16,
  },
  kulitanSymbol: {
    width: 80,
    height: 80,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  symbolText: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  featuresContainer: {
    paddingHorizontal: 24,
    paddingTop: 32,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 20,
  },
  featureCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  featureIconContainer: {
    marginRight: 16,
  },
  recognitionIcon: {
    width: 56,
    height: 56,
    backgroundColor: 'rgba(175, 20, 0, 0.1)',
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  exploreIcon: {
    width: 56,
    height: 56,
    backgroundColor: 'rgba(175, 20, 0, 0.1)',
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    fontSize: 24,
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 4,
  },
  featureDescription: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 20,
    marginBottom: 8,
  },
  featureBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#af1400',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  arrowIcon: {
    marginLeft: 12,
  },
  arrow: {
    fontSize: 20,
    color: '#af1400',
    fontWeight: 'bold',
  },
  statsContainer: {
    paddingHorizontal: 24,
    paddingTop: 32,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statCard: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#af1400',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 2,
  },
  statDesc: {
    fontSize: 12,
    color: '#666666',
    textAlign: 'center',
  },
  ctaContainer: {
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 20,
  },
  ctaTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 8,
  },
  ctaDescription: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 32,
  },
  ctaButtons: {
    gap: 12,
  },
  primaryButton: {
    backgroundColor: '#af1400',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#af1400',
  },
  secondaryButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#af1400',
  },
  bottomSpacing: {
    height: 20,
  },
});