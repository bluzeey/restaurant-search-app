import { View, Text,StyleSheet } from "react-native";
import React from "react";

const ViewScreen = () => {
  return (
    <View style={styles.parent}>
      <View style={styles.box1}/>
      <View style={styles.box2}/>
      <View style={styles.box3}/>
    </View>
  );
};

const styles = StyleSheet.create({
  parent:{
     flexDirection:'row',
     justifyContent:'space-around',
     marginTop:50
  },
 box1: {
    width: 100,
    height: 100,
    backgroundColor:'red'
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor:'green',
    top:100,
  },
  box3: {
    width: 100,
    height: 100,
    backgroundColor:'purple'
  },
});

export default ViewScreen;
