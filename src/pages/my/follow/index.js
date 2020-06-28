import React, { Component } from 'react';
import { Text, View } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import CustormerBar from "./components/CustormerBar";
import FollowEach from "./followEach";
import Ifollow from "./Ifollow";
import FollowMe from "./followMe";
import { MY_LIKELIST } from "../../../utils/pathMap";
import request from "../../../utils/request";

class index extends Component {
  state = {
    // 互相关注
    likeeachlist: [],
    // 喜欢
    ilikelist: [],
    // 粉丝 
    likemelist: []
  }
  componentDidMount() {
    this.getList();
  }

  // 获取喜欢相关的数据
  getList = async () => {
    const res = await request.privateGet(MY_LIKELIST);

    const likeeachlist = res.data.likeeachlist;
    const ilikelist = res.data.ilikelist;
    const likemelist = res.data.likemelist;
    this.setState({ likeeachlist, ilikelist, likemelist });

  }
  render() {
    const { likeeachlist, ilikelist, likemelist } = this.state;
    return <ScrollableTabView
      initialPage={1}
      renderTabBar={() => < CustormerBar />}
    >
      <FollowEach likeeachlist={likeeachlist} tabLabel='互相关注'></FollowEach>
      <Ifollow ilikelist={ilikelist} tabLabel='喜欢'></Ifollow>
      <FollowMe likemelist={likemelist} tabLabel='粉丝'></FollowMe>

    </ScrollableTabView>
  }
}

export default index;