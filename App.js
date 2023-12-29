import * as React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabBar from './components/BottomTabBar';
import Orders from './screens/Orders';
import Cart from './screens/Cart';
import Home from './screens/Home';
import Profile from './screens/Profile';
import ReviewScreen from './screens/Review';
import DeliveryRating from './screens/DeliveryRating';
import RestaurantRating from './screens/RestaurantRating';
import AddAddress  from './screens/addAddress';
import CartItem from './components/CartItem';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const config = {
  headerShown: false,
}

const HomeTab = () => (
  <Tab.Navigator tabBar={props => <BottomTabBar {...props} />} screenOptions={config}>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Cart" component={Cart} />
    <Tab.Screen name="Orders" component={Orders} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Address'>
      <Stack.Screen name="Address" component={AddAddress} options={config}/>
        <Stack.Screen name="HomeTab" component={HomeTab} options={config}/>

        {/* <Stack.Screen name="Rating" component={DeliveryRating} options={config}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;




 
