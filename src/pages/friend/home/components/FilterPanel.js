import React, { Component } from 'react';
import { View, Text ,TouchableOpacity} from 'react-native';
import IconFont from "../../../../components/IconFont";
import { pxToDp } from '../../../../utils/stylesKits';
import SvgUri from "react-native-svg-uri";
import {male,female  } from "../../../../res/fonts/iconSvg";
class Index extends Component {
  // gender: "男",
  // distance: 2,
  // lastLogin: "",
  // city: "",
  // education: ""
  constructor(props) {
    super(props);
    this.state = JSON.parse(JSON.stringify(this.props.params));
  }

  // 选择性别
  chooeseGender=(gender)=>{
    this.setState({ gender  });
  }
  render() {
    const { gender } = this.state;
    return (
      <View
        style={{
          position: "absolute", width: "100%", height: "70%",
          left: 0,
          bottom: 0, backgroundColor: "#fff",
          paddingLeft: pxToDp(10), paddingRight: pxToDp(10)
        }}
      >
        {/* 1.0 标题 开始 */}
        <View style={{
          flexDirection: "row", justifyContent: "space-between", height: pxToDp(50),
          alignItems: "center"
        }} >
          <Text></Text>
          <Text style={{ color: "#999", fontSize: pxToDp(28), fontWeight: "bold" }} >筛选</Text>
          <IconFont onPress={this.props.onClose} style={{ fontSize: pxToDp(30) }} name="iconshibai" />
        </View>
        {/* 1.0 标题 结束 */}
        {/* 2.0 性别 开始 */}
        <View style={{flexDirection:"row",alignItems:"center",marginTop:pxToDp(10)}}>
          <Text style={{ color: "#777", fontSize: pxToDp(18), width: pxToDp(80) }} >性别:</Text>
          {/* 性别 图标 开始 */}
          <View style={{ justifyContent: "space-around", width: "50%", flexDirection: "row", alignSelf: "center" }}>
            <TouchableOpacity onPress={this.chooeseGender.bind(this, "男")} style={{
              width: pxToDp(60), height: pxToDp(60), borderRadius: pxToDp(30),
              backgroundColor: gender === "男" ? "red" : "#eee",
              justifyContent: 'center', alignItems: 'center'
            }} >
              <SvgUri svgXmlData={male} width="36" height="36" />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.chooeseGender.bind(this, "女")} style={{
              width: pxToDp(60), height: pxToDp(60), borderRadius: pxToDp(30),
              backgroundColor: gender === "女" ? "red" : "#eee",
              justifyContent: 'center', alignItems: 'center'
            }} >
              <SvgUri svgXmlData={female} width="36" height="36" />
            </TouchableOpacity>
          </View>
          {/* 性别 图标 结束 */}
        </View>
        {/* 2.0 性别 结束 */}
      </View>
    );
  }
}
export default Index;