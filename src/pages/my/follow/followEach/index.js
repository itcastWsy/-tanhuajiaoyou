import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SearchInput from "../components/SearchInput";
import { pxToDp } from '../../../../utils/stylesKits';
class Index extends Component {
  state={
    txt:"123"
  }
  render() {
    return (
      <View>
        <SearchInput onChangeText={txt=>this.setState({txt})} value={this.state.txt} style={{marginTop:pxToDp(10)}} />
      </View>
    );
  }
}
export default Index;