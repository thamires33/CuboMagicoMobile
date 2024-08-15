import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
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
      <div style="margin-top: 50px; text-align: center;">
        <h1>Oi</h1>
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
      <View style={styles.header}>
        <Text style={styles.headerText}>Online Education</Text>
      </View>

      <View style={{ flex: 1 }}>
        <WebView 
          originWhitelist={['*']}
          source={{ html: htmlContent }}
          style={styles.webview}
        />
      </View>

      <View style={styles.taskContainer}>
        <View style={styles.taskBox}>
          <Text style={styles.taskText}>A</Text>
        </View>
        <View style={styles.taskBox}>
          <Text style={styles.taskText}>B</Text>
        </View>
      </View>

      <View style={styles.resourceContainer}>
        <View style={styles.resourceBox}>
          <Text style={styles.resourceText}>Lorem ipsum</Text>
        </View>
        <View style={styles.resourceBox}>
          <Text style={styles.resourceText}>Lorem ipsum</Text>
        </View>
      </View>

      <View style={styles.navigationBar}>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="home" size={24} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="calendar" size={24} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="bell" size={24} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="user" size={24} color="#333" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
