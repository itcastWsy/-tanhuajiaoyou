import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import THNav from "../../../components/THNav";
import { FRIENDS_VISITORS, BASE_URI } from "../../../utils/pathMap";
import request from "../../../utils/request";
import { pxToDp } from '../../../utils/stylesKits';
class Index extends Component {
  state = {
    list: []
  }
  componentDidMount() {
    this.getList();
  }
  getList = async () => {
    const res = await request.privateGet(FRIENDS_VISITORS);
    // console.log(res);
    this.setState({ list: [...res.data, ...res.data, ...res.data, ...res.data] });
  }
  render() {
    const { list } = this.state;
    return (
      <View style={{flex:1,backgroundColor:"#fff"}}>
        <THNav title="谁看过我" />
        {/* 小圆圈 */}
        <View style={{padding:pxToDp(10),backgroundColor:"#eee",alignItems:"center"}}>
          <View style={{flexDirection:"row",marginBottom:pxToDp(10)}}>
            {list.map((v, i) => <Image style={{ marginLeft:pxToDp(5),marginRight:pxToDp(5),  width: pxToDp(40), height: pxToDp(40), borderRadius: pxToDp(20) }}
              source={{ uri: BASE_URI + v.header }}
            />)}
          </View>
          <Text style={{color:"#666"}}>最近有{list.length}人来访,快去查看.....</Text>
        </View>
        {/* 列表 */}
      </View>
    );
  }
}
export default Index;