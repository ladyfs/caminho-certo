import React from 'react'
import {View, Text, FlatList} from 'react-native'


export default (props) => {
  const navigation = props.navigation
  const route = props.route

  return(
    <View>
      <Text>
        Sos - {route.params.nome + ' - ' + route.params.telefone}
      </Text>
    </View>
  )
}