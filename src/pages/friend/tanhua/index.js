import React, { Component } from 'react';
import { View, Text ,ImageBackground} from 'react-native';
import THNav from "../../../components/THNav";
class Index extends Component {
  render() {
    return (
      <View style={{flex:1,backgroundColor:"#fff"}}>
        <THNav title="探花"/>
        <ImageBackground
        style={{height:"60%"}}
        imageStyle={{height:"100%"}}
        source={require("../../../res/testsoul_bg.png")}
        >

        </ImageBackground>
      </View>
    );
  }
}
export default Index;