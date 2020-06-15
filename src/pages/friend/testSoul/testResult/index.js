import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import THNav from "../../../../components/THNav";
import { pxToDp } from '../../../../utils/stylesKits';
class Index extends Component {
  render() {
    console.log(this.props.route.params);
    const params=this.props.route.params;

    return (
      <ImageBackground
        style={{ flex: 1, width: "100%" }}
        source={require("../../../../res/qabg.png")}
      >
        <THNav title="测试结果" />
        <ImageBackground
          style={{ flex: 1, width: "100%" ,position:'relative'}}
          resizeMode="stretch"
          source={require("../../../../res/result.png")}
        >

          <Text style={{
            position:'absolute',top:"1%",left:"6%",color:"#ffffff9a",letterSpacing:pxToDp(7)
          }}>灵魂基因鉴定单</Text>

          {/* 用户的名称 */}
          <View style={{flexDirection:"row",justifyContent:"space-between",
          width:"47%",position:"absolute",top:"6%",right:"5%"
        }}>
            <Text style={{color:"#fff",fontSize:pxToDp(16)}} >[</Text>
            <Text style={{color:"#fff",fontSize:pxToDp(16)}} >{params.currentUser.nick_name}</Text>
            <Text style={{color:"#fff",fontSize:pxToDp(16)}} >]</Text>
          </View>
        </ImageBackground>
      </ImageBackground>
    );
  }
}
export default Index;