import React, { Component } from 'react';
import { View, Text } from 'react-native';
import request from "../../../../utils/request";
import { QZ_TJDT } from "../../../../utils/pathMap";
class Index extends Component {
  params={
    page:1,
    pagesize:10
  }
  state={
    list:[]
  }
  componentDidMount() {
    this.getList();  
  }

  // 获取 推荐动态的数据
  getList=async()=>{
    const res=await request.privateGet(QZ_TJDT,this.params);
    console.log(res);
    this.setState({ list: res.data });
  }
  render() {
    return (
      <View><Text>推荐</Text></View>
    );
  }
}
export default Index;