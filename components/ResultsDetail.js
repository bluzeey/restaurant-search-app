import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const ResultsDetail = ({item}) => {
  return (
    <View>
      <Text>{item.name}</Text>
      <Image styles={styles.image} 
      source={{uri: image_url}}
      accessibilityLabel='restaurant image'/>
    </View>
  )
}

export default ResultsDetail

const styles = StyleSheet.create({
    image:{
        width:250,
        height:200,
        borderRadius:4
    }
})