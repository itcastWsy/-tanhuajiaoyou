import React, { Component } from 'react';
import { View, Text, StatusBar, Image } from 'react-native';
import HeaderImageScrollView from 'react-native-image-header-scroll-view';
import { pxToDp } from '../../../utils/stylesKits';
import FriendHead from "./components/FriendHead";
import Visitors from "./components/Visitors";
import PerfectGirl from "./components/PerfectGirl";
import request from "../../../utils/request";
import { FRIENDS_RECOMMEND, BASE_URI } from "../../../utils/pathMap";
import IconFont from "../../../components/IconFont";
// id: 7
// header: "/upload/18665711978.png"
// nick_name: "一叶知秋"
// gender: "男"
// age: 23
// marry: "单身"
// xueli: "本科"
// dist: 0
// agediff: 0
// fateValue: 40
class Index extends Component {
  state = {
    // 接口要的数据
    params: {
      page: 1,
      pagesize: 10,
      gender: "男",
      distance: 2,
      lastLogin: "",
      city: "",
      education: ""
    },
    // 推荐朋友 数组
    recommends: []
  }

  componentDidMount() {
    this.getRecommends();
  }

  // 获取推荐朋友
  getRecommends = async () => {
    const res = await request.privateGet(FRIENDS_RECOMMEND, this.state.params);
    this.setState({ recommends: res.data });
  }
  render() {
    const { recommends } = this.state;
    return (
      <HeaderImageScrollView
        maxHeight={pxToDp(130)}
        minHeight={pxToDp(44)}
        headerImage={require("../../../res/headfriend.png")}
        renderForeground={() => (
          <View style={{ height: pxToDp(130), justifyContent: "center", alignItems: "center" }} >
            <StatusBar backgroundColor={"transparent"} translucent={true} />
            <FriendHead />
          </View>
        )}
      >
        <View style={{ height: 1000 }}>
          {/* 1.0 访客 开始 */}
          <Visitors />
          {/* 1.0 访客 结束 */}
          <View style={{ height: pxToDp(3), backgroundColor: "#ccc" }} ></View>
          <PerfectGirl />
          {/* 2.0 推荐朋友 开始 */}
          <View>
            {/* 2.1 标题 开始 */}
            <View style={{
              height: pxToDp(40), backgroundColor: "#eee", flexDirection: "row",
              justifyContent: "space-between", paddingLeft: pxToDp(10), paddingRight: pxToDp(10),
              alignItems: "center"
            }}>
              <Text style={{ color: "#666" }}>推荐</Text>
              <IconFont style={{ color: "#666" }} name="iconshaixuan" />
            </View>
            {/* 2.1 标题 结束 */}
            {/* 2.2 列表内容 开始 */}
            <View>
              {recommends.map((v, i) => <View key={i}
                style={{
                  flexDirection: "row", paddingTop: pxToDp(15),
                  paddingBottom: pxToDp(15), borderBottomWidth: pxToDp(1), borderColor: "#ccc"
                }} >
                {/* 图片 */}
                <View style={{ paddingLeft: pxToDp(15), paddingRight: pxToDp(15) }}>
                  <Image style={{
                    width: pxToDp(50), height: pxToDp(50),
                    borderRadius: pxToDp(25)
                  }} source={{ uri: BASE_URI + v.header }} />
                </View>
                {/* 名称 */}
                <View style={{ flex: 2, justifyContent: "space-around" }} >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ color: "#555" }} >{v.nick_name}</Text>
                    <IconFont style={{ fontSize: pxToDp(18), color: v.gender === "女" ? "#b564bf" : "red" }}
                      name={v.gender === "女" ? "icontanhuanv" : "icontanhuanan"} />
                    <Text style={{ color: "#555" }} >{v.age}岁</Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ color: "#555" }} >{v.marry}</Text>
                    <Text style={{ color: "#555" }} >|</Text>
                    <Text style={{ color: "#555" }} >{v.xueli}</Text>
                    <Text style={{ color: "#555" }} >|</Text>
                    <Text style={{ color: "#555" }} >{v.agediff < 10 ? "年龄相仿" : "有点代沟"}</Text>
                  </View>
                </View>
                {/* 缘分值 */}
                <View
                  style={{ flexDirection: "row", alignItems: "center" ,
                  width:pxToDp(100),justifyContent:"center"
                }}
                >
                  <IconFont name="iconxihuan" style={{color:"red",fontSize:pxToDp(30)}} />
                  <Text style={{color:"#666"}} >{v.fateValue}</Text>
                </View>
              </View>)}
            </View>
            {/* 2.2 列表内容 结束 */}
          </View>
          {/* 2.0 推荐朋友 结束 */}
        </View>
      </HeaderImageScrollView>
    );
  }
}
export default Index;