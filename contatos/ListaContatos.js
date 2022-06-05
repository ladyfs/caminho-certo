import React, {useState, useEffect} from  'react'
import {View, Text, FlatList, Button, TouchableOpacity} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

import {Button as ButtonPaper, Dialog, Portal, Provider, TextInput} from 'react-native-paper'

export default (props) => {
  const navigation = props.navigation
  const [modalVisible, setModalVisible] = useState(false)
  const [tipo, setTipo] = useState('')
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [listaContatos, setListaContatos] = useState([])

  useEffect(
    () => {
      loading()
    },
    []
  )

  async function removerContatos() {
    //await AsyncStorage.clear()
    await AsyncStorage.removeItem('@listaContatosSOS')
    setListaContatos([])
  }

  async function addContatos() {
    let jsonValue = await AsyncStorage.getItem('@listaContatosSOS')
    const contatos = jsonValue != null
                              ? JSON.parse(jsonValue)
                              : []
    
    const novoContato = {tipo, nome, telefone}

    contatos.push(novoContato) 

    jsonValue = JSON.stringify(contatos)
    await AsyncStorage.setItem('@listaContatosSOS', jsonValue)
    console.log('Gravando contatos:', jsonValue)

    setListaContatos(contatos)
    setModalVisible(false)
  }

  async function loading() {
    const jsonValue = await AsyncStorage.getItem('@listaContatosSOS')
    const jsObject = jsonValue != null 
                          ? JSON.parse(jsonValue) 
                          : null
    setListaContatos(jsObject)
  }

  return (
    <Provider>
      <View>
        <Text>Listagem de contatos SOS</Text>
        <FlatList
          data={listaContatos}
          renderItem={({item}) => <TouchableOpacity onPress={() => navigation.navigate('sos', {nome: item.nome, telefone: item.telefone})}> 
                                    <Text>{item.tipo + ' - ' +  item.nome + ' - ' + item.telefone}</Text>
                                  </TouchableOpacity>
          }
          keyExtractor={item => item.id}
        />
        <Button 
          title='Add Contato'
          onPress={() => setModalVisible(true)}
        />
        <Button 
          title='Limpar contatos'
          onPress={removerContatos}
        />

        <Portal>
          <Dialog visible={modalVisible} onDismiss={() => setModalVisible(false)}>
            <Dialog.Title>Novo contato</Dialog.Title>
            <Dialog.Content>
              <TextInput 
                label='Tipo'
                value={tipo}
                onChangeText={(text) => setTipo(text)}
                mode='outlined'
              />
              <TextInput 
                label='Nome'
                value={nome}
                onChangeText={(text) => setNome(text)}
                mode='outlined'
              />
              <TextInput 
                label='Telefone'
                value={telefone}
                onChangeText={(text) => setTelefone(text)}
                mode='outlined'
                keyboardType='phone-pad'
              />
            </Dialog.Content>
            <Dialog.Actions>
              <ButtonPaper onPress={() => setModalVisible(false)}>CANCELAR</ButtonPaper>
              <ButtonPaper
                onPress={addContatos}
              >
                SALVAR
              </ButtonPaper>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </Provider>
  )
}