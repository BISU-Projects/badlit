// File: data/characters.ts
import { ImageSourcePropType } from 'react-native';

export interface KulitanCharacter {
  id: string;
  name: string;
  image: ImageSourcePropType; // Changed from string to ImageSourcePropType
  audio: any; // Audio file require() statement
  pronunciation: string;
  category: 'Basic Vowel' | 'Vowel' | 'Pure Vowel' | 'Basic Consonant' | 'Complex Consonant' | 'Consonant with I' | 'Consonant with U' | 'Consonant with E' | 'Consonant with O' | 'Final Consonant';
  rarity: 'Common' | 'Very Common' | 'Uncommon' | 'Rare';
  origin: string;
  type: string;
  soundDescription: string;
  description: string;
  uses: string[];
  characteristics: string[];
  learningTips: string;
  writingInstructions?: string;
  combinations: string[];
}

export const sampleCharactersData: KulitanCharacter[] = [
  {
    id: '1',
    name: 'A',
    image: require('@/assets/images/kt-logo.png'),
    audio: require('@/assets/audio/a.mp3'),
    pronunciation: 'a',
    category: 'Basic Vowel',
    rarity: 'Common',
    origin: 'Kapampangan Script',
    type: 'Independent Vowel',
    soundDescription: 'Open central vowel sound',
    description: 'The basic vowel "A" in Kulitan script. This is one of the fundamental characters and represents the open central vowel sound /a/. It appears frequently in Kapampangan words and serves as the base for many syllabic combinations.',
    uses: [
      'Beginning of words',
      'Standalone vowel',
      'Part of syllabic combinations',
      'Base for diacritical marks'
    ],
    characteristics: [
      'Simple curved stroke',
      'Fundamental vowel character',
      'Base form for other combinations',
      'Written from top to bottom'
    ],
    learningTips: 'Practice the curved stroke smoothly. This character forms the foundation for understanding vowel sounds in Kulitan.',
    writingInstructions: 'Start from the top, draw a smooth curve downward',
    combinations: ['ka', 'ga', 'nga', 'ta', 'da', 'na', 'la', 'sa', 'ma', 'pa', 'ba']
  },
  {
    id: '2',
    name: 'GA',
    image: require('@/assets/images/ga.jpg'),
    audio: require('@/assets/audio/a.mp3'),
    pronunciation: 'ga',
    category: 'Basic Consonant',
    rarity: 'Common',
    origin: 'Kapampangan Script',
    type: 'Consonant-Vowel Combination',
    soundDescription: 'Voiced velar stop with "a" vowel',
    description: 'The syllable "GA" in Kulitan script, combining the voiced velar consonant /g/ with the vowel /a/. This character represents a fundamental consonant-vowel combination in the script.',
    uses: [
      'Beginning of syllables',
      'Word formation',
      'Common in Kapampangan vocabulary',
      'Base for vowel modifications'
    ],
    characteristics: [
      'Voiced velar consonant base',
      'Inherent "a" vowel',
      'Can be modified with diacritics',
      'Fundamental CV structure'
    ],
    learningTips: 'Remember the hard "g" sound as in "go" combined with "ah". This is a basic building block.',
    writingInstructions: 'Draw the characteristic stroke pattern for the "ga" sound',
    combinations: ['ga', 'gi', 'gu', 'ge', 'go']
  },
  {
    id: '3',
    name: 'KA',
    image: require('@/assets/images/ka.jpg'),
    audio: require('@/assets/audio/a.mp3'),
    pronunciation: 'ka',
    category: 'Basic Consonant',
    rarity: 'Common',
    origin: 'Kapampangan Script',
    type: 'Consonant-Vowel Combination',
    soundDescription: 'Voiceless velar stop with "a" vowel',
    description: 'The syllable "KA" in Kulitan script, one of the most frequently used characters. It combines the voiceless velar consonant /k/ with the vowel /a/, forming a basic syllabic unit.',
    uses: [
      'Word beginnings',
      'Common syllable in names',
      'Frequent in everyday vocabulary',
      'Base for diacritical modifications'
    ],
    characteristics: [
      'Voiceless velar consonant',
      'High frequency in text',
      'Simple, recognizable form',
      'Foundation for other "k" sounds'
    ],
    learningTips: 'This is like "ka" in "car". One of the most important characters to master first.',
    writingInstructions: 'Practice the clean, simple strokes that form this fundamental character',
    combinations: ['ka', 'ki', 'ku', 'ke', 'ko']
  },
  {
    id: '4',
    name: 'NGA',
    image: require('@/assets/images/kt-logo.png'),
    audio: require('@/assets/audio/a.mp3'),
    pronunciation: 'nga',
    category: 'Basic Consonant',
    rarity: 'Common',
    origin: 'Kapampangan Script',
    type: 'Consonant-Vowel Combination',
    soundDescription: 'Voiced velar nasal with "a" vowel',
    description: 'The syllable "NGA" in Kulitan script, representing the voiced velar nasal /ŋ/ combined with the vowel /a/. This sound is characteristic of Philippine languages and very common in Kapampangan.',
    uses: [
      'Common in Kapampangan words',
      'Nasal consonant expressions',
      'Word formations',
      'Syllabic combinations'
    ],
    characteristics: [
      'Voiced velar nasal consonant',
      'Unique to Philippine languages',
      'Distinctive curved form',
      'Essential for authentic pronunciation'
    ],
    learningTips: 'This is the "ng" sound in "sing" plus "ah". Very important in Kapampangan pronunciation.',
    writingInstructions: 'Practice the distinctive curved form that represents this nasal sound',
    combinations: ['nga', 'ngi', 'ngu', 'nge', 'ngo']
  },
  {
    id: '5',
    name: 'TA',
    image: require('@/assets/images/ta.jpg'),
    audio: require('@/assets/audio/a.mp3'),
    pronunciation: 'ta',
    category: 'Basic Consonant',
    rarity: 'Common',
    origin: 'Kapampangan Script',
    type: 'Consonant-Vowel Combination',
    soundDescription: 'Voiceless alveolar stop with "a" vowel',
    description: 'The syllable "TA" in Kulitan script, combining the voiceless alveolar consonant /t/ with the vowel /a/. This is a fundamental character appearing frequently in Kapampangan text.',
    uses: [
      'Word beginnings and middles',
      'Common syllable structure',
      'Building block for longer words',
      'Base for vowel modifications'
    ],
    characteristics: [
      'Voiceless alveolar consonant',
      'Clean, simple form',
      'High frequency character',
      'Foundation for "t" sound family'
    ],
    learningTips: 'Simple "ta" sound as in "top". Practice the clean stroke pattern.',
    writingInstructions: 'Draw with confident, clean strokes maintaining the proper proportions',
    combinations: ['ta', 'ti', 'tu', 'te', 'to']
  },
  {
    id: '6',
    name: 'NGANG',
    image: require('@/assets/images/kt-logo.png'),
    audio: require('@/assets/audio/a.mp3'),
    pronunciation: 'ngang',
    category: 'Complex Consonant',
    rarity: 'Common',
    origin: 'Kapampangan Script',
    type: 'Consonant Cluster',
    soundDescription: 'Voiced velar nasal with nasal ending',
    description: 'The syllable "NGANG" in Kulitan script, combining the voiced velar nasal /ŋ/ with the nasal cluster /aŋ/.',
    uses: [
      'Word formation',
      'Complex syllable construction',
      'Common in vocabulary',
      'Temporal markers'
    ],
    characteristics: [
      'Voiced nasal consonant',
      'Mid central vowel',
      'Nasal cluster ending',
      'CVC combination'
    ],
    learningTips: 'Double nasal sound - "ng" + "ang".',
    writingInstructions: 'Form the "nga" character and add the "ng" final consonant marker',
    combinations: ['ngang', 'nga', 'ngi', 'ngo', 'ngu']
  },
  {
    id: '7',
    name: 'TANG',
    image: require('@/assets/images/kt-logo.png'),
    audio: require('@/assets/audio/a.mp3'),
    pronunciation: 'tang',
    category: 'Complex Consonant',
    rarity: 'Common',
    origin: 'Kapampangan Script',
    type: 'Consonant Cluster',
    soundDescription: 'Voiceless alveolar plosive with nasal ending',
    description: 'The syllable "TANG" in Kulitan script, combining the voiceless alveolar plosive /t/ with the nasal cluster /aŋ/.',
    uses: [
      'Word formation',
      'Complex syllable construction',
      'Common in vocabulary',
      'Temporal markers'
    ],
    characteristics: [
      'Voiceless plosive consonant',
      'Mid central vowel',
      'Nasal cluster ending',
      'CVC combination'
    ],
    learningTips: 'Sharp "t" sound followed by nasal "ang".',
    writingInstructions: 'Form the "ta" character and add the "ng" final consonant marker',
    combinations: ['tang', 'ta', 'ti', 'to', 'tu']
  }
];

// Helper function to get character by ID
export const getCharacterById = (id: string): KulitanCharacter | undefined => {
  return sampleCharactersData.find(character => character.id === id);
};

// Helper function to get characters by category
export const getCharactersByCategory = (category: string): KulitanCharacter[] => {
  return sampleCharactersData.filter(character => character.category === category);
};

// Helper function to get characters by rarity
export const getCharactersByRarity = (rarity: string): KulitanCharacter[] => {
  return sampleCharactersData.filter(character => character.rarity === rarity);
};

// Helper function for search
export const searchCharacters = (query: string): KulitanCharacter[] => {
  const lowercaseQuery = query.toLowerCase();
  return sampleCharactersData.filter(character => 
    character.name.toLowerCase().includes(lowercaseQuery) ||
    character.pronunciation.toLowerCase().includes(lowercaseQuery) ||
    character.category.toLowerCase().includes(lowercaseQuery) ||
    character.soundDescription.toLowerCase().includes(lowercaseQuery)
  );
};

// Get all categories
export const getAllCategories = (): string[] => {
  return [...new Set(sampleCharactersData.map(char => char.category))];
};

// Get all rarities
export const getAllRarities = (): string[] => {
  return [...new Set(sampleCharactersData.map(char => char.rarity))];
};

// Helper function to find character by pronunciation (for translation matching)
export const findCharacterByPronunciation = (pronunciation: string): KulitanCharacter | undefined => {
  // First, try exact match
  const exactMatch = sampleCharactersData.find(character => 
    character.pronunciation.toLowerCase() === pronunciation.toLowerCase()
  );
  
  if (exactMatch) return exactMatch;
  
  // If no exact match, try partial matches for complex characters
  // This handles cases where we might have "tang" but looking for "ta"
  return sampleCharactersData.find(character => 
    character.pronunciation.toLowerCase().includes(pronunciation.toLowerCase()) ||
    pronunciation.toLowerCase().includes(character.pronunciation.toLowerCase())
  );
};