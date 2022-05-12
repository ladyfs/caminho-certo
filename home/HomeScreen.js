import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

import Constants from 'expo-constants'

import Header from './Header'

export default () => {
  return(
    <View style={styles.conteiner }>
    <Header/>
    <View style={styles.botoes }>
      <Button
        title='SOS'
        color='red'
        onPress={()=> alert('Cliquem SOS')}
      />

      <Button
        title='Registro'
        color='#24CBAF'
        onPress={()=> alert('Clique em registro')}
      />

      <Button
        title='Rastreio'
        color='#24CBAF'
        onPress={()=> alert('Clique em rastreio')}
      />
    </View>
   </View>
  )
}

const styles = StyleSheet.create({
  conteiner: {
    flex:1,
    // string, tem que usar aspas mesmo sendo hexa e porcentagem
    //backgroundColor: 'purple',
    //adaptar ao tamanho da tela do celular
    marginTop: Constants.statusBarHeight
  },
  botoes: {
    justifyContent: 'space-evenly',
    flex:1,
    padding: 20
  }
})





















