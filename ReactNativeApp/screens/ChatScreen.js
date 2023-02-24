import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';

const ChatScreen = ({route}) => {
  const [messages, setMessages] = useState([]);
  const [query, setQuery] = useState('');

  const sendQuery = async () => {
    setMessages([...messages, { text: query, sender: 'User' }]);
    try {
      const response = await axios.post('https://focusx-api.herokuapp.com/file_query', { query: query });
      setMessages(prevMessages => [...prevMessages, { text: response.data.response, sender: 'Bot' }]);
      console.log(response.data.response);
    } catch (error) {
      console.error(error);
      setMessages(prevMessages => [...prevMessages, { text: 'Sorry, I am not able to answer that.', sender: 'Bot' }]);
    }
    setQuery('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>{route.params.journeyInfo.title} chat</Text>
      </View>

      <ScrollView style={styles.scroll}>
        {messages.map((message, index) => (
          <View
            key={index}
            style={{
              backgroundColor: message.sender === 'Bot' ? '#eee' : 'blue',
              padding: 8,
              margin: 4,
              borderRadius: 4,
              alignSelf: message.sender === 'Bot' ? 'flex-start' : 'flex-end',
            }}
          >
            <Text style={{ color: message.sender === 'Bot' ? '#000' : '#fff' }}>{message.text}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.send}>
        <TextInput
          style={styles.textInput}
          value={query}
          onChangeText={text => setQuery(text)}
        />
        <TouchableOpacity
          onPress={sendQuery}
          style={styles.button}
        >
          <View style={styles.buttonContainer}>
            <Text style={styles.button}>Send</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatScreen;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 20,
    marginTop: 30,
  },
  send: {
    position: 'absolute',
    bottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    fontSize: 18,
    color: '#000',
    width: '80%',
  },
  buttonContainer: {
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  button: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },

  headerContainer: {
    position: 'absolute',
    top: 10,
    width: '100%',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,

  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    paddingBottom: 10,
  },

  scroll: {
    width: '100%',
    flex: 1,
    marginTop: 50,
    marginBottom: 50,
  },
})