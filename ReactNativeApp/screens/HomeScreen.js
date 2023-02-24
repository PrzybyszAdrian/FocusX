import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import {auth, db} from '../firebase'
import { doc, getDoc} from "firebase/firestore";

const HomeScreen = () => {
const [isDataLoaded, setIsDataLoaded] = useState(false);
const [name, setName] = useState("User");
const uid = auth.currentUser.uid;
let journey = true;

const getUserData = async () => {
try {
const docRef = doc(db, "users", uid);
const docSnap = await getDoc(docRef);
if (docSnap.exists()) {
setName(docSnap.data().name);
} else {
console.log("No such document!");
}
setIsDataLoaded(true);
} catch (error) {
console.log("Error getting document:", error);
}
}

useEffect(() => {
getUserData();
}, []);

if (!isDataLoaded) {
// Return a loading indicator or a blank screen while data is being fetched.
return null;
}

const text1 = "Hi " + name + "!\n Let's begin our new learning journey!\nClick on the + button below to get started!"
const text2 = "Hi " + name + "!\n Great to see you again!\n Choose our today's journey and let's get started!"

return (
<View style={styles.container}>
<View style={styles.bubble}>
<Text style={styles.bubbleText}>{journey ? text2 : text1}</Text>
</View>
<Image source={require('../assets/robot3d.png')} style={styles.image}/>
</View>
);
};

export default HomeScreen;

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
alignItems: 'center',
justifyContent: 'center',
},
image: {
resizeMode: 'contain',
height: '60%',
marginBottom: 50,
},
bubble: {
backgroundColor: 'blue',
padding: 15,
width: '50%',
borderRadius: 50,
marginLeft: 'auto',
marginTop: 50,
},
bubbleText: {
color: '#fff',
fontWeight: 'bold',
textAlign: 'center',
},
});