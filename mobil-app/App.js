import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import AskLocation from './src/components/location';

export default function App() {
  return (
    
      <View style={styles.container}>
        <AskLocation>
          <Text>Welcome to Wimf !</Text>
          <StatusBar style="auto" />
        </AskLocation>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
