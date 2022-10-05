import { View, Text } from 'react-native'
import React,{useState} from 'react'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultList from '../components/ResultList'

const SearchScreen = () => {
  const [term, setTerm]=useState()
  const [searchApi,results,errorMsg]=useResults() 
  
  const filterResultsByPrice=(price)=>{
    return results.filter(result=>result.price===price)
  }

  return (
    <View>
      <SearchBar 
      term={term} 
      setTerm={setTerm} 
      onTermChange={(newTerm)=>setTerm(newTerm)}
      onTermSubmit={searchApi} />
      {errorMsg && <Text>{errorMsg}</Text>}
      <Text>We have found {results.length} results.</Text>
      <ResultList results={filterResultsByPrice('$')} title="Cost Effective"/>
      <ResultList results={filterResultsByPrice('$$')} title="Bit Pricey"/>
      <ResultList results={filterResultsByPrice('$$$')} title="Most Expensive"/>
    </View>
  )
}



export default SearchScreen