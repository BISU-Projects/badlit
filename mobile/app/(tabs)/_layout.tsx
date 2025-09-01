import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';

export default function TabLayout() {
  const insets = useSafeAreaInsets();
  const { height: screenHeight } = Dimensions.get('window');
  
  // Calculate dynamic tab bar height based on screen size and safe areas
  const getTabBarHeight = () => {
    const baseHeight = Platform.select({
      ios: 60,
      android: 55,
      default: 50,
    });
    
    // Add bottom safe area for devices with home indicators
    const totalHeight = baseHeight + insets.bottom;
    
    // Ensure minimum height for very small screens
    return Math.max(totalHeight, 65);
  };

  const tabBarHeight = getTabBarHeight();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.textSecondary,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
            backgroundColor: 'white',
            borderTopWidth: 0,
            height: tabBarHeight,
            paddingBottom: insets.bottom > 0 ? insets.bottom : 8,
            paddingTop: 8,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: -2 },
            shadowOpacity: 0.1,
            shadowRadius: 8,
            elevation: 8,
          },
          android: {
            backgroundColor: 'white',
            borderTopWidth: 0,
            height: tabBarHeight,
            paddingBottom: Math.max(insets.bottom, 8),
            paddingTop: 8,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: -2 },
            shadowOpacity: 0.15,
            shadowRadius: 8,
            elevation: 12,
          },
          default: {
            backgroundColor: 'white',
            height: tabBarHeight,
            paddingBottom: Math.max(insets.bottom, 8),
            paddingTop: 8,
          },
        }),
        tabBarItemStyle: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 4,
          borderRadius: 16,
          marginHorizontal: 4,
          minHeight: 40,
        },
        tabBarLabelStyle: {
          fontSize: screenHeight < 700 ? 10 : 11, // Smaller text on small screens
          fontWeight: '600',
          marginTop: 2,
          letterSpacing: 0.5,
        },
        tabBarIconStyle: {
          marginBottom: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons 
              name={focused ? "home" : "home-outline"} 
              size={screenHeight < 700 ? (focused ? 22 : 20) : (focused ? 26 : 24)} 
              color={color}
              style={{
                transform: [{ scale: focused ? 1.05 : 1 }],
                opacity: focused ? 1 : 0.8,
              }}
            />
          ),
          tabBarAccessibilityLabel: 'Home tab',
          tabBarButtonTestID: 'home-tab',
        }}
      />
      
      <Tabs.Screen
        name="recognition"
        options={{
          title: 'Camera',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons 
              name={focused ? "camera" : "camera-outline"} 
              size={screenHeight < 700 ? (focused ? 22 : 20) : (focused ? 26 : 24)} 
              color={color}
              style={{
                transform: [{ scale: focused ? 1.05 : 1 }],
                opacity: focused ? 1 : 0.8,
              }}
            />
          ),
          tabBarAccessibilityLabel: 'Camera recognition tab',
          tabBarButtonTestID: 'camera-tab',
        }}
      />
      
      <Tabs.Screen
        name="characters"
        options={{
          title: 'Characters',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons 
              name={focused ? "format-letter-case" : "format-letter-case-upper"} 
              size={screenHeight < 700 ? (focused ? 22 : 20) : (focused ? 26 : 24)} 
              color={color}
              style={{
                transform: [{ scale: focused ? 1.05 : 1 }],
                opacity: focused ? 1 : 0.8,
              }}
            />
          ),
          tabBarAccessibilityLabel: 'Characters tab',
          tabBarButtonTestID: 'characters-tab',
        }}
      />
    </Tabs>
  );
}