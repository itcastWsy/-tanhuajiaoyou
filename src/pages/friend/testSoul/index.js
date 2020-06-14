import React, { Component } from 'react';
import { View, Text ,ImageBackground} from 'react-native';
import THNav from "../../../components/THNav";
class Index extends Component {
  render() {
    return (
      <View style={{flex:1,backgroundColor:"#fff"}}>
        <THNav title="测灵魂" />
        <ImageBackground
        source={require("../../../res/testsoul_bg.png")}
        style={{width:"100%",height:"60%"}}
        imageStyle={{height:"100%"}}

        ></ImageBackground>
      </View>
    );
  }
}
export default Index;