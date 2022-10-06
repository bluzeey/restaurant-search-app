import { FlatList, StyleSheet, Text, View, Image } from 'react-native'
import React, {useEffect,useState} from 'react'
import yelp from '../api/yelp'

const ShowScreen = ({navigation,route}) => {
  const [result,setResult]=useState(null)
  const {id} = route.params

  const getResult= async(id)=>{
    const response=await yelp.get(`/${id}`)
    setResult(response.data)
  }
  
  useEffect(()=>{
    getResult(id)
  },[])

  if(!result){
    return null;
  }

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo)=>photo}
        renderItem={({item})=>{
          return <Image style={styles.Image} source={{uri: item}}/>
        }}
        />
    </View>
  )
}

export default ShowScreen

const styles = StyleSheet.create({
  Image:{
    height:200,
    width:200
  }
})