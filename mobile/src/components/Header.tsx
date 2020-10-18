import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

interface HeaderProperties {
  title: string
  showCancel?: boolean
}

export default function Header({ title, showCancel = true }: HeaderProperties) {
  const navigation = useNavigation()

  function handleNavigateToHomePage() {
    navigation.navigate('OrphanagesMap')
  }

  return (
    <View style={ styles.container }>
      <BorderlessButton  onPress={ navigation.goBack }>
        <Feather name="arrow-left" size={ 24 } color="#15B6D6"/>
      </BorderlessButton>

      { showCancel ? (
        <BorderlessButton  onPress={ handleNavigateToHomePage }>
          <Feather name="x" size={ 24 } color="#FF669D"/>
        </BorderlessButton>
      ) : (
        <View></View>
      ) }

      <Text style={ styles.title }>{ title }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor:  '#F9FAFC',
    borderBottomWidth: 1,
    borderColor: '#DDE3F0',
    paddingTop: 44,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontFamily: 'Nunito_700Bold',
    color: '#8FA7B5',
    fontSize: 16
  }
})
