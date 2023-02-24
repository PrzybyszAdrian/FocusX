import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SummaryScreen = ({route}) => {
  return (
    <View style={styles.container}>
      <Text>{route.params.journeyInfo.title}</Text>
    </View>
  )
}

export default SummaryScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})