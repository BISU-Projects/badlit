import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from 'react-native';

const Explore = () => {
  // Sample Kulitan characters with their meanings
  const kulitanCharacters = [
    { character: 'ᜀ', romanization: 'A', meaning: 'Base vowel sound "a"' },
    { character: 'ᜊ', romanization: 'BA', meaning: 'Consonant "b" with inherent "a"' },
    { character: 'ᜃ', romanization: 'KA', meaning: 'Consonant "k" with inherent "a"' },
    { character: 'ᜇ', romanization: 'DA', meaning: 'Consonant "d" with inherent "a"' },
    { character: 'ᜄ', romanization: 'GA', meaning: 'Consonant "g" with inherent "a"' },
    { character: 'ᜑ', romanization: 'HA', meaning: 'Consonant "h" with inherent "a"' },
    { character: 'ᜎ', romanization: 'LA', meaning: 'Consonant "l" with inherent "a"' },
    { character: 'ᜋ', romanization: 'MA', meaning: 'Consonant "m" with inherent "a"' },
  ];

  const categories = [
    { title: 'Basic Characters', count: 17, icon: '📝' },
    { title: 'Vowel Marks', count: 3, icon: '🔤' },
    { title: 'Common Words', count: 25, icon: '💬' },
    { title: 'Practice Phrases', count: 12, icon: '✍️' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#af1400" barStyle="light-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Explore Kulitan</Text>
        <Text style={styles.headerSubtitle}>
          Ancient Kapampangan Script
        </Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        
        {/* About Section */}
        <View style={styles.aboutSection}>
          <Text style={styles.sectionTitle}>About Kulitan</Text>
          <Text style={styles.aboutText}>
            Kulitan is the indigenous writing system of the Kapampangan people of Pampanga, Philippines. 
            This ancient script, also known as Súlat Kapampángan, dates back to at least the 16th century 
            and represents one of the Philippines' rich cultural heritage scripts.
          </Text>
        </View>

        {/* Categories */}
        <View style={styles.categoriesSection}>
          <Text style={styles.sectionTitle}>Learning Categories</Text>
          <View style={styles.categoriesGrid}>
            {categories.map((category, index) => (
              <TouchableOpacity key={index} style={styles.categoryCard}>
                <Text style={styles.categoryIcon}>{category.icon}</Text>
                <Text style={styles.categoryTitle}>{category.title}</Text>
                <Text style={styles.categoryCount}>{category.count} items</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Character Preview */}
        <View style={styles.previewSection}>
          <Text style={styles.sectionTitle}>Character Preview</Text>
          <View style={styles.charactersGrid}>
            {kulitanCharacters.map((item, index) => (
              <TouchableOpacity key={index} style={styles.characterCard}>
                <Text style={styles.kulitanCharacter}>{item.character}</Text>
                <Text style={styles.romanization}>{item.romanization}</Text>
                <Text style={styles.meaning}>{item.meaning}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.actionsSection}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          
          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.actionContent}>
              <Text style={styles.actionIcon}>🎯</Text>
              <View style={styles.actionText}>
                <Text style={styles.actionTitle}>Practice Mode</Text>
                <Text style={styles.actionSubtitle}>Test your knowledge</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.actionContent}>
              <Text style={styles.actionIcon}>📚</Text>
              <View style={styles.actionText}>
                <Text style={styles.actionTitle}>Study Guide</Text>
                <Text style={styles.actionSubtitle}>Learn systematically</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.actionContent}>
              <Text style={styles.actionIcon}>🏆</Text>
              <View style={styles.actionText}>
                <Text style={styles.actionTitle}>Achievements</Text>
                <Text style={styles.actionSubtitle}>Track your progress</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* Footer Space */}
        <View style={styles.footerSpace} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    backgroundColor: '#af1400',
    paddingHorizontal: 20,
    paddingVertical: 24,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
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
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  aboutSection: {
    marginTop: 24,
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 16,
  },
  aboutText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333333',
    textAlign: 'justify',
  },
  categoriesSection: {
    marginBottom: 32,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: '48%',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  categoryIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 4,
  },
  categoryCount: {
    fontSize: 14,
    color: '#af1400',
    fontWeight: '500',
  },
  previewSection: {
    marginBottom: 32,
  },
  charactersGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  characterCard: {
    width: '48%',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  kulitanCharacter: {
    fontSize: 48,
    color: '#af1400',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  romanization: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 4,
  },
  meaning: {
    fontSize: 12,
    color: '#666666',
    textAlign: 'center',
    lineHeight: 16,
  },
  actionsSection: {
    marginBottom: 32,
  },
  actionButton: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  actionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionIcon: {
    fontSize: 32,
    marginRight: 16,
  },
  actionText: {
    flex: 1,
  },
  actionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 2,
  },
  actionSubtitle: {
    fontSize: 14,
    color: '#666666',
  },
  footerSpace: {
    height: 32,
  },
});

export default Explore;