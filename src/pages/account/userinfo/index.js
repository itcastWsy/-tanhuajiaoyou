import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { pxToDp } from "../../../utils/stylesKits";
class Index extends Component {
  render() {
    return (
      <View style={{ backgroundColor: "#fff", flex: 1, padding: pxToDp(20) }}>
        {/* 1.0 标题 开始 */}
        <Text style={{fontSize:pxToDp(20),color:"#666",fontWeight:"bold"}} >填写资料</Text>
        <Text style={{fontSize:pxToDp(20),color:"#666",fontWeight:"bold"}} >提升我的魅力</Text>
        {/* 1.0 标题 结束 */}
      </View>
    );
  }
}
export default Index;