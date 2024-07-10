import React from 'react';
import { View, Text, Button } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Screen</Text>
      <Button
        title="Realizar Cadastro"
        onPress={() => navigation.navigate('Cadastro')}
      />
    </View>
  );
}

export default LoginScreen;
