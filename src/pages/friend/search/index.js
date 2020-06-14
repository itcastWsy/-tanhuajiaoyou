import React, { Component } from 'react';
import { View, Text, StatusBar, ImageBackground } from 'react-native';
import request from "../../../utils/request";
import { FRIENDS_SEARCH } from "../../../utils/pathMap";
import { pxToDp } from "../../../utils/stylesKits";
class Index extends Component {
  params = {
    gender: "男",
    distance: 2
  }
  state = {
    list: [
      //       uid: 7
      // header: "/upload/18665711978.png"
      // nick_name: "一叶知秋"
      // dist: 0
    ]
  }
  componentDidMount() {
    this.getList();
  }

  // 获取附近的数据
  getList = async () => {
    const res = await request.privateGet(FRIENDS_SEARCH, this.params);
    // console.log(res);
    this.setState({ list: res.data });
  }
  render() {
    const { list } = this.state;
    return (
      <ImageBackground
        style={{ flex: 1, position: "relative" }}
        source={require("../../../res/search.gif")}
      >
        <StatusBar backgroundColor={"transparent"} translucent={true} />

        <View style={{ position: "absolute", bottom: pxToDp(50), width: "100%",alignItems:"center" }}>
          <Text style={{color:"#fff"}} >您附近有<Text style={{color:"red",fontSize:pxToDp(20)}} >{list.length}</Text>个好友</Text>
          <Text style={{color:"#fff"}} >选择聊聊</Text>
        </View>
      </ImageBackground>
    );
  }
}
export default Index;