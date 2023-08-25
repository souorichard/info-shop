import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import { Montserrat_400Regular, Montserrat_600SemiBold, Montserrat_700Bold, useFonts } from '@expo-google-fonts/montserrat';
import Header from './src/components/Header';

export default function App() {
  const [ fontLoaded ] = useFonts({
    'MontRegular': Montserrat_400Regular,
    'MontSemiBold': Montserrat_600SemiBold,
    'MontBold': Montserrat_700Bold
  })

  if (!fontLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Header />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020414'
  },
});
