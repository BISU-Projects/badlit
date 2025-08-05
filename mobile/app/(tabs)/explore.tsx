import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  StatusBar,
  Animated,
} from 'react-native';

const { width } = Dimensions.get('window');

interface JapaneseLetter {
  character: string;
  romaji: string;
  meaning: string;
  category: 'hiragana' | 'katakana';
  examples: string[];
}

const japaneseLetters: JapaneseLetter[] = [
  {
    character: 'あ',
    romaji: 'a',
    meaning: 'Vowel sound "ah"',
    category: 'hiragana',
    examples: ['あめ (ame) - rain', 'あか (aka) - red']
  },
  {
    character: 'か',
    romaji: 'ka',
    meaning: 'Sound "ka"',
    category: 'hiragana',
    examples: ['かみ (kami) - paper', 'かぜ (kaze) - wind']
  },
  {
    character: 'さ',
    romaji: 'sa',
    meaning: 'Sound "sa"',
    category: 'hiragana',
    examples: ['さくら (sakura) - cherry blossom', 'さかな (sakana) - fish']
  },
  {
    character: 'た',
    romaji: 'ta',
    meaning: 'Sound "ta"',
    category: 'hiragana',
    examples: ['たべる (taberu) - to eat', 'たまご (tamago) - egg']
  },
  {
    character: 'な',
    romaji: 'na',
    meaning: 'Sound "na"',
    category: 'hiragana',
    examples: ['なまえ (namae) - name', 'なつ (natsu) - summer']
  },
  {
    character: 'は',
    romaji: 'ha',
    meaning: 'Sound "ha"',
    category: 'hiragana',
    examples: ['はな (hana) - flower', 'はし (hashi) - bridge']
  },
  {
    character: 'ま',
    romaji: 'ma',
    meaning: 'Sound "ma"',
    category: 'hiragana',
    examples: ['まち (machi) - town', 'まど (mado) - window']
  },
  {
    character: 'や',
    romaji: 'ya',
    meaning: 'Sound "ya"',
    category: 'hiragana',
    examples: ['やま (yama) - mountain', 'やすい (yasui) - cheap']
  },
  {
    character: 'ら',
    romaji: 'ra',
    meaning: 'Sound "ra"',
    category: 'hiragana',
    examples: ['らいねん (rainen) - next year', 'らくだ (rakuda) - camel']
  },
  {
    character: 'わ',
    romaji: 'wa',
    meaning: 'Sound "wa"',
    category: 'hiragana',
    examples: ['わたし (watashi) - I/me', 'わかる (wakaru) - to understand']
  }
];

const Explore: React.FC = () => {
  const [selectedLetter, setSelectedLetter] = useState<JapaneseLetter | null>(null);
  const [animatedValue] = useState(new Animated.Value(0));

  useEffect(() => {
    if (selectedLetter) {
      Animated.spring(animatedValue, {
        toValue: 1,
        useNativeDriver: true,
        tension: 50,
        friction: 7,
      }).start();
    } else {
      animatedValue.setValue(0);
    }
  }, [selectedLetter]);

  const renderLetterCard = (letter: JapaneseLetter, index: number) => (
    <TouchableOpacity
      key={index}
      style={styles.letterCard}
      onPress={() => setSelectedLetter(letter)}
      activeOpacity={0.8}
    >
      <Text style={styles.character}>{letter.character}</Text>
      <Text style={styles.romaji}>{letter.romaji}</Text>
    </TouchableOpacity>
  );

  const renderDetailModal = () => {
    if (!selectedLetter) return null;

    return (
      <View style={styles.modalOverlay}>
        <TouchableOpacity
          style={styles.modalBackdrop}
          onPress={() => setSelectedLetter(null)}
          activeOpacity={1}
        />
        <Animated.View
          style={[
            styles.modalContent,
            {
              transform: [
                {
                  scale: animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.8, 1],
                  }),
                },
              ],
              opacity: animatedValue,
            },
          ]}
        >
          <View style={styles.modalHeader}>
            <Text style={styles.modalCharacter}>{selectedLetter.character}</Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setSelectedLetter(null)}
            >
              <Text style={styles.closeButtonText}>×</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.modalBody}>
            <Text style={styles.modalRomaji}>{selectedLetter.romaji}</Text>
            <Text style={styles.modalMeaning}>{selectedLetter.meaning}</Text>
            
            <View style={styles.examplesSection}>
              <Text style={styles.examplesTitle}>Examples:</Text>
              {selectedLetter.examples.map((example, index) => (
                <Text key={index} style={styles.exampleText}>
                  • {example}
                </Text>
              ))}
            </View>
          </View>
        </Animated.View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#af1400" barStyle="light-content" />
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Explore Japanese</Text>
        <Text style={styles.headerSubtitle}>Tap any character to learn more</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.lettersGrid}>
          {japaneseLetters.map((letter, index) => renderLetterCard(letter, index))}
        </View>
      </ScrollView>

      {renderDetailModal()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    backgroundColor: '#af1400',
    paddingTop: StatusBar.currentHeight || 44,
    paddingHorizontal: 20,
    paddingBottom: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#ffffff',
    opacity: 0.9,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
  },
  lettersGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  letterCard: {
    width: (width - 60) / 2,
    aspectRatio: 1,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  character: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#af1400',
    marginBottom: 8,
  },
  romaji: {
    fontSize: 18,
    color: '#333333',
    fontWeight: '600',
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    position: 'absolute',
    top: '50%',
    left: 20,
    right: 20,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    marginTop: -200,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#af1400',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  modalCharacter: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  closeButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  modalBody: {
    padding: 24,
  },
  modalRomaji: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#af1400',
    marginBottom: 8,
  },
  modalMeaning: {
    fontSize: 18,
    color: '#333333',
    marginBottom: 24,
    lineHeight: 24,
  },
  examplesSection: {
    marginTop: 8,
  },
  examplesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 12,
  },
  exampleText: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 8,
    lineHeight: 22,
  },
});

export default Explore;