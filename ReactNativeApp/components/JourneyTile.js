import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import ListScreen from '../screens/ListScreen'
import { useNavigation } from '@react-navigation/native';

const JourneyTile = props => {

  const navigation = useNavigation();
  const title = props.title;
  return (
    <View style={styles.box}> 
         <Text style={styles.title}> {props.title} </Text>

         <View style={styles.buttons}>
        
         <TouchableOpacity
          onPress={() => navigation.navigate('List', {journeyInfo: props})}
          style={styles.button}
        >
          <View style={[styles.buttonContainer, styles.buttonContainerOutline]}>
            <Text style={styles.buttonOutline}>Concepts list</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Summary', {journeyInfo: props})}
          style={styles.button}
        >
          <View style={[styles.buttonContainer, styles.buttonContainerOutline]}>
            <Text style={styles.buttonOutline}>Summary</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Chat', {journeyInfo: props})}
          style={styles.button}
        >
          <View style={[styles.buttonContainer, styles.buttonContainerOutline]}>
            <Text style={styles.buttonOutline}>Chat</Text>
          </View>
        </TouchableOpacity>
        </View>
      </View> 
  )
}

export default JourneyTile



const styles = StyleSheet.create({
  box: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 20,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },

  buttonContainer: {
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: 'blue',
    padding: 5,
    borderRadius: 5,
  },
  buttonContainerOutline: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: 'blue',
  },
  button: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  buttonOutline: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'blue',
  },
});