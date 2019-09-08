import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

import './config/ReactotronConfig';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
  },
});

export default function App() {
  // console.tron.log('Hello Baiana');

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text>Tesdfte</Text>
      </SafeAreaView>
    </>
  );
}
