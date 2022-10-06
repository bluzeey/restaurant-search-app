import yelp from '../api/yelp'
import {useState,useEffect} from 'react'

function useResults() {
    const [results, setResults]=useState([])
    const [errorMsg, setErrorMsg]=useState('')
    
    const searchApi=async(term)=>{
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

    useEffect(()=>{
        searchApi('pasta')
    },[])

    return [searchApi,results,errorMsg]
}

export default useResults