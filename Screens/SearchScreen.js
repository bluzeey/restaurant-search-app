import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultList";

const SearchScreen = ({navigation}) => {
  const [term, setTerm] = useState();
  const [searchApi, results, errorMsg] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => result.price === price);
  };

  return (
    <View style={{flex:1}}>
      <SearchBar
        term={term}
        setTerm={setTerm}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={searchApi}
      />
      {errorMsg && <Text>{errorMsg}</Text>}
        <ScrollView>
        <ResultList
          results={filterResultsByPrice("$")}
          title="Cost Effective"
          navigation={navigation}
        />
        <ResultList results={filterResultsByPrice("$$")}
         title="Bit Pricey"
         navigation={navigation} />
        <ResultList
          results={filterResultsByPrice("$$$")}
          title="Most Expensive"
          navigation={navigation}
        />
        </ScrollView>
    </View>
  );
};

export default SearchScreen;
