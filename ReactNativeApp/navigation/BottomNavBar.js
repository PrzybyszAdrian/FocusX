import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CalendarScreen from '../screens/CalendarScreen';
import NewJourneyScreen from '../screens/NewJourneyScreen';
import JourneysScreen from '../screens/JourneysScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomNavBar = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: '#fff',
          height: 60
        }
      }}

    >
        <Tab.Screen name="Home" component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Image
                source={require('../assets/house.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? 'blue' : 'black',
                }} />
            )
          }} />
        <Tab.Screen name="Calendar" component={CalendarScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Image
                source={require('../assets/calendar.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? 'blue' : 'black',
                }} />
            )
          }} />
        <Tab.Screen name="NewJourney" component={NewJourneyScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View style={{
                width: 40,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: focused ? 'white' : 'blue',
                borderRadius: 20,
                borderWidth: focused ? 2 : 0,
                borderColor: 'blue',
              }}>
                <Image
                  source={require('../assets/plus.png')}
                  resizeMode="contain"
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: focused ? 'blue' : 'white',
                  }} />
              </View>
            )
          }} />
        <Tab.Screen name="Journeys" component={JourneysScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Image
                source={require('../assets/journey.png')}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? 'blue' : 'black',
                }} />
            )
          }} />
        <Tab.Screen name="Profile" component={ProfileScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Image
                source={require('../assets/portrait.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? 'blue' : 'black',
                }} />
            )
          }} />
      </Tab.Navigator>
  )
}

export default BottomNavBar

const styles = StyleSheet.create({})