import React, { Component } from 'react';
import { View, Text, FlatList,Image,TouchableOpacity } from 'react-native';
import request from "../../../../utils/request";
import { QZ_TJDT,BASE_URI } from "../../../../utils/pathMap";
import IconFont from "../../../../components/IconFont";
import {pxToDp  } from "../../../../utils/stylesKits";
class Index extends Component {
  params = {
    page: 1,
    pagesize: 10
  }
  state = {
    list: []
  }
  componentDidMount() {
    this.getList();
  }

  // 获取 推荐动态的数据
  getList = async () => {
    const res = await request.privateGet(QZ_TJDT, this.params);
    console.log(res);
    this.setState({ list: res.data });
  }
  render() {
    const { list } = this.state;
    return (
      <>
        <FlatList
          data={list}
          keyExtractor={v => v.tid + ""}
          renderItem={({ item, index }) => <View
            key={index}
            style={{ padding: pxToDp(10), borderBottomColor: "#ccc", borderBottomWidth: pxToDp(1) }}
          >
            {/* 2.2.1 用户信息 开始 */}
            <View style={{ flexDirection: "row" }}>
              <View
                style={{ paddingRight: pxToDp(15) }}
              ><Image
                  style={{ width: pxToDp(40), height: pxToDp(40), borderRadius: pxToDp(20) }}
                  source={{ uri: BASE_URI + item.header }} /></View>

              <View style={{ flex: 2, justifyContent: "space-around" }} >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={{ color: "#555" }} >{item.nick_name}</Text>
                  <IconFont style={{ marginLeft: pxToDp(5), marginRight: pxToDp(5), fontSize: pxToDp(18), color: item.gender === "女" ? "#b564bf" : "red" }}
                    name={item.gender === "女" ? "icontanhuanv" : "icontanhuanan"} />
                  <Text style={{ color: "#555" }} >{item.age}岁</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ color: "#555", marginRight: pxToDp(5) }} >{item.marry}</Text>
                  <Text style={{ color: "#555", marginRight: pxToDp(5) }} >|</Text>
                  <Text style={{ color: "#555", marginRight: pxToDp(5) }} >{item.xueli}</Text>
                  <Text style={{ color: "#555", marginRight: pxToDp(5) }} >|</Text>
                  <Text style={{ color: "#555", marginRight: pxToDp(5) }} >{item.agediff < 10 ? "年龄相仿" : "有点代沟"}</Text>
                </View>
              </View>

            </View>
            {/* 2.2.1 用户信息 结束 */}

            {/* 2.3 动态内容 开始 */}
            <View style={{ marginTop: pxToDp(8) }}>
              <Text style={{ color: "#666" }} >{item.content}</Text>
            </View>
            {/* 2.3 动态内容 结束 */}
            {/* 2.4 相册 开始 */}
            <View style={{ flexWrap: "wrap", flexDirection: "row", paddingTop: pxToDp(5), paddingBottom: pxToDp(5) }}>
              {item.images.map((vv, ii) => <TouchableOpacity
                onPress={() => this.handleShowAlbum(i, ii)}
                key={ii}><Image
                  style={{ width: pxToDp(70), height: pxToDp(70), marginRight: pxToDp(5) }}
                  source={{ uri: BASE_URI + vv.thum_img_path }} />
              </TouchableOpacity>
              )}
            </View>
            {/* 2.4 相册 结束 */}
          </View>}
        />
      </>
    );
  }
}
export default Index;