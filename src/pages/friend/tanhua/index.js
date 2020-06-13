import React, { Component } from 'react';
import { View, Text, ImageBackground,StyleSheet,Image } from 'react-native';
import THNav from "../../../components/THNav";
import Swiper from "react-native-deck-swiper";
import request from "../../../utils/request";
import { FRIENDS_CARDS, BASE_URI } from "../../../utils/pathMap";
class Index extends Component {
  params={
    page:1,
    pagesize:5
  }
  state={
    cards:[
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
  getFriendsCards=async ()=>{
    const res=await request.privateGet(FRIENDS_CARDS,this.params);
    this.setState({ cards :res.data  });

  }
  render() {
    const {cards}=this.state;
    if(cards.length===0){
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
                  <Image source={{uri:BASE_URI+card.header}} 
                  style={{width:"100%",height:"80%"}}
                  />
                  </View>
                )
              }}
              onSwiped={(cardIndex) => { console.log(cardIndex) }}
              onSwipedAll={() => { console.log('onSwipedAll') }}
              cardIndex={0}
              backgroundColor={'transparent'}
              cardVerticalMargin={0}
              stackSize={6}>
            </Swiper>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({

  card: {
   
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