// HomeScreen.js
import React from 'react';
import { View, Text } from 'react-native';

const HomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text onPress={() => navigation.navigate('Register')}>Register</Text>
  </View>
);

export default HomeScreen;
