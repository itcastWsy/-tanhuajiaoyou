import React, { Component } from 'react';
import { TouchableOpacity, View, Text, ImageBackground, StyleSheet, Image } from 'react-native';
import THNav from "../../../components/THNav";
import Swiper from "react-native-deck-swiper";
import request from "../../../utils/request";
import { FRIENDS_CARDS, BASE_URI } from "../../../utils/pathMap";
import IconFont from "../../../components/IconFont";
import { pxToDp } from "../../../utils/stylesKits";
class Index extends Component {
  params = {
    page: 1,
    pagesize: 5
  }
  state = {
    cards: [
      //       id: 8
      // header: "/upload/13828459782.png"
      // nick_name: "雾霭朦胧"
      // age: 21
      // gender: "女"
      // marry: "未婚"
      // xueli: "大专"
      // dist: 0
    ]
  }

  componentDidMount() {
    this.getFriendsCards();
  }

  // 获取要渲染的数据
  getFriendsCards = async () => {
    const res = await request.privateGet(FRIENDS_CARDS, this.params);
    this.setState({ cards: res.data });

  }
  render() {
    const { cards } = this.state;
    if (cards.length === 0) {
      return <></>
    }
    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <THNav title="探花" />
        <ImageBackground
          style={{ height: "60%" }}
          imageStyle={{ height: "100%" }}
          source={require("../../../res/testsoul_bg.png")}
        >
          <Swiper
            cards={cards}
            renderCard={(card) => {
              return (
                <View style={styles.card} >
                  <Image source={{ uri: BASE_URI + card.header }}
                    style={{ width: "100%", height: "80%" }}
                  />
                  {/* 网友信息 开始 */}
                  <View style={{ flex: 1, alignItems: "center", justifyContent: "space-around" }} >
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                      <Text style={{ color: "#555" }} >{card.nick_name}</Text>
                      <IconFont style={{ fontSize: pxToDp(18), color: card.gender === "女" ? "#b564bf" : "red" }}
                        name={card.gender === "女" ? "icontanhuanv" : "icontanhuanan"} />
                      <Text style={{ color: "#555" }} >{card.age}岁</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={{ color: "#555" }} >{card.marry}</Text>
                      <Text style={{ color: "#555" }} >|</Text>
                      <Text style={{ color: "#555" }} >{card.xueli}</Text>
                      <Text style={{ color: "#555" }} >|</Text>
                      <Text style={{ color: "#555" }} >{card.agediff < 10 ? "年龄相仿" : "有点代沟"}</Text>
                    </View>
                  </View>
                  {/* 网友信息 结束 */}
                </View>
              )
            }}
            onSwiped={(cardIndex) => { console.log(cardIndex) }}
            onSwipedAll={() => { console.log('onSwipedAll') }}
            cardIndex={0}
            backgroundColor={'transparent'}
            cardVerticalMargin={0}
            stackSize={3}>
          </Swiper>
        </ImageBackground>

        {/* 两个小图标 */}
        <View
        style={{flexDirection:"row",
        justifyContent:"space-between",
        width:"60%",
        alignSelf:"center",
        marginTop:pxToDp(40)
      }}
        >
          <TouchableOpacity
          style={{backgroundColor:"#ebc869",width:pxToDp(60),
          height:pxToDp(60),borderRadius:pxToDp(30),alignItems:"center",justifyContent:"center"
        }}
          >
            <IconFont style={{fontSize:pxToDp(30),color:"#fff"}} name="iconbuxihuan" />
          </TouchableOpacity>
          <TouchableOpacity
          style={{backgroundColor:"#fd5213",width:pxToDp(60),
          height:pxToDp(60),borderRadius:pxToDp(30),alignItems:"center",justifyContent:"center"
        }}
          >
            <IconFont style={{fontSize:pxToDp(30),color:"#fff"}} name="iconxihuan" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({

  card: {
    height: "60%",
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    backgroundColor: "white"
  },
  text: {
    textAlign: "center",
    fontSize: 50,
    backgroundColor: "transparent"
  }
});

export default Index;