import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
  StatusBar,
  Platform,
} from 'react-native';

const { width, height } = Dimensions.get('window');

// Get status bar height
const getStatusBarHeight = () => {
  if (Platform.OS === 'ios') {
    return 44; // Standard iOS status bar height
  } else {
    return StatusBar.currentHeight || 24; // Android status bar height
  }
};

export default function Recognition() {
  const statusBarHeight = getStatusBarHeight();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" translucent />
      
      {/* Status Bar Spacer */}
      <View style={[styles.statusBarSpacer, { height: statusBarHeight }]} />
      
      {/* Fixed Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Text Recognition</Text>
        <Text style={styles.headerSubtitle}>Capture or upload an image to translate text</Text>
      </View>

      {/* Scrollable Content */}
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Camera Preview Area */}
        <View style={styles.cameraContainer}>
          <View style={styles.cameraPreview}>
            <View style={styles.cameraPlaceholder}>
              <Text style={styles.cameraPlaceholderText}>Camera Preview</Text>
            </View>
          </View>

          {/* Camera Controls */}
          <View style={styles.cameraControls}>
            <TouchableOpacity style={styles.controlButton}>
              <Text style={styles.controlButtonText}>Upload</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.captureButton}>
              <View style={styles.captureButtonInner} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.controlButton}>
              <Text style={styles.controlButtonText}>Switch</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Take Photo</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>Choose from Gallery</Text>
          </TouchableOpacity>
        </View>

        {/* Results Section */}
        <View style={styles.resultsSection}>
          <View style={styles.resultHeader}>
            <Text style={styles.resultTitle}>Translated Text</Text>
            <TouchableOpacity style={styles.copyButton}>
              <Text style={styles.copyButtonText}>Copy</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.resultBox}>
            <Text style={styles.resultPlaceholder}>
              The extracted text will appear here after processing the image...
            </Text>
          </View>

          {/* Result Actions */}
          <View style={styles.resultActions}>
            <TouchableOpacity style={styles.actionBtn}>
              <Text style={styles.actionBtnText}>Translate</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionBtn}>
              <Text style={styles.actionBtnText}>Save</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionBtn}>
              <Text style={styles.actionBtnText}>Share</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  statusBarSpacer: {
    backgroundColor: '#ffffff',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    zIndex: 1000,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingTop: 20,
    paddingBottom: 20,
  },
  cameraContainer: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  cameraPreview: {
    height: height * 0.35,
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#e0e0e0',
  },
  cameraPlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  cameraPlaceholderText: {
    fontSize: 18,
    color: '#999999',
    fontWeight: '500',
  },
  cameraControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  controlButton: {
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    minWidth: 80,
  },
  controlButtonText: {
    fontSize: 14,
    color: '#333333',
    textAlign: 'center',
    fontWeight: '500',
  },
  captureButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#af1400',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#ffffff',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  captureButtonInner: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ffffff',
  },
  actionButtons: {
    paddingHorizontal: 20,
    marginBottom: 30,
    gap: 15,
  },
  primaryButton: {
    backgroundColor: '#af1400',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#af1400',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  primaryButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  secondaryButton: {
    backgroundColor: '#ffffff',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#af1400',
  },
  secondaryButtonText: {
    color: '#af1400',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultsSection: {
    paddingHorizontal: 20,
  },
  resultHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  resultTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  copyButton: {
    backgroundColor: '#f5f5f5',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  copyButtonText: {
    fontSize: 14,
    color: '#333333',
    fontWeight: '500',
  },
  resultBox: {
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 20,
    minHeight: 150,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    marginBottom: 20,
  },
  resultPlaceholder: {
    fontSize: 16,
    color: '#999999',
    lineHeight: 24,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  resultActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 10,
  },
  actionBtn: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#af1400',
  },
  actionBtnText: {
    color: '#af1400',
    fontSize: 14,
    fontWeight: '600',
  },
});