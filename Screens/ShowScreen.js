import { FlatList, StyleSheet, Text, View, Image } from 'react-native'
import React, {useEffect} from 'react'

const ShowScreen = ({navigation}) => {
  const [result,setResult]=useState(null)
  const id = navigation.getParam('id')

  const getResult= async(id)=>{
    const response=await yelp.get(`/${id}`)
    console.log(response.data)
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
          return <Image source={{uri: item}}/>
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