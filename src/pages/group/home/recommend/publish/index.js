import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import THNav from "../../../../../components/THNav";
import { pxToDp } from "../../../../../utils/stylesKits";
class Index extends Component {
  state = {
    textContent: "",
    longitude: "",
    latitude: "",
    location: "",
    imageContent: [
      {
        "headImgShortPath": "/upload/album/18665711978/1576633170560_0.9746430185850421.jpg"
      }
    ]
  }
  constructor() {
    super();
    this.refInput = React.createRef();
  }

  // 设置输入框获得焦点
  handleSetInputFocus = () => {
    // console.log(this.refInput);
    if (!this.refInput.isFocused()) {
      // 设置获得焦点
      this.refInput.focus();
    }
  }

  // 输入框的值改变事件
  onChangeText=(textContent)=>{
    this.setState({ textContent });
  }

  render() {
    const { textContent } = this.state;
    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <THNav title="发动态" rightText="发帖"
          onRightPress={() => console.log("发帖了")}
        />
        {/* 1.0 输入框 开始 */}
        <TouchableOpacity
          style={{ height: "40%" }}
          onPress={this.handleSetInputFocus}
        >
          <TextInput
            ref={ref => this.refInput = ref}
            placeholder="请填写动态(140字以内)"
            multiline
            value={textContent}
            onChangeText={this.onChangeText}
          />
        </TouchableOpacity>
        {/* 1.0 输入框 结束 */}

      </View>
    );
  }
}
export default Index;