import React, { Component } from 'react';
import { View, Text, StatusBar, ImageBackground, TouchableOpacity } from 'react-native';
import { pxToDp } from "../../../utils/stylesKits";
import IconFont from "../../../components/IconFont";
class Index extends Component {
  render() {
    return (
      <View>
        <StatusBar
          backgroundColor="transparent"
          translucent={true}
        />
        <ImageBackground source={require("../../../res/headbg.png")}
          style={{
            height: pxToDp(60), paddingTop: pxToDp(12), flexDirection: 'row',
            paddingLeft: pxToDp(10), paddingRight: pxToDp(10),
            alignItems: "center", justifyContent: 'space-between'
          }}
        >
          <TouchableOpacity ></TouchableOpacity>
          <Text style={{ color: "#fff", fontSize: pxToDp(20), fontWeight: "bold" }}>消息</Text>
          <TouchableOpacity>
            <IconFont name="icontongxunlu" style={{color:"#fff",fontSize:pxToDp(20)}} />
          </TouchableOpacity>
        </ImageBackground>

      </View>
    );
  }
}
export default Index;