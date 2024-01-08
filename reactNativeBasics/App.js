import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import HomeScreen from './screens/HomeScreen';
import About from './screens/About';
import CustomDrawer from './screens/CustomDrawer';
import ListScreen from './screens/ListScreen';
import RegisterScreen from './screens/RegisterScreen';


const {Navigator,Screen} = createDrawerNavigator()


export default function App() {
  return (
    <NavigationContainer>
      <Navigator drawerContent={(props)=><CustomDrawer  {...props} />} 
      screenOptions={{
        headerStyle : {
          backgroundColor : 'green',
        },
        headerTitleStyle : {
          fontWeight : 'bold',
          color : 'white',
          fontSize :30
        },
        headerTintColor : 'blue'
      }}
      >
        <Screen name='home' component={HomeScreen}  />
        <Screen name='about' component={About} />
        <Screen name='listscreen' component={ListScreen} />
        <Screen name='registerscreen' component={RegisterScreen} />
     
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