import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.backgroundShapes}>
        <View style={styles.shape1} />
        <View style={styles.shape2} />
      </View>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <View style={styles.inputContainer}>
        <FontAwesome name="user" size={24} color="black" style={styles.icon} />
        <TextInput
          placeholder="Username"
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <FontAwesome name="lock" size={24} color="black" style={styles.icon} />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry={!passwordVisible}
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
          <FontAwesome name={passwordVisible ? "eye-slash" : "eye"} size={24} color="black" style={styles.eyeIcon} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.loginButton}
        onPress={() => navigation.navigate('SplashSaudacao')}>
        <Text style={styles.loginButtonText}>Entrar</Text>
      </TouchableOpacity>
      <Text style={styles.orContinueWith}>Ou continue com:</Text>
      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity>
          <Image source={require('../../assets/login/logo-google.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../../assets/login/logo-apple.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../../assets/login/facebook-logo.png')} style={styles.socialIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
