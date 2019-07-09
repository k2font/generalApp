import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Appbar from './src/components/Appbar';
import MemoList from './src/components/MemoList';

export default function App() {
  return (
    <View style={styles.container}>

      <Appbar />
      <MemoList />

      <View style={styles.memoAddButton}>
        <Text style={styles.memoAddButtonText}>+</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffdf6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 78,
  },

  memoAddButton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    backgroundColor: '#E31676',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },

  memoAddButtonText: {
    fontSize: 32,
    lineHeight: 34,
    color: '#fff',
  },
});
