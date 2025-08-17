// File: data/translation.ts
import { sampleCharactersData, KulitanCharacter } from './characters';

export interface KulitanWord {
  id: string;
  kulitan: string;
  kapampangan: string;
  tagalog: string;
  english: string;
  pronunciation: string;
  category: string;
  description?: string;
}

export interface TranslationResult {
  originalWord: string;
  translatedWord: string;
  wordData?: KulitanWord;
  isTranslatable: boolean;
}

export interface TranslationMaps {
  englishToKulitan: { [key: string]: string };
  kulitanToEnglish: { [key: string]: string };
  tagalogToKulitan: { [key: string]: string };
  kulitanToTagalog: { [key: string]: string };
  kapampanganToKulitan: { [key: string]: string };
  kulitanToKapampangan: { [key: string]: string };
}

// Sample Kapampangan words in Kulitan with translations
export const kulitanWordsData: KulitanWord[] = [
  // Greetings
  {
    id: '1',
    kulitan: 'ᜃᜓᜋᜓᜐ᜔ᜆ',
    kapampangan: 'kumusta',
    tagalog: 'kumusta',
    english: 'hello/how are you',
    pronunciation: 'ku-mus-ta',
    category: 'greetings'
  },
  {
    id: '2',
    kulitan: 'ᜋᜌᜈ᜔',
    kapampangan: 'mayan',
    tagalog: 'mabuti',
    english: 'good/fine',
    pronunciation: 'ma-yan',
    category: 'greetings'
  },
  {
    id: '3',
    kulitan: 'ᜋᜌᜓ᜔',
    kapampangan: 'mayu',
    tagalog: 'magandang umaga',
    english: 'good morning',
    pronunciation: 'ma-yu',
    category: 'greetings'
  },

  // Family
  {
    id: '4',
    kulitan: 'ᜁᜈ',
    kapampangan: 'ina',
    tagalog: 'nanay',
    english: 'mother',
    pronunciation: 'i-na',
    category: 'family'
  },
  {
    id: '5',
    kulitan: 'ᜆᜆ',
    kapampangan: 'tata',
    tagalog: 'tatay',
    english: 'father',
    pronunciation: 'ta-ta',
    category: 'family'
  },
  {
    id: '6',
    kulitan: 'ᜀᜅ᜔',
    kapampangan: 'anak',
    tagalog: 'anak',
    english: 'child',
    pronunciation: 'a-nak',
    category: 'family'
  },

  // Basic Words
  {
    id: '7',
    kulitan: 'ᜇᜓᜈᜓᜋ᜔',
    kapampangan: 'danum',
    tagalog: 'tubig',
    english: 'water',
    pronunciation: 'da-num',
    category: 'basic'
  },
  {
    id: '8',
    kulitan: 'ᜊᜌᜓ᜔',
    kapampangan: 'bayu',
    tagalog: 'bagong',
    english: 'new',
    pronunciation: 'ba-yu',
    category: 'basic'
  },
  {
    id: '9',
    kulitan: 'ᜋᜆᜓᜀ᜔',
    kapampangan: 'matua',
    tagalog: 'matanda',
    english: 'old',
    pronunciation: 'ma-tu-a',
    category: 'basic'
  },

  // Colors
  {
    id: '10',
    kulitan: 'ᜋᜉᜓᜆᜒ',
    kapampangan: 'maputi',
    tagalog: 'puti',
    english: 'white',
    pronunciation: 'ma-pu-ti',
    category: 'colors'
  },
  {
    id: '11',
    kulitan: 'ᜋᜁᜆᜓᜋ᜔',
    kapampangan: 'maitum',
    tagalog: 'itim',
    english: 'black',
    pronunciation: 'ma-i-tum',
    category: 'colors'
  },
  {
    id: '12',
    kulitan: 'ᜋᜂᜎᜓ',
    kapampangan: 'maulu',
    tagalog: 'pula',
    english: 'red',
    pronunciation: 'ma-u-lu',
    category: 'colors'
  },

  // Numbers
  {
    id: '13',
    kulitan: 'ᜐᜅ᜔',
    kapampangan: 'saka',
    tagalog: 'isa',
    english: 'one',
    pronunciation: 'sa-ka',
    category: 'numbers'
  },
  {
    id: '14',
    kulitan: 'ᜀᜇᜓ',
    kapampangan: 'adwa',
    tagalog: 'dalawa',
    english: 'two',
    pronunciation: 'ad-wa',
    category: 'numbers'
  },
  {
    id: '15',
    kulitan: 'ᜀᜆᜓ',
    kapampangan: 'atlu',
    tagalog: 'tatlo',
    english: 'three',
    pronunciation: 'at-lu',
    category: 'numbers'
  },

  // Food
  {
    id: '16',
    kulitan: 'ᜈᜎᜒ',
    kapampangan: 'nasi',
    tagalog: 'kanin',
    english: 'rice',
    pronunciation: 'na-si',
    category: 'food'
  },
  {
    id: '17',
    kulitan: 'ᜃᜇᜒ',
    kapampangan: 'kari',
    tagalog: 'ulam',
    english: 'viand/dish',
    pronunciation: 'ka-ri',
    category: 'food'
  },

  // Nature
  {
    id: '18',
    kulitan: 'ᜀᜇᜂ',
    kapampangan: 'aldo',
    tagalog: 'araw',
    english: 'sun/day',
    pronunciation: 'al-do',
    category: 'nature'
  },
  {
    id: '19',
    kulitan: 'ᜊᜓᜎᜈ᜔',
    kapampangan: 'bulan',
    tagalog: 'buwan',
    english: 'moon/month',
    pronunciation: 'bu-lan',
    category: 'nature'
  },
  {
    id: '20',
    kulitan: 'ᜊᜒᜆᜂᜈ᜔',
    kapampangan: 'bituin',
    tagalog: 'bituin',
    english: 'star',
    pronunciation: 'bi-tu-in',
    category: 'nature'
  }
];

// Create translation maps from word data
const createTranslationMaps = (): TranslationMaps => {
  const englishToKulitan: { [key: string]: string } = {};
  const kulitanToEnglish: { [key: string]: string } = {};
  const tagalogToKulitan: { [key: string]: string } = {};
  const kulitanToTagalog: { [key: string]: string } = {};
  const kapampanganToKulitan: { [key: string]: string } = {};
  const kulitanToKapampangan: { [key: string]: string } = {};

  kulitanWordsData.forEach(word => {
    // English mappings
    englishToKulitan[word.english.toLowerCase()] = word.kulitan;
    kulitanToEnglish[word.kulitan] = word.english;
    
    // Tagalog mappings
    tagalogToKulitan[word.tagalog.toLowerCase()] = word.kulitan;
    kulitanToTagalog[word.kulitan] = word.tagalog;
    
    // Kapampangan mappings
    kapampanganToKulitan[word.kapampangan.toLowerCase()] = word.kulitan;
    kulitanToKapampangan[word.kulitan] = word.kapampangan;
  });

  return {
    englishToKulitan,
    kulitanToEnglish,
    tagalogToKulitan,
    kulitanToTagalog,
    kapampanganToKulitan,
    kulitanToKapampangan
  };
};

// Initialize translation maps
const translationMaps = createTranslationMaps();

/**
 * Translate English word to Kulitan
 */
export const translateEnglishToKulitan = (englishWord: string): TranslationResult => {
  const lowerWord = englishWord.toLowerCase().trim();
  const kulitanWord = translationMaps.englishToKulitan[lowerWord];
  
  const wordData = kulitanWordsData.find(word => 
    word.english.toLowerCase() === lowerWord
  );

  return {
    originalWord: englishWord,
    translatedWord: kulitanWord || englishWord,
    wordData: wordData,
    isTranslatable: !!kulitanWord
  };
};

/**
 * Translate Tagalog word to Kulitan
 */
export const translateTagalogToKulitan = (tagalogWord: string): TranslationResult => {
  const lowerWord = tagalogWord.toLowerCase().trim();
  const kulitanWord = translationMaps.tagalogToKulitan[lowerWord];
  
  const wordData = kulitanWordsData.find(word => 
    word.tagalog.toLowerCase() === lowerWord
  );

  return {
    originalWord: tagalogWord,
    translatedWord: kulitanWord || tagalogWord,
    wordData: wordData,
    isTranslatable: !!kulitanWord
  };
};

/**
 * Translate Kulitan word to English
 */
export const translateKulitanToEnglish = (kulitanWord: string): TranslationResult => {
  const englishWord = translationMaps.kulitanToEnglish[kulitanWord.trim()];
  const wordData = kulitanWordsData.find(word => word.kulitan === kulitanWord.trim());

  return {
    originalWord: kulitanWord,
    translatedWord: englishWord || kulitanWord,
    wordData: wordData,
    isTranslatable: !!englishWord
  };
};

/**
 * Translate Kulitan word to Tagalog
 */
export const translateKulitanToTagalog = (kulitanWord: string): TranslationResult => {
  const tagalogWord = translationMaps.kulitanToTagalog[kulitanWord.trim()];
  const wordData = kulitanWordsData.find(word => word.kulitan === kulitanWord.trim());

  return {
    originalWord: kulitanWord,
    translatedWord: tagalogWord || kulitanWord,
    wordData: wordData,
    isTranslatable: !!tagalogWord
  };
};

/**
 * Translate text (multiple words)
 */
export const translateText = (
  text: string, 
  direction: 'englishToKulitan' | 'tagalogToKulitan' | 'kulitanToEnglish' | 'kulitanToTagalog'
): TranslationResult[] => {
  const words = text.trim().split(/\s+/);
  
  return words.map(word => {
    switch (direction) {
      case 'englishToKulitan':
        return translateEnglishToKulitan(word);
      case 'tagalogToKulitan':
        return translateTagalogToKulitan(word);
      case 'kulitanToEnglish':
        return translateKulitanToEnglish(word);
      case 'kulitanToTagalog':
        return translateKulitanToTagalog(word);
      default:
        return {
          originalWord: word,
          translatedWord: word,
          isTranslatable: false
        };
    }
  });
};

/**
 * Get word details by any language
 */
export const getWordByAnyLanguage = (searchWord: string): KulitanWord | undefined => {
  const lowerWord = searchWord.toLowerCase().trim();
  return kulitanWordsData.find(word => 
    word.english.toLowerCase() === lowerWord ||
    word.tagalog.toLowerCase() === lowerWord ||
    word.kapampangan.toLowerCase() === lowerWord ||
    word.kulitan === searchWord.trim()
  );
};

/**
 * Get words by category
 */
export const getWordsByCategory = (category: string): KulitanWord[] => {
  return kulitanWordsData.filter(word => word.category === category);
};

/**
 * Get all available categories
 */
export const getAvailableCategories = (): string[] => {
  return [...new Set(kulitanWordsData.map(word => word.category))];
};

/**
 * Search words (fuzzy search)
 */
export const searchWords = (query: string): KulitanWord[] => {
  const lowerQuery = query.toLowerCase().trim();
  
  if (!lowerQuery) return [];
  
  return kulitanWordsData.filter(word =>
    word.english.toLowerCase().includes(lowerQuery) ||
    word.tagalog.toLowerCase().includes(lowerQuery) ||
    word.kapampangan.toLowerCase().includes(lowerQuery) ||
    word.pronunciation.toLowerCase().includes(lowerQuery) ||
    word.category.toLowerCase().includes(lowerQuery)
  );
};

/**
 * Check if word is translatable
 */
export const isTranslatable = (
  word: string, 
  direction: 'englishToKulitan' | 'tagalogToKulitan' | 'kulitanToEnglish' | 'kulitanToTagalog'
): boolean => {
  const lowerWord = word.toLowerCase().trim();
  
  switch (direction) {
    case 'englishToKulitan':
      return !!translationMaps.englishToKulitan[lowerWord];
    case 'tagalogToKulitan':
      return !!translationMaps.tagalogToKulitan[lowerWord];
    case 'kulitanToEnglish':
      return !!translationMaps.kulitanToEnglish[word.trim()];
    case 'kulitanToTagalog':
      return !!translationMaps.kulitanToTagalog[word.trim()];
    default:
      return false;
  }
};

/**
 * Get translation statistics
 */
export const getTranslationStats = () => {
  return {
    totalWords: kulitanWordsData.length,
    categories: getAvailableCategories(),
    categoryCount: getAvailableCategories().length,
    translatableFromEnglish: Object.keys(translationMaps.englishToKulitan).length,
    translatableFromTagalog: Object.keys(translationMaps.tagalogToKulitan).length,
    translatableFromKulitan: Object.keys(translationMaps.kulitanToEnglish).length,
  };
};

/**
 * Get random words for learning
 */
export const getRandomWords = (count: number = 5): KulitanWord[] => {
  const shuffled = [...kulitanWordsData].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};