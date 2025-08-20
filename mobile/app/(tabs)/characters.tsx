import React, { useState, useMemo, useCallback } from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
  Dimensions,
  Platform,
  StatusBar as RNStatusBar,
  TextInput,
  Modal,
} from 'react-native';
import { Text, Surface } from 'react-native-paper';
import { Image } from 'expo-image';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import Animated, { FadeIn, Layout } from 'react-native-reanimated';
import { Colors } from '@/constants/Colors';
import { sampleCharactersData, KulitanCharacter, getAllCategories, getAllRarities } from '@/data/characters';

const { width } = Dimensions.get('window');
const itemWidth = (width - 48) / 2;

const getStatusBarHeight = () => {
  if (Platform.OS === 'ios') return 44;
  return RNStatusBar.currentHeight || 24;
};

// Memoized Character Card Component
const CharacterCard = React.memo<{
  item: KulitanCharacter;
  index: number;
  onPress: (character: KulitanCharacter) => void;
}>(({ item, index, onPress }) => {
  const handlePress = useCallback(() => onPress(item), [item, onPress]);

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Common': return Colors.success;
      case 'Very Common': return Colors.success;
      case 'Uncommon': return Colors.warning;
      case 'Rare': return Colors.error;
      default: return Colors.textSecondary;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Basic Vowel': return '#FF6B6B';
      case 'Pure Vowel': return '#FF6B6B';
      case 'Basic Consonant': return '#4ECDC4';
      case 'Complex Consonant': return '#4ECDC4';
      case 'Consonant with I': return '#45B7D1';
      case 'Consonant with U': return '#96CEB4';
      case 'Consonant with E': return '#FFEAA7';
      case 'Consonant with O': return '#DDA0DD';
      case 'Final Consonant': return '#98D8C8';
      default: return Colors.primary;
    }
  };

  const rarityColor = useMemo(() => getRarityColor(item.rarity), [item.rarity]);
  const categoryColor = useMemo(() => getCategoryColor(item.category), [item.category]);

  return (
    <Animated.View
      entering={FadeIn.delay(index * 50)}
      layout={Layout.springify()}
      style={styles.cardContainer}
    >
      <TouchableOpacity onPress={handlePress} activeOpacity={0.8}>
        <Surface style={styles.characterCard} elevation={2}>
          {/* Character Image Display */}
          <View style={styles.characterContainer}>
            <Image 
              source={item.image}
              style={styles.characterImage}
              contentFit="contain"
              transition={200}
              cachePolicy="memory-disk"
              priority="normal"
            />
            <View style={styles.rarityBadge}>
              <Text style={[styles.rarityText, { color: rarityColor }]}>
                {item.rarity}
              </Text>
            </View>
          </View>
          
          <View style={styles.cardContent}>
            <Text variant="titleSmall" style={styles.characterName} numberOfLines={1}>
              {item.name}
            </Text>
            <Text variant="bodySmall" style={styles.pronunciation} numberOfLines={1}>
              /{item.pronunciation}/
            </Text>
            
            <View style={styles.characterInfo}>
              <View style={styles.infoItem}>
                <Text style={styles.infoIcon}>🔤</Text>
                <Text style={styles.infoText} numberOfLines={1}>{item.type}</Text>
              </View>
            </View>
            
            <Text style={[
              styles.categoryText,
              {
                backgroundColor: categoryColor + '20',
                borderColor: categoryColor,
                color: categoryColor
              }
            ]}>
              {item.category}
            </Text>
          </View>
        </Surface>
      </TouchableOpacity>
    </Animated.View>
  );
});

CharacterCard.displayName = 'CharacterCard';

// Dropdown Filter Component
const FilterDropdown = React.memo<{
  label: string;
  value: string | null;
  options: string[];
  onSelect: (value: string | null) => void;
  placeholder: string;
}>(({ label, value, options, onSelect, placeholder }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleSelect = useCallback((option: string | null) => {
    onSelect(option);
    setIsVisible(false);
  }, [onSelect]);

  const displayValue = value || placeholder;

  return (
    <View style={styles.dropdownContainer}>
      <TouchableOpacity
        style={[styles.dropdownButton, value && styles.dropdownButtonSelected]}
        onPress={() => setIsVisible(true)}
      >
        <Text style={[
          styles.dropdownButtonText,
          value && styles.dropdownButtonTextSelected
        ]}>
          {displayValue}
        </Text>
        <Text style={[
          styles.dropdownArrow,
          value && styles.dropdownArrowSelected
        ]}>
          ▼
        </Text>
      </TouchableOpacity>

      <Modal
        visible={isVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setIsVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setIsVisible(false)}
        >
          <View style={styles.dropdownModal}>
            <Text style={styles.dropdownTitle}>{label}</Text>
            
            <TouchableOpacity
              style={[styles.dropdownOption, !value && styles.dropdownOptionSelected]}
              onPress={() => handleSelect(null)}
            >
              <Text style={[
                styles.dropdownOptionText,
                !value && styles.dropdownOptionTextSelected
              ]}>
                All {label}
              </Text>
              {!value && <Text style={styles.checkmark}>✓</Text>}
            </TouchableOpacity>

            {options.map((option) => (
              <TouchableOpacity
                key={option}
                style={[styles.dropdownOption, value === option && styles.dropdownOptionSelected]}
                onPress={() => handleSelect(option)}
              >
                <Text style={[
                  styles.dropdownOptionText,
                  value === option && styles.dropdownOptionTextSelected
                ]}>
                  {option}
                </Text>
                {value === option && <Text style={styles.checkmark}>✓</Text>}
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
});

FilterDropdown.displayName = 'FilterDropdown';

export default function CharactersScreen() {
  const router = useRouter();
  const statusBarHeight = getStatusBarHeight();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRarity, setSelectedRarity] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Memoize static data to prevent re-computation
  const rarityOptions = useMemo(() => getAllRarities(), []);
  const categoryOptions = useMemo(() => getAllCategories(), []);

  const filteredData = useMemo(() => {
    if (!searchQuery && !selectedRarity && !selectedCategory) {
      return sampleCharactersData;
    }
    const lowerQuery = searchQuery.toLowerCase();
    return sampleCharactersData.filter(character => {
      const matchesSearch = character.name.toLowerCase().includes(lowerQuery);
      const matchesRarity = !selectedRarity || character.rarity === selectedRarity;
      const matchesCategory = !selectedCategory || character.category === selectedCategory;
      return matchesSearch && matchesRarity && matchesCategory;
    });
  }, [searchQuery, selectedRarity, selectedCategory]);

  // Memoized callbacks to prevent re-renders
  const handleCharacterPress = useCallback((character: KulitanCharacter) => {
    router.push({
      pathname: '/characters/detail',
      params: { id: character.id }
    });
  }, [router]);

  const handleRarityFilter = useCallback((rarity: string | null) => {
    setSelectedRarity(rarity);
  }, []);

  const handleCategoryFilter = useCallback((category: string | null) => {
    setSelectedCategory(category);
  }, []);

  const renderCharacterCard = useCallback(({ item, index }: { item: KulitanCharacter; index: number }) => (
    <CharacterCard 
      item={item} 
      index={index} 
      onPress={handleCharacterPress} 
    />
  ), [handleCharacterPress]);

  // Memoized key extractor
  const keyExtractor = useCallback((item: KulitanCharacter) => item.id, []);

  // Memoized separator component
  const ItemSeparatorComponent = useCallback(() => <View style={styles.separator} />, []);

  return (
    <>
      <StatusBar style="dark" />
      {Platform.OS === 'android' && (
        <RNStatusBar barStyle="dark-content" translucent={true} />
      )}

      <View style={styles.container}>
        {/* Header Section */}
        <View style={[styles.topSection, { paddingTop: statusBarHeight + 8 }]}>
          <Text style={styles.headerTitle}>Kulitan Characters</Text>
          <Text style={styles.headerSubtitle}>
            Showing {filteredData.length} of {sampleCharactersData.length} characters
          </Text>

          <TextInput
            placeholder="Search characters..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            style={styles.searchInput}
            placeholderTextColor={Colors.textSecondary}
            autoCorrect={false}
            autoCapitalize="none"
          />

          <View style={styles.filtersContainer}>
            <FilterDropdown
              label="Rarities"
              value={selectedRarity}
              options={rarityOptions}
              onSelect={handleRarityFilter}
              placeholder="All Rarities"
            />
            <FilterDropdown
              label="Categories"
              value={selectedCategory}
              options={categoryOptions}
              onSelect={handleCategoryFilter}
              placeholder="All Categories"
            />
          </View>
        </View>

        <FlatList
          data={filteredData}
          renderItem={renderCharacterCard}
          keyExtractor={keyExtractor}
          numColumns={2}
          columnWrapperStyle={filteredData.length > 1 ? styles.row : null}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          ItemSeparatorComponent={ItemSeparatorComponent}
          // Performance optimizations
          removeClippedSubviews={true}
          maxToRenderPerBatch={10}
          windowSize={10}
          initialNumToRender={8}
          updateCellsBatchingPeriod={100}
          getItemLayout={undefined} // Let FlatList calculate automatically for variable heights
          // Disable nested scrolling if not needed
          nestedScrollEnabled={false}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  topSection: {
    backgroundColor: Colors.background,
    paddingHorizontal: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  headerTitle: {
    color: Colors.textPrimary,
    fontWeight: '700',
    fontSize: 22,
    marginBottom: 4,
  },
  headerSubtitle: {
    color: Colors.textSecondary,
    marginBottom: 12,
  },
  searchInput: {
    backgroundColor: Colors.surface,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: Platform.OS === 'ios' ? 10 : 8,
    fontSize: 14,
    color: Colors.textPrimary,
    borderWidth: 1,
    borderColor: Colors.border,
    marginBottom: 12,
  },
  filtersContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  dropdownContainer: {
    flex: 1,
  },
  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.surface,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: Platform.OS === 'ios' ? 10 : 8,
    borderWidth: 1,
    borderColor: Colors.border,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
      },
      android: {
        elevation: 1,
      }
    })
  },
  dropdownButtonSelected: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  dropdownButtonText: {
    fontSize: 14,
    color: Colors.textPrimary,
    flex: 1,
  },
  dropdownButtonTextSelected: {
    color: '#fff',
    fontWeight: '600',
  },
  dropdownArrow: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginLeft: 8,
  },
  dropdownArrowSelected: {
    color: '#fff',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownModal: {
    backgroundColor: Colors.surface,
    borderRadius: 16,
    minWidth: width * 0.75,
    maxHeight: '70%',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 12,
      },
      android: {
        elevation: 8,
      }
    })
  },
  dropdownTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.textPrimary,
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  dropdownOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border + '40',
  },
  dropdownOptionSelected: {
    backgroundColor: Colors.primary + '10',
  },
  dropdownOptionText: {
    fontSize: 16,
    color: Colors.textPrimary,
    flex: 1,
  },
  dropdownOptionTextSelected: {
    color: Colors.primary,
    fontWeight: '600',
  },
  checkmark: {
    fontSize: 16,
    color: Colors.primary,
    fontWeight: '600',
  },
  listContent: {
    paddingBottom: 32,
    paddingHorizontal: 16,
  },
  row: {
    justifyContent: 'space-between',
  },
  separator: {
    height: 16,
  },
  cardContainer: {
    width: itemWidth,
    marginBottom: 16,
  },
  characterCard: {
    backgroundColor: Colors.surface,
    borderRadius: 16,
    overflow: 'hidden',
  },
  characterContainer: {
    position: 'relative',
    height: 140,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  characterImage: {
    marginTop: 40,
    width: 120,
    height: 120,
    borderRadius: 8,
  },
  rarityBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  rarityText: {
    fontSize: 10,
    fontWeight: '600',
  },
  cardContent: {
    padding: 12,
  },
  characterName: {
    color: Colors.textPrimary,
    fontWeight: '600',
    marginBottom: 2,
  },
  pronunciation: {
    color: Colors.textSecondary,
    fontStyle: 'italic',
    marginBottom: 12,
    fontSize: 12,
  },
  characterInfo: {
    marginBottom: 12,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  infoIcon: {
    fontSize: 12,
    marginRight: 6,
    width: 16,
  },
  infoText: {
    color: Colors.textSecondary,
    fontSize: 12,
    flex: 1,
  },
  categoryText: {
    fontSize: 10,
    fontWeight: '600',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
    borderWidth: 1,
    overflow: 'hidden',
  },
});