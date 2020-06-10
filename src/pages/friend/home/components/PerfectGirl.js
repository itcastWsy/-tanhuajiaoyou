import React, { Component } from 'react';
import { View, Text,Image } from 'react-native';
import request from "../../../../utils/request";
import {pxToDp  } from "../../../../utils/stylesKits";
import { FRIENDS_TODAYBEST ,BASE_URI} from "../../../../utils/pathMap";
class Index extends Component {
  state={
    perfectGirl:{
//       id: 16
// header: "/upload/13828459788.jpg"
// nick_name: "若只如初见っ"
// gender: "女"
// age: 23
// marry: "单身"
// xueli: "大专"
// dist: 246.1
// agediff: 0
// fateValue: 78
    }
  }
  async componentDidMount() {
    const res=await request.privateGet(FRIENDS_TODAYBEST);
    this.setState({ perfectGirl:res.data[0]  });
  }
  render() {
    const {perfectGirl}=this.state;
    return (
      <View style={{flexDirection:"row"}}>
        {/* 左边图片 开始 */}
        <View style={{position:"relative"}} >
          <Image 
          style={{width:pxToDp(120),height:pxToDp(120)}}
          source={{uri:BASE_URI+perfectGirl.header}} />
          <View 
          style={{
            width:pxToDp(80),height:pxToDp(30),backgroundColor:"#b564bf",
            justifyContent:"center",alignItems:"center",borderRadius:pxToDp(10),
            position:"absolute",left:0,bottom:pxToDp(10)
          }}
           >
            <Text style={{color:"#fff",fontSize:pxToDp(16)}}>今日佳人</Text>
          </View>
        </View>
        {/* 左边图片 结束 */}
        {/* 右边内容 开始 */}
        <View style={{flex:1,flexDirection:"row"}}>
          
        </View>
        {/* 右边内容 结束 */}
      </View>
    );
  }
}
export default Index;