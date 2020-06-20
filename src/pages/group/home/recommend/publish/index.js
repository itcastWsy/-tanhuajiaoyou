import React, { Component } from 'react';
import { View, Text } from 'react-native';
import THNav from "../../../../../components/THNav";
class Index extends Component {
  render() {
    return (
      <View>
        <THNav title="发动态" rightText="发帖"
          onRightPress={() => console.log("发帖了")}
        />

      </View>
    );
  }
}
export default Index;