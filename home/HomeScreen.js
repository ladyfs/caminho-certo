import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

import Constants from 'expo-constants'

import Header from './Header'

export default (props) => {
  const navigation = props.navigation

  return(
    <View style={styles.conteiner }>
    <Header/>
    <View style={styles.botoes }>
      <Button
        title='SOS'
        color='red'
        onPress={()=> navigation.navigate('listaContatos')}
      />

      <Button
        title='Registro'
        color='#24CBAF'
        onPress={()=> navigation.navigate('sos')}
      />

      <Button
        title='Rastreio'
        color='#24CBAF'
        onPress={()=> navigation.navigate('rastreio')}
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





















