import React, { Component } from 'react';
import { View, Image, Text, StatusBar, TouchableOpacity } from 'react-native';
import { pxToDp } from '../../../utils/stylesKits';
import IconFont from "../../../components/IconFont";
import { BASE_URI } from "../../../utils/pathMap";
import { inject, observer } from 'mobx-react';
@inject("UserStore")
@observer
class Index extends Component {
  render() {
    const user = this.props.UserStore.user;
    return (
      <View style={{ flex: 1, backgroundColor: "#ccc" }}>
        <View style={{ height: pxToDp(150), backgroundColor: "#c7689f", position: "relative" }}>
          <StatusBar backgroundColor="transparent" translucent />
          <IconFont name="iconbianji" style={{ position: "absolute", top: pxToDp(30), right: pxToDp(20), color: "#fff", fontSize: pxToDp(16) }} />
          <TouchableOpacity
            style={{
              flexDirection: "row", paddingTop: pxToDp(15),
              paddingBottom: pxToDp(15), marginTop: pxToDp(40)
            }} >
            {/* 图片 */}
            <View style={{ paddingLeft: pxToDp(15), paddingRight: pxToDp(15) }}>
              <Image style={{
                width: pxToDp(50), height: pxToDp(50),
                borderRadius: pxToDp(25)
              }} source={{ uri: BASE_URI + user.header }} />
            </View>
            {/* 名称 */}
            <View style={{ flex: 2, justifyContent: "space-around" }} >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ color: "#fff", fontWeight: "bold", fontSize: pxToDp(17) }} >{user.nick_name}</Text>
                <View style={{ flexDirection: "row", backgroundColor: "#fff", borderRadius: pxToDp(8), paddingLeft: pxToDp(3), paddingRight: pxToDp(3), marginLeft: pxToDp(15) }}>
                  <IconFont style={{ fontSize: pxToDp(18), color: user.gender === "女" ? "#b564bf" : "red" }}
                    name={user.gender === "女" ? "icontanhuanv" : "icontanhuanan"} />
                  <Text style={{ color: "#555" }} >{user.age}岁</Text>
                </View>
              </View>
              <View style={{ flexDirection: "row", alignItems: 'center' }} >
                <IconFont style={{ color: "#fff" }} name="iconlocation" />
                <Text style={{ color: "#fff", marginLeft: pxToDp(5) }} >广州</Text>
              </View>
            </View>
          </TouchableOpacity>

          <View style={{ height: pxToDp(120), backgroundColor: "#fff", width: "90%", alignSelf: "center", marginTop: pxToDp(15), borderRadius: pxToDp(8) ,
          flexDirection:"row"
        }}>
            <TouchableOpacity style={{flex:1,alignItems:"center",justifyContent:'center'}} >
              <Text style={{color:"#666",fontSize:pxToDp(22)}} >1</Text>
              <Text style={{color:"#666",fontSize:pxToDp(16)}} >相互关注</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex:1,alignItems:"center",justifyContent:'center'}} >
              <Text style={{color:"#666",fontSize:pxToDp(22)}} >1</Text>
              <Text style={{color:"#666",fontSize:pxToDp(16)}} >喜欢</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex:1,alignItems:"center",justifyContent:'center'}} >
              <Text style={{color:"#666",fontSize:pxToDp(22)}} >1</Text>
              <Text style={{color:"#666",fontSize:pxToDp(16)}} >粉丝</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
export default Index;