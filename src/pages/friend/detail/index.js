import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import request from "../../../utils/request";
import { FRIENDS_PERSONALINFO, BASE_URI } from "../../../utils/pathMap";
import HeaderImageScrollView from 'react-native-image-header-scroll-view';
// teaset 
import { Carousel } from "teaset";
import { pxToDp } from "../../../utils/stylesKits";


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
          <Carousel control  style={{ height: pxToDp(220) }}>
            {userDetail.silder.map((v, i) => <Image key={i}
              source={{ uri: BASE_URI + v.thum_img_path }}
              style={{ width: "100%", height: pxToDp(220) }}
            />)}
          </Carousel>
        )}
      >
        <View >

        </View>
      </HeaderImageScrollView>
    );
  }
}
export default Index;