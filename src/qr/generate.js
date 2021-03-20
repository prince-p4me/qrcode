import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Dimensions,
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default class GenerateQrCode extends Component {
  state = {
    qr: ""
  };

  static navigationOptions = {
    title: 'Generate Qr Code',
  };

  render() {
    return (
      <View style={{
        flex: 1, justifyContent: "center",
        alignItems: "center", padding: 20,
      }}>
        <QRCode size={(Dimensions.get("window").width) - 40}
          value="http://awesome.link.qr"
        />
      </View>
    );
  }
}