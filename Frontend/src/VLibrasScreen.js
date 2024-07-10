import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function VLibrasScreen() {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'https://www.vlibras.gov.br/' }}
        style={{ marginTop: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
