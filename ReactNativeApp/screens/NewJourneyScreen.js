import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import { auth, db } from '../firebase';
import { useNavigation } from '@react-navigation/native';
import {doc, setDoc} from 'firebase/firestore';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';


const NewJourneyScreen = () => {
  
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <View style={styles.box}>
        <Image style={styles.image} source={require('../assets/journey-icon.png')} />
        <Text style={styles.pageTitle}>Create a new learning journey</Text>
        <TextInput
          placeholder="Title"
          // value={}
          // onChangeText={}
          style={styles.input}
        />
        
        <TextInput
          placeholder="Your learning materials"
          // value={}
          // onChangeText={}
          multiline={true}
          style={styles.input}
        />
      
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          // onPress={}
          style={styles.button}
        >
          <Text style={styles.button}>Create</Text>
        </TouchableOpacity>
      </View>
      </View>
    </KeyboardAvoidingView>
  )
}

export default NewJourneyScreen

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
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
    margin: 0,
  },
  pageTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',

  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    fontSize: 18,
    color: '#000',

  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonContainerOutline: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: 'blue',
  },
  button: {
    fontWeight: 'bold',
    color: '#fff',
  },
  buttonOutline: {
    fontWeight: 'bold',
    color: 'blue',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
    alignSelf: 'center',
  },
  
})