import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import {signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';




const LoginScreen = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  
  const navigation = useNavigation();

    React.useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          navigation.navigate('Nav');
        }
      });
      return unsubscribe;
    }, []);

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('Logged in with ', user.email);
    })
    .catch((error) => alert(error.message));
  }
  
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <View style={styles.box}>
        <Image style={styles.image} source={require('../assets/robot.png')} />
        <Text style={styles.pageTitle}>Login</Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry={true}
        />
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleLogin}
          style={styles.button}
        >
          <Text style={styles.button}>Login</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.redirect}>Don't have an account? 
      <Text 
      onPress={() => {navigation.navigate('Register');}}
      style={styles.link}
      > Register</Text>
      </Text>
      </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
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

  },
  pageTitle: {
    fontSize: 24,
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
  button: {
    fontWeight: 'bold',
    color: '#fff',
  },

  redirect: {
    paddingTop: 20,
  },
  link: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
    alignSelf: 'center',
  },
  
})