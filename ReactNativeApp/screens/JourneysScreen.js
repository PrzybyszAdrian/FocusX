import { StyleSheet, Text, View, ScrollView, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import JourneyTile from '../components/JourneyTile'

const JourneysScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Learning Journeys</Text>
      <ScrollView >
      <JourneyTile title="Lithium batteries" />
      <JourneyTile title="Php" />
      <JourneyTile title="React" />
      <JourneyTile title="React Native" />
      <JourneyTile title="Angular" />
      <View style={{height: 100}}></View>
      </ScrollView>
    </View>
  )
}

export default JourneysScreen

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

})