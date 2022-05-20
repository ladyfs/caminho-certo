import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './home/HomeScreen.js'
import ListaContatos from './contatos/ListaContatos.js'
import Sos from './sos/Sos.js'

const Stack = createNativeStackNavigator()

export default () => {
  // <> fragment code não aceita estilo

const headerStyle ={
  title: 'Contatos de emergência',
  headerTintColor: 'white',
  headerStyle: {
    backgroundColor:'#24CBAF'
  },
  headerTitleStyle:{
    fontWeight: 'bold'
  }
}
  return (
    <NavigationContainer> 
      <Stack.Navigator screenOptions={headerStyle}>
        <Stack.Screen name="home" component={HomeScreen} options={{headerShown: false}} />
         <Stack.Screen name="listaContatos" component={ListaContatos} options={{title: 'Contatos de emergência'}} />
         <Stack.Screen name="sos" component={Sos} options={{title: 'Sos'}} />
         <Stack.Screen name="teste2" component={ListaContatos} options={{title: 'Rastreio'}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
