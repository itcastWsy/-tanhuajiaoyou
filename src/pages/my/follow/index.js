import React from 'react';
import {
  Text,View
} from 'react-native';

import ScrollableTabView  from 'react-native-scrollable-tab-view';
import CustormerBar from "./components/CustormerBar";
 import FollowEach from "./followEach";
 import Ifollow from "./Ifollow";
 import FollowMe from "./followMe";
export default () => {
  return <ScrollableTabView
    initialPage={0}
    renderTabBar={() => < CustormerBar/>}
  >

    <FollowEach tabLabel='互相关注'><Text>0</Text></FollowEach>
    <Ifollow tabLabel='喜欢'><Text>1</Text></Ifollow>
    <FollowMe tabLabel='粉丝'><Text>2</Text></FollowMe>
 
  </ScrollableTabView>;
}