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
    image: require('@/assets/images/a.jpg'),
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
    image: require('@/assets/images/nga.jpg'),
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
    name: 'DA',
    image: require('@/assets/images/da.jpg'),
    audio: require('@/assets/audio/a.mp3'),
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
  },
  {
    id: '7',
    name: 'NA',
    image: require('@/assets/images/na.jpg'),
    audio: require('@/assets/audio/a.mp3'),
    pronunciation: 'na',
    category: 'Basic Consonant',
    rarity: 'Common',
    origin: 'Kapampangan Script',
    type: 'Consonant-Vowel Combination',
    soundDescription: 'Voiced alveolar nasal with "a" vowel',
    description: 'The syllable "NA" in Kulitan script, representing the voiced alveolar nasal /n/ with the vowel /a/. This is a very common character in Kapampangan words.',
    uses: [
      'Word formation',
      'Common syllable structure',
      'Nasal consonant expressions',
      'Building block for words'
    ],
    characteristics: [
      'Voiced alveolar nasal',
      'High frequency character',
      'Simple stroke pattern',
      'Foundation for "n" sound family'
    ],
    learningTips: 'Simple "na" sound as in "nap". Practice the smooth nasal sound.',
    writingInstructions: 'Draw the characteristic strokes for the nasal "na" sound',
    combinations: ['na', 'ni', 'nu', 'ne', 'no']
  },
  {
    id: '8',
    name: 'LA',
    image: require('@/assets/images/la.jpg'),
    audio: require('@/assets/audio/a.mp3'),
    pronunciation: 'la',
    category: 'Basic Consonant',
    rarity: 'Common',
    origin: 'Kapampangan Script',
    type: 'Consonant-Vowel Combination',
    soundDescription: 'Voiced alveolar lateral with "a" vowel',
    description: 'The syllable "LA" in Kulitan script, representing the voiced alveolar lateral /l/ with the vowel /a/. This character is frequently used in Kapampangan vocabulary.',
    uses: [
      'Word formation',
      'Common in native words',
      'Lateral consonant expressions',
      'Building block for syllables'
    ],
    characteristics: [
      'Voiced alveolar lateral',
      'Distinctive curved form',
      'Common character',
      'Base for "l" sound variations'
    ],
    learningTips: 'Clear "la" sound as in "lap". Practice the lateral tongue position.',
    writingInstructions: 'Draw the distinctive curved pattern for the "la" sound',
    combinations: ['la', 'li', 'lu', 'le', 'lo']
  },
  {
    id: '9',
    name: 'SA',
    image: require('@/assets/images/sa.jpg'),
    audio: require('@/assets/audio/a.mp3'),
    pronunciation: 'sa',
    category: 'Basic Consonant',
    rarity: 'Common',
    origin: 'Kapampangan Script',
    type: 'Consonant-Vowel Combination',
    soundDescription: 'Voiceless alveolar fricative with "a" vowel',
    description: 'The syllable "SA" in Kulitan script, representing the voiceless alveolar fricative /s/ with the vowel /a/. This character appears frequently in Kapampangan text.',
    uses: [
      'Word beginnings and middles',
      'Common syllable structure',
      'Fricative consonant expressions',
      'Base for vowel modifications'
    ],
    characteristics: [
      'Voiceless alveolar fricative',
      'High frequency character',
      'Clear stroke pattern',
      'Foundation for "s" sound family'
    ],
    learningTips: 'Sharp "sa" sound as in "sap". Practice the fricative pronunciation.',
    writingInstructions: 'Draw the clean strokes that form the "sa" character',
    combinations: ['sa', 'si', 'su', 'se', 'so']
  },
  {
    id: '10',
    name: 'MA',
    image: require('@/assets/images/ma.jpg'),
    audio: require('@/assets/audio/a.mp3'),
    pronunciation: 'ma',
    category: 'Basic Consonant',
    rarity: 'Common',
    origin: 'Kapampangan Script',
    type: 'Consonant-Vowel Combination',
    soundDescription: 'Voiced bilabial nasal with "a" vowel',
    description: 'The syllable "MA" in Kulitan script, representing the voiced bilabial nasal /m/ with the vowel /a/. This is one of the most common characters in the script.',
    uses: [
      'Word beginnings',
      'Very common in vocabulary',
      'Nasal consonant expressions',
      'Base for vowel modifications'
    ],
    characteristics: [
      'Voiced bilabial nasal',
      'Extremely high frequency',
      'Simple, recognizable form',
      'Foundation for "m" sound family'
    ],
    learningTips: 'Basic "ma" sound as in "map". One of the easiest characters to learn.',
    writingInstructions: 'Practice the simple, clear strokes for this common character',
    combinations: ['ma', 'mi', 'mu', 'me', 'mo']
  },
  {
    id: '11',
    name: 'PA',
    image: require('@/assets/images/pa.jpg'),
    audio: require('@/assets/audio/a.mp3'),
    pronunciation: 'pa',
    category: 'Basic Consonant',
    rarity: 'Common',
    origin: 'Kapampangan Script',
    type: 'Consonant-Vowel Combination',
    soundDescription: 'Voiceless bilabial stop with "a" vowel',
    description: 'The syllable "PA" in Kulitan script, representing the voiceless bilabial stop /p/ with the vowel /a/. This character is very common in Kapampangan words.',
    uses: [
      'Word beginnings',
      'Common syllable structure',
      'Building block for words',
      'Base for vowel modifications'
    ],
    characteristics: [
      'Voiceless bilabial stop',
      'High frequency character',
      'Clear, distinct form',
      'Foundation for "p" sound family'
    ],
    learningTips: 'Sharp "pa" sound as in "pat". Practice the bilabial stop.',
    writingInstructions: 'Draw the distinctive strokes for the "pa" character',
    combinations: ['pa', 'pi', 'pu', 'pe', 'po']
  },
  {
    id: '12',
    name: 'BA',
    image: require('@/assets/images/ba.jpg'),
    audio: require('@/assets/audio/a.mp3'),
    pronunciation: 'ba',
    category: 'Basic Consonant',
    rarity: 'Common',
    origin: 'Kapampangan Script',
    type: 'Consonant-Vowel Combination',
    soundDescription: 'Voiced bilabial stop with "a" vowel',
    description: 'The syllable "BA" in Kulitan script, representing the voiced bilabial stop /b/ with the vowel /a/. This character appears frequently in Kapampangan vocabulary.',
    uses: [
      'Word beginnings and middles',
      'Common syllable structure',
      'Voiced consonant expressions',
      'Base for vowel modifications'
    ],
    characteristics: [
      'Voiced bilabial stop',
      'High frequency character',
      'Distinctive stroke pattern',
      'Foundation for "b" sound family'
    ],
    learningTips: 'Voiced "ba" sound as in "bat". Note the difference from voiceless "pa".',
    writingInstructions: 'Practice the specific strokes that distinguish this from "pa"',
    combinations: ['ba', 'bi', 'bu', 'be', 'bo']
  },
  {
    id: '13',
    name: 'I',
    image: require('@/assets/images/i.jpg'),
    audio: require('@/assets/audio/a.mp3'),
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
    id: '14',
    name: 'GI',
    image: require('@/assets/images/gi.jpg'),
    audio: require('@/assets/audio/a.mp3'),
    pronunciation: 'gi',
    category: 'Basic Consonant',
    rarity: 'Common',
    origin: 'Kapampangan Script',
    type: 'Consonant-Vowel Combination',
    soundDescription: 'Voiced velar stop with "i" vowel',
    description: 'The syllable "GI" in Kulitan script, formed by adding the "i" vowel marker to the "ga" character. This represents the voiced velar consonant /g/ with the vowel /i/.',
    uses: [
      'Word formation',
      'Syllabic combinations',
      'Modified consonant sounds',
      'Common in vocabulary'
    ],
    characteristics: [
      'Modified "ga" with "i" marker',
      'Voiced velar consonant',
      'Requires diacritical mark',
      'Part of "g" sound family'
    ],
    learningTips: 'Hard "g" sound with "ee" vowel, like "geese". Practice adding the vowel marker.',
    writingInstructions: 'Add the "i" vowel marker to the base "ga" character',
    combinations: ['ga', 'gi', 'gu', 'ge', 'go']
  },
  {
    id: '15',
    name: 'KI',
    image: require('@/assets/images/ki.jpg'),
    audio: require('@/assets/audio/a.mp3'),
    pronunciation: 'ki',
    category: 'Basic Consonant',
    rarity: 'Common',
    origin: 'Kapampangan Script',
    type: 'Consonant-Vowel Combination',
    soundDescription: 'Voiceless velar stop with "i" vowel',
    description: 'The syllable "KI" in Kulitan script, formed by adding the "i" vowel marker to the "ka" character. This represents the voiceless velar consonant /k/ with the vowel /i/.',
    uses: [
      'Word formation',
      'Common syllable structure',
      'Modified consonant sounds',
      'Building block for words'
    ],
    characteristics: [
      'Modified "ka" with "i" marker',
      'Voiceless velar consonant',
      'Requires diacritical mark',
      'Part of "k" sound family'
    ],
    learningTips: 'Like "key" but with a shorter vowel sound. Practice the vowel modification.',
    writingInstructions: 'Add the "i" vowel marker to the base "ka" character',
    combinations: ['ka', 'ki', 'ku', 'ke', 'ko']
  },
  {
    id: '16',
    name: 'NGI',
    image: require('@/assets/images/ngi.jpg'),
    audio: require('@/assets/audio/a.mp3'),
    pronunciation: 'ngi',
    category: 'Basic Consonant',
    rarity: 'Common',
    origin: 'Kapampangan Script',
    type: 'Consonant-Vowel Combination',
    soundDescription: 'Voiced velar nasal with "i" vowel',
    description: 'The syllable "NGI" in Kulitan script, formed by adding the "i" vowel marker to the "nga" character. This represents the voiced velar nasal /ŋ/ with the vowel /i/.',
    uses: [
      'Word formation',
      'Nasal consonant combinations',
      'Modified consonant sounds',
      'Syllabic structures'
    ],
    characteristics: [
      'Modified "nga" with "i" marker',
      'Voiced velar nasal',
      'Requires diacritical mark',
      'Part of "ng" sound family'
    ],
    learningTips: 'The "ng" sound from "sing" with "ee" vowel. Practice the nasal quality.',
    writingInstructions: 'Add the "i" vowel marker to the base "nga" character',
    combinations: ['nga', 'ngi', 'ngu', 'nge', 'ngo']
  },
  {
    id: '17',
    name: 'TI',
    image: require('@/assets/images/ti.jpg'),
    audio: require('@/assets/audio/a.mp3'),
    pronunciation: 'ti',
    category: 'Basic Consonant',
    rarity: 'Common',
    origin: 'Kapampangan Script',
    type: 'Consonant-Vowel Combination',
    soundDescription: 'Voiceless alveolar stop with "i" vowel',
    description: 'The syllable "TI" in Kulitan script, formed by adding the "i" vowel marker to the "ta" character. This represents the voiceless alveolar consonant /t/ with the vowel /i/.',
    uses: [
      'Word formation',
      'Common syllable structure',
      'Modified consonant sounds',
      'Building block for words'
    ],
    characteristics: [
      'Modified "ta" with "i" marker',
      'Voiceless alveolar consonant',
      'Requires diacritical mark',
      'Part of "t" sound family'
    ],
    learningTips: 'Like "tea" but with a shorter vowel. Practice the clean "t" sound.',
    writingInstructions: 'Add the "i" vowel marker to the base "ta" character',
    combinations: ['ta', 'ti', 'tu', 'te', 'to']
  },
  {
    id: '18',
    name: 'DI',
    image: require('@/assets/images/di.jpg'),
    audio: require('@/assets/audio/a.mp3'),
    pronunciation: 'di',
    category: 'Basic Consonant',
    rarity: 'Common',
    origin: 'Kapampangan Script',
    type: 'Consonant-Vowel Combination',
    soundDescription: 'Voiced alveolar stop with "i" vowel',
    description: 'The syllable "DI" in Kulitan script, formed by adding the "i" vowel marker to the "da" character. This represents the voiced alveolar consonant /d/ with the vowel /i/.',
    uses: [
      'Word formation',
      'Voiced consonant combinations',
      'Modified consonant sounds',
      'Syllabic structures'
    ],
    characteristics: [
      'Modified "da" with "i" marker',
      'Voiced alveolar consonant',
      'Requires diacritical mark',
      'Part of "d" sound family'
    ],
    learningTips: 'Voiced "dee" sound. Note the difference from voiceless "ti".',
    writingInstructions: 'Add the "i" vowel marker to the base "da" character',
    combinations: ['da', 'di', 'du', 'de', 'do']
  },
  {
    id: '19',
    name: 'NI',
    image: require('@/assets/images/ni.jpg'),
    audio: require('@/assets/audio/a.mp3'),
    pronunciation: 'ni',
    category: 'Basic Consonant',
    rarity: 'Common',
    origin: 'Kapampangan Script',
    type: 'Consonant-Vowel Combination',
    soundDescription: 'Voiced alveolar nasal with "i" vowel',
    description: 'The syllable "NI" in Kulitan script, formed by adding the "i" vowel marker to the "na" character. This represents the voiced alveolar nasal /n/ with the vowel /i/.',
    uses: [
      'Word formation',
      'Nasal consonant combinations',
      'Modified consonant sounds',
      'Common syllable structure'
    ],
    characteristics: [
      'Modified "na" with "i" marker',
      'Voiced alveolar nasal',
      'Requires diacritical mark',
      'Part of "n" sound family'
    ],
    learningTips: 'Simple "nee" sound with nasal quality. Practice the smooth pronunciation.',
    writingInstructions: 'Add the "i" vowel marker to the base "na" character',
    combinations: ['na', 'ni', 'nu', 'ne', 'no']
  },
  {
    id: '20',
    name: 'LI',
    image: require('@/assets/images/li.jpg'),
    audio: require('@/assets/audio/a.mp3'),
    pronunciation: 'li',
    category: 'Basic Consonant',
    rarity: 'Common',
    origin: 'Kapampangan Script',
    type: 'Consonant-Vowel Combination',
    soundDescription: 'Voiced alveolar lateral with "i" vowel',
    description: 'The syllable "LI" in Kulitan script, formed by adding the "i" vowel marker to the "la" character. This represents the voiced alveolar lateral /l/ with the vowel /i/.',
    uses: [
      'Word formation',
      'Lateral consonant combinations',
      'Modified consonant sounds',
      'Building block for words'
    ],
    characteristics: [
      'Modified "la" with "i" marker',
      'Voiced alveolar lateral',
      'Requires diacritical mark',
      'Part of "l" sound family'
    ],
    learningTips: 'Like "lee" with clear lateral sound. Practice the tongue position.',
    writingInstructions: 'Add the "i" vowel marker to the base "la" character',
    combinations: ['la', 'li', 'lu', 'le', 'lo']
  },
  {
    id: '21',
    name: 'SI',
    image: require('@/assets/images/si.jpg'),
    audio: require('@/assets/audio/a.mp3'),
    pronunciation: 'si',
    category: 'Basic Consonant',
    rarity: 'Common',
    origin: 'Kapampangan Script',
    type: 'Consonant-Vowel Combination',
    soundDescription: 'Voiceless alveolar fricative with "i" vowel',
    description: 'The syllable "SI" in Kulitan script, formed by adding the "i" vowel marker to the "sa" character. This represents the voiceless alveolar fricative /s/ with the vowel /i/.',
    uses: [
      'Word formation',
      'Fricative consonant combinations',
      'Modified consonant sounds',
      'Common syllable structure'
    ],
    characteristics: [
      'Modified "sa" with "i" marker',
      'Voiceless alveolar fricative',
      'Requires diacritical mark',
      'Part of "s" sound family'
    ],
    learningTips: 'Sharp "see" sound with fricative quality. Practice the clear pronunciation.',
    writingInstructions: 'Add the "i" vowel marker to the base "sa" character',
    combinations: ['sa', 'si', 'su', 'se', 'so']
  },
  {
    id: '22',
    name: 'MI',
    image: require('@/assets/images/mi.jpg'),
    audio: require('@/assets/audio/a.mp3'),
    pronunciation: 'mi',
    category: 'Basic Consonant',
    rarity: 'Common',
    origin: 'Kapampangan Script',
    type: 'Consonant-Vowel Combination',
    soundDescription: 'Voiced bilabial nasal with "i" vowel',
    description: 'The syllable "MI" in Kulitan script, combining the bilabial nasal consonant /m/ with the vowel /i/.',
    uses: [
      'Beginning of words',
      'Common in Kapampangan vocabulary',
      'Part of compound syllables',
      'Base for further modifications'
    ],
    characteristics: [
      'Bilabial nasal consonant base',
      'High front vowel',
      'Smooth pronunciation',
      'Fundamental CV structure'
    ],
    learningTips: 'Pronounce as "mee" with a clear "m" sound followed by the "i" vowel.',
    writingInstructions: 'Draw the "ma" base character and add the "i" diacritic mark',
    combinations: ['mi', 'ma', 'mu', 'me', 'mo']
  },
   {
    id: '23',
    name: 'PI',
    image: require('@/assets/images/pi.jpg'),
    audio: require('@/assets/audio/a.mp3'),
    pronunciation: 'pi',
    category: 'Basic Consonant',
    rarity: 'Common',
    origin: 'Kapampangan Script',
    type: 'Consonant-Vowel Combination',
    soundDescription: 'Voiceless bilabial stop with "i" vowel',
    description: 'The syllable "PI" in Kulitan script, combining the voiceless bilabial consonant /p/ with the vowel /i/.',
    uses: [
      'Beginning of syllables',
      'Word formation',
      'Common in names',
      'Base for vowel modifications'
    ],
    characteristics: [
      'Voiceless bilabial consonant',
      'High front vowel',
      'Clear articulation',
      'Basic CV pattern'
    ],
    learningTips: 'Pronounce like "pee" with a sharp "p" sound.',
    writingInstructions: 'Write the "pa" base form and add the "i" vowel marker',
    combinations: ['pi', 'pa', 'pu', 'pe', 'po']
  },
  {
    id: '24',
    name: 'BI',
    image: require('@/assets/images/bi.jpg'),
    audio: require('@/assets/audio/a.mp3'),
    pronunciation: 'bi',
    category: 'Basic Consonant',
    rarity: 'Common',
    origin: 'Kapampangan Script',
    type: 'Consonant-Vowel Combination',
    soundDescription: 'Voiced bilabial stop with "i" vowel',
    description: 'The syllable "BI" in Kulitan script, combining the voiced bilabial consonant /b/ with the vowel /i/.',
    uses: [
      'Word beginnings',
      'Syllable formation',
      'Common in vocabulary',
      'Base for modifications'
    ],
    characteristics: [
      'Voiced bilabial consonant',
      'High front vowel',
      'Soft pronunciation',
      'Fundamental structure'
    ],
    learningTips: 'Pronounce as "bee" with a soft "b" sound.',
    writingInstructions: 'Form the "ba" character and add the "i" diacritic',
    combinations: ['bi', 'ba', 'bu', 'be', 'bo']
  },
{
    id: '25',
    name: 'U',
    image: require('@/assets/images/u.jpg'),
    audio: require('@/assets/audio/a.mp3'),
    pronunciation: 'u',
    category: 'Basic Vowel',
    rarity: 'Common',
    origin: 'Kapampangan Script',
    type: 'Independent Vowel',
    soundDescription: 'Close back rounded vowel sound',
    description: 'The basic vowel "U" in Kulitan script. This represents the close back rounded vowel sound /u/ and is one of the fundamental vowel characters.',
    uses: [
      'Standalone vowel',
      'Beginning of words',
      'Part of diphthongs',
      'Base for combinations'
    ],
    characteristics: [
      'Back rounded vowel',
      'Independent character',
      'High frequency usage',
      'Simple form'
    ],
    learningTips: 'Pronounce like "oo" in "moon". Essential vowel sound in Kulitan.',
    writingInstructions: 'Draw the characteristic curved form for the "u" vowel',
    combinations: ['ku', 'gu', 'ngu', 'tu', 'du', 'nu', 'lu', 'su', 'mu', 'pu', 'bu']
  },
  {
    id: '26',
    name: 'GU',
    image: require('@/assets/images/kt-logo.png'),
    audio: require('@/assets/audio/a.mp3'),
    pronunciation: 'gu',
    category: 'Basic Consonant',
    rarity: 'Common',
    origin: 'Kapampangan Script',
    type: 'Consonant-Vowel Combination',
    soundDescription: 'Voiced velar stop with "u" vowel',
    description: 'The syllable "GU" in Kulitan script, combining the voiced velar consonant /g/ with the vowel /u/.',
    uses: [
      'Beginning of syllables',
      'Word formation',
      'Common combinations',
      'Base for modifications'
    ],
    characteristics: [
      'Voiced velar consonant',
      'Back rounded vowel',
      'Strong articulation',
      'CV combination'
    ],
    learningTips: 'Pronounce like "goo" with a hard "g" sound.',
    writingInstructions: 'Write the "ga" base and add the "u" vowel marker',
    combinations: ['gu', 'ga', 'gi', 'ge', 'go']
  },
{
    id: '27',
    name: 'KU',
    image: require('@/assets/images/kt-logo.png'),
    audio: require('@/assets/audio/a.mp3'),
    pronunciation: 'ku',
    category: 'Basic Consonant',
    rarity: 'Common',
    origin: 'Kapampangan Script',
    type: 'Consonant-Vowel Combination',
    soundDescription: 'Voiceless velar stop with "u" vowel',
    description: 'The syllable "KU" in Kulitan script, combining the voiceless velar consonant /k/ with the vowel /u/.',
    uses: [
      'Word beginnings',
      'Syllable formation',
      'Common in names',
      'Base for diacritics'
    ],
    characteristics: [
      'Voiceless velar consonant',
      'Back rounded vowel',
      'Clear pronunciation',
      'Basic structure'
    ],
    learningTips: 'Pronounce like "coo" with a sharp "k" sound.',
    writingInstructions: 'Form the "ka" character with the "u" vowel modification',
    combinations: ['ku', 'ka', 'ki', 'ke', 'ko']
  },
  {
    id: '28',
    name: 'NGU',
    image: require('@/assets/images/kt-logo.png'),
    audio: require('@/assets/audio/a.mp3'),
    pronunciation: 'ngu',
    category: 'Basic Consonant',
    rarity: 'Common',
    origin: 'Kapampangan Script',
    type: 'Consonant-Vowel Combination',
    soundDescription: 'Voiced velar nasal with "u" vowel',
    description: 'The syllable "NGU" in Kulitan script, combining the voiced velar nasal consonant /ŋ/ with the vowel /u/.',
    uses: [
      'Word formation',
      'Syllable combinations',
      'Nasal sound representation',
      'Base for modifications'
    ],
    characteristics: [
      'Velar nasal consonant',
      'Back rounded vowel',
      'Nasal articulation',
      'Unique sound combination'
    ],
    learningTips: 'The "ng" sound as in "sing" followed by "oo". Practice the nasal quality.',
    writingInstructions: 'Write the "nga" base character with the "u" vowel marker',
    combinations: ['ngu', 'nga', 'ngi', 'nge', 'ngo']
  },
  {
    id: '29',
    name: 'TU',
    image: require('@/assets/images/kt-logo.png'),
    audio: require('@/assets/audio/a.mp3'),
    pronunciation: 'tu',
    category: 'Basic Consonant',
    rarity: 'Common',
    origin: 'Kapampangan Script',
    type: 'Consonant-Vowel Combination',
    soundDescription: 'Voiceless alveolar stop with "u" vowel',
    description: 'The syllable "TU" in Kulitan script, combining the voiceless alveolar consonant /t/ with the vowel /u/.',
    uses: [
      'Beginning of words',
      'Syllable construction',
      'Common combinations',
      'Base for variations'
    ],
    characteristics: [
      'Voiceless alveolar consonant',
      'Back rounded vowel',
      'Sharp articulation',
      'CV pattern'
    ],
    learningTips: 'Pronounce like "too" with a clear "t" sound.',
    writingInstructions: 'Form the "ta" character and add the "u" vowel modification',
    combinations: ['tu', 'ta', 'ti', 'te', 'to']
  },
  {
    id: '30',
    name: 'DU',
    image: require('@/assets/images/kt-logo.png'),
    audio: require('@/assets/audio/a.mp3'),
    pronunciation: 'du',
    category: 'Basic Consonant',
    rarity: 'Common',
    origin: 'Kapampangan Script',
    type: 'Consonant-Vowel Combination',
    soundDescription: 'Voiced alveolar stop with "u" vowel',
    description: 'The syllable "DU" in Kulitan script, combining the voiced alveolar consonant /d/ with the vowel /u/.',
    uses: [
      'Word formation',
      'Syllable building',
      'Common in vocabulary',
      'Base for modifications'
    ],
    characteristics: [
      'Voiced alveolar consonant',
      'Back rounded vowel',
      'Soft articulation',
      'Basic CV structure'
    ],
    learningTips: 'Pronounce like "do" but with the "oo" vowel sound.',
    writingInstructions: 'Write the "da" base character with the "u" vowel marker',
    combinations: ['du', 'da', 'di', 'de', 'do']
  },
 {
    id: '31',
    name: 'NU',
    image: require('@/assets/images/kt-logo.png'),
    audio: require('@/assets/audio/a.mp3'),
    pronunciation: 'nu',
    category: 'Basic Consonant',
    rarity: 'Common',
    origin: 'Kapampangan Script',
    type: 'Consonant-Vowel Combination',
    soundDescription: 'Voiced alveolar nasal with "u" vowel',
    description: 'The syllable "NU" in Kulitan script, combining the voiced alveolar nasal consonant /n/ with the vowel /u/.',
    uses: [
      'Beginning of syllables',
      'Word construction',
      'Nasal sound combinations',
      'Base for variations'
    ],
    characteristics: [
      'Alveolar nasal consonant',
      'Back rounded vowel',
      'Nasal quality',
      'Smooth transition'
    ],
    learningTips: 'Pronounce like "new" but with the "oo" sound. Focus on the nasal quality.',
    writingInstructions: 'Form the "na" character and add the "u" vowel modification',
    combinations: ['nu', 'na', 'ni', 'ne', 'no']
  },
  {
    id: '32',
    name: 'LU',
    image: require('@/assets/images/kt-logo.png'),
    audio: require('@/assets/audio/a.mp3'),
    pronunciation: 'lu',
    category: 'Basic Consonant',
    rarity: 'Common',
    origin: 'Kapampangan Script',
    type: 'Consonant-Vowel Combination',
    soundDescription: 'Voiced alveolar lateral with "u" vowel',
    description: 'The syllable "LU" in Kulitan script, combining the voiced alveolar lateral consonant /l/ with the vowel /u/.',
    uses: [
      'Word beginnings',
      'Syllable formation',
      'Common combinations',
      'Base for modifications'
    ],
    characteristics: [
      'Alveolar lateral consonant',
      'Back rounded vowel',
      'Liquid sound quality',
      'Smooth articulation'
    ],
    learningTips: 'Pronounce like "loo" with a clear "l" sound.',
    writingInstructions: 'Write the "la" base character with the "u" vowel marker',
    combinations: ['lu', 'la', 'li', 'le', 'lo']
  },
  {
    id: '33',
    name: 'SU',
    image: require('@/assets/images/kt-logo.png'),
    audio: require('@/assets/audio/a.mp3'),
    pronunciation: 'su',
    category: 'Basic Consonant',
    rarity: 'Common',
    origin: 'Kapampangan Script',
    type: 'Consonant-Vowel Combination',
    soundDescription: 'Voiceless alveolar fricative with "e" vowel',
    description: 'The syllable "SE" in Kulitan script, combining the voiceless alveolar fricative consonant /s/ with the vowel /e/.',
    uses: [
      'Beginning of words',
      'Syllable construction',
      'Common in vocabulary',
      'Base for variations'
    ],
    characteristics: [
      'Voiceless fricative consonant',
      'Mid front vowel',
      'Sibilant quality',
      'CV combination'
    ],
    learningTips: 'Pronounce like "set" but just the "se" sound.',
    writingInstructions: 'Form the "sa" character and add the "e" vowel modification',
    combinations: ['se', 'sa', 'si', 'su', 'so']
  },
  {
  id: '34',
  name: 'MU',
  image: require('@/assets/images/kt-logo.png'),
  audio: require('@/assets/audio/a.mp3'),
  pronunciation: 'mu',
  category: 'Basic Consonant',
  rarity: 'Common',
  origin: 'Kapampangan Script',
  type: 'Consonant-Vowel Combination',
  soundDescription: 'Bilabial nasal with "u" vowel',
  description: 'The syllable "MU" in Kulitan script, combining the bilabial nasal consonant /m/ with the vowel /u/.',
  uses: [
    'Beginning of words',
    'Syllable construction',
    'Common in vocabulary',
    'Base for variations'
  ],
  characteristics: [
    'Voiced nasal consonant',
    'High back vowel',
    'Bilabial articulation',
    'CV combination'
  ],
  learningTips: 'Pronounce like "moon" but just the "mu" sound.',
  writingInstructions: 'Form the "ma" character and add the "u" vowel modification',
  combinations: ['mu', 'ma', 'mi', 'me', 'mo']
},
{
  id: '35',
  name: 'PU',
  image: require('@/assets/images/kt-logo.png'),
  audio: require('@/assets/audio/a.mp3'),
  pronunciation: 'pu',
  category: 'Basic Consonant',
  rarity: 'Common',
  origin: 'Kapampangan Script',
  type: 'Consonant-Vowel Combination',
  soundDescription: 'Voiceless bilabial plosive with "u" vowel',
  description: 'The syllable "PU" in Kulitan script, combining the voiceless bilabial plosive consonant /p/ with the vowel /u/.',
  uses: [
    'Beginning of words',
    'Syllable construction',
    'Common in vocabulary',
    'Base for variations'
  ],
  characteristics: [
    'Voiceless plosive consonant',
    'High back vowel',
    'Bilabial articulation',
    'CV combination'
  ],
  learningTips: 'Pronounce like "put" but just the "pu" sound.',
  writingInstructions: 'Form the "pa" character and add the "u" vowel modification',
  combinations: ['pu', 'pa', 'pi', 'pe', 'po']
},
{
  id: '36',
  name: 'BU',
  image: require('@/assets/images/kt-logo.png'),
  audio: require('@/assets/audio/a.mp3'),
  pronunciation: 'bu',
  category: 'Basic Consonant',
  rarity: 'Common',
  origin: 'Kapampangan Script',
  type: 'Consonant-Vowel Combination',
  soundDescription: 'Voiced bilabial plosive with "u" vowel',
  description: 'The syllable "BU" in Kulitan script, combining the voiced bilabial plosive consonant /b/ with the vowel /u/.',
  uses: [
    'Beginning of words',
    'Syllable construction',
    'Common in vocabulary',
    'Base for variations'
  ],
  characteristics: [
    'Voiced plosive consonant',
    'High back vowel',
    'Bilabial articulation',
    'CV combination'
  ],
  learningTips: 'Pronounce like "book" but just the "bu" sound.',
  writingInstructions: 'Form the "ba" character and add the "u" vowel modification',
  combinations: ['bu', 'ba', 'bi', 'be', 'bo']
},
{
  id: '37',
  name: 'E',
  image: require('@/assets/images/kt-logo.png'),
  audio: require('@/assets/audio/a.mp3'),
  pronunciation: 'e',
  category: 'Vowel',
  rarity: 'Common',
  origin: 'Kapampangan Script',
  type: 'Pure Vowel',
  soundDescription: 'Mid front vowel',
  description: 'The vowel "E" in Kulitan script, representing the mid front vowel /e/.',
  uses: [
    'Standalone vowel',
    'Word formation',
    'Vowel modification',
    'Syllable nucleus'
  ],
  characteristics: [
    'Mid vowel',
    'Front articulation',
    'Unrounded vowel',
    'Pure vowel sound'
  ],
  learningTips: 'Pronounce like the "e" in "pet" or "bed".',
  writingInstructions: 'Write as a standalone vowel character',
  combinations: ['e', 'ea', 'ei', 'eu', 'eo']
},
{
  id: '38',
  name: 'GE',
  image: require('@/assets/images/kt-logo.png'),
  audio: require('@/assets/audio/a.mp3'),
  pronunciation: 'ge',
  category: 'Basic Consonant',
  rarity: 'Common',
  origin: 'Kapampangan Script',
  type: 'Consonant-Vowel Combination',
  soundDescription: 'Voiced velar plosive with "e" vowel',
  description: 'The syllable "GE" in Kulitan script, combining the voiced velar plosive consonant /g/ with the vowel /e/.',
  uses: [
    'Beginning of words',
    'Syllable construction',
    'Common in vocabulary',
    'Base for variations'
  ],
  characteristics: [
    'Voiced plosive consonant',
    'Mid front vowel',
    'Velar articulation',
    'CV combination'
  ],
  learningTips: 'Pronounce like "get" but just the "ge" sound.',
  writingInstructions: 'Form the "ga" character and add the "e" vowel modification',
  combinations: ['ge', 'ga', 'gi', 'gu', 'go']
},
{
  id: '39',
  name: 'KE',
  image: require('@/assets/images/kt-logo.png'),
  audio: require('@/assets/audio/a.mp3'),
  pronunciation: 'ke',
  category: 'Basic Consonant',
  rarity: 'Common',
  origin: 'Kapampangan Script',
  type: 'Consonant-Vowel Combination',
  soundDescription: 'Voiceless velar plosive with "e" vowel',
  description: 'The syllable "KE" in Kulitan script, combining the voiceless velar plosive consonant /k/ with the vowel /e/.',
  uses: [
    'Beginning of words',
    'Syllable construction',
    'Common in vocabulary',
    'Base for variations'
  ],
  characteristics: [
    'Voiceless plosive consonant',
    'Mid front vowel',
    'Velar articulation',
    'CV combination'
  ],
  learningTips: 'Pronounce like "kept" but just the "ke" sound.',
  writingInstructions: 'Form the "ka" character and add the "e" vowel modification',
  combinations: ['ke', 'ka', 'ki', 'ku', 'ko']
},
{
  id: '40',
  name: 'NGE',
  image: require('@/assets/images/kt-logo.png'),
  audio: require('@/assets/audio/a.mp3'),
  pronunciation: 'nge',
  category: 'Basic Consonant',
  rarity: 'Common',
  origin: 'Kapampangan Script',
  type: 'Consonant-Vowel Combination',
  soundDescription: 'Voiced velar nasal with "e" vowel',
  description: 'The syllable "NGE" in Kulitan script, combining the voiced velar nasal consonant /ŋ/ with the vowel /e/.',
  uses: [
    'Beginning of words',
    'Syllable construction',
    'Common in vocabulary',
    'Base for variations'
  ],
  characteristics: [
    'Voiced nasal consonant',
    'Mid front vowel',
    'Velar articulation',
    'CV combination'
  ],
  learningTips: 'Pronounce like the "ng" in "sing" followed by "e".',
  writingInstructions: 'Form the "nga" character and add the "e" vowel modification',
  combinations: ['nge', 'nga', 'ngi', 'ngu', 'ngo']
},
{
  id: '41',
  name: 'TE',
  image: require('@/assets/images/te.jpg'),
  audio: require('@/assets/audio/a.mp3'),
  pronunciation: 'te',
  category: 'Basic Consonant',
  rarity: 'Common',
  origin: 'Kapampangan Script',
  type: 'Consonant-Vowel Combination',
  soundDescription: 'Voiceless alveolar plosive with "e" vowel',
  description: 'The syllable "TE" in Kulitan script, combining the voiceless alveolar plosive consonant /t/ with the vowel /e/.',
  uses: [
    'Beginning of words',
    'Syllable construction',
    'Common in vocabulary',
    'Base for variations'
  ],
  characteristics: [
    'Voiceless plosive consonant',
    'Mid front vowel',
    'Alveolar articulation',
    'CV combination'
  ],
  learningTips: 'Pronounce like "ten" but just the "te" sound.',
  writingInstructions: 'Form the "ta" character and add the "e" vowel modification',
  combinations: ['te', 'ta', 'ti', 'tu', 'to']
},
{
  id: '42',
  name: 'DE',
  image: require('@/assets/images/de.jpg'),
  audio: require('@/assets/audio/a.mp3'),
  pronunciation: 'de',
  category: 'Basic Consonant',
  rarity: 'Common',
  origin: 'Kapampangan Script',
  type: 'Consonant-Vowel Combination',
  soundDescription: 'Voiced alveolar plosive with "e" vowel',
  description: 'The syllable "DE" in Kulitan script, combining the voiced alveolar plosive consonant /d/ with the vowel /e/.',
  uses: [
    'Beginning of words',
    'Syllable construction',
    'Common in vocabulary',
    'Base for variations'
  ],
  characteristics: [
    'Voiced plosive consonant',
    'Mid front vowel',
    'Alveolar articulation',
    'CV combination'
  ],
  learningTips: 'Pronounce like "den" but just the "de" sound.',
  writingInstructions: 'Form the "da" character and add the "e" vowel modification',
  combinations: ['de', 'da', 'di', 'du', 'do']
},
{
  id: '43',
  name: 'NE',
  image: require('@/assets/images/ne.jpg'),
  audio: require('@/assets/audio/a.mp3'),
  pronunciation: 'ne',
  category: 'Basic Consonant',
  rarity: 'Common',
  origin: 'Kapampangan Script',
  type: 'Consonant-Vowel Combination',
  soundDescription: 'Voiced alveolar nasal with "e" vowel',
  description: 'The syllable "NE" in Kulitan script, combining the voiced alveolar nasal consonant /n/ with the vowel /e/.',
  uses: [
    'Beginning of words',
    'Syllable construction',
    'Common in vocabulary',
    'Base for variations'
  ],
  characteristics: [
    'Voiced nasal consonant',
    'Mid front vowel',
    'Alveolar articulation',
    'CV combination'
  ],
  learningTips: 'Pronounce like "net" but just the "ne" sound.',
  writingInstructions: 'Form the "na" character and add the "e" vowel modification',
  combinations: ['ne', 'na', 'ni', 'nu', 'no']
},
{
  id: '44',
  name: 'LE',
  image: require('@/assets/images/le.jpg'),
  audio: require('@/assets/audio/a.mp3'),
  pronunciation: 'le',
  category: 'Basic Consonant',
  rarity: 'Common',
  origin: 'Kapampangan Script',
  type: 'Consonant-Vowel Combination',
  soundDescription: 'Voiced alveolar lateral approximant with "e" vowel',
  description: 'The syllable "LE" in Kulitan script, combining the voiced alveolar lateral approximant consonant /l/ with the vowel /e/.',
  uses: [
    'Beginning of words',
    'Syllable construction',
    'Common in vocabulary',
    'Base for variations'
  ],
  characteristics: [
    'Voiced lateral consonant',
    'Mid front vowel',
    'Alveolar articulation',
    'CV combination'
  ],
  learningTips: 'Pronounce like "let" but just the "le" sound.',
  writingInstructions: 'Form the "la" character and add the "e" vowel modification',
  combinations: ['le', 'la', 'li', 'lu', 'lo']
},
{
  id: '45',
  name: 'SE',
  image: require('@/assets/images/kt-logo.png'),
  audio: require('@/assets/audio/a.mp3'),
  pronunciation: 'se',
  category: 'Basic Consonant',
  rarity: 'Common',
  origin: 'Kapampangan Script',
  type: 'Consonant-Vowel Combination',
  soundDescription: 'Voiceless alveolar fricative with "e" vowel',
  description: 'The syllable "SE" in Kulitan script, combining the voiceless alveolar fricative consonant /s/ with the vowel /e/.',
  uses: [
    'Beginning of words',
    'Syllable construction',
    'Common in vocabulary',
    'Base for variations'
  ],
  characteristics: [
    'Voiceless fricative consonant',
    'Mid front vowel',
    'Sibilant quality',
    'CV combination'
  ],
  learningTips: 'Pronounce like "set" but just the "se" sound.',
  writingInstructions: 'Form the "sa" character and add the "e" vowel modification',
  combinations: ['se', 'sa', 'si', 'su', 'so']
},
{
  id: '46',
  name: 'ME',
  image: require('@/assets/images/kt-logo.png'),
  audio: require('@/assets/audio/a.mp3'),
  pronunciation: 'me',
  category: 'Basic Consonant',
  rarity: 'Common',
  origin: 'Kapampangan Script',
  type: 'Consonant-Vowel Combination',
  soundDescription: 'Bilabial nasal with "e" vowel',
  description: 'The syllable "ME" in Kulitan script, combining the bilabial nasal consonant /m/ with the vowel /e/.',
  uses: [
    'Beginning of words',
    'Syllable construction',
    'Common in vocabulary',
    'Base for variations'
  ],
  characteristics: [
    'Voiced nasal consonant',
    'Mid front vowel',
    'Bilabial articulation',
    'CV combination'
  ],
  learningTips: 'Pronounce like "met" but just the "me" sound.',
  writingInstructions: 'Form the "ma" character and add the "e" vowel modification',
  combinations: ['me', 'ma', 'mi', 'mu', 'mo']
},
{
  id: '47',
  name: 'PE',
  image: require('@/assets/images/kt-logo.png'),
  audio: require('@/assets/audio/a.mp3'),
  pronunciation: 'pe',
  category: 'Basic Consonant',
  rarity: 'Common',
  origin: 'Kapampangan Script',
  type: 'Consonant-Vowel Combination',
  soundDescription: 'Voiceless bilabial plosive with "e" vowel',
  description: 'The syllable "PE" in Kulitan script, combining the voiceless bilabial plosive consonant /p/ with the vowel /e/.',
  uses: [
    'Beginning of words',
    'Syllable construction',
    'Common in vocabulary',
    'Base for variations'
  ],
  characteristics: [
    'Voiceless plosive consonant',
    'Mid front vowel',
    'Bilabial articulation',
    'CV combination'
  ],
  learningTips: 'Pronounce like "pet" but just the "pe" sound.',
  writingInstructions: 'Form the "pa" character and add the "e" vowel modification',
  combinations: ['pe', 'pa', 'pi', 'pu', 'po']
},
{
  id: '48',
  name: 'BE',
  image: require('@/assets/images/kt-logo.png'),
  audio: require('@/assets/audio/a.mp3'),
  pronunciation: 'be',
  category: 'Basic Consonant',
  rarity: 'Common',
  origin: 'Kapampangan Script',
  type: 'Consonant-Vowel Combination',
  soundDescription: 'Voiced bilabial plosive with "e" vowel',
  description: 'The syllable "BE" in Kulitan script, combining the voiced bilabial plosive consonant /b/ with the vowel /e/.',
  uses: [
    'Beginning of words',
    'Syllable construction',
    'Common in vocabulary',
    'Base for variations'
  ],
  characteristics: [
    'Voiced plosive consonant',
    'Mid front vowel',
    'Bilabial articulation',
    'CV combination'
  ],
  learningTips: 'Pronounce like "bet" but just the "be" sound.',
  writingInstructions: 'Form the "ba" character and add the "e" vowel modification',
  combinations: ['be', 'ba', 'bi', 'bu', 'bo']
},
{
  id: '49',
  name: 'O',
  image: require('@/assets/images/kt-logo.png'),
  audio: require('@/assets/audio/a.mp3'),
  pronunciation: 'o',
  category: 'Pure Vowel',
  rarity: 'Common',
  origin: 'Kapampangan Script',
  type: 'Vowel',
  soundDescription: 'Mid back rounded vowel',
  description: 'The vowel "O" in Kulitan script, representing the mid back rounded vowel /o/.',
  uses: [
    'Standalone vowel',
    'Word formation',
    'Vowel modification',
    'Common in exclamations'
  ],
  characteristics: [
    'Mid back vowel',
    'Rounded lips',
    'Pure vowel sound',
    'Standalone character'
  ],
  learningTips: 'Pronounce like the "o" in "boat" but shorter.',
  writingInstructions: 'Single stroke forming an oval shape',
  combinations: ['o', 'bo', 'ko', 'go', 'mo']
},
{
  id: '50',
  name: 'GO',
  image: require('@/assets/images/kt-logo.png'),
  audio: require('@/assets/audio/a.mp3'),
  pronunciation: 'go',
  category: 'Basic Consonant',
  rarity: 'Common',
  origin: 'Kapampangan Script',
  type: 'Consonant-Vowel Combination',
  soundDescription: 'Voiced velar plosive with "o" vowel',
  description: 'The syllable "GO" in Kulitan script, combining the voiced velar plosive consonant /g/ with the vowel /o/.',
  uses: [
    'Beginning of words',
    'Syllable construction',
    'Action words',
    'Direction indicators'
  ],
  characteristics: [
    'Voiced plosive consonant',
    'Mid back rounded vowel',
    'Velar articulation',
    'CV combination'
  ],
  learningTips: 'Pronounce like "go" in English.',
  writingInstructions: 'Form the "ga" character and add the "o" vowel modification',
  combinations: ['go', 'ga', 'gi', 'gu', 'ge']
},
{
  id: '51',
  name: 'KO',
  image: require('@/assets/images/kt-logo.png'),
  audio: require('@/assets/audio/a.mp3'),
  pronunciation: 'ko',
  category: 'Basic Consonant',
  rarity: 'Very Common',
  origin: 'Kapampangan Script',
  type: 'Consonant-Vowel Combination',
  soundDescription: 'Voiceless velar plosive with "o" vowel',
  description: 'The syllable "KO" in Kulitan script, combining the voiceless velar plosive consonant /k/ with the vowel /o/.',
  uses: [
    'Pronoun usage',
    'Possession indicator',
    'Common in sentences',
    'Personal reference'
  ],
  characteristics: [
    'Voiceless plosive consonant',
    'Mid back rounded vowel',
    'Velar articulation',
    'Frequent in speech'
  ],
  learningTips: 'Pronounce like "core" but just the "ko" sound.',
  writingInstructions: 'Form the "ka" character and add the "o" vowel modification',
  combinations: ['ko', 'ka', 'ki', 'ku', 'ke']
},
{
  id: '52',
  name: 'NGO',
  image: require('@/assets/images/kt-logo.png'),
  audio: require('@/assets/audio/a.mp3'),
  pronunciation: 'ngo',
  category: 'Basic Consonant',
  rarity: 'Common',
  origin: 'Kapampangan Script',
  type: 'Consonant-Vowel Combination',
  soundDescription: 'Voiced velar nasal with "o" vowel',
  description: 'The syllable "NGO" in Kulitan script, combining the voiced velar nasal consonant /ŋ/ with the vowel /o/.',
  uses: [
    'Word formation',
    'Syllable construction',
    'Common in nouns',
    'Linking syllable'
  ],
  characteristics: [
    'Voiced nasal consonant',
    'Mid back rounded vowel',
    'Velar articulation',
    'Nasal airflow'
  ],
  learningTips: 'Pronounce like "sing" + "o" but start with the "ng" sound.',
  writingInstructions: 'Form the "nga" character and add the "o" vowel modification',
  combinations: ['ngo', 'nga', 'ngi', 'ngu', 'nge']
},
{
  id: '53',
  name: 'TO',
  image: require('@/assets/images/kt-logo.png'),
  audio: require('@/assets/audio/a.mp3'),
  pronunciation: 'to',
  category: 'Basic Consonant',
  rarity: 'Very Common',
  origin: 'Kapampangan Script',
  type: 'Consonant-Vowel Combination',
  soundDescription: 'Voiceless alveolar plosive with "o" vowel',
  description: 'The syllable "TO" in Kulitan script, combining the voiceless alveolar plosive consonant /t/ with the vowel /o/.',
  uses: [
    'Preposition usage',
    'Direction marker',
    'Common connector',
    'Sentence structure'
  ],
  characteristics: [
    'Voiceless plosive consonant',
    'Mid back rounded vowel',
    'Alveolar articulation',
    'High frequency usage'
  ],
  learningTips: 'Pronounce like "toe" but shorter.',
  writingInstructions: 'Form the "ta" character and add the "o" vowel modification',
  combinations: ['to', 'ta', 'ti', 'tu', 'te']
},
{
  id: '54',
  name: 'DO',
  image: require('@/assets/images/kt-logo.png'),
  audio: require('@/assets/audio/a.mp3'),
  pronunciation: 'do',
  category: 'Basic Consonant',
  rarity: 'Common',
  origin: 'Kapampangan Script',
  type: 'Consonant-Vowel Combination',
  soundDescription: 'Voiced alveolar plosive with "o" vowel',
  description: 'The syllable "DO" in Kulitan script, combining the voiced alveolar plosive consonant /d/ with the vowel /o/.',
  uses: [
    'Action indicator',
    'Verb formation',
    'Common in commands',
    'Syllable building'
  ],
  characteristics: [
    'Voiced plosive consonant',
    'Mid back rounded vowel',
    'Alveolar articulation',
    'CV combination'
  ],
  learningTips: 'Pronounce like "dough" but shorter.',
  writingInstructions: 'Form the "da" character and add the "o" vowel modification',
  combinations: ['do', 'da', 'di', 'du', 'de']
},
{
  id: '55',
  name: 'NO',
  image: require('@/assets/images/kt-logo.png'),
  audio: require('@/assets/audio/a.mp3'),
  pronunciation: 'no',
  category: 'Basic Consonant',
  rarity: 'Very Common',
  origin: 'Kapampangan Script',
  type: 'Consonant-Vowel Combination',
  soundDescription: 'Voiced alveolar nasal with "o" vowel',
  description: 'The syllable "NO" in Kulitan script, combining the voiced alveolar nasal consonant /n/ with the vowel /o/.',
  uses: [
    'Negation',
    'Common response',
    'Sentence particle',
    'Frequent in speech'
  ],
  characteristics: [
    'Voiced nasal consonant',
    'Mid back rounded vowel',
    'Alveolar articulation',
    'Nasal airflow'
  ],
  learningTips: 'Pronounce like "no" in English.',
  writingInstructions: 'Form the "na" character and add the "o" vowel modification',
  combinations: ['no', 'na', 'ni', 'nu', 'ne']
},
{
  id: '56',
  name: 'LO',
  image: require('@/assets/images/kt-logo.png'),
  audio: require('@/assets/audio/a.mp3'),
  pronunciation: 'lo',
  category: 'Basic Consonant',
  rarity: 'Common',
  origin: 'Kapampangan Script',
  type: 'Consonant-Vowel Combination',
  soundDescription: 'Voiced alveolar lateral with "o" vowel',
  description: 'The syllable "LO" in Kulitan script, combining the voiced alveolar lateral consonant /l/ with the vowel /o/.',
  uses: [
    'Word formation',
    'Syllable construction',
    'Common in nouns',
    'Descriptive words'
  ],
  characteristics: [
    'Voiced lateral consonant',
    'Mid back rounded vowel',
    'Alveolar articulation',
    'Liquid sound'
  ],
  learningTips: 'Pronounce like "low" but shorter.',
  writingInstructions: 'Form the "la" character and add the "o" vowel modification',
  combinations: ['lo', 'la', 'li', 'lu', 'le']
},
{
  id: '57',
  name: 'SO',
  image: require('@/assets/images/kt-logo.png'),
  audio: require('@/assets/audio/a.mp3'),
  pronunciation: 'so',
  category: 'Basic Consonant',
  rarity: 'Common',
  origin: 'Kapampangan Script',
  type: 'Consonant-Vowel Combination',
  soundDescription: 'Voiceless alveolar fricative with "o" vowel',
  description: 'The syllable "SO" in Kulitan script, combining the voiceless alveolar fricative consonant /s/ with the vowel /o/.',
  uses: [
    'Conjunction usage',
    'Connector word',
    'Sentence linking',
    'Common particle'
  ],
  characteristics: [
    'Voiceless fricative consonant',
    'Mid back rounded vowel',
    'Alveolar articulation',
    'Sibilant sound'
  ],
  learningTips: 'Pronounce like "so" in English.',
  writingInstructions: 'Form the "sa" character and add the "o" vowel modification',
  combinations: ['so', 'sa', 'si', 'su', 'se']
},
{
  id: '58',
  name: 'MO',
  image: require('@/assets/images/kt-logo.png'),
  audio: require('@/assets/audio/a.mp3'),
  pronunciation: 'mo',
  category: 'Basic Consonant',
  rarity: 'Very Common',
  origin: 'Kapampangan Script',
  type: 'Consonant-Vowel Combination',
  soundDescription: 'Voiced bilabial nasal with "o" vowel',
  description: 'The syllable "MO" in Kulitan script, combining the voiced bilabial nasal consonant /m/ with the vowel /o/.',
  uses: [
    'Possessive marker',
    'Second person reference',
    'Common in sentences',
    'Personal pronoun part'
  ],
  characteristics: [
    'Voiced nasal consonant',
    'Mid back rounded vowel',
    'Bilabial articulation',
    'High frequency'
  ],
  learningTips: 'Pronounce like "mow" but shorter.',
  writingInstructions: 'Form the "ma" character and add the "o" vowel modification',
  combinations: ['mo', 'ma', 'mi', 'mu', 'me']
},
{
  id: '59',
  name: 'PO',
  image: require('@/assets/images/kt-logo.png'),
  audio: require('@/assets/audio/a.mp3'),
  pronunciation: 'po',
  category: 'Basic Consonant',
  rarity: 'Very Common',
  origin: 'Kapampangan Script',
  type: 'Consonant-Vowel Combination',
  soundDescription: 'Voiceless bilabial plosive with "o" vowel',
  description: 'The syllable "PO" in Kulitan script, combining the voiceless bilabial plosive consonant /p/ with the vowel /o/.',
  uses: [
    'Respect marker',
    'Politeness particle',
    'Common in formal speech',
    'Honorific usage'
  ],
  characteristics: [
    'Voiceless plosive consonant',
    'Mid back rounded vowel',
    'Bilabial articulation',
    'Cultural significance'
  ],
  learningTips: 'Pronounce like "paw" but with "o" sound.',
  writingInstructions: 'Form the "pa" character and add the "o" vowel modification',
  combinations: ['po', 'pa', 'pi', 'pu', 'pe']
},
{
  id: '60',
  name: 'BO',
  image: require('@/assets/images/kt-logo.png'),
  audio: require('@/assets/audio/a.mp3'),
  pronunciation: 'bo',
  category: 'Basic Consonant',
  rarity: 'Common',
  origin: 'Kapampangan Script',
  type: 'Consonant-Vowel Combination',
  soundDescription: 'Voiced bilabial plosive with "o" vowel',
  description: 'The syllable "BO" in Kulitan script, combining the voiced bilabial plosive consonant /b/ with the vowel /o/.',
  uses: [
    'Word formation',
    'Syllable construction',
    'Common in vocabulary',
    'Base for variations'
  ],
  characteristics: [
    'Voiced plosive consonant',
    'Mid back rounded vowel',
    'Bilabial articulation',
    'CV combination'
  ],
  learningTips: 'Pronounce like "bow" (as in bow and arrow).',
  writingInstructions: 'Form the "ba" character and add the "o" vowel modification',
  combinations: ['bo', 'ba', 'bi', 'bu', 'be']
},
{
  id: '61',
  name: 'gí/î',
  image: require('@/assets/images/kt-logo.png'),
  audio: require('@/assets/audio/a.mp3'),
  pronunciation: 'gí',
  category: 'Basic Consonant',
  rarity: 'Common',
  origin: 'Kapampangan Script',
  type: 'Consonant-Vowel Combination',
  soundDescription: 'Voiced velar plosive with "i" vowel',
  description: 'The syllable "GÍ" in Kulitan script, combining the voiced velar plosive consonant /g/ with the vowel /i/.',
  uses: [
    'Word formation',
    'Syllable construction',
    'Verb prefixes',
    'Common in action words'
  ],
  characteristics: [
    'Voiced plosive consonant',
    'High front vowel',
    'Velar articulation',
    'CV combination'
  ],
  learningTips: 'Pronounce like "gee" in English.',
  writingInstructions: 'Form the "ga" character and add the "i" vowel modification',
  combinations: ['gí', 'ga', 'go', 'gu', 'ge']
},
{
  id: '62',
  name: 'kí/î',
  image: require('@/assets/images/kt-logo.png'),
  audio: require('@/assets/audio/a.mp3'),
  pronunciation: 'kí',
  category: 'Basic Consonant',
  rarity: 'Common',
  origin: 'Kapampangan Script',
  type: 'Consonant-Vowel Combination',
  soundDescription: 'Voiceless velar plosive with "i" vowel',
  description: 'The syllable "KÍ" in Kulitan script, combining the voiceless velar plosive consonant /k/ with the vowel /i/.',
  uses: [
    'Word formation',
    'Syllable construction',
    'Common in nouns',
    'Question particles'
  ],
  characteristics: [
    'Voiceless plosive consonant',
    'High front vowel',
    'Velar articulation',
    'Sharp sound'
  ],
  learningTips: 'Pronounce like "key" in English.',
  writingInstructions: 'Form the "ka" character and add the "i" vowel modification',
  combinations: ['kí', 'ka', 'ko', 'ku', 'ke']
},
{
  id: '63',
  name: 'ngí/î',
  image: require('@/assets/images/kt-logo.png'),
  audio: require('@/assets/audio/a.mp3'),
  pronunciation: 'ngí',
  category: 'Basic Consonant',
  rarity: 'Common',
  origin: 'Kapampangan Script',
  type: 'Consonant-Vowel Combination',
  soundDescription: 'Voiced velar nasal with "i" vowel',
  description: 'The syllable "NGÍ" in Kulitan script, combining the voiced velar nasal consonant /ŋ/ with the vowel /i/.',
  uses: [
    'Word formation',
    'Syllable construction',
    'Linking syllable',
    'Common in compound words'
  ],
  characteristics: [
    'Voiced nasal consonant',
    'High front vowel',
    'Velar articulation',
    'Nasal airflow'
  ],
  learningTips: 'Start with "ng" sound from "sing" then add "ee".',
  writingInstructions: 'Form the "nga" character and add the "i" vowel modification',
  combinations: ['ngí', 'nga', 'ngo', 'ngu', 'nge']
},
{
  id: '64',
  name: 'tí/î',
  image: require('@/assets/images/kt-logo.png'),
  audio: require('@/assets/audio/a.mp3'),
  pronunciation: 'tí',
  category: 'Basic Consonant',
  rarity: 'Very Common',
  origin: 'Kapampangan Script',
  type: 'Consonant-Vowel Combination',
  soundDescription: 'Voiceless alveolar plosive with "i" vowel',
  description: 'The syllable "TÍ" in Kulitan script, combining the voiceless alveolar plosive consonant /t/ with the vowel /i/.',
  uses: [
    'Article usage',
    'Definite marker',
    'Very common particle',
    'Sentence structure'
  ],
  characteristics: [
    'Voiceless plosive consonant',
    'High front vowel',
    'Alveolar articulation',
    'Extremely frequent'
  ],
  learningTips: 'Pronounce like "tea" in English.',
  writingInstructions: 'Form the "ta" character and add the "i" vowel modification',
  combinations: ['tí', 'ta', 'to', 'tu', 'te']
},
{
  id: '65',
  name: 'dí/î',
  image: require('@/assets/images/kt-logo.png'),
  audio: require('@/assets/audio/a.mp3'),
  pronunciation: 'dí',
  category: 'Basic Consonant',
  rarity: 'Common',
  origin: 'Kapampangan Script',
  type: 'Consonant-Vowel Combination',
  soundDescription: 'Voiced alveolar plosive with "i" vowel',
  description: 'The syllable "DÍ" in Kulitan script, combining the voiced alveolar plosive consonant /d/ with the vowel /i/.',
  uses: [
    'Negation marker',
    'Common prefix',
    'Word formation',
    'Grammatical particle'
  ],
  characteristics: [
    'Voiced plosive consonant',
    'High front vowel',
    'Alveolar articulation',
    'Functional usage'
  ],
  learningTips: 'Pronounce like "dee" in English.',
  writingInstructions: 'Form the "da" character and add the "i" vowel modification',
  combinations: ['dí', 'da', 'do', 'du', 'de']
},
{
  id: '66',
  name: 'ní/î',
  image: require('@/assets/images/kt-logo.png'),
  audio: require('@/assets/audio/a.mp3'),
  pronunciation: 'ní',
  category: 'Basic Consonant',
  rarity: 'Very Common',
  origin: 'Kapampangan Script',
  type: 'Consonant-Vowel Combination',
  soundDescription: 'Voiced alveolar nasal with "i" vowel',
  description: 'The syllable "NÍ" in Kulitan script, combining the voiced alveolar nasal consonant /n/ with the vowel /i/.',
  uses: [
    'Possessive marker',
    'Genitive particle',
    'Very common in sentences',
    'Grammatical connector'
  ],
  characteristics: [
    'Voiced nasal consonant',
    'High front vowel',
    'Alveolar articulation',
    'High frequency usage'
  ],
  learningTips: 'Pronounce like "knee" in English.',
  writingInstructions: 'Form the "na" character and add the "i" vowel modification',
  combinations: ['ní', 'na', 'no', 'nu', 'ne']
},
{
  id: '67',
  name: 'lí/î',
  image: require('@/assets/images/kt-logo.png'),
  audio: require('@/assets/audio/a.mp3'),
  pronunciation: 'lí',
  category: 'Basic Consonant',
  rarity: 'Common',
  origin: 'Kapampangan Script',
  type: 'Consonant-Vowel Combination',
  soundDescription: 'Voiced alveolar lateral with "i" vowel',
  description: 'The syllable "LÍ" in Kulitan script, combining the voiced alveolar lateral consonant /l/ with the vowel /i/.',
  uses: [
    'Word formation',
    'Syllable construction',
    'Common in descriptive words',
    'Name components'
  ],
  characteristics: [
    'Voiced lateral consonant',
    'High front vowel',
    'Alveolar articulation',
    'Liquid sound'
  ],
  learningTips: 'Pronounce like "lee" in English.',
  writingInstructions: 'Form the "la" character and add the "i" vowel modification',
  combinations: ['lí', 'la', 'lo', 'lu', 'le']
},
{
  id: '68',
  name: 'sí/î',
  image: require('@/assets/images/kt-logo.png'),
  audio: require('@/assets/audio/a.mp3'),
  pronunciation: 'sí',
  category: 'Basic Consonant',
  rarity: 'Very Common',
  origin: 'Kapampangan Script',
  type: 'Consonant-Vowel Combination',
  soundDescription: 'Voiceless alveolar fricative with "i" vowel',
  description: 'The syllable "SÍ" in Kulitan script, combining the voiceless alveolar fricative consonant /s/ with the vowel /i/.',
  uses: [
    'Personal marker',
    'Name prefix',
    'Very common particle',
    'Subject marker'
  ],
  characteristics: [
    'Voiceless fricative consonant',
    'High front vowel',
    'Alveolar articulation',
    'Extremely frequent'
  ],
  learningTips: 'Pronounce like "see" in English.',
  writingInstructions: 'Form the "sa" character and add the "i" vowel modification',
  combinations: ['sí', 'sa', 'so', 'su', 'se']
},
{
  id: '69',
  name: 'mí/î',
  image: require('@/assets/images/kt-logo.png'),
  audio: require('@/assets/audio/a.mp3'),
  pronunciation: 'mí',
  category: 'Basic Consonant',
  rarity: 'Common',
  origin: 'Kapampangan Script',
  type: 'Consonant-Vowel Combination',
  soundDescription: 'Voiced bilabial nasal with "i" vowel',
  description: 'The syllable "MÍ" in Kulitan script, combining the voiced bilabial nasal consonant /m/ with the vowel /i/.',
  uses: [
    'Word formation',
    'Personal reference',
    'Common in names',
    'Syllable construction'
  ],
  characteristics: [
    'Voiced nasal consonant',
    'High front vowel',
    'Bilabial articulation',
    'Nasal airflow'
  ],
  learningTips: 'Pronounce like "me" in English.',
  writingInstructions: 'Form the "ma" character and add the "i" vowel modification',
  combinations: ['mí', 'ma', 'mo', 'mu', 'me']
},
{
  id: '70',
  name: 'pí/î',
  image: require('@/assets/images/kt-logo.png'),
  audio: require('@/assets/audio/a.mp3'),
  pronunciation: 'pí',
  category: 'Basic Consonant',
  rarity: 'Common',
  origin: 'Kapampangan Script',
  type: 'Consonant-Vowel Combination',
  soundDescription: 'Voiceless bilabial plosive with "i" vowel',
  description: 'The syllable "PÍ" in Kulitan script, combining the voiceless bilabial plosive consonant /p/ with the vowel /i/.',
  uses: [
    'Word formation',
    'Action prefixes',
    'Common in verbs',
    'Syllable building'
  ],
  characteristics: [
    'Voiceless plosive consonant',
    'High front vowel',
    'Bilabial articulation',
    'Sharp sound'
  ],
  learningTips: 'Pronounce like "pea" in English.',
  writingInstructions: 'Form the "pa" character and add the "i" vowel modification',
  combinations: ['pí', 'pa', 'po', 'pu', 'pe']
},
{
  id: '71',
  name: 'bí/î',
  image: require('@/assets/images/kt-logo.png'),
  audio: require('@/assets/audio/a.mp3'),
  pronunciation: 'bí',
  category: 'Basic Consonant',
  rarity: 'Common',
  origin: 'Kapampangan Script',
  type: 'Consonant-Vowel Combination',
  soundDescription: 'Voiced bilabial plosive with "i" vowel',
  description: 'The syllable "BÍ" in Kulitan script, combining the voiced bilabial plosive consonant /b/ with the vowel /i/.',
  uses: [
    'Word formation',
    'Syllable construction',
    'Common in vocabulary',
    'Action indicators'
  ],
  characteristics: [
    'Voiced plosive consonant',
    'High front vowel',
    'Bilabial articulation',
    'CV combination'
  ],
  learningTips: 'Pronounce like "bee" in English.',
  writingInstructions: 'Form the "ba" character and add the "i" vowel modification',
  combinations: ['bí', 'ba', 'bo', 'bu', 'be']
},
{
  id: '72',
  name: 'gú/û',
  image: require('@/assets/images/kt-logo.png'),
  audio: require('@/assets/audio/a.mp3'),
  pronunciation: 'gú',
  category: 'Basic Consonant',
  rarity: 'Common',
  origin: 'Kapampangan Script',
  type: 'Consonant-Vowel Combination',
  soundDescription: 'Voiced velar plosive with "u" vowel',
  description: 'The syllable "GÚ" in Kulitan script, combining the voiced velar plosive consonant /g/ with the vowel /u/.',
  uses: [
    'Word formation',
    'Syllable construction',
    'Common in vocabulary',
    'Root formation'
  ],
  characteristics: [
    'Voiced plosive consonant',
    'High back vowel',
    'Velar articulation',
    'CV combination'
  ],
  learningTips: 'Pronounce like "goo" in English.',
  writingInstructions: 'Form the "ga" character and add the "u" vowel modification',
  combinations: ['gú', 'ga', 'gi', 'go', 'ge']
},
{
  id: '73',
  name: 'kú/û',
  image: require('@/assets/images/kt-logo.png'),
  audio: require('@/assets/audio/a.mp3'),
  pronunciation: 'kú',
  category: 'Basic Consonant',
  rarity: 'Common',
  origin: 'Kapampangan Script',
  type: 'Consonant-Vowel Combination',
  soundDescription: 'Voiceless velar plosive with "u" vowel',
  description: 'The syllable "KÚ" in Kulitan script, combining the voiceless velar plosive consonant /k/ with the vowel /u/.',
  uses: [
    'Word formation',
    'Syllable construction',
    'Common in vocabulary',
    'Grammatical markers'
  ],
  characteristics: [
    'Voiceless plosive consonant',
    'High back vowel',
    'Velar articulation',
    'CV combination'
  ],
  learningTips: 'Pronounce like "coo" in English.',
  writingInstructions: 'Form the "ka" character and add the "u" vowel modification',
  combinations: ['kú', 'ka', 'ki', 'ko', 'ke']
},

{
  id: '74',
  name: 'ngú/û',
  image: require('@/assets/images/kt-logo.png'),
  audio: require('@/assets/audio/a.mp3'),
  pronunciation: 'ngú',
  category: 'Basic Consonant',
  rarity: 'Common',
  origin: 'Kapampangan Script',
  type: 'Consonant-Vowel Combination',
  soundDescription: 'Voiced velar nasal with "u" vowel',
  description: 'The syllable "NGÚ" in Kulitan script, combining the voiced velar nasal consonant /ŋ/ with the vowel /u/.',
  uses: [
    'Word formation',
    'Syllable construction',
    'Common in vocabulary',
    'Nasal indicators'
  ],
  characteristics: [
    'Voiced nasal consonant',
    'High back vowel',
    'Velar articulation',
    'CV combination'
  ],
  learningTips: 'Pronounce like "ng" in "sing" + "oo".',
  writingInstructions: 'Form the "nga" character and add the "u" vowel modification',
  combinations: ['ngú', 'nga', 'ngi', 'ngo', 'nge']
},

{
  id: '75',
  name: 'tú/û',
  image: require('@/assets/images/kt-logo.png'),
  audio: require('@/assets/audio/a.mp3'),
  pronunciation: 'tú',
  category: 'Basic Consonant',
  rarity: 'Common',
  origin: 'Kapampangan Script',
  type: 'Consonant-Vowel Combination',
  soundDescription: 'Voiceless alveolar plosive with "u" vowel',
  description: 'The syllable "TÚ" in Kulitan script, combining the voiceless alveolar plosive consonant /t/ with the vowel /u/.',
  uses: [
    'Word formation',
    'Syllable construction',
    'Common in vocabulary',
    'Pronoun formation'
  ],
  characteristics: [
    'Voiceless plosive consonant',
    'High back vowel',
    'Alveolar articulation',
    'CV combination'
  ],
  learningTips: 'Pronounce like "too" in English.',
  writingInstructions: 'Form the "ta" character and add the "u" vowel modification',
  combinations: ['tú', 'ta', 'ti', 'to', 'te']
},

{
  id: '76',
  name: 'dú/û',
  image: require('@/assets/images/kt-logo.png'),
  audio: require('@/assets/audio/a.mp3'),
  pronunciation: 'dú',
  category: 'Basic Consonant',
  rarity: 'Common',
  origin: 'Kapampangan Script',
  type: 'Consonant-Vowel Combination',
  soundDescription: 'Voiced alveolar plosive with "u" vowel',
  description: 'The syllable "DÚ" in Kulitan script, combining the voiced alveolar plosive consonant /d/ with the vowel /u/.',
  uses: [
    'Word formation',
    'Syllable construction',
    'Common in vocabulary',
    'Direction indicators'
  ],
  characteristics: [
    'Voiced plosive consonant',
    'High back vowel',
    'Alveolar articulation',
    'CV combination'
  ],
  learningTips: 'Pronounce like "doo" in English.',
  writingInstructions: 'Form the "da" character and add the "u" vowel modification',
  combinations: ['dú', 'da', 'di', 'do', 'de']
},

{
  id: '77',
  name: 'nú/û',
  image: require('@/assets/images/kt-logo.png'),
  audio: require('@/assets/audio/a.mp3'),
  pronunciation: 'nú',
  category: 'Basic Consonant',
  rarity: 'Common',
  origin: 'Kapampangan Script',
  type: 'Consonant-Vowel Combination',
  soundDescription: 'Voiced alveolar nasal with "u" vowel',
  description: 'The syllable "NÚ" in Kulitan script, combining the voiced alveolar nasal consonant /n/ with the vowel /u/.',
  uses: [
    'Word formation',
    'Syllable construction',
    'Common in vocabulary',
    'Grammatical particles'
  ],
  characteristics: [
    'Voiced nasal consonant',
    'High back vowel',
    'Alveolar articulation',
    'CV combination'
  ],
  learningTips: 'Pronounce like "noo" in English.',
  writingInstructions: 'Form the "na" character and add the "u" vowel modification',
  combinations: ['nú', 'na', 'ni', 'no', 'ne']
},

{
  id: '78',
  name: 'lú/û',
  image: require('@/assets/images/kt-logo.png'),
  audio: require('@/assets/audio/a.mp3'),
  pronunciation: 'lú',
  category: 'Basic Consonant',
  rarity: 'Common',
  origin: 'Kapampangan Script',
  type: 'Consonant-Vowel Combination',
  soundDescription: 'Voiced alveolar lateral with "u" vowel',
  description: 'The syllable "LÚ" in Kulitan script, combining the voiced alveolar lateral consonant /l/ with the vowel /u/.',
  uses: [
    'Word formation',
    'Syllable construction',
    'Common in vocabulary',
    'Location indicators'
  ],
  characteristics: [
    'Voiced lateral consonant',
    'High back vowel',
    'Alveolar articulation',
    'CV combination'
  ],
  learningTips: 'Pronounce like "loo" in English.',
  writingInstructions: 'Form the "la" character and add the "u" vowel modification',
  combinations: ['lú', 'la', 'li', 'lo', 'le']
},
{
  id: '79',
  name: 'sú/û',
  image: require('@/assets/images/kt-logo.png'),
  audio: require('@/assets/audio/a.mp3'),
  pronunciation: 'sú',
  category: 'Basic Consonant',
  rarity: 'Common',
  origin: 'Kapampangan Script',
  type: 'Consonant-Vowel Combination',
  soundDescription: 'Voiceless alveolar fricative with "u" vowel',
  description: 'The syllable "SÚ" in Kulitan script, combining the voiceless alveolar fricative consonant /s/ with the vowel /u/.',
  uses: [
    'Word formation',
    'Syllable construction',
    'Common in vocabulary',
    'Possessive markers'
  ],
  characteristics: [
    'Voiceless fricative consonant',
    'High back vowel',
    'Alveolar articulation',
    'CV combination'
  ],
  learningTips: 'Pronounce like "sue" in English.',
  writingInstructions: 'Form the "sa" character and add the "u" vowel modification',
  combinations: ['sú', 'sa', 'si', 'so', 'se']
},
{
  id: '80',
  name: 'mú/û',
  image: require('@/assets/images/kt-logo.png'),
  audio: require('@/assets/audio/a.mp3'),
  pronunciation: 'mú',
  category: 'Basic Consonant',
  rarity: 'Common',
  origin: 'Kapampangan Script',
  type: 'Consonant-Vowel Combination',
  soundDescription: 'Voiced bilabial nasal with "u" vowel',
  description: 'The syllable "MÚ" in Kulitan script, combining the voiced bilabial nasal consonant /m/ with the vowel /u/.',
  uses: [
    'Word formation',
    'Syllable construction',
    'Common in vocabulary',
    'Possessive pronouns'
  ],
  characteristics: [
    'Voiced nasal consonant',
    'High back vowel',
    'Bilabial articulation',
    'CV combination'
  ],
  learningTips: 'Pronounce like "moo" in English.',
  writingInstructions: 'Form the "ma" character and add the "u" vowel modification',
  combinations: ['mú', 'ma', 'mi', 'mo', 'me']
},
{
  id: '81',
  name: 'pú/û',
  image: require('@/assets/images/kt-logo.png'),
  audio: require('@/assets/audio/a.mp3'),
  pronunciation: 'pú',
  category: 'Basic Consonant',
  rarity: 'Common',
  origin: 'Kapampangan Script',
  type: 'Consonant-Vowel Combination',
  soundDescription: 'Voiceless bilabial plosive with "u" vowel',
  description: 'The syllable "PÚ" in Kulitan script, combining the voiceless bilabial plosive consonant /p/ with the vowel /u/.',
  uses: [
    'Word formation',
    'Syllable construction',
    'Common in vocabulary',
    'Direction markers'
  ],
  characteristics: [
    'Voiceless plosive consonant',
    'High back vowel',
    'Bilabial articulation',
    'CV combination'
  ],
  learningTips: 'Pronounce like "poo" in English.',
  writingInstructions: 'Form the "pa" character and add the "u" vowel modification',
  combinations: ['pú', 'pa', 'pi', 'po', 'pe']
},
{
  id: '82',
  name: 'bú/û',
  image: require('@/assets/images/kt-logo.png'),
  audio: require('@/assets/audio/a.mp3'),
  pronunciation: 'bú',
  category: 'Basic Consonant',
  rarity: 'Common',
  origin: 'Kapampangan Script',
  type: 'Consonant-Vowel Combination',
  soundDescription: 'Voiced bilabial plosive with "u" vowel',
  description: 'The syllable "BÚ" in Kulitan script, combining the voiced bilabial plosive consonant /b/ with the vowel /u/.',
  uses: [
    'Word formation',
    'Syllable construction',
    'Common in vocabulary',
    'Object indicators'
  ],
  characteristics: [
    'Voiced plosive consonant',
    'High back vowel',
    'Bilabial articulation',
    'CV combination'
  ],
  learningTips: 'Pronounce like "boo" in English.',
  writingInstructions: 'Form the "ba" character and add the "u" vowel modification',
  combinations: ['bú', 'ba', 'bi', 'bo', 'be']
},
{
  id: '83',
  name: 'GANG',
  image: require('@/assets/images/kt-logo.png'),
  audio: require('@/assets/audio/a.mp3'),
  pronunciation: 'gang',
  category: 'Complex Consonant',
  rarity: 'Common',
  origin: 'Kapampangan Script',
  type: 'Consonant Cluster',
  soundDescription: 'Voiced velar plosive with nasal ending',
  description: 'The syllable "GANG" in Kulitan script, combining the voiced velar plosive /g/ with the nasal cluster /aŋ/.',
  uses: [
    'Word formation',
    'Complex syllable construction',
    'Common in vocabulary',
    'Plural markers'
  ],
  characteristics: [
    'Voiced plosive consonant',
    'Mid central vowel',
    'Nasal cluster ending',
    'CVC combination'
  ],
  learningTips: 'Pronounce like "gang" in English.',
  writingInstructions: 'Form the "ga" character and add the "ng" final consonant marker',
  combinations: ['gang', 'ga', 'gi', 'go', 'gu']
},

{
  id: '84',
  name: 'KANK',
  image: require('@/assets/images/kt-logo.png'),
  audio: require('@/assets/audio/a.mp3'),
  pronunciation: 'kank',
  category: 'Complex Consonant',
  rarity: 'Common',
  origin: 'Kapampangan Script',
  type: 'Consonant Cluster',
  soundDescription: 'Voiceless velar plosive with nasal ending',
  description: 'The syllable "KANG" in Kulitan script, combining the voiceless velar plosive /k/ with the nasal cluster /aŋ/.',
  uses: [
    'Word formation',
    'Complex syllable construction',
    'Common in vocabulary',
    'Grammatical particles'
  ],
  characteristics: [
    'Voiceless plosive consonant',
    'Mid central vowel',
    'Nasal cluster ending',
    'CVC combination'
  ],
  learningTips: 'Pronounce like "kang" (similar to "clung" without the "l").',
  writingInstructions: 'Form the "ka" character and add the "ng" final consonant marker',
  combinations: ['kang', 'ka', 'ki', 'ko', 'ku']
},
{
  id: '85',
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
  id: '86',
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
},
{
  id: '87',
  name: 'DANG',
  image: require('@/assets/images/kt-logo.png'),
  audio: require('@/assets/audio/a.mp3'),
  pronunciation: 'dang',
  category: 'Complex Consonant',
  rarity: 'Common',
  origin: 'Kapampangan Script',
  type: 'Consonant Cluster',
  soundDescription: 'Voiced alveolar plosive with nasal ending',
  description: 'The syllable "DANG" in Kulitan script, combining the voiced alveolar plosive /d/ with the nasal cluster /aŋ/.',
  uses: [
    'Word formation',
    'Complex syllable construction',
    'Common in vocabulary',
    'Exclamations'
  ],
  characteristics: [
    'Voiced plosive consonant',
    'Mid central vowel',
    'Nasal cluster ending',
    'CVC combination'
  ],
  learningTips: 'Soft "d" sound followed by nasal "ang".',
  writingInstructions: 'Form the "da" character and add the "ng" final consonant marker',
  combinations: ['dang', 'da', 'di', 'do', 'du']
},
{
  id: '88',
  name: 'NANG',
  image: require('@/assets/images/kt-logo.png'),
  audio: require('@/assets/audio/a.mp3'),
  pronunciation: 'nang',
  category: 'Complex Consonant',
  rarity: 'Very Common',
  origin: 'Kapampangan Script',
  type: 'Consonant Cluster',
  soundDescription: 'Voiced alveolar nasal with nasal ending',
  description: 'The syllable "NANG" in Kulitan script, combining the voiced alveolar nasal /n/ with the nasal cluster /aŋ/.',
  uses: [
    'Word formation',
    'Grammar particles',
    'Very common in sentences',
    'Temporal and causal markers'
  ],
  characteristics: [
    'Voiced nasal consonant',
    'Mid central vowel',
    'Nasal cluster ending',
    'CVC combination'
  ],
  learningTips: 'Double nasal sound - "n" + "ang".',
  writingInstructions: 'Form the "na" character and add the "ng" final consonant marker',
  combinations: ['nang', 'na', 'ni', 'no', 'nu']
},
{
  id: '89',
  name: 'LANG',
  image: require('@/assets/images/kt-logo.png'),
  audio: require('@/assets/audio/a.mp3'),
  pronunciation: 'lang',
  category: 'Complex Consonant',
  rarity: 'Very Common',
  origin: 'Kapampangan Script',
  type: 'Consonant Cluster',
  soundDescription: 'Voiced lateral approximant with nasal ending',
  description: 'The syllable "LANG" in Kulitan script, combining the voiced lateral approximant /l/ with the nasal cluster /aŋ/.',
  uses: [
    'Word formation',
    'Grammar particles',
    'Limiting expressions',
    'Common adverbs'
  ],
  characteristics: [
    'Voiced lateral consonant',
    'Mid central vowel',
    'Nasal cluster ending',
    'CVC combination'
  ],
  learningTips: 'Liquid "l" sound followed by nasal "ang".',
  writingInstructions: 'Form the "la" character and add the "ng" final consonant marker',
  combinations: ['lang', 'la', 'li', 'lo', 'lu']
},
{
  id: '90',
  name: 'SANG',
  image: require('@/assets/images/kt-logo.png'),
  audio: require('@/assets/audio/a.mp3'),
  pronunciation: 'sang',
  category: 'Complex Consonant',
  rarity: 'Common',
  origin: 'Kapampangan Script',
  type: 'Consonant Cluster',
  soundDescription: 'Voiceless alveolar fricative with nasal ending',
  description: 'The syllable "SANG" in Kulitan script, combining the voiceless alveolar fricative /s/ with the nasal cluster /aŋ/.',
  uses: [
    'Word formation',
    'Articles and determiners',
    'Numerical expressions',
    'Common prefixes'
  ],
  characteristics: [
    'Voiceless fricative consonant',
    'Mid central vowel',
    'Nasal cluster ending',
    'CVC combination'
  ],
  learningTips: 'Sharp "s" sound followed by nasal "ang".',
  writingInstructions: 'Form the "sa" character and add the "ng" final consonant marker',
  combinations: ['sang', 'sa', 'si', 'so', 'su']
},
{
  id: '91',
  name: 'MANG',
  image: require('@/assets/images/kt-logo.png'),
  audio: require('@/assets/audio/a.mp3'),
  pronunciation: 'mang',
  category: 'Complex Consonant',
  rarity: 'Common',
  origin: 'Kapampangan Script',
  type: 'Consonant Cluster',
  soundDescription: 'Voiced bilabial nasal with nasal ending',
  description: 'The syllable "MANG" in Kulitan script, combining the voiced bilabial nasal /m/ with the nasal cluster /aŋ/.',
  uses: [
    'Word formation',
    'Professional titles',
    'Action prefixes',
    'Honorific expressions'
  ],
  characteristics: [
    'Voiced nasal consonant',
    'Mid central vowel',
    'Nasal cluster ending',
    'CVC combination'
  ],
  learningTips: 'Double nasal sound - "m" + "ang".',
  writingInstructions: 'Form the "ma" character and add the "ng" final consonant marker',
  combinations: ['mang', 'ma', 'mi', 'mo', 'mu']
},
{
  id: '92',
  name: 'PANG',
  image: require('@/assets/images/kt-logo.png'),
  audio: require('@/assets/audio/a.mp3'),
  pronunciation: 'pang',
  category: 'Complex Consonant',
  rarity: 'Common',
  origin: 'Kapampangan Script',
  type: 'Consonant Cluster',
  soundDescription: 'Voiceless bilabial plosive with nasal ending',
  description: 'The syllable "PANG" in Kulitan script, combining the voiceless bilabial plosive /p/ with the nasal cluster /aŋ/.',
  uses: [
    'Word formation',
    'Instrumental prefixes',
    'Purpose markers',
    'Common verb prefixes'
  ],
  characteristics: [
    'Voiceless plosive consonant',
    'Mid central vowel',
    'Nasal cluster ending',
    'CVC combination'
  ],
  learningTips: 'Sharp "p" sound followed by nasal "ang".',
  writingInstructions: 'Form the "pa" character and add the "ng" final consonant marker',
  combinations: ['pang', 'pa', 'pi', 'po', 'pu']
},
{
  id: '93',
  name: 'BANG',
  image: require('@/assets/images/kt-logo.png'),
  audio: require('@/assets/audio/a.mp3'),
  pronunciation: 'bang',
  category: 'Complex Consonant',
  rarity: 'Common',
  origin: 'Kapampangan Script',
  type: 'Consonant Cluster',
  soundDescription: 'Voiced bilabial plosive with nasal ending',
  description: 'The syllable "BANG" in Kulitan script, combining the voiced bilabial plosive /b/ with the nasal cluster /aŋ/.',
  uses: [
    'Word formation',
    'Exclamations',
    'Sound effects',
    'Common syllables in names'
  ],
  characteristics: [
    'Voiced plosive consonant',
    'Mid central vowel',
    'Nasal cluster ending',
    'CVC combination'
  ],
  learningTips: 'Soft "b" sound followed by nasal "ang".',
  writingInstructions: 'Form the "ba" character and add the "ng" final consonant marker',
  combinations: ['bang', 'ba', 'bi', 'bo', 'bu']
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

// Helper function for search with improved matching logic
export const searchCharacters = (query: string): KulitanCharacter[] => {
  if (!query || query.trim() === '') return [];
  
  const lowercaseQuery = query.toLowerCase().trim();
  
  // First, try exact match
  const exactMatches = sampleCharactersData.filter(character => 
    character.name.toLowerCase() === lowercaseQuery ||
    character.pronunciation.toLowerCase() === lowercaseQuery
  );
  
  if (exactMatches.length > 0) {
    return exactMatches;
  }
  
  // Then try starts with match
  const startsWithMatches = sampleCharactersData.filter(character => 
    character.name.toLowerCase().startsWith(lowercaseQuery) ||
    character.pronunciation.toLowerCase().startsWith(lowercaseQuery)
  );
  
  if (startsWithMatches.length > 0) {
    return startsWithMatches;
  }
  
  // Finally, fallback to contains match
  return sampleCharactersData.filter(character => 
    character.name.toLowerCase().includes(lowercaseQuery) ||
    character.pronunciation.toLowerCase().includes(lowercaseQuery) ||
    character.category.toLowerCase().includes(lowercaseQuery) ||
    character.soundDescription.toLowerCase().includes(lowercaseQuery)
  );
};

// Alternative: If you want even more specific matching, you can use this version
export const searchCharactersStrict = (query: string): KulitanCharacter[] => {
  if (!query || query.trim() === '') return [];
  
  const lowercaseQuery = query.toLowerCase().trim();
  
  // Only exact matches for name and pronunciation
  return sampleCharactersData.filter(character => 
    character.name.toLowerCase() === lowercaseQuery ||
    character.pronunciation.toLowerCase() === lowercaseQuery
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