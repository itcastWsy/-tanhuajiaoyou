import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import IconFont from "../../../../components/IconFont";
import { pxToDp } from '../../../../utils/stylesKits';
import SvgUri from "react-native-svg-uri";
import { male, female } from "../../../../res/fonts/iconSvg";
import Picker from 'react-native-picker';
import {Slider  } from "react-native-elements";
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
  chooeseGender = (gender) => {
    this.setState({ gender });
  }

  // 选择近期登录时间
  chooeseLastLogin = () => {
    Picker.init({
      pickerData: ["15分钟", "1天", "1小时", "不限制"],
      selectedValue: [this.state.lastLogin],
      wheelFlex: [1, 0, 0], // 显示省和市
      pickerConfirmBtnText: "确定",
      pickerCancelBtnText: "取消",
      pickerTitleText: "选择近期登录时间",
      onPickerConfirm: data => {
        this.setState(
          {
            lastLogin: data[0]
          }
        );
      }
    });
    Picker.show();
  }
  render() {
    const { gender, lastLogin, distance } = this.state;
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
        <View style={{ flexDirection: "row", alignItems: "center", marginTop: pxToDp(10) }}>
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
        {/* 3.0 近期登录时间 开始 */}
        <View style={{ flexDirection: "row", alignItems: "center", marginTop: pxToDp(10) }}>
          <Text style={{ color: "#777", fontSize: pxToDp(18), width: pxToDp(140) }}>近期登录时间:</Text>
          <Text onPress={this.chooeseLastLogin} style={{ color: "#777", fontSize: pxToDp(18) }}>{lastLogin || "请选择"}</Text>
        </View>
        {/* 3.0 近期登录时间 结束 */}
        {/* 4.0 距离 开始 */}
        <View style={{ marginTop: pxToDp(10) }}>
          <Text style={{ color: "#777", fontSize: pxToDp(18)}}>距离:{distance || 0} KM</Text>
            <Slider
            value={distance}
            minimumValue={0}
            maximumValue={10}
            step={0.5}
            onValueChange={(distance)=>this.setState({ distance })}
            />
        </View>
        {/* 4.0 距离 结束 */}
      </View>
    );
  }
}
export default Index;