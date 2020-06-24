import React, { Component } from 'react';
import { View, Text, StatusBar, ImageBackground, TouchableOpacity } from 'react-native';
import { pxToDp } from "../../../utils/stylesKits";
import IconFont from "../../../components/IconFont";
import JMessage from "../../../utils/JMessage";
class Index extends Component {
  componentDidMount() {
    this.getConversations();
  }

  getConversations = async () => {
    const res = await JMessage.getConversations();
    console.log("+++++++++++++++++++++");
    console.log(res);
    console.log("+++++++++++++++++++++");


  }
  render() {
    return (
      <View>
        <StatusBar
          backgroundColor="transparent"
          translucent={true}
        />
        <ImageBackground source={require("../../../res/headbg.png")}
          style={{
            height: pxToDp(60), paddingTop: pxToDp(12), flexDirection: 'row',
            paddingLeft: pxToDp(10), paddingRight: pxToDp(10),
            alignItems: "center", justifyContent: 'space-between'
          }}
        >
          <TouchableOpacity ></TouchableOpacity>
          <Text style={{ color: "#fff", fontSize: pxToDp(20), fontWeight: "bold" }}>消息</Text>
          <TouchableOpacity>
            <IconFont name="icontongxunlu" style={{ color: "#fff", fontSize: pxToDp(20) }} />
          </TouchableOpacity>
        </ImageBackground>

        <View style={{
          flexDirection: "row", justifyContent: "space-between",
          paddingTop: pxToDp(10), paddingBottom: pxToDp(10), paddingLeft: pxToDp(30), paddingRight: pxToDp(30),
          borderBottomWidth: pxToDp(3), borderBottomColor: "#dce2e5"
        }}>
          <TouchableOpacity style={{ alignItems: "center" }}>
            <View style={{
              width: pxToDp(60), height: pxToDp(60), borderRadius: pxToDp(30),
              backgroundColor: "#ebc969", alignItems: 'center', justifyContent: 'center'
            }}>
              <IconFont style={{ color: "#fff", fontSize: pxToDp(24) }} name="icongonggao" />
            </View>
            <Text style={{ color: "#666" }}>全部</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: "center" }}>
            <View style={{
              width: pxToDp(60), height: pxToDp(60), borderRadius: pxToDp(30),
              backgroundColor: "#ff5314", alignItems: 'center', justifyContent: 'center'
            }}>
              <IconFont style={{ color: "#fff", fontSize: pxToDp(24) }} name="icondianzan-o" />
            </View>
            <Text style={{ color: "#666" }}>点赞</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: "center" }}>
            <View style={{
              width: pxToDp(60), height: pxToDp(60), borderRadius: pxToDp(30),
              backgroundColor: "#2fb4f9", alignItems: 'center', justifyContent: 'center'
            }}>
              <IconFont style={{ color: "#fff", fontSize: pxToDp(24) }} name="iconpinglun" />
            </View>
            <Text style={{ color: "#666" }}>评论</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: "center" }}>
            <View style={{
              width: pxToDp(60), height: pxToDp(60), borderRadius: pxToDp(30),
              backgroundColor: "#1adbde", alignItems: 'center', justifyContent: 'center'
            }}>
              <IconFont style={{ color: "#fff", fontSize: pxToDp(24) }} name="iconxihuan-o" />
            </View>
            <Text style={{ color: "#666" }}>喜欢</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}
export default Index;