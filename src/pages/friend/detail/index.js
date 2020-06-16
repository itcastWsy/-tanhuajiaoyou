import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import request from "../../../utils/request";
import { FRIENDS_PERSONALINFO, BASE_URI } from "../../../utils/pathMap";
import HeaderImageScrollView from 'react-native-image-header-scroll-view';
// teaset 
import { Carousel } from "teaset";
import { pxToDp } from "../../../utils/stylesKits";
import IconFont from "../../../components/IconFont";

class Index extends Component {
  state = {
    userDetail: {}
  }
  params = {
    page: 1,
    pagesize: 5
  }

  componentDidMount() {
    this.getDetail();
  }

  // 获取朋友详情
  getDetail = async () => {
    const url = FRIENDS_PERSONALINFO.replace(":id", this.props.route.params.id);
    const res = await request.privateGet(url, this.params);
    this.setState({ userDetail: res.data });
  }
  render() {
    // console.log(this.props.route.params);
    const { userDetail } = this.state;
    if (!userDetail.silder) return <></>
    return (
      <HeaderImageScrollView
        maxHeight={pxToDp(220)}
        minHeight={pxToDp(40)}
        renderForeground={() => (
          <Carousel control style={{ height: pxToDp(220) }}>
            {userDetail.silder.map((v, i) => <Image key={i}
              source={{ uri: BASE_URI + v.thum_img_path }}
              style={{ width: "100%", height: pxToDp(220) }}
            />)}
          </Carousel>
        )}
      >
        <View >
          {/* 1.0 用户个人信息 开始 */}
          <View style={{  flexDirection: "row",padding:pxToDp(5),borderBottomWidth:pxToDp(1),borderColor:"#ccc" }}>
            <View style={{ flex: 2, justifyContent: "space-around" }} >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ color: "#555" }} >{userDetail.nick_name}</Text>
                <IconFont style={{ marginLeft:pxToDp(5),marginRight:pxToDp(5),  fontSize: pxToDp(18), color: userDetail.gender === "女" ? "#b564bf" : "red" }}
                  name={userDetail.gender === "女" ? "icontanhuanv" : "icontanhuanan"} />
                <Text style={{ color: "#555" }} >{userDetail.age}岁</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ color: "#555",marginRight:pxToDp(5) }} >{userDetail.marry}</Text>
                <Text style={{ color: "#555",marginRight:pxToDp(5) }} >|</Text>
                <Text style={{ color: "#555",marginRight:pxToDp(5) }} >{userDetail.xueli}</Text>
                <Text style={{ color: "#555",marginRight:pxToDp(5) }} >|</Text>
                <Text style={{ color: "#555",marginRight:pxToDp(5) }} >{userDetail.agediff < 10 ? "年龄相仿" : "有点代沟"}</Text>
              </View>
            </View>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
              <View style={{ position: "relative", alignItems: "center", justifyContent: "center" }}>
                <IconFont name="iconxihuan" style={{ fontSize: pxToDp(50), color: "red" }} />
                <Text style={{ position: "absolute", color: "#fff", fontSize: pxToDp(13), fontWeight: "bold" }} >{userDetail.fateValue}</Text>
              </View>
              <Text style={{ color: "red", fontSize: pxToDp(13) }} >缘分值</Text>
            </View>
          </View>
          {/* 1.0 用户个人信息 结束 */}
        </View>
      </HeaderImageScrollView>
    );
  }
}
export default Index;