import React, { Component } from 'react';
import { View, Text } from 'react-native';
class Index extends Component {
  render() {
    console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
    console.log(this.props.route.params);
    console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");

    return (
      <View><Text>聊天</Text></View>
    );
  }
}
export default Index;