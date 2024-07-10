import React from 'react';
import { View, Text, Button } from 'react-native';

const CadastroScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Cadastro Screen</Text>
      <Button
        title="Voltar para Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}

export default CadastroScreen;
