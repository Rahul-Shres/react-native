import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home';
import About from './About';

const { Navigator, Screen } = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="home" component={Home} />
        <Screen name="about" component={About} />
      </Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
