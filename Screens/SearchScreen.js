import { View, Text } from 'react-native'
import React,{useState,useEffect} from 'react'
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'

const SearchScreen = () => {
  const [term, setTerm]=useState()
  const [results, setResults]=useState([])
  const [errorMsg, setErrorMsg]=useState('')
  
  const searchApi=async()=>{
    try {
      const response=await yelp.get('/search',{
        params:{
          limit:50,
          term,
          location:'san jose'
        }
      })
      setResults(response.data.businesses)
    } catch (error) {
      setErrorMsg('Something went wrong')
    }
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
    </View>
  )
}



export default SearchScreen