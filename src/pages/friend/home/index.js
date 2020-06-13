import React, { Component } from 'react';
import { View, Text,StatusBar } from 'react-native';
import HeaderImageScrollView from 'react-native-image-header-scroll-view';
import { pxToDp } from '../../../utils/stylesKits';
import FriendHead from "./components/FriendHead";
import Visitors from "./components/Visitors";
import PerfectGirl from "./components/PerfectGirl";
import request from "../../../utils/request";
import { FRIENDS_RECOMMEND } from "../../../utils/pathMap";
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
  state={
    // 接口要的数据
    params:{
      page:1,
      pagesize:10,
      gender:"男",
      distance:2,
      lastLogin:"",
      city:"",
      education:""
    },
    // 推荐朋友 数组
    recommends:[]
  }

  componentDidMount() {
    this.getRecommends();
  }

  // 获取推荐朋友
  getRecommends=async ()=>{
    const res=await request.privateGet(FRIENDS_RECOMMEND,this.state.params);
    this.setState({ recommends: res.data });
  }
  render() {
    return (
      <HeaderImageScrollView
        maxHeight={pxToDp(130)}
        minHeight={pxToDp(44)}
        headerImage={require("../../../res/headfriend.png")}
        renderForeground={() => (
          <View style={{ height: pxToDp(130), justifyContent: "center", alignItems: "center" }} >
           <StatusBar backgroundColor={"transparent"} translucent={true}  />
           <FriendHead/>
          </View>
        )}
      >
        <View style={{ height: 1000 }}>
         {/* 1.0 访客 开始 */}
         <Visitors/>
         {/* 1.0 访客 结束 */}
         <View style={{height:pxToDp(3),backgroundColor:"#ccc"}} ></View>
         <PerfectGirl />
        </View>
      </HeaderImageScrollView>
    );
  }
}
export default Index;