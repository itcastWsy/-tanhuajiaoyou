import React, { Component } from 'react';
import { View, Text,Image, StatusBar, ImageBackground, TouchableOpacity } from 'react-native';
import request from "../../../utils/request";
import { FRIENDS_SEARCH,BASE_URI } from "../../../utils/pathMap";
import { pxToDp } from "../../../utils/stylesKits";
class Index extends Component {
  params = {
    gender: "男",
    distance: 10000
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

  WHMap = {
    "wh1": { width: pxToDp(70), height: pxToDp(100) },
    "wh2": { width: pxToDp(60), height: pxToDp(90) },
    "wh3": { width: pxToDp(50), height: pxToDp(80) },
    "wh4": { width: pxToDp(40), height: pxToDp(70) },
    "wh5": { width: pxToDp(30), height: pxToDp(60) },
    "wh6": { width: pxToDp(20), height: pxToDp(50) }
  }

  // 根据 dist来返回对应的宽度的档次 
  getWidthHeight = (dist) => {
    if (dist < 200) {
      return "wh1";
    }
    if (dist < 400) {
      return "wh2";
    }
    if (dist < 600) {
      return "wh3";
    }
    if (dist < 1000) {
      return "wh4";
    }
    if (dist < 1500) {
      return "wh5";
    }
    return "wh6";
  }

  // 获取附近的数据
  getList = async () => {
    const res = await request.privateGet(FRIENDS_SEARCH, this.params);
    console.log(res);
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
        {
          list.map((v, i) => {
            const whMap = this.WHMap[this.getWidthHeight(v.dist)]
            return <TouchableOpacity
              key={i}
            >
              <ImageBackground
                source={require("../../../res/showfirend.png")}
                resizeMode="stretch"
                style={{ ...whMap,position:"relative",alignItems:"center" }}
              >
                <Text
                style={{color:"#ffffff9a",position:"absolute",top:-pxToDp(20)}}
                >{v.nick_name}</Text>
                <Image style={{width:whMap.width,height:whMap.width,
                borderRadius:whMap.width/2
                }} source={{uri:BASE_URI+v.header}}  />
              </ImageBackground>

            </TouchableOpacity>

          })
        }
        <View style={{ position: "absolute", bottom: pxToDp(50), width: "100%", alignItems: "center" }}>
          <Text style={{ color: "#fff" }} >您附近有<Text style={{ color: "red", fontSize: pxToDp(20) }} >{list.length}</Text>个好友</Text>
          <Text style={{ color: "#fff" }} >选择聊聊</Text>
        </View>
      </ImageBackground>
    );
  }
}
export default Index;