import date from "../../../utils/date";
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import THNav from "../../../components/THNav";
import { inject, observer } from 'mobx-react';
import { ListItem } from "react-native-elements";
import { pxToDp } from '../../../utils/stylesKits';
import { BASE_URI } from '../../../utils/pathMap';
@inject("UserStore")
@observer
class Index extends Component {
  render() {
    const user = this.props.UserStore.user;
    console.log(user);
    return (
      <View>
        <THNav title="编辑资料" />
        {/* 用户信息 */}
        <ListItem
          title="头像"
          rightElement={<Image style={{ width: pxToDp(40), height: pxToDp(40), borderRadius: pxToDp(20) }}
            source={{ uri: BASE_URI + user.header }}
          />}
          titleStyle={{ color: "#666" }}
          chevron
          bottomDivider
        />
        <ListItem
          title="昵称"
          titleStyle={{ color: "#666" }}
          rightTitle={user.nick_name}
          chevron
          bottomDivider
        />
        <ListItem
          title="生日"
          titleStyle={{ color: "#666" }}
          rightTitle={date(user.birthday).format("YYYY-MM-DD")}
          chevron
          bottomDivider
        />
        <ListItem
          title="性别"
          titleStyle={{ color: "#666" }}
          rightTitle={user.gender}
          chevron
          bottomDivider
        />
        <ListItem
          title="现居城市"
          titleStyle={{ color: "#666" }}
          rightTitle={user.city}
          chevron
          bottomDivider
        />
        <ListItem
          title="学历"
          titleStyle={{ color: "#666" }}
          rightTitle={user.xueli}
          chevron
          bottomDivider
        />
        <ListItem
          title="月收入"
          titleStyle={{ color: "#666" }}
          rightTitle={"15K-25K"}
          chevron
          bottomDivider
        />
        <ListItem
          title="行业"
          titleStyle={{ color: "#666" }}
          rightTitle={"产品经理"}
          chevron
          bottomDivider
        />
        <ListItem
          title="婚姻状态"
          titleStyle={{ color: "#666" }}
          rightTitle={user.marry}
          chevron
          bottomDivider
        />
      </View>
    );
  }
}
export default Index;