import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { pxToDp } from "../../../utils/stylesKits";
import SvgUri from "react-native-svg-uri";
import { male, female } from "../../../res/fonts/iconSvg";
import {Input  } from "react-native-elements";
class Index extends Component {
  state={
    // 昵称
    nickname: "",
    // 性别 
    gender: "男",
    // 生日
    birthday: "",
    // 城市
    city: "",
    // 头像
    header: "",
    // 经度
    lng: "",
    // 纬度
    lat: "",
    // 详细的地址
    address: ""
  }

  // 选择性别
  chooeseGender=(gender)=>{
    this.setState({ gender });
  }
  render() {
    const {gender,nickname}=this.state;
    return (
      <View style={{ backgroundColor: "#fff", flex: 1, padding: pxToDp(20) }}>
        {/* 1.0 标题 开始 */}
        <Text style={{ fontSize: pxToDp(20), color: "#666", fontWeight: "bold" }} >填写资料</Text>
        <Text style={{ fontSize: pxToDp(20), color: "#666", fontWeight: "bold" }} >提升我的魅力</Text>
        {/* 1.0 标题 结束 */}
        {/* 2.0 性别 开始 */}
        <View style={{ marginTop: pxToDp(20) }}>
          <View style={{ justifyContent:"space-around",  width: "60%", flexDirection: "row", alignSelf: "center"}}>
            <TouchableOpacity onPress={this.chooeseGender.bind(this,"男")}  style={{width:pxToDp(60),height:pxToDp(60),borderRadius:pxToDp(30),
              backgroundColor:gender==="男"?"red":"#eee",
              justifyContent:'center',alignItems:'center'}} >
              <SvgUri svgXmlData={male} width="36" height="36" />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.chooeseGender.bind(this,"女")}  style={{width:pxToDp(60),height:pxToDp(60),borderRadius:pxToDp(30),
             backgroundColor:gender==="女"?"red":"#eee",
              justifyContent:'center',alignItems:'center'}} >
              <SvgUri svgXmlData={female} width="36" height="36" />
            </TouchableOpacity>
          </View>
        </View>
        {/* 2.0 性别 结束 */}
        {/* 3.0 昵称 开始 */}
        <View>
        <Input 
        value={nickname}
        placeholder="设置昵称"
        onChangeText={(nickname)=>this.setState({nickname})}
        />
        </View>
        {/* 3.0 昵称 结束 */}
      </View>
    );
  }
}
export default Index;