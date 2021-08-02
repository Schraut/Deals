import React, { useState } from 'react';
import {
  Button,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const MyStatusBar = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="#61dafb"
        barStyle={statusBarStyle}
        showHideTransition={statusBarTransition}
        hidden={hidden}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ECF0F1',
  },
  textStyle: {
    textAlign: 'center',
    marginBottom: 8,
  },
});

export default MyStatusBar;
