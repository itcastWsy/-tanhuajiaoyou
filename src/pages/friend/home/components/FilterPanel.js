import React, { Component } from 'react';
import { View, Text } from 'react-native';
class Index extends Component {
  render() {
    console.log(this.props.params);
    return (
      <View><Text>筛选组件</Text></View>
    );
  }
}
export default Index;