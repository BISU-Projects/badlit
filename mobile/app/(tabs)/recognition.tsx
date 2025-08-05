import { Platform, StyleSheet, View, TouchableOpacity } from 'react-native';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Collapsible } from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';

export default function TextRecognitionScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#af1400', dark: '#8b0f00' }}
      headerImage={
        <IconSymbol
          size={280}
          color="#ffffff"
          name="camera.fill"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Text Recognition</ThemedText>
        <ThemedText style={styles.description}>
          Use your camera to detect and extract text instantly.
        </ThemedText>
      </ThemedView>

      {/* Camera Section */}
      <ThemedView style={styles.cameraContainer}>
        <View style={styles.cameraPreview}>
          <IconSymbol
            size={64}
            color="#af1400"
            name="camera"
            style={styles.cameraIcon}
          />
          <ThemedText style={styles.cameraText}>Camera Preview</ThemedText>
        </View>

        <TouchableOpacity style={styles.captureButton}>
          <View style={styles.captureInner} />
        </TouchableOpacity>
      </ThemedView>

      {/* Result Section */}
      <ThemedView style={styles.resultsContainer}>
        <View style={styles.resultHeader}>
          <ThemedText type="defaultSemiBold" style={styles.resultTitle}>
            Recognized Text
          </ThemedText>
          <TouchableOpacity style={styles.copyButton}>
            <IconSymbol size={18} name="doc.on.doc" color="#af1400" />
          </TouchableOpacity>
        </View>
        <View style={styles.resultBox}>
          <ThemedText style={styles.resultPlaceholder}>
            Detected text will appear here...
          </ThemedText>
        </View>
      </ThemedView>

      {/* Collapsibles */}
      <Collapsible title="How to Use">
        <ThemedText>1. Point your camera at readable text</ThemedText>
        <ThemedText>2. Tap the capture button</ThemedText>
        <ThemedText>3. Recognized text will display below</ThemedText>
        <ThemedText>4. Tap copy to save it</ThemedText>
      </Collapsible>

      <Collapsible title="Supported Text Types">
        <ThemedText>• Books, documents, signs</ThemedText>
        <ThemedText>• Clean handwritten notes</ThemedText>
        <ThemedText>• Text on digital screens</ThemedText>
      </Collapsible>

      <Collapsible title="Tips for Better Results">
        <ThemedText>• Ensure good lighting</ThemedText>
        <ThemedText>• Hold steady and focus</ThemedText>
        <ThemedText>• Keep text horizontal</ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const ACCENT = '#af1400';

const styles = StyleSheet.create({
  headerImage: {
    position: 'absolute',
    bottom: -80,
    left: -30,
    opacity: 0.95,
  },
  titleContainer: {
    marginBottom: 24,
  },
  description: {
    marginTop: 8,
    fontSize: 16,
    lineHeight: 22,
    color: '#666',
  },
  cameraContainer: {
    marginBottom: 32,
    alignItems: 'center',
  },
  cameraPreview: {
    width: '100%',
    height: 240,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: ACCENT,
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  cameraIcon: {
    opacity: 0.5,
    marginBottom: 8,
  },
  cameraText: {
    fontSize: 16,
    color: '#777',
  },
  captureButton: {
    width: 70,
    height: 70,
    backgroundColor: ACCENT,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  captureInner: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#fff',
  },
  resultsContainer: {
    marginBottom: 32,
  },
  resultHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  resultTitle: {
    fontSize: 18,
    color: ACCENT,
  },
  copyButton: {
    backgroundColor: '#f3f3f3',
    padding: 8,
    borderRadius: 6,
  },
  resultBox: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e3e3e3',
    minHeight: 100,
    justifyContent: 'center',
  },
  resultPlaceholder: {
    fontSize: 14,
    color: '#888',
    fontStyle: 'italic',
  },
});
