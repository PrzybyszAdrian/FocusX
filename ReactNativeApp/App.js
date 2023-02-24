import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import StartScreen from './screens/StartScreen';
import BottomNavBar from './navigation/BottomNavBar';
import ListScreen from './screens/ListScreen';
import SummaryScreen from './screens/SummaryScreen';
import ChatScreen from './screens/ChatScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='Start'
      >
        <Stack.Screen options={{headerShown: false}} name="Start" component={StartScreen} />
        <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
        <Stack.Screen options={{headerShown: false}} name="Register" component={RegisterScreen} />
        <Stack.Screen options={{headerShown: false}} name="Nav" component={BottomNavBar} />
        <Stack.Screen options={{headerTitle: '', headerTransparent: true}} name="List" component={ListScreen} />
        <Stack.Screen options={{headerTitle: '', headerTransparent: true}} name="Summary" component={SummaryScreen} />
        <Stack.Screen options={{headerTitle: '', headerTransparent: true}} name="Chat" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
