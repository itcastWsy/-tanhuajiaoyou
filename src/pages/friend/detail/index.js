import React, { Component } from 'react';
import { View, Text, Image ,TouchableOpacity} from 'react-native';
import request from "../../../utils/request";
import { FRIENDS_PERSONALINFO, BASE_URI } from "../../../utils/pathMap";
import HeaderImageScrollView from 'react-native-image-header-scroll-view';
// teaset 
import { Carousel } from "teaset";
import { pxToDp } from "../../../utils/stylesKits";
import IconFont from "../../../components/IconFont";
import LinearGradient from "react-native-linear-gradient";

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
        <View style={{backgroundColor:"#fff"}} >
          {/* 1.0 用户个人信息 开始 */}
          <View style={{ flexDirection: "row", padding: pxToDp(5), borderBottomWidth: pxToDp(1), borderColor: "#ccc" }}>
            <View style={{ flex: 2, justifyContent: "space-around" }} >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ color: "#555" }} >{userDetail.nick_name}</Text>
                <IconFont style={{ marginLeft: pxToDp(5), marginRight: pxToDp(5), fontSize: pxToDp(18), color: userDetail.gender === "女" ? "#b564bf" : "red" }}
                  name={userDetail.gender === "女" ? "icontanhuanv" : "icontanhuanan"} />
                <Text style={{ color: "#555" }} >{userDetail.age}岁</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ color: "#555", marginRight: pxToDp(5) }} >{userDetail.marry}</Text>
                <Text style={{ color: "#555", marginRight: pxToDp(5) }} >|</Text>
                <Text style={{ color: "#555", marginRight: pxToDp(5) }} >{userDetail.xueli}</Text>
                <Text style={{ color: "#555", marginRight: pxToDp(5) }} >|</Text>
                <Text style={{ color: "#555", marginRight: pxToDp(5) }} >{userDetail.agediff < 10 ? "年龄相仿" : "有点代沟"}</Text>
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
          {/* 2.0 动态 开始 */}
          <View>
            {/* 2.1 标题 开始 */}
            <View style={{  padding: pxToDp(10), flexDirection: "row", justifyContent: 'space-between', borderBottomWidth: pxToDp(1), borderColor: "#ccc" }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ color: "#666" }} >动态</Text>
                <View style={{
                  backgroundColor: "red", width: pxToDp(16), height: pxToDp(16),
                  borderRadius: pxToDp(8), alignItems: "center", justifyContent: 'center',
                  marginLeft: pxToDp(5)
                }} >
                  <Text style={{ color: "#fff" }} >3</Text>
                </View>
              </View>
              <View style={{flexDirection:"row"}}>
              <TouchableOpacity
              style={{marginRight:pxToDp(8)}}
              >
                <LinearGradient
                colors={["#f2ab5a","#ec7c50"]}
                start={{x:0,y:0}}
                end={{x:1,y:0}}
                style={{
                  width:pxToDp(100),height:pxToDp(30),borderRadius:pxToDp(15),
                  flexDirection:"row",alignItems:'center',justifyContent:"space-evenly"
                }}
                >
                  <IconFont style={{color:"#fff"}} name="iconliaotian" ></IconFont>
                  <Text style={{color:"#fff"}}>聊一下</Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity
              style={{marginRight:pxToDp(8)}}
              >
                <LinearGradient
                colors={["#6d47f8","#e56b7f"]}
                start={{x:0,y:0}}
                end={{x:1,y:0}}
                style={{
                  width:pxToDp(100),height:pxToDp(30),borderRadius:pxToDp(15),
                  flexDirection:"row",alignItems:'center',justifyContent:"space-evenly"
                }}
                >
                  <IconFont style={{color:"#fff"}} name="iconxihuan-o" ></IconFont>
                  <Text style={{color:"#fff"}}>喜欢</Text>
                </LinearGradient>
              </TouchableOpacity>
              </View>
            </View>
            {/* 2.1 标题 结束 */}
          </View>
          {/* 2.0 动态 结束 */}
        </View>
      </HeaderImageScrollView>
    );
  }
}
export default Index;