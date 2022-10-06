import { FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import ResultsDetail from './ResultsDetail'
import { useNavigation } from '@react-navigation/native'

const ResultList = ({title,results}) => {
  const navigation=useNavigation()
  if (!results.length){
    return null;
  }
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
       horizontal
       data={results}
       keyExtractor={(result)=>result.id}
       showsHorizontalScrollIndicator={false}
       renderItem={({item})=>{
        return (
          <TouchableOpacity onPress={()=>navigation.navigate('Show',{id: item.id})}>
            <ResultsDetail item={item}/>
          </TouchableOpacity>
        ) 
       }}/>
    </View>
  )
}

export default ResultList

const styles = StyleSheet.create({
  parent:{
    marginHorizontal:5
  },
  title:{
    fontSize:18,
    fontWeight:'bold',
    marginLeft:15,
    marginBottom:5
  }
})