import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const HomeScreen = () => {
  const navigation = useNavigation();

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>VLibras</title>
      <script src="https://vlibras.gov.br/app/vlibras-plugin.js"></script>
    </head>
    <body>
      <div vw class="enabled">
        <div vw-access-button class="active"></div>
        <div vw-plugin-wrapper>
          <div class="vw-plugin-top-wrapper"></div>
        </div>
      </div>
      <div style="margin-top: 50px; text-align: center;">
        <h1>Oi</h1>
      </div>
      <script>
        new window.VLibras.Widget('https://vlibras.gov.br/app');
      </script>
    </body>
    </html>
  `;

  return (
    <View style={{ flex: 1 }}>
      <WebView 
        originWhitelist={['*']}
        source={{ html: htmlContent }}
        style={{ flex: 1 }}
      />
      <TouchableOpacity 
        style={styles.logoutButton}
        onPress={() => navigation.navigate('Login')} // Navega de volta para a tela de login
      >
        <Text style={styles.logoutButtonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
