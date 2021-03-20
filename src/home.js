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
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import * as Navigation from './services/navigation';
import Drawer from './drawer';

class Home extends Component {
  static navigationOptions = {
    // headerShown: false,
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {/* <Drawer /> */}
        <TouchableOpacity style={styles.button} onPress={() => {
          Navigation.navigate("Details", { data: "Hello 123456576567567" });
        }}>
          <Text style={{ color: "black", fontSize: 16 }}>Go to Details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, {
          marginVertical: 15
        }]} onPress={() => {
          Navigation.navigate("GenerateQR");
        }}>
          <Text style={{ color: "black", fontSize: 16 }}>Generate Qr Code</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {
          Navigation.navigate("ScanQR");
        }}>
          <Text style={{ color: "black", fontSize: 16 }}>Scan Qr Code</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: "gold",
  }
});