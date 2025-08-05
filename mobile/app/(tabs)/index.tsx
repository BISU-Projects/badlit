import React from 'react';
import { ScrollView, StyleSheet, Dimensions, View } from 'react-native';
import { Image } from 'expo-image';
import {
  Text,
  Surface,
  Button,
  Card,
  useTheme,
  TouchableRipple,
} from 'react-native-paper';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const theme = useTheme();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header Section */}
      <Surface style={styles.header} elevation={4}>
        <View style={styles.headerContent}>
          <Text variant="bodyMedium" style={styles.welcomeText}>Welcome to</Text>
          <Text variant="headlineLarge" style={styles.appName}>Kulitan</Text>
          <Text variant="bodySmall" style={styles.subtitle}>
            Discover and translate the ancient Kapampangan script
          </Text>
        </View>
        <View style={styles.headerImage}>
          <Surface style={styles.kulitanSymbol}>
            <Text style={styles.symbolText}>ᜃᜓᜎᜒᜆᜈ᜔</Text>
          </Surface>
        </View>
      </Surface>

      {/* Features Section */}
      <View style={styles.featuresContainer}>
        <Text variant="titleLarge" style={styles.sectionTitle}>Features</Text>

        {/* Feature Card 1 */}
        <TouchableRipple style={styles.featureCard} rippleColor="rgba(0, 0, 0, .1)">
          <View style={styles.featureInner}>
            <View style={styles.featureIconContainer}>
              <Surface style={styles.recognitionIcon}>
                <Text style={styles.iconText}>📷</Text>
              </Surface>
            </View>
            <View style={styles.featureContent}>
              <Text variant="titleMedium" style={styles.featureTitle}>Scan & Translate</Text>
              <Text variant="bodySmall" style={styles.featureDescription}>
                Use your camera to scan Kulitan text and instantly translate it to English or Tagalog
              </Text>
              <Surface style={styles.featureBadge}>
                <Text style={styles.badgeText}>Recognition</Text>
              </Surface>
            </View>
            <View style={styles.arrowIcon}>
              <Text style={styles.arrow}>→</Text>
            </View>
          </View>
        </TouchableRipple>

        {/* Feature Card 2 */}
        <TouchableRipple style={styles.featureCard} rippleColor="rgba(0, 0, 0, .1)">
          <View style={styles.featureInner}>
            <View style={styles.featureIconContainer}>
              <Surface style={styles.exploreIcon}>
                <Text style={styles.iconText}>📚</Text>
              </Surface>
            </View>
            <View style={styles.featureContent}>
              <Text variant="titleMedium" style={styles.featureTitle}>Learn Kulitan</Text>
              <Text variant="bodySmall" style={styles.featureDescription}>
                Explore the rich history and learn to read and write the ancient Kapampangan script
              </Text>
              <Surface style={styles.featureBadge}>
                <Text style={styles.badgeText}>Explore</Text>
              </Surface>
            </View>
            <View style={styles.arrowIcon}>
              <Text style={styles.arrow}>→</Text>
            </View>
          </View>
        </TouchableRipple>
      </View>

      {/* Quick Stats */}
      <View style={styles.statsContainer}>
        <Text variant="titleLarge" style={styles.sectionTitle}>About Kulitan</Text>
        <View style={styles.statsGrid}>
          <Surface style={styles.statCard}>
            <Text style={styles.statNumber}>17th</Text>
            <Text style={styles.statLabel}>Century</Text>
            <Text style={styles.statDesc}>Origin period</Text>
          </Surface>
          <Surface style={styles.statCard}>
            <Text style={styles.statNumber}>37</Text>
            <Text style={styles.statLabel}>Characters</Text>
            <Text style={styles.statDesc}>Basic symbols</Text>
          </Surface>
          <Surface style={styles.statCard}>
            <Text style={styles.statNumber}>100+</Text>
            <Text style={styles.statLabel}>Words</Text>
            <Text style={styles.statDesc}>In database</Text>
          </Surface>
        </View>
      </View>

      {/* Call to Action */}
      <View style={styles.ctaContainer}>
        <Text variant="titleLarge" style={styles.ctaTitle}>Start Your Journey</Text>
        <Text variant="bodyMedium" style={styles.ctaDescription}>
          Begin exploring the beautiful world of Kulitan script and connect with Kapampangan heritage
        </Text>

        <View style={styles.ctaButtons}>
          <Button
            mode="contained"
            buttonColor="#af1400"
            style={styles.primaryButton}
            contentStyle={{ paddingVertical: 8 }}
            onPress={() => {}}
          >
            Start Scanning
          </Button>

          <Button
            mode="outlined"
            textColor="#af1400"
            style={styles.secondaryButton}
            contentStyle={{ paddingVertical: 8 }}
            onPress={() => {}}
          >
            Learn First
          </Button>
        </View>
      </View>

      {/* Bottom Spacing */}
      <View style={styles.bottomSpacing} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 60,
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
    color: '#FFFFFF',
    opacity: 0.9,
    marginBottom: 4,
  },
  appName: {
    color: '#FFFFFF',
    marginBottom: 8,
  },
  subtitle: {
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
    marginBottom: 20,
  },
  featureCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    elevation: 2,
  },
  featureInner: {
    flexDirection: 'row',
    alignItems: 'center',
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
    marginBottom: 4,
  },
  featureDescription: {
    color: '#666666',
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
    textAlign: 'center',
    marginBottom: 8,
  },
  ctaDescription: {
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 32,
    color: '#666666',
  },
  ctaButtons: {
    gap: 12,
  },
  primaryButton: {
    borderRadius: 12,
    marginBottom: 8,
  },
  secondaryButton: {
    borderRadius: 12,
    borderColor: '#af1400',
    borderWidth: 2,
  },
  bottomSpacing: {
    height: 20,
  },
});
