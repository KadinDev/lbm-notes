import {
  View,
  ActivityIndicator
} from 'react-native'

import {StatusBar} from 'expo-status-bar'

import { 
  useFonts,
  Roboto_400Regular, 
  Roboto_700Bold } 
from '@expo-google-fonts/roboto';

import { Routes } from './src/routes'

export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })

  if(!fontsLoaded){
    return <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size={25} color='#FFF'/>
      </View>
  }

  return (
    <>
    <StatusBar 
      style='light' 
      backgroundColor='transparent'
      translucent
    />

    <Routes/>
    </>
  )
}
