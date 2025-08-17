import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Platform,
  StatusBar as RNStatusBar,
  TextInput,
  Alert,
  Modal,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';
import { 
  translateEnglishToKulitan, 
  translateTagalogToKulitan,
  translateKulitanToEnglish, 
  translateKulitanToTagalog,
  translateText,
  TranslationResult,
} from '@/data/translation';

const { width } = Dimensions.get('window');

// Get status bar height
const getStatusBarHeight = () => {
  if (Platform.OS === 'ios') {
    return 44;
  } else {
    return RNStatusBar.currentHeight || 24;
  }
};

type TranslationDirection = 'englishToKulitan' | 'tagalogToKulitan' | 'kulitanToEnglish' | 'kulitanToTagalog';

const translationOptions = [
  { value: 'englishToKulitan', label: 'English → Kulitan' },
  { value: 'tagalogToKulitan', label: 'Tagalog → Kulitan' },
  { value: 'kulitanToEnglish', label: 'Kulitan → English' },
  { value: 'kulitanToTagalog', label: 'Kulitan → Tagalog' },
];

export default function HomeScreen() {
  const statusBarHeight = getStatusBarHeight();
  const [translationInput, setTranslationInput] = useState('');
  const [translationResults, setTranslationResults] = useState<TranslationResult[]>([]);
  const [translationDirection, setTranslationDirection] = useState<TranslationDirection>('englishToKulitan');
  const [showTranslation, setShowTranslation] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  
  // Navigation handlers
  const handleCameraNavigation = () => {
    router.push('/(tabs)/recognition');
  };

  const handleCharactersNavigation = () => {
    router.push('/(tabs)/characters');
  };

  // Translation handlers
  const handleTranslate = () => {
    if (!translationInput.trim()) {
      Alert.alert('Input Required', 'Please enter text to translate');
      return;
    }

    const results = translateText(translationInput, translationDirection);
    setTranslationResults(results);
    setShowTranslation(true);
  };

  const handleDirectionChange = (direction: TranslationDirection) => {
    setTranslationDirection(direction);
    setTranslationInput('');
    setTranslationResults([]);
    setShowTranslation(false);
    setShowDropdown(false);
  };

  const clearTranslation = () => {
    setTranslationInput('');
    setTranslationResults([]);
    setShowTranslation(false);
  };

  const getPlaceholderText = () => {
    switch (translationDirection) {
      case 'englishToKulitan':
        return 'Enter English words... (e.g., "hello water mother")';
      case 'tagalogToKulitan':
        return 'Maglagay ng mga salitang Tagalog... (e.g., "tubig nanay")';
      case 'kulitanToEnglish':
        return 'Enter Kulitan words... (e.g., "ᜃᜓᜋᜓᜐ᜔ᜆ ᜇᜓᜈᜓᜋ᜔")';
      case 'kulitanToTagalog':
        return 'Maglagay ng mga salitang Kulitan...';
      default:
        return 'Enter text...';
    }
  };

  const getCurrentDirectionLabel = () => {
    const option = translationOptions.find(opt => opt.value === translationDirection);
    return option ? option.label : '';
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
              Discover and translate Kapampangan words in Kulitan script
            </Text>
          </View>
          <View style={styles.headerImage}>
            <View style={styles.kulitanSymbol}>
              <Text style={styles.symbolText}>ᜃᜓᜎᜒᜆᜈ᜔</Text>
            </View>
          </View>
        </View>

        {/* Quick Translation Section */}
        <View style={styles.quickTranslationContainer}>
          <Text style={styles.sectionTitle}>Word Translator</Text>
          
          {/* Translation Direction Dropdown */}
          <View style={styles.dropdownContainer}>
            <TouchableOpacity 
              style={styles.dropdownButton}
              onPress={() => setShowDropdown(!showDropdown)}
            >
              <Text style={styles.dropdownButtonText}>{getCurrentDirectionLabel()}</Text>
              <Text style={styles.dropdownArrow}>{showDropdown ? '▲' : '▼'}</Text>
            </TouchableOpacity>

            {/* Dropdown Modal */}
            <Modal
              visible={showDropdown}
              transparent={true}
              animationType="fade"
              onRequestClose={() => setShowDropdown(false)}
            >
              <TouchableOpacity 
                style={styles.modalOverlay}
                activeOpacity={1}
                onPress={() => setShowDropdown(false)}
              >
                <View style={styles.dropdownModal}>
                  {translationOptions.map((option) => (
                    <TouchableOpacity
                      key={option.value}
                      style={[
                        styles.dropdownOption,
                        translationDirection === option.value && styles.activeDropdownOption
                      ]}
                      onPress={() => handleDirectionChange(option.value as TranslationDirection)}
                    >
                      <Text style={[
                        styles.dropdownOptionText,
                        translationDirection === option.value && styles.activeDropdownOptionText
                      ]}>
                        {option.label}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </TouchableOpacity>
            </Modal>
          </View>

          {/* Input Field */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.translationInput}
              value={translationInput}
              onChangeText={setTranslationInput}
              placeholder={getPlaceholderText()}
              placeholderTextColor="#999"
              multiline={true}
              numberOfLines={2}
            />
          </View>

          {/* Action Buttons */}
          <View style={styles.translationButtons}>
            <TouchableOpacity style={styles.translateButton} onPress={handleTranslate}>
              <Text style={styles.translateButtonText}>Translate</Text>
            </TouchableOpacity>
            {(translationInput || showTranslation) && (
              <TouchableOpacity style={styles.clearButton} onPress={clearTranslation}>
                <Text style={styles.clearButtonText}>Clear</Text>
              </TouchableOpacity>
            )}
          </View>

          {/* Translation Results */}
          {showTranslation && (
            <View style={styles.translationResultsContainer}>
              <Text style={styles.resultsLabel}>Translation:</Text>
              <View style={styles.resultsDisplay}>
                {translationResults.map((result, index) => (
                  <View key={index} style={styles.wordResult}>
                    <Text style={styles.originalWord}>{result.originalWord}</Text>
                    <Text style={styles.arrow}>↓</Text>
                    <Text style={[styles.translatedWord, !result.isTranslatable && styles.untranslatableWord]}>
                      {result.translatedWord}
                    </Text>
                    {result.wordData && (
                      <>
                        <Text style={styles.pronunciation}>/{result.wordData.pronunciation}/</Text>
                        {result.wordData.tagalog !== result.wordData.english && (
                          <Text style={styles.alternateTranslation}>
                            {translationDirection.includes('kulitan') ? 
                              `Tagalog: ${result.wordData.tagalog}` : 
                              `Kapampangan: ${result.wordData.kapampangan}`
                            }
                          </Text>
                        )}
                      </>
                    )}
                  </View>
                ))}
              </View>
              
              {/* Translation Summary */}
              <View style={styles.translationSummary}>
                <Text style={styles.summaryText}>
                  Translated: {translationResults.filter(r => r.isTranslatable).length} / {translationResults.length} words
                </Text>
              </View>
            </View>
          )}
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
              <Text style={styles.statNumber}>20</Text>
              <Text style={styles.statLabel}>Words</Text>
              <Text style={styles.statDesc}>Available</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>6</Text>
              <Text style={styles.statLabel}>Categories</Text>
              <Text style={styles.statDesc}>Word groups</Text>
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
  
  // Quick Translation Styles
  quickTranslationContainer: {
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 24,
    backgroundColor: '#FFFFFF',
    marginBottom: 16,
  },
  
  // Dropdown Styles
  dropdownContainer: {
    marginBottom: 16,
    zIndex: 1000,
  },
  dropdownButton: {
    backgroundColor: '#F8F9FA',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  dropdownButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  dropdownArrow: {
    fontSize: 12,
    color: '#666',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownModal: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    minWidth: 280,
    maxWidth: width * 0.8,
    marginHorizontal: 24,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  dropdownOption: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  activeDropdownOption: {
    backgroundColor: '#af1400',
  },
  dropdownOptionText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  activeDropdownOptionText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  
  inputContainer: {
    marginBottom: 16,
  },
  translationInput: {
    backgroundColor: '#F8F9FA',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    minHeight: 60,
    textAlignVertical: 'top',
  },
  translationButtons: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  translateButton: {
    flex: 1,
    backgroundColor: '#af1400',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
  },
  translateButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  clearButton: {
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#af1400',
    alignItems: 'center',
  },
  clearButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#af1400',
  },
  
  // Translation Results Styles
  translationResultsContainer: {
    backgroundColor: '#F8F9FA',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  resultsLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 12,
  },
  resultsDisplay: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 16,
  },
  wordResult: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    flex: 1,
    minWidth: '45%',
  },
  originalWord: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 6,
    textAlign: 'center',
  },
  arrow: {
    fontSize: 16,
    color: '#666',
    marginBottom: 6,
  },
  translatedWord: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#af1400',
    marginBottom: 6,
    textAlign: 'center',
  },
  untranslatableWord: {
    color: '#999',
    fontSize: 16,
  },
  pronunciation: {
    fontSize: 12,
    color: '#666',
    fontStyle: 'italic',
    marginBottom: 4,
  },
  alternateTranslation: {
    fontSize: 11,
    color: '#888',
    textAlign: 'center',
  },
  translationSummary: {
    alignItems: 'center',
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  summaryText: {
    fontSize: 14,
    color: '#666',
  },

  // Features Styles
  featuresContainer: {
    paddingHorizontal: 24,
    paddingTop: 16,
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
  bottomSpacing: {
    height: 20,
  },
});