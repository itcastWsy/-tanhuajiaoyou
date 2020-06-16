import React, { Component } from 'react';
import { View, Text } from 'react-native';
import request from "../../../utils/request";
import { FRIENDS_PERSONALINFO } from "../../../utils/pathMap";
class Index extends Component {
  state={
    userDetail:{}
  }
  params={
    page:1,
    pagesize:5
  }

  componentDidMount() {
    this.getDetail();  
  }

  // 获取朋友详情
  getDetail=async()=>{
    const url=FRIENDS_PERSONALINFO.replace(":id",this.props.route.params.id);
    const res=await request.privateGet(url,this.params);
    this.setState({ userDetail:res.data  });
  }
  render() {
    console.log(this.props.route.params);
    return (
      <View><Text>用户详情</Text></View>
    );
  }
}
export default Index;