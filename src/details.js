/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  StatusBar,
} from 'react-native';
import * as Navigation from './services/navigation';

class Details extends Component {

  constructor(props) {
    super(props);
    let { navigation } = this.props;

    this.state = {
      data: props.navigation.getParam("data")
    }
  }

  // componentWillMount = () => {
  //   // let data = this.props.navigation.state.params.data;
  //   let data = navigation.getParam("data");
  //   this.setState({ data }, () => {
  //     console.log("data is:-" + this.state.data);
  //   });
  //   console.log(this.props);
  // }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity style={[{
          paddingVertical: 8,
          paddingHorizontal: 12,
          backgroundColor: "gold",
          marginVertical: 15
        }]} onPress={() => {
          Navigation.goBack();
        }}>
          <Text style={{ color: "black", fontSize: 16 }}>Back</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 16 }}>Your data is :--</Text>
        <Text style={{ fontSize: 16 }}>{this.state.data}</Text>
      </View>
    );
  }
}

export default Details;
