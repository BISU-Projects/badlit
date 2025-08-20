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
  Image,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';
import { 
  TranslationResult,
} from '@/data/translation';
import { findCharacterByPronunciation, KulitanCharacter, sampleCharactersData } from '@/data/characters';

const { width } = Dimensions.get('window');

// Get status bar height
const getStatusBarHeight = () => {
  if (Platform.OS === 'ios') {
    return 44;
  } else {
    return RNStatusBar.currentHeight || 24;
  }
};

type TranslationDirection = 'englishToKulitan' | 'tagalogToKulitan';

interface CharacterImageResult {
  syllable: string;
  character?: KulitanCharacter;
}

interface EnhancedTranslationResult extends TranslationResult {
  characterImages: CharacterImageResult[];
}

const translationOptions = [
  { value: 'englishToKulitan', label: 'English → Kulitan' },
  { value: 'tagalogToKulitan', label: 'Tagalog → Kulitan' },
];

// Helper function to find character by name (transliterated form)
const findCharacterByName = (name: string): KulitanCharacter | undefined => {
  const nameLower = name.toLowerCase();
  
  // First, try exact match
  let character = sampleCharactersData.find(char => 
    char.name.toLowerCase() === nameLower
  );
  
  if (character) return character;
  
  // Try matching by pronunciation
  character = sampleCharactersData.find(char => 
    char.pronunciation.toLowerCase() === nameLower
  );
  
  if (character) return character;
  
  // For single consonants, try finding the consonant + 'a' combination
  if (nameLower.length === 1 && /[bcdfghjklmnpqrstvwxyz]/.test(nameLower)) {
    character = sampleCharactersData.find(char => 
      char.name.toLowerCase() === nameLower + 'a' ||
      char.pronunciation.toLowerCase() === nameLower + 'a'
    );
    
    if (character) return character;
  }
  
  // Try partial matching for complex cases
  return sampleCharactersData.find(char => 
    char.name.toLowerCase().includes(nameLower) ||
    char.pronunciation.toLowerCase().includes(nameLower) ||
    nameLower.includes(char.name.toLowerCase()) ||
    nameLower.includes(char.pronunciation.toLowerCase())
  );
};

// Updated helper function to get character images based on input text
// Updated helper function to get character images based on input text
const getCharacterImagesByInput = (input: string): CharacterImageResult[] => {
  if (!input) return [];

  const results: CharacterImageResult[] = [];
  const inputLower = input.toLowerCase();
  
  // Define syllable patterns in order of priority (longer patterns first)
  const syllablePatterns = [
    // 5-letter patterns
    'ngang',
    
    // 4-letter patterns
    'gang', 'kank', 'tang', 'dang', 'nang', 'lang', 'sang', 'mang', 'pang', 'bang',
    'ngo', 'nge', 'ngu', 'nga', 'ngi',
    
    // 3-letter patterns with tones
    'gí/î', 'kí/î', 'ngí/î', 'tí/î', 'dí/î', 'ní/î', 'lí/î', 'sí/î', 'mí/î', 'pí/î', 'bí/î',
    'gú/û', 'kú/û', 'ngú/û', 'tú/û', 'dú/û', 'nú/û', 'lú/û', 'sú/û', 'mú/û', 'pú/û', 'bú/û',
    
    // 3-letter patterns
    'nga', 'ngi', 'ngu', 'nge', 'ngo',
    
    // Common 3-letter syllables that might be missed
    'tra', 'tri', 'tru', 'tre', 'tro',
    'pra', 'pri', 'pru', 'pre', 'pro',
    'bra', 'bri', 'bru', 'bre', 'bro',
    'kra', 'kri', 'kru', 'kre', 'kro',
    'dra', 'dri', 'dru', 'dre', 'dro',
    'gra', 'gri', 'gru', 'gre', 'gro',
    
    // 2-letter patterns (consonant + vowel combinations)
    'ga', 'ka', 'ta', 'da', 'na', 'la', 'sa', 'ma', 'pa', 'ba',
    'gi', 'ki', 'ti', 'di', 'ni', 'li', 'si', 'mi', 'pi', 'bi',
    'gu', 'ku', 'tu', 'du', 'nu', 'lu', 'su', 'mu', 'pu', 'bu',
    'ge', 'ke', 'te', 'de', 'ne', 'le', 'se', 'me', 'pe', 'be',
    'go', 'ko', 'to', 'do', 'no', 'lo', 'so', 'mo', 'po', 'bo',
    
    // Additional 2-letter combinations that might be in your character set
    'ra', 'ri', 'ru', 're', 'ro',
    'wa', 'wi', 'wu', 'we', 'wo',
    'ya', 'yi', 'yu', 'ye', 'yo',
    'ha', 'hi', 'hu', 'he', 'ho',
    
    // Single letter patterns - ENHANCED SECTION
    // Vowels
    'a', 'i', 'u', 'e', 'o',
    // Consonants (these will look for standalone consonant characters if they exist)
    'ng', 'g', 'k', 't', 'd', 'n', 'l', 's', 'm', 'p', 'b',
    // Additional single consonants that might exist in your character set
    'r', 'w', 'y', 'h', 'f', 'v', 'j', 'c', 'x', 'z', 'q'
  ];

  let remaining = inputLower;
  
  while (remaining.length > 0) {
    let matched = false;
    let longestMatch = '';
    let matchedPattern = '';
    
    // Find the longest matching pattern starting from the current position
    for (const pattern of syllablePatterns) {
      if (remaining.startsWith(pattern) && pattern.length > longestMatch.length) {
        longestMatch = pattern;
        matchedPattern = pattern;
      }
    }
    
    if (longestMatch) {
      // Found a pattern match
      const character = findCharacterByName(matchedPattern.toUpperCase());
      results.push({
        syllable: matchedPattern,
        character
      });
      remaining = remaining.slice(longestMatch.length);
      matched = true;
    }
    
    // If no pattern matched, handle the single character with fallback behavior
    if (!matched) {
      const singleChar = remaining[0];
      
      // Try to find a character for this single letter
      let character = findCharacterByName(singleChar.toUpperCase());
      
      // If no direct match found and it's a consonant, try to find a default vowel combination
      if (!character && /[bcdfghjklmnpqrstvwxyz]/i.test(singleChar)) {
        // Try consonant + 'a' combination as default (most common in Philippine languages)
        character = findCharacterByName((singleChar + 'a').toUpperCase());
      }
      
      results.push({
        syllable: singleChar,
        character
      });
      remaining = remaining.slice(1);
    }
  }
  
  return results;
};

// Enhanced translation function that includes character images based on name matching
const translateTextWithImages = (input: string, direction: TranslationDirection): EnhancedTranslationResult[] => {
  // Split input into words
  const words = input.trim().split(/\s+/);
  
  return words.map(word => {
    // For each word, create a result
    const result: EnhancedTranslationResult = {
      originalWord: word,
      translatedWord: word, // This will be the transliterated form
      isTranslatable: true,
      wordData: undefined,
      characterImages: []
    };

    // Get character images based on the input word using name matching
    result.characterImages = getCharacterImagesByInput(word);
    
    // Check if we found any characters
    result.isTranslatable = result.characterImages.some(img => img.character !== undefined);
    
    return result;
  });
};

export default function HomeScreen() {
  const statusBarHeight = getStatusBarHeight();
  const [translationInput, setTranslationInput] = useState('');
  const [translationResults, setTranslationResults] = useState<EnhancedTranslationResult[]>([]);
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

    const results = translateTextWithImages(translationInput, translationDirection);
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
        return 'Enter text to convert to Kulitan... (e.g., "a ka nga ta")';
      case 'tagalogToKulitan':
        return 'Maglagay ng teksto... (e.g., "a ka nga ta")';
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
              
              {/* Multiple Words Grid */}
              <ScrollView style={styles.resultsDisplay} nestedScrollEnabled={true}>
                <View style={styles.wordsGrid}>
                  {translationResults.map((result, index) => (
                    <View key={index} style={styles.wordResult}>
                      <Text style={styles.originalWord}>{result.originalWord}</Text>
                      <Text style={styles.arrow}>↓</Text>
                      
                      {/* Character Images Display */}
                      {result.characterImages.length > 0 && (
                        <View style={styles.characterImagesContainer}>
                          <ScrollView 
                            horizontal 
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.characterImagesScroll}
                            nestedScrollEnabled={true}
                          >
                            {result.characterImages.map((charResult, charIndex) => (
                              <View key={charIndex} style={styles.characterImageItem}>
                                {charResult.character ? (
                                  <>
                                    <View style={styles.imageContainer}>
                                      <Image 
                                        source={charResult.character.image}
                                        style={styles.characterImage}
                                        resizeMode="contain"
                                      />
                                    </View>
                                    <Text style={styles.syllableText}>{charResult.character.name}</Text>
                                  </>
                                ) : (
                                  <>
                                    <View style={styles.missingCharacterPlaceholder}>
                                      <Text style={styles.missingCharacterText}>?</Text>
                                    </View>
                                    <Text style={styles.syllableText}>{charResult.syllable}</Text>
                                  </>
                                )}
                              </View>
                            ))}
                          </ScrollView>
                        </View>
                      )}
                      
                      <Text style={[styles.translatedWord, !result.isTranslatable && styles.untranslatableWord]}>
                        {result.isTranslatable ? 'Found' : 'No match'}
                      </Text>
                      
                      {result.characterImages.length > 0 && result.isTranslatable && (
                        <Text style={styles.characterCount}>
                          {result.characterImages.filter(c => c.character).length} chars
                        </Text>
                      )}
                    </View>
                  ))}
                </View>
                
                {/* All Characters Combined Display */}
                {translationResults.some(r => r.isTranslatable) && (
                  <View style={styles.combinedResultsContainer}>
                    <Text style={styles.combinedResultsLabel}>Complete Translation:</Text>
                    <View style={styles.allCharactersContainer}>
                      <ScrollView 
                        horizontal 
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.allCharactersScroll}
                        nestedScrollEnabled={true}
                      >
                        {translationResults.map((result, wordIndex) => (
                          <View key={wordIndex} style={styles.wordGroup}>
                            {result.characterImages.map((charResult, charIndex) => (
                              charResult.character && (
                                <View key={`${wordIndex}-${charIndex}`} style={styles.characterImageItem}>
                                  <View style={styles.imageContainer}>
                                    <Image 
                                      source={charResult.character.image}
                                      style={styles.characterImage}
                                      resizeMode="contain"
                                    />
                                  </View>
                                  <Text style={styles.syllableText}>{charResult.character.name}</Text>
                                </View>
                              )
                            ))}
                            {wordIndex < translationResults.length - 1 && (
                              <View style={styles.wordSeparator}>
                                <Text style={styles.separatorText}>•</Text>
                              </View>
                            )}
                          </View>
                        ))}
                      </ScrollView>
                    </View>
                  </View>
                )}
              </ScrollView>
              
              {/* Translation Summary */}
              <View style={styles.translationSummary}>
                <Text style={styles.summaryText}>
                  Found: {translationResults.filter(r => r.isTranslatable).length} / {translationResults.length} words
                </Text>
                <Text style={styles.summaryText}>
                  Total characters: {translationResults.reduce((total, result) => 
                    total + result.characterImages.filter(c => c.character).length, 0)}
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
              <Text style={styles.statNumber}>{sampleCharactersData.length}</Text>
              <Text style={styles.statLabel}>Characters</Text>
              <Text style={styles.statDesc}>Available</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>6</Text>
              <Text style={styles.statLabel}>Categories</Text>
              <Text style={styles.statDesc}>Character groups</Text>
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
  
  // Translation Results Styles - MULTIPLE WORDS SUPPORT
  translationResultsContainer: {
    backgroundColor: '#F8F9FA',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    maxHeight: 500, // Increased max height for multiple words
  },
  resultsLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 12,
  },
  resultsDisplay: {
    maxHeight: 400, // Increased max height
    marginBottom: 16,
  },
  wordsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  wordResult: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    width: '48%', // Two words per row
    minHeight: 120,
  },
  originalWord: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
    textAlign: 'center',
  },
  arrow: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  
  // Character Images Styles - OPTIMIZED FOR MULTIPLE WORDS
  characterImagesContainer: {
    marginBottom: 8,
    width: '100%',
    minHeight: 60, // Reduced height for compact display
  },
  characterImagesScroll: {
    alignItems: 'center',
    paddingHorizontal: 4,
    minHeight: 60,
  },
  characterImageItem: {
    alignItems: 'center',
    marginHorizontal: 3, // Reduced spacing for compact display
    minWidth: 45, // Reduced width for more items
  },
  imageContainer: {
    width: 35, // Smaller container for multiple words view
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 6,
    marginBottom: 2,
  },
  characterImage: {
    width: 30,
    height: 30,
  },
  missingCharacterPlaceholder: {
    width: 35,
    height: 35,
    backgroundColor: '#E0E0E0',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 2,
  },
  missingCharacterText: {
    fontSize: 14,
    color: '#999',
    fontWeight: 'bold',
  },
  syllableText: {
    fontSize: 10,
    color: '#666',
    textAlign: 'center',
    maxWidth: 45,
  },
  
  translatedWord: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#af1400',
    marginBottom: 2,
    textAlign: 'center',
  },
  untranslatableWord: {
    color: '#999',
    fontSize: 11,
  },
  characterCount: {
    fontSize: 10,
    color: '#666',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  
  // Combined Results Styles - NEW
  combinedResultsContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginTop: 12,
    borderWidth: 2,
    borderColor: '#af1400',
  },
  combinedResultsLabel: {
    fontSize: 16,
    fontWeight: '700',
    color: '#af1400',
    marginBottom: 12,
    textAlign: 'center',
  },
  allCharactersContainer: {
    minHeight: 80,
  },
  allCharactersScroll: {
    alignItems: 'center',
    paddingHorizontal: 8,
    minHeight: 80,
  },
  wordGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 4,
  },
  wordSeparator: {
    marginHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  separatorText: {
    fontSize: 20,
    color: '#af1400',
    fontWeight: 'bold',
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
    fontSize: 12,
    color: '#666',
    marginBottom: 2,
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