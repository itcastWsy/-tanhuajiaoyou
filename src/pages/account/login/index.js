import React, { Component } from 'react';
import { View, Text,Image ,StatusBar} from 'react-native';
class Index extends Component {
  render() {
    return ( 
      <View>
        {/* 0.0  状态栏 开始 */}
        <StatusBar backgroundColor="transparent" translucent={true}  />
        {/* 0.0  状态栏 结束 */}
        {/* 1.0 背景图片 开始 */}
        {/* 200 单位 dp 单位px -> dp单位? */}
        <Image style={{width:"100%",height:200}} source={require("../../../res/profileBackground.jpg")} />
        {/* 1.0 背景图片 结束*/}
      </View>
    );
  }
}
export default Index;