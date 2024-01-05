// RegisterScreen.js
import React from 'react';
import { View, Button } from 'react-native';

const RegisterScreen = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Button title="Go to List" onPress={() => navigation.navigate('List')} />
  </View>
);

export default RegisterScreen;
