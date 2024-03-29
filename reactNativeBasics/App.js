import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// We are using reaction navigation to navigate
import {NavigationContainer} from '@react-navigation/native'
// We are using createDrawerNavigator
import {createDrawerNavigator} from '@react-navigation/drawer'
import Home from './screens/HomeScreen';
import About from './screens/About';
import ProductDetail from './screens/ProductDetail';
import CustomDrawer from './screens/CustomDrawer';
import ProductForm from './screens/ProductForm';
import EditProductForm from './screens/EditProductForm';

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
        <Screen name='home' component={Home}  />
        <Screen name='about' component={About} />
        <Screen name="details" component={ProductDetail} options={{drawerItemStyle : {height : 0}}} />
        <Screen name='productForm' component={ProductForm}  options={{drawerItemStyle : {height : 0},title : "Add"}}/>
        <Screen name='editProductForm' component={EditProductForm}  options={{drawerItemStyle : {height : 0},title : "Edit"}}/>
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