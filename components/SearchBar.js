import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather'

const SearchBar = ({term,onTermSubmit,onTermChange}) => {
 
  return (
    <View style={styles.background}>
        <Feather name="search" size={30} style={styles.iconStyle}/>
        <TextInput 
        style={styles.input} 
        placeholder='Search'
        value={term}
        onChangeText={onTermChange}
        autoCapitalize="none"
        autoCorrect={false}
        onEndEditing={onTermSubmit}/>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    background:{
        marginTop:10,
        backgroundColor: '#F0EEEE',
        height:50,
        borderRadius:5,
        marginHorizontal:15,
        flexDirection: 'row'
    },
    input:{
        flex:1,
        fontSize:18
    },
    iconStyle:{
       fontSize:35,
       alignSelf:'center',
       marginHorizontal:15
    }
})