import React, { Component } from 'react';
import { View, Text, Image, StatusBar } from 'react-native';
import { pxToDp } from "../../../utils/stylesKits";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
class Index extends Component {
  render() {
    return (
      <View>
        {/* 0.0  状态栏 开始 */}
        <StatusBar backgroundColor="transparent" translucent={true} />
        {/* 0.0  状态栏 结束 */}
        {/* 1.0 背景图片 开始 */}
        {/* 200 单位 dp 单位px -> dp单位? */}
        <Image style={{ width: "100%", height: pxToDp(240) }} source={require("../../../res/profileBackground.jpg")} />
        {/* 1.0 背景图片 结束*/}

        {/* 2.0 内容 开始 */}
        <View style={{padding:pxToDp(20)}}>
          {/* 2.1 登录 开始 */}
          <View>
            {/* 标题 */}
            <View><Text style={{fontSize:pxToDp(25),color:"#888",fontWeight:"bold"}}>手机号登录注册</Text></View>
            {/* 输入框 */}
            <Input
  placeholder='BASIC INPUT'
/>

<Input
  placeholder='INPUT WITH ICON'
  leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
/>
          </View>
          {/* 2.1 登录 结束 */}
        </View>
        {/* 2.0 内容 结束 */}
      </View>
    );
  }
}
export default Index;