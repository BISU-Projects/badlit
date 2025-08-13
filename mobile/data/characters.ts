// File: data/characters.ts
export interface KulitanCharacter {
  id: string;
  name: string;
  character: string;
  image: string;
  audio: any; // Audio file require() statement
  pronunciation: string;
  category: 'Basic Vowel' | 'Basic Consonant' | 'Consonant with I' | 'Consonant with U' | 'Consonant with E' | 'Consonant with O' | 'Final Consonant';
  rarity: 'Common' | 'Uncommon' | 'Rare';
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
    character: 'ᜀ',
    image: require('@/assets/images/kt-logo.png'),
    audio: require('@/assets/audio/babe.mp3'),
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
    name: 'I',
    character: 'ᜁ',
    image: require('@/assets/images/kt-logo.png'),
    audio: require('@/assets/audio/babe.mp3'),
    pronunciation: 'i',
    category: 'Basic Vowel',
    rarity: 'Common',
    origin: 'Kapampangan Script',
    type: 'Independent Vowel',
    soundDescription: 'Close front vowel sound',
    description: 'The vowel "I" in Kulitan script, representing the close front vowel sound /i/. This character is essential for forming many Kapampangan words and is often combined with consonants.',
    uses: [
      'Beginning of words',
      'Standalone vowel',
      'Syllabic combinations',
      'Modified consonant sounds'
    ],
    characteristics: [
      'Distinctive curved form',
      'High frequency in text',
      'Forms basis for "i" vowel combinations',
      'Essential for proper pronunciation'
    ],
    learningTips: 'Remember this represents the "ee" sound in English. Practice distinguishing it from other vowel forms.',
    writingInstructions: 'Draw the characteristic curved stroke with attention to the distinctive shape',
    combinations: ['ki', 'gi', 'ngi', 'ti', 'di', 'ni', 'li', 'si', 'mi', 'pi', 'bi']
  },
  {
    id: '3',
    name: 'U',
    character: 'ᜂ',
    image: require('@/assets/images/kt-logo.png'),
    audio: require('@/assets/audio/babe.mp3'),
    pronunciation: 'u',
    category: 'Basic Vowel',
    rarity: 'Common',
    origin: 'Kapampangan Script',
    type: 'Independent Vowel',
    soundDescription: 'Close back vowel sound',
    description: 'The vowel "U" in Kulitan script, representing the close back vowel sound /u/. This rounded vowel is crucial for many Kapampangan words and appears in various combinations.',
    uses: [
      'Beginning of words',
      'Standalone vowel',
      'Rounded vowel combinations',
      'Final syllable sounds'
    ],
    characteristics: [
      'Rounded vowel representation',
      'Appears in many native words',
      'Base for "u" vowel combinations',
      'Important for proper pronunciation'
    ],
    learningTips: 'This represents the "oo" sound in English. Focus on the rounded mouth position when pronouncing.',
    writingInstructions: 'Draw with smooth, flowing strokes maintaining the characteristic shape',
    combinations: ['ku', 'gu', 'ngu', 'tu', 'du', 'nu', 'lu', 'su', 'mu', 'pu', 'bu']
  },
  {
    id: '4',
    name: 'E',
    character: 'ᜃᜒ',
    image: require('@/assets/images/kt-logo.png'),
    audio: require('@/assets/audio/babe.mp3'),
    pronunciation: 'e',
    category: 'Basic Vowel',
    rarity: 'Common',
    origin: 'Kapampangan Script',
    type: 'Modified Vowel',
    soundDescription: 'Mid front vowel sound',
    description: 'The vowel "E" in Kulitan script, typically represented by adding an "i" marker to consonants. This mid front vowel is common in Kapampangan and represents the /e/ sound.',
    uses: [
      'Mid vowel sounds',
      'Common in borrowed words',
      'Syllabic modifications',
      'Vowel harmony patterns'
    ],
    characteristics: [
      'Modified form using diacritics',
      'Mid front vowel position',
      'Common in modern Kapampangan',
      'Requires vowel marker'
    ],
    learningTips: 'This is like the "eh" sound in English. Practice adding the vowel marker to consonants.',
    writingInstructions: 'Add the appropriate vowel marker to the base consonant form',
    combinations: ['ke', 'ge', 'nge', 'te', 'de', 'ne', 'le', 'se', 'me', 'pe', 'be']
  },
  {
    id: '5',
    name: 'O',
    character: 'ᜃᜓ',
    image: require('@/assets/images/kt-logo.png'),
    audio: require('@/assets/audio/babe.mp3'),
    pronunciation: 'o',
    category: 'Basic Vowel',
    rarity: 'Common',
    origin: 'Kapampangan Script',
    type: 'Modified Vowel',
    soundDescription: 'Mid back vowel sound',
    description: 'The vowel "O" in Kulitan script, represented by adding a "u" marker to consonants. This mid back vowel represents the /o/ sound and is frequently used in Kapampangan.',
    uses: [
      'Mid back vowel sounds',
      'Common in native words',
      'Syllabic modifications',
      'Rounded vowel expressions'
    ],
    characteristics: [
      'Modified form using diacritics',
      'Mid back vowel position',
      'Rounded vowel quality',
      'Requires vowel marker'
    ],
    learningTips: 'This represents the "oh" sound in English. Practice the rounded lip position when pronouncing.',
    writingInstructions: 'Add the "u" vowel marker to the base consonant to create the "o" sound',
    combinations: ['ko', 'go', 'ngo', 'to', 'do', 'no', 'lo', 'so', 'mo', 'po', 'bo']
  },
  {
    id: '6',
    name: 'GA',
    character: 'ᜄ',
    image: require('@/assets/images/kt-logo.png'),
    audio: require('@/assets/audio/babe.mp3'),
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
    id: '7',
    name: 'KA',
    character: 'ᜃ',
    image: require('@/assets/images/kt-logo.png'),
    audio: require('@/assets/audio/babe.mp3'),
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
    id: '8',
    name: 'NGA',
    character: 'ᜅ',
    image: require('@/assets/images/kt-logo.png'),
    audio: require('@/assets/audio/babe.mp3'),
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
    id: '9',
    name: 'TA',
    character: 'ᜆ',
    image: require('@/assets/images/kt-logo.png'),
    audio: require('@/assets/audio/babe.mp3'),
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
    id: '10',
    name: 'DA',
    character: 'ᜇ',
    image: require('@/assets/images/kt-logo.png'),
    audio: require('@/assets/audio/babe.mp3'),
    pronunciation: 'da',
    category: 'Basic Consonant',
    rarity: 'Common',
    origin: 'Kapampangan Script',
    type: 'Consonant-Vowel Combination',
    soundDescription: 'Voiced alveolar stop with "a" vowel',
    description: 'The syllable "DA" in Kulitan script, representing the voiced alveolar consonant /d/ with the vowel /a/. This character is commonly used in Kapampangan words and names.',
    uses: [
      'Common in personal names',
      'Word formation',
      'Syllabic structures',
      'Voiced consonant representations'
    ],
    characteristics: [
      'Voiced alveolar consonant',
      'Distinctive stroke pattern',
      'Frequently used character',
      'Base for "d" sound variations'
    ],
    learningTips: 'Voiced "da" sound as in "dad". Note the difference from the voiceless "ta".',
    writingInstructions: 'Practice the specific stroke sequence that distinguishes this from similar characters',
    combinations: ['da', 'di', 'du', 'de', 'do']
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