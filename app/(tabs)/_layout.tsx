import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, StyleSheet, View, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useColorScheme } from 'react-native';
import { Colors } from '@/constants/Colors';
import { MaterialIcons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { useAuthContext } from '@/contexts/AuthContext';
import { router } from 'expo-router';

import { HapticTab } from '@/components/HapticTab';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof MaterialIcons>['name'];
  color: string;
  size?: number;
}) {
  return <MaterialIcons size={props.size || 24} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { loading, user } = useAuthContext();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={Colors[colorScheme ?? 'light'].tint} />
      </View>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <Tabs
      initialRouteName="vanity-table"
      screenOptions={{
        tabBarActiveTintColor: '#FF6B6B',
        tabBarInactiveTintColor: '#687076',
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 0,
          height: 60,
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
        },
        tabBarItemStyle: {
          paddingVertical: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="vanity-table"
        options={{
          title: '美妆桌',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon 
              name="grid-on"
              color={color}
              size={28}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="scan"
        options={{
          title: '',
          tabBarIcon: ({ color }) => (
            <View style={styles.scanButton}>
              <TabBarIcon 
                name="qr-code-scanner" 
                color="#FFFFFF"
                size={32}
              />
            </View>
          ),
          tabBarButton: (props) => (
            <TouchableOpacity
              style={styles.scanButtonContainer}
              onPress={() => {
                router.push('/(tabs)/scan');
              }}
            >
              {props.children}
            </TouchableOpacity>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: '我的',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon 
              name={focused ? "person" : "person-outline"} 
              color={color}
              size={28}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  scanButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#FF6B6B',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
    shadowColor: '#FF6B6B',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
});
