import React, { Component } from 'react';
import { View, Text } from 'react-native';
class Index extends Component {
  render() {
    console.log(this.props);
    return (
      <View><Text>喜欢</Text></View>
    );
  }
}
export default Index;