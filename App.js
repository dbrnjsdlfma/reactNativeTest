/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React , { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';

import { getCollection } from './apis/firebase';

const Stack = createNativeStackNavigator()

export default function App() {
  const [ friends, setFriends ] = useState([])
  useEffect( () => {
    function onResult(querySnapshot) {
      const list = []
      querySnapshot.forEach( doc => {
        list.push({
          ...doc.data() ,
          id : doc.id , 
        })
      })
      setFriends(list)
    }
    function onError(error) {
      console.log(`${error} occured when reading friends`)
    }
    return getCollection('friends', onResult, onError, null, null, null)
  },[])

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' children={(props) => <HomeScreen {...props} friends={friends}/>}/>
        <Stack.Screen name='Detail' children={(props) => <DetailScreen {...props}/>}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({

});

