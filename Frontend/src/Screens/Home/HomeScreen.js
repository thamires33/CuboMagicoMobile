import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { WebView } from 'react-native-webview';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
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
      <script>
        document.addEventListener('DOMContentLoaded', function() {
          const widget = new window.VLibras.Widget('https://vlibras.gov.br/app');
          widget.init();
        });
      </script>
    </body>
    </html>
  `;

  return (
    
    <View style={styles.container}>
       <Text style={styles.title}>Teste de WebView Dentro de uma View</Text>
      {/* Background shapes */}
      <View style={styles.backgroundShapes}>
        <View style={styles.shape1} />
        <View style={styles.shape2} />
      </View>

      {/* WebView */}
      <WebView
        originWhitelist={['*']}
        source={{ html: htmlContent }}
        style={styles.webview}
      />

      {/* Content */}
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>PAINEL DE APRENDIZADO</Text>
      <View style={styles.taskContainer}>
        <TouchableOpacity
          style={styles.taskBox}
          onPress={() => navigation.navigate('SplashCoresP')}
        >
          <Text style={styles.taskText}>CORES</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.taskBox}
          onPress={() => navigation.navigate('SplashAnimais')}
        >
          <Text style={styles.taskText}>ANIMAIS</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.taskContainerQ}>
        <TouchableOpacity
          style={styles.taskBoxQ}
          onPress={() => navigation.navigate('Q2')}
        >
          <Text style={styles.taskTextQ}>QUIZES</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.navigationBar}>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="home" size={24} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('ProfileScreen')}
        >
          <Icon name="user" size={24} color="#333" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
