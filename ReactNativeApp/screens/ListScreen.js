import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios';

const ListScreen = ({route}) => {

  const query = "List most important information about provided study";
  const [text, setText] = useState('Loading...');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('https://focusx-api.herokuapp.com/file_query', { query: query });
        setText(response.data.response);
        console.log(response.data.response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>{route.params.journeyInfo.title} main concepts</Text>
      </View>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

export default ListScreen

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
  text: {
    fontSize: 18,
    color: '#000',
    marginTop: 50,
  },
})
