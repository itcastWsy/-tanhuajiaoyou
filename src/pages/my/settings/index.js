import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import THNav from "../../../components/THNav";
import { ListItem } from "react-native-elements";
import { inject, observer } from 'mobx-react';
import { pxToDp } from '../../../utils/stylesKits';

@inject("UserStore")
@observer
class Index extends Component {

  render() {
    const user = this.props.UserStore.user;
    return (
      <View>
        <THNav title="通用设置" />
        <View>
          <ListItem
            title="设置陌生人问题"
            titleStyle={{ color: "#666" }}
            chevron
            bottomDivider
          />
          <ListItem
            title="通知设置"
            titleStyle={{ color: "#666" }}
            chevron
            bottomDivider
          />
          <ListItem
            title="黑名单"
            titleStyle={{ color: "#666" }}
            chevron
            bottomDivider
          />
          <ListItem
            title="修改手机号"
            titleStyle={{ color: "#666" }}
            chevron
            bottomDivider
            rightTitle={user.mobile}
            rightTitleStyle={{ fontSize: pxToDp(15) }}
          />
        </View>

        <View
          style={{ marginTop: pxToDp(30) }}
        >
          <TouchableOpacity
            style={{
              width: "80%", alignSelf: "center",
              alignItems: "center", justifyContent: "center",
              height: pxToDp(40), borderRadius: pxToDp(20), backgroundColor: "#e26a83"
            }}
          ><Text style={{ color: "#fff" }}>退出登录</Text></TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default Index;