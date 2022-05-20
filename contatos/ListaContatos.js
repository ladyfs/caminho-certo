import React from 'react'
import {View, Text, FlatList, Button, TouchableOpacity} from 'react-native'

const listaContatos = [
  {id: 1,nome: 'Ana', telefone: 31947361694},
  {id: 2,nome: 'Maria', telefone: 31977361694},
  {id: 3,nome: 'Pedro', telefone: 31947391694},
]

export default (props) => {
  const navigation = props.navigation

  return(
    <View>
      <Text>
        Lista de contatos
      </Text>
      <FlatList 
        data={listaContatos} 
        renderItem={({item}) => <TouchableOpacity onPress={() => navigation.navigate('sos', {nome: item.nome, telefone: item.telefone})}> 
            <Text>{item.nome+ ' - ' + item.telefone}</Text> 
          </TouchableOpacity>}
        keyExtractor={item => item.id}
      />
    </View>
  )
}