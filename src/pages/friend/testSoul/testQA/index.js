import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import request from "../../../../utils/request";
import { FRIENDS_QUESTIONSECTION } from "../../../../utils/pathMap";
import THNav from "../../../../components/THNav";
import { pxToDp } from '../../../../utils/stylesKits';
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
class Index extends Component {
  titles={
    "初级":require("../../../../res/leve1.png"),
    "中级":require("../../../../res/leve2.png"),
    "高级":require("../../../../res/leve3.png")
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
  render() {
    console.log(this.props.route.params);
    const question = this.props.route.params;
    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
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

        </ImageBackground>
      </View>
    );
  }
}
export default Index;