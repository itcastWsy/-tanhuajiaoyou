import React, { Component } from 'react';
import { View, TouchableOpacity, Text, ImageBackground, Image } from 'react-native';
import request from "../../../../utils/request";
import { FRIENDS_QUESTIONSECTION, BASE_URI } from "../../../../utils/pathMap";
import THNav from "../../../../components/THNav";
import { pxToDp } from '../../../../utils/stylesKits';
import { inject, observer } from 'mobx-react';
import LinearGradient from "react-native-linear-gradient";
// qid: 1
// type: "初级"
// title: "初级灵魂题"
// star: 2
// imgpath: "/upload/questions/1.png"
// status: 0
// count: 3
// sort_no: 1
// istested: true
// islock: false

@inject("UserStore")
@observer
class Index extends Component {
  titles = {
    "初级": require("../../../../res/leve1.png"),
    "中级": require("../../../../res/leve2.png"),
    "高级": require("../../../../res/leve3.png")
  }
  state = {
    // 测试题问卷列表数据
    questionList: [
      // {
      //   "qsid": 1,
      //   "question_title": "未来生活的幸福指数，跟物质和精神哪个关系更 大？",
      //   "answers": [
      //     {
      //       "qsid": 1,
      //       "ans_title": "跟物质关系更大",
      //       "ans_No": "A"
      //     },
      //     {
      //       "qsid": 1,
      //       "ans_title": "跟精神关系更大",
      //       "ans_No": "B"
      //     }
      //   ]
      // }
    ],
    currentIndex: 0
  }
  componentDidMount() {
    this.getList();
  }
  // 获取测试题问卷
  getList = async () => {
    const url = FRIENDS_QUESTIONSECTION.replace(":id", this.props.route.params.qid);
    const res = await request.privateGet(url);
    this.setState({ questionList: res.data });
  }
  getFont = (number) => {
    let numCn = "";
    switch (number) {
      case 1:
        numCn = "一"
        break;
      case 2:
        numCn = "二"
        break;
      case 3:
        numCn = "三"
        break;
      case 4:
        numCn = "四"
        break;
      default:
        numCn = number;
        break;
    }
    return numCn;
  }
  render() {
    const { currentIndex, questionList } = this.state;
    const question = this.props.route.params;
    const user = this.props.UserStore.user;
    if (!questionList[currentIndex]) return <></>;
    return (
      <View style={{ flex: 1, backgroundColor: "#fff", position: "relative" }}>
        <THNav title={question.title} />
        <ImageBackground
          source={require("../../../../res/qabg.png")}
          style={{ width: "100%", height: "100%" }}
        >

          {/* 1.0 两侧图标 开始 */}
          <View style={{ marginTop: pxToDp(60), flexDirection: 'row', justifyContent: "space-between" }}>
            <ImageBackground
              style={{
                width: pxToDp(66), height: pxToDp(52), justifyContent: 'center', alignItems: "flex-end"
              }}
              source={require("../../../../res/qatext.png")}
            >
              <Image source={{ uri: BASE_URI + user.header }}
                style={{ width: pxToDp(50), height: pxToDp(50), borderRadius: pxToDp(25) }}
              />
            </ImageBackground>
            <ImageBackground
              style={{
                width: pxToDp(66), height: pxToDp(52), justifyContent: 'center', alignItems: "flex-end"
              }}
              source={this.titles[question.type]}
            >
            </ImageBackground>
          </View>
          {/* 1.0 两侧图标 结束 */}

          {/* 2.0  测试题 开始 */}
          <View style={{
            position: "absolute", width: "80%", top: pxToDp(60),
            alignSelf: 'center', alignItems: 'center'
          }}>
            <View>
              <Text style={{ color: "#fff", fontSize: pxToDp(26), fontWeight: "bold" }} >第{this.getFont(currentIndex + 1)}题</Text>
              <Text style={{ color: "#ffffff9a", textAlign: 'center' }} >({currentIndex + 1}/{questionList.length})</Text>
            </View>

            <Text style={{
              marginTop: pxToDp(30), fontSize: pxToDp(14), color: "#fff", fontWeight: "bold"

            }}>{questionList[currentIndex].question_title}</Text>

            {/* 3.0 答案 开始 */}

            <View style={{ width: "100%" }}>
              {questionList[currentIndex].answers.map((v, i) => <TouchableOpacity 
              key={i}
              style={{ marginTop: pxToDp(10) }}>
                <LinearGradient
                  style={{ height: pxToDp(40), borderRadius: pxToDp(6), alignItems: 'center', justifyContent: 'center' }}
                  colors={["#6f45f3", "#6f45f31a"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}

                >
                  <Text style={{ color: "#fff" }}>{v.ans_title}</Text>
                </LinearGradient>
              </TouchableOpacity>)}

            </View>
            {/* 3.0 答案 结束 */}
          </View>
          {/* 2.0  测试题 结束 */}
        </ImageBackground>
      </View>
    );
  }
}
export default Index;