import React, { Component } from 'react';
import { View } from 'react-native';
import Nav from "./src/nav";
import Geo from "./src/utils/Geo";
class App extends Component {
  async componentDidMount() {
    const res=await Geo.getCityByLocation();
    console.log(res);
  }
  render() {
    return (
      <View style={{flex:1}}>
        <Nav></Nav>
      </View>
    );
  }
}
export default App;