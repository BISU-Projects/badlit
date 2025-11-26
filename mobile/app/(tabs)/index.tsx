import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Alert,
  Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import { TranslationResult } from "@/data/translation";
import {
  findCharacterByPronunciation,
  KulitanCharacter,
  sampleCharactersData,
} from "@/data/characters";
import dictionaryData from "@/data/dictionary.json";

const { width } = Dimensions.get("window");

type TranslationDirection = "englishToKulitan" | "tagalogToKulitan";

interface CharacterImageResult {
  syllable: string;
  character?: KulitanCharacter;
}

// Add dictionary interface
interface DictionaryEntry {
  Tagalog: string;
  English: string;
  Kapampangan: string;
  Definition: string;
}

// Add this function after the existing helper functions
const findDictionaryEntry = (word: string): DictionaryEntry | undefined => {
  const searchWord = word.toLowerCase().trim();

  console.log("Searching for:", searchWord);

  const found = dictionaryData.find(
    (entry) =>
      entry.English.toLowerCase() === searchWord ||
      entry.Tagalog.toLowerCase() === searchWord
  );

  console.log("Found entry:", found);

  return found;
};

interface EnhancedTranslationResult extends TranslationResult {
  characterImages: CharacterImageResult[];
  dictionaryEntry?: DictionaryEntry; // Add this
}

// Helper function to find character by name (transliterated form)
const findCharacterByName = (name: string): KulitanCharacter | undefined => {
  const nameLower = name.toLowerCase();

  // First, try exact match
  let character = sampleCharactersData.find(
    (char) => char.name.toLowerCase() === nameLower
  );

  if (character) return character;

  // Try matching by pronunciation
  character = sampleCharactersData.find(
    (char) => char.pronunciation.toLowerCase() === nameLower
  );

  if (character) return character;

  // For single consonants, try finding the consonant + 'a' combination
  if (nameLower.length === 1 && /[bcdfghjklmnpqrstvwxyz]/.test(nameLower)) {
    character = sampleCharactersData.find(
      (char) =>
        char.name.toLowerCase() === nameLower + "a" ||
        char.pronunciation.toLowerCase() === nameLower + "a"
    );

    if (character) return character;
  }

  // Try partial matching for complex cases
  return sampleCharactersData.find(
    (char) =>
      char.name.toLowerCase().includes(nameLower) ||
      char.pronunciation.toLowerCase().includes(nameLower) ||
      nameLower.includes(char.name.toLowerCase()) ||
      nameLower.includes(char.pronunciation.toLowerCase())
  );
};

const getCharacterImagesByInput = (input: string): CharacterImageResult[] => {
  if (!input) return [];
  const results: CharacterImageResult[] = [];
  const inputLower = input.toLowerCase();

  // Define syllable patterns in order of priority (longer patterns first)
  const syllablePatterns = [
    // 5-letter patterns
    "ngang",

    // 4-letter patterns
    "gang",
    "kank",
    "tang",
    "dang",
    "nang",
    "lang",
    "sang",
    "mang",
    "pang",
    "bang",
    "ngo",
    "nge",
    "ngu",
    "nga",
    "ngi",

    // 3-letter patterns with tones
    "gí/î",
    "kí/î",
    "ngí/î",
    "tí/î",
    "dí/î",
    "ní/î",
    "lí/î",
    "sí/î",
    "mí/î",
    "pí/î",
    "bí/î",
    "gú/û",
    "kú/û",
    "ngú/û",
    "tú/û",
    "dú/û",
    "nú/û",
    "lú/û",
    "sú/û",
    "mú/û",
    "pú/û",
    "bú/û",

    // 3-letter patterns
    "nga",
    "ngi",
    "ngu",
    "nge",
    "ngo",

    // Common 3-letter syllables
    "tra",
    "tri",
    "tru",
    "tre",
    "tro",
    "pra",
    "pri",
    "pru",
    "pre",
    "pro",
    "bra",
    "bri",
    "bru",
    "bre",
    "bro",
    "kra",
    "kri",
    "kru",
    "kre",
    "kro",
    "dra",
    "dri",
    "dru",
    "dre",
    "dro",
    "gra",
    "gri",
    "gru",
    "gre",
    "gro",

    // 2-letter patterns (consonant + vowel combinations)
    "ga",
    "ka",
    "ta",
    "da",
    "na",
    "la",
    "sa",
    "ma",
    "pa",
    "ba",
    "gi",
    "ki",
    "ti",
    "di",
    "ni",
    "li",
    "si",
    "mi",
    "pi",
    "bi",
    "gu",
    "ku",
    "tu",
    "du",
    "nu",
    "lu",
    "su",
    "mu",
    "pu",
    "bu",
    "ge",
    "ke",
    "te",
    "de",
    "ne",
    "le",
    "se",
    "me",
    "pe",
    "be",
    "go",
    "ko",
    "to",
    "do",
    "no",
    "lo",
    "so",
    "mo",
    "po",
    "bo",

    // Additional 2-letter combinations
    "ra",
    "ri",
    "ru",
    "re",
    "ro",
    "wa",
    "wi",
    "wu",
    "we",
    "wo",
    "ya",
    "yi",
    "yu",
    "ye",
    "yo",
    "ha",
    "hi",
    "hu",
    "he",
    "ho",

    // Single letter patterns
    "a",
    "i",
    "u",
    "e",
    "o",
    "ng",
    "g",
    "k",
    "t",
    "d",
    "n",
    "l",
    "s",
    "m",
    "p",
    "b",
    "r",
    "w",
    "y",
    "h",
    "f",
    "v",
    "j",
    "c",
    "x",
    "z",
    "q",
  ];

  let remaining = inputLower;

  while (remaining.length > 0) {
    let matched = false;
    let longestMatch = "";
    let matchedPattern = "";

    // Find the longest matching pattern
    for (const pattern of syllablePatterns) {
      if (
        remaining.startsWith(pattern) &&
        pattern.length > longestMatch.length
      ) {
        longestMatch = pattern;
        matchedPattern = pattern;
      }
    }

    if (longestMatch) {
      const character = findCharacterByName(matchedPattern.toUpperCase());
      results.push({
        syllable: matchedPattern,
        character,
      });
      remaining = remaining.slice(longestMatch.length);
      matched = true;
    }

    if (!matched) {
      const singleChar = remaining[0];
      let character = findCharacterByName(singleChar.toUpperCase());

      if (!character && /[bcdfghjklmnpqrstvwxyz]/i.test(singleChar)) {
        character = findCharacterByName((singleChar + "a").toUpperCase());
      }

      results.push({
        syllable: singleChar,
        character,
      });
      remaining = remaining.slice(1);
    }
  }

  return results;
};

// Add this function after findDictionaryEntry
const getSuggestions = (input: string): DictionaryEntry[] => {
  if (!input || input.trim().length < 2) return [];

  const searchTerm = input.toLowerCase().trim();

  return dictionaryData
    .filter(
      (entry) =>
        entry.English.toLowerCase().startsWith(searchTerm) ||
        entry.Tagalog.toLowerCase().startsWith(searchTerm) ||
        entry.Kapampangan.toLowerCase().startsWith(searchTerm)
    )
    .slice(0, 5); // Limit to 5 suggestions
};

const translateTextWithImages = (
  input: string,
  direction: TranslationDirection
): EnhancedTranslationResult[] => {
  const words = input.trim().split(/\s+/);

  return words.map((word) => {
    const dictionaryEntry = findDictionaryEntry(word);
    const translationWord = dictionaryEntry
      ? dictionaryEntry.Kapampangan
      : word;

    const result: EnhancedTranslationResult = {
      originalWord: word,
      translatedWord: translationWord,
      isTranslatable: true,
      wordData: undefined,
      characterImages: [],
      dictionaryEntry: dictionaryEntry,
    };

    result.characterImages = getCharacterImagesByInput(translationWord);
    result.isTranslatable = result.characterImages.some(
      (img) => img.character !== undefined
    );

    return result;
  });
};

export default function HomeScreen() {
  const [translationInput, setTranslationInput] = useState("");
  const [translationResults, setTranslationResults] = useState<
    EnhancedTranslationResult[]
  >([]);
  const [translationDirection, setTranslationDirection] =
    useState<TranslationDirection>("englishToKulitan");
  const [showTranslation, setShowTranslation] = useState(false);
  const [suggestions, setSuggestions] = useState<DictionaryEntry[]>([]); // Add this
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Add this new handler
  // Update this handler
  const handleInputChange = (text: string) => {
    // Prevent spaces - only allow single word
    if (text.includes(" ")) {
      Alert.alert(
        "Single Word Only",
        "Please enter only one word at a time. Spaces are not allowed."
      );
      return; // Don't update the input
    }

    setTranslationInput(text);

    // Get suggestions
    const newSuggestions = getSuggestions(text);
    setSuggestions(newSuggestions);
    setShowSuggestions(newSuggestions.length > 0 && text.trim().length >= 2);
  };

  // Add this handler for selecting a suggestion
  // Update this handler
  const handleSuggestionSelect = (entry: DictionaryEntry) => {
    setTranslationInput(entry.English);
    setShowSuggestions(false);
    setSuggestions([]);

    // Auto-translate the selected word
    const results = translateTextWithImages(
      entry.English,
      translationDirection
    );
    setTranslationResults(results);
    setShowTranslation(true);
  };

  // Navigation handlers
  const handleCameraNavigation = () => {
    router.push("/(tabs)/recognition");
  };

  const handleCharactersNavigation = () => {
    router.push("/(tabs)/characters");
  };

  // Translation handlers
  const handleTranslate = () => {
    const trimmedInput = translationInput.trim();

    if (!trimmedInput) {
      Alert.alert("Input Required", "Please enter a word to translate");
      return;
    }

    // Check if input contains spaces or multiple words
    if (trimmedInput.includes(" ") || trimmedInput.split(/\s+/).length > 1) {
      Alert.alert("Single Word Only", "Please enter only one word at a time");
      return;
    }

    const results = translateTextWithImages(trimmedInput, translationDirection);
    setTranslationResults(results);
    setShowTranslation(true);
    setShowSuggestions(false);
  };

  const clearTranslation = () => {
    setTranslationInput("");
    setTranslationResults([]);
    setShowTranslation(false);
    setSuggestions([]); // Add this
    setShowSuggestions(false); // Add this
  };

  return (
    <>
      <StatusBar style="auto" translucent />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Header Section */}
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Text style={styles.welcomeText}>Welcome to</Text>
            <Text style={styles.appName}>KuliTra</Text>
            <Text style={styles.subtitle}>
              Discover and translate Kapampangan words in Kulitan script
            </Text>
          </View>
          <View style={styles.headerImage}>
            <View style={styles.kulitanSymbol}>
              <Image
                source={require("@/assets/images/kt-logo1.png")}
                style={styles.headerImageStyle}
                resizeMode="contain"
              />
            </View>
          </View>
        </View>

        {/* Quick Translation Section */}
        <View style={styles.quickTranslationContainer}>
          <Text style={styles.sectionTitle}>Word Translator</Text>

          {/* Simplified Input Field - Works with both English and Tagalog */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.translationInput}
              value={translationInput}
              onChangeText={handleInputChange} // Changed from setTranslationInput
              placeholder="Enter English or Tagalog word... (e.g., 'house')"
              placeholderTextColor="#999"
              multiline={false} // Changed to false for single line
              numberOfLines={1} // Changed to 1
            />
          </View>
          {/* Add this right after the inputContainer View and before the Action Buttons */}
          {showSuggestions && suggestions.length > 0 && (
            <View style={styles.suggestionsContainer}>
              <ScrollView
                style={styles.suggestionsList}
                keyboardShouldPersistTaps="handled"
                nestedScrollEnabled={true}
              >
                {suggestions.map((entry, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.suggestionItem}
                    onPress={() => handleSuggestionSelect(entry)}
                  >
                    <View style={styles.suggestionContent}>
                      <Text style={styles.suggestionMainText}>
                        {entry.English}
                      </Text>
                      <Text style={styles.suggestionSecondaryText}>
                        {entry.Tagalog} • {entry.Kapampangan}
                      </Text>
                    </View>
                    <View style={styles.suggestionArrow}>
                      <Text style={styles.suggestionArrowText}>→</Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          )}

          {/* Action Buttons */}
          <View style={styles.translationButtons}>
            <TouchableOpacity
              style={styles.translateButton}
              onPress={handleTranslate}
            >
              <Text style={styles.translateButtonText}>Translate</Text>
            </TouchableOpacity>
            {(translationInput || showTranslation) && (
              <TouchableOpacity
                style={styles.clearButton}
                onPress={clearTranslation}
              >
                <Text style={styles.clearButtonText}>Clear</Text>
              </TouchableOpacity>
            )}
          </View>

          {/* Translation Results */}
          {/* Translation Results */}
          {showTranslation && (
            <View style={styles.translationResultsContainer}>
              <Text style={styles.resultsLabel}>Translation:</Text>

              <ScrollView
                style={styles.resultsDisplay}
                nestedScrollEnabled={true}
              >
                {translationResults.some((r) => r.isTranslatable) && (
                  <View style={styles.combinedResultsContainer}>
                    <Text style={styles.combinedResultsLabel}>
                      Complete Translation:
                    </Text>
                    <View style={styles.allCharactersContainer}>
                      <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.allCharactersScroll}
                        nestedScrollEnabled={true}
                      >
                        {translationResults.map((result, wordIndex) => (
                          <View key={wordIndex} style={styles.wordGroup}>
                            {result.characterImages.map(
                              (charResult, charIndex) => (
                                <View
                                  key={`${wordIndex}-${charIndex}`}
                                  style={styles.characterImageItem}
                                >
                                  <View style={styles.imageContainer}>
                                    {charResult.character ? (
                                      <Image
                                        source={charResult.character.image}
                                        style={styles.characterImage}
                                        resizeMode="contain"
                                      />
                                    ) : (
                                      <View style={styles.placeholderContainer}>
                                        <Image
                                          source={require("@/assets/images/kt-logo1.png")}
                                          style={styles.placeholderLogo}
                                          resizeMode="contain"
                                        />
                                      </View>
                                    )}
                                  </View>
                                  <Text style={styles.syllableText}>
                                    {charResult.character
                                      ? charResult.character.name
                                      : charResult.syllable.toUpperCase()}
                                  </Text>
                                </View>
                              )
                            )}
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

                {/* Dictionary Entries Section */}
                {translationResults.some((r) => r.dictionaryEntry) && (
                  <View style={styles.dictionarySection}>
                    <Text style={styles.dictionarySectionTitle}>
                      Dictionary Entries:
                    </Text>
                    {translationResults.map((result, index) =>
                      result.dictionaryEntry ? (
                        <View key={index} style={styles.dictionaryCard}>
                          <View style={styles.dictionaryHeader}>
                            <Text style={styles.dictionaryWord}>
                              {result.dictionaryEntry.Kapampangan}
                            </Text>
                            <View style={styles.dictionaryBadge}>
                              <Text style={styles.dictionaryBadgeText}>
                                Kapampangan
                              </Text>
                            </View>
                          </View>

                          <View style={styles.translationRow}>
                            <View style={styles.translationItem}>
                              <Text style={styles.translationLabel}>
                                English:
                              </Text>
                              <Text style={styles.translationValue}>
                                {result.dictionaryEntry.English}
                              </Text>
                            </View>
                            <View style={styles.translationItem}>
                              <Text style={styles.translationLabel}>
                                Tagalog:
                              </Text>
                              <Text style={styles.translationValue}>
                                {result.dictionaryEntry.Tagalog}
                              </Text>
                            </View>
                          </View>

                          <View style={styles.definitionContainer}>
                            <Text style={styles.definitionLabel}>
                              Definition:
                            </Text>
                            <Text style={styles.definitionText}>
                              {result.dictionaryEntry.Definition}
                            </Text>
                          </View>
                        </View>
                      ) : null
                    )}
                  </View>
                )}
              </ScrollView>
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
                Use your camera to scan Kulitan text and instantly translate it
                to English or Tagalog
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
                Explore the rich history and learn to read and write the ancient
                Kapampangan script
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
              <Text style={styles.statNumber}>
                {sampleCharactersData.length}
              </Text>
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
    backgroundColor: "#FFFFFF",
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 40,
    backgroundColor: "#af1400",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerContent: {
    flex: 1,
  },
  welcomeText: {
    fontSize: 16,
    color: "#FFFFFF",
    opacity: 0.9,
    marginBottom: 4,
  },
  appName: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#FFFFFF",
    opacity: 0.8,
    lineHeight: 20,
    maxWidth: "90%",
  },
  headerImage: {
    marginLeft: 16,
  },
  kulitanSymbol: {
    width: 80,
    height: 80,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  headerImageStyle: {
    width: 80,
    height: 80,
  },
  quickTranslationContainer: {
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 24,
    backgroundColor: "#FFFFFF",
    marginBottom: 16,
  },
  inputContainer: {
    marginBottom: 16,
  },
  translationInput: {
    backgroundColor: "#F8F9FA",
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    minHeight: 60,
    textAlignVertical: "top",
  },
  translationButtons: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 20,
  },
  translateButton: {
    flex: 1,
    backgroundColor: "#af1400",
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
  },
  translateButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  clearButton: {
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#af1400",
    alignItems: "center",
  },
  clearButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#af1400",
  },
  translationResultsContainer: {
    backgroundColor: "#F8F9FA",
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    maxHeight: 500,
  },
  resultsLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    marginBottom: 12,
  },
  resultsDisplay: {
    maxHeight: 400,
    marginBottom: 16,
  },
  combinedResultsContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginTop: 12,
    borderWidth: 2,
    borderColor: "#af1400",
  },
  combinedResultsLabel: {
    fontSize: 16,
    fontWeight: "700",
    color: "#af1400",
    marginBottom: 12,
    textAlign: "center",
  },
  allCharactersContainer: {
    minHeight: 80,
  },
  allCharactersScroll: {
    alignItems: "center",
    paddingHorizontal: 8,
    minHeight: 80,
  },
  wordGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 4,
  },
  characterImageItem: {
    alignItems: "center",
    marginHorizontal: 3,
    minWidth: 45,
  },
  imageContainer: {
    width: 35,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F0F0F0",
    borderRadius: 6,
    marginBottom: 2,
  },
  characterImage: {
    width: 30,
    height: 30,
  },
  syllableText: {
    fontSize: 10,
    color: "#666",
    textAlign: "center",
    maxWidth: 45,
  },
  wordSeparator: {
    marginHorizontal: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  separatorText: {
    fontSize: 20,
    color: "#af1400",
    fontWeight: "bold",
  },
  translationSummary: {
    alignItems: "center",
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
  },
  summaryText: {
    fontSize: 12,
    color: "#666",
    marginBottom: 2,
  },
  featuresContainer: {
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 20,
  },
  featureCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    borderWidth: 1,
    borderColor: "#F0F0F0",
  },
  featureIconContainer: {
    marginRight: 16,
  },
  recognitionIcon: {
    width: 56,
    height: 56,
    backgroundColor: "rgba(175, 20, 0, 0.1)",
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
  },
  exploreIcon: {
    width: 56,
    height: 56,
    backgroundColor: "rgba(175, 20, 0, 0.1)",
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
  },
  iconText: {
    fontSize: 24,
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 4,
  },
  featureDescription: {
    fontSize: 14,
    color: "#666666",
    lineHeight: 20,
    marginBottom: 8,
  },
  featureBadge: {
    alignSelf: "flex-start",
    backgroundColor: "#af1400",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    fontSize: 12,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  arrowIcon: {
    marginLeft: 12,
  },
  arrow: {
    fontSize: 12,
    color: "#666",
    marginBottom: 4,
  },
  statsContainer: {
    paddingHorizontal: 24,
    paddingTop: 32,
  },
  statsGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statCard: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    marginHorizontal: 4,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#af1400",
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000000",
    marginBottom: 2,
  },
  statDesc: {
    fontSize: 12,
    color: "#666666",
    textAlign: "center",
  },
  bottomSpacing: {
    height: 20,
  },
  dictionarySection: {
    marginTop: 16,
  },
  dictionarySectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#af1400",
    marginBottom: 12,
  },
  dictionaryCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  dictionaryHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  dictionaryWord: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#af1400",
  },
  dictionaryBadge: {
    backgroundColor: "#af1400",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  dictionaryBadgeText: {
    fontSize: 11,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  translationRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  translationItem: {
    flex: 1,
    marginHorizontal: 4,
  },
  translationLabel: {
    fontSize: 12,
    fontWeight: "600",
    color: "#666",
    marginBottom: 4,
    textTransform: "uppercase",
  },
  translationValue: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  definitionContainer: {
    backgroundColor: "#F8F9FA",
    padding: 12,
    borderRadius: 8,
    marginTop: 4,
  },
  definitionLabel: {
    fontSize: 12,
    fontWeight: "600",
    color: "#666",
    marginBottom: 6,
    textTransform: "uppercase",
  },
  definitionText: {
    fontSize: 14,
    color: "#333",
    lineHeight: 20,
  },
  placeholderContainer: {
    width: 30,
    height: 30,
    backgroundColor: "#F8F9FA",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  placeholderLogo: {
    width: 20,
    height: 20,
    opacity: 0.3,
  },
  suggestionsContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    marginBottom: 16,
    maxHeight: 200,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  suggestionsList: {
    maxHeight: 200,
  },
  suggestionItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  suggestionContent: {
    flex: 1,
  },
  suggestionMainText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    marginBottom: 2,
  },
  suggestionSecondaryText: {
    fontSize: 12,
    color: "#666",
  },
  suggestionArrow: {
    marginLeft: 8,
  },
  suggestionArrowText: {
    fontSize: 16,
    color: "#af1400",
    fontWeight: "bold",
  },
});
