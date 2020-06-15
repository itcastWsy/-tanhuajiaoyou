import React, { Component } from 'react';
import { View, Text } from 'react-native';
import request from "../../../../utils/request";
import {FRIENDS_QUESTIONSECTION} from "../../../../utils/pathMap";

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
  state={
    // 测试题问卷列表数据
    questionList:[
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
    currentIndex:0
  }
  componentDidMount() {
    this.getList();
  }
  // 获取测试题问卷
  getList=async()=>{
    const url=FRIENDS_QUESTIONSECTION.replace(":id",this.props.route.params.qid);
    const res=await request.privateGet(url);
    this.setState({ questionList:res.data  });
  }
  render() {
    console.log(this.props.route.params);
    return (
      <View><Text>填写问卷页面</Text></View>
    );
  }
}
export default Index;