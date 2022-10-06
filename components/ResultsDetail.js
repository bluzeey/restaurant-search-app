import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const ResultsDetail = ({item}) => {
  return (
    <View style={styles.parent}>
      <Image style={styles.image} source={{uri: item.image_url}} 
      accessibilityLabel='restaurant image'/>
      <Text style={styles.name}>{item.name}</Text>
      <Text>{item.rating} Stars, {item.review_count} Reviews</Text>
    </View>
  )
}

export default ResultsDetail

const styles = StyleSheet.create({
    parent:{
        marginLeft:15
    },
    image:{
        width:200,
        height:200,
        borderRadius:4,
        marginBottom:5
    },
    name:{
        fontWeight:'bold',
        fontSize:16
    }
})