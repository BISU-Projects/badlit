import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.textPrimary,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
            backgroundColor: Colors.card,
          },
          default: {
            backgroundColor: Colors.card,
          },
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home-outline" size={28} color={color} />
          ),
        }}
      />
       <Tabs.Screen
        name="recognition"
        options={{
          title: 'Recognition',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="camera-outline" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Characters',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="format-letter-case" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
