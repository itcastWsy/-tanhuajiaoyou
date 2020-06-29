import DatePicker from "react-native-datepicker";
import date from "../../../utils/date";
import React, { Component } from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import THNav from "../../../components/THNav";
import { inject, observer } from 'mobx-react';
import { ListItem } from "react-native-elements";
import { pxToDp } from '../../../utils/stylesKits';
import { BASE_URI, ACCOUNT_CHECKHEADIMAGE, MY_SUBMITUSERINFO, MY_INFO } from '../../../utils/pathMap';
import ImagePicker from 'react-native-image-crop-picker';
import request from "../../../utils/request";
import Toast from "../../../utils/Toast";
import { Overlay } from "react-native-elements";
@inject("UserStore")
@observer
class Index extends Component {

  state = {
    // 是否显示 昵称输入框
    showNickName: false
  }
  // 选择头像
  onPickerImage = async () => {
    // 1   获取到 选中后的图片
    const image = await ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    });

    // 2 将本地图片上传到服务器
    const res = await this.uploadHeadImg(image);
    // res.data.headImgShortPath 
    const header = res.data.headImgShortPath;

    const res2 = await this.onSubmitUser({ header });
    console.log(res2);
  }

  // 完成编辑
  // user={header} ={nickname}
  onSubmitUser = async (user) => {
    const res = await request.privatePost(MY_SUBMITUSERINFO, user);
    // 1 给用户友好的提示
    Toast.smile("修改成功");
    // 2 刷新数据 
    const res2 = await request.privateGet(MY_INFO);
    this.props.UserStore.setUser(res2.data);
    return Promise.resolve(res);

  }

  // 上传头像
  uploadHeadImg = (image) => {
    // 构造参数 发送到后台 完成 头像上传
    let formData = new FormData();
    formData.append("headPhoto", {
      // 本地图片的地址
      uri: image.path,
      // 图片的类型
      type: image.mime,
      // 图片的名称 file:///store/com/pic/dsf/d343.jpg
      name: image.path.split("/").pop()
    });
    // 因为 我们打开了 调式模式  调试工具 对网络拦截处理 导致一些请求失败
    // 不要打开任何调试工具 只使用控制台即可 
    // 执行头像上传
    return request.privatePost(ACCOUNT_CHECKHEADIMAGE, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
  }
  // 编辑昵称
  nickNameUpdate = async (e) => {
    // 1 获取到输入框的文本 (1 state中声明txt变量 绑定在输入框的value值和 onChangeText )
    // 2 非受控表单的方式 

    const nickname = e.nativeEvent.text;
    if (!nickname) return;

    await this.onSubmitUser({ nickname });
    this.setState({ showNickName: false });

  }
  // 编辑生日
  birthdayUpdate=async(birthday)=>{
    // console.log(birthday);
    this.onSubmitUser({birthday});
  }
  render() {
    const user = this.props.UserStore.user;
    const { showNickName } = this.state;
    return (
      <View>

        <Overlay visible={showNickName} onBackdropPress={() => this.setState({ showNickName: false })}  >
          <TextInput placeholder="修改昵称"
            onSubmitEditing={this.nickNameUpdate}
            style={{ width: pxToDp(200) }}
          />
        </Overlay>
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
          onPress={this.onPickerImage}
        />
        <ListItem
          title="昵称"
          titleStyle={{ color: "#666" }}
          rightTitle={user.nick_name}
          chevron
          bottomDivider
          onPress={() => this.setState({ showNickName: true })}
        />
        <View style={{position:"relative"}}>
          <ListItem
            title="生日"
            titleStyle={{ color: "#666" }}
            rightTitle={date(user.birthday).format("YYYY-MM-DD")}
            chevron
            bottomDivider
          />
          <DatePicker
            androidMode="spinner"
            style={{ width: "100%",position:"absolute",top:0,left:0,height:"100%",opacity:0 }}
            date={date(user.birthday).format("YYYY-MM-DD")}
            mode="date"
            placeholder="设置生日"
            format="YYYY-MM-DD"
            minDate="1900-01-01"
            maxDate={date(new Date()).format("YYYY-MM-DD")}
            confirmBtnText="确定"
            cancelBtnText="取消"
            onDateChange={this.birthdayUpdate}
          />
        </View>
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