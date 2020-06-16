import React, { Component } from 'react';
import { View, Text } from 'react-native';
class Index extends Component {
  render() {
    console.log(this.props.route.params);
    return (
      <View><Text>用户详情</Text></View>
    );
  }
}
export default Index;