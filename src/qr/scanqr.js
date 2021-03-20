import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Dimensions,
} from 'react-native';


import QRCodeScanner from "react-native-qrcode-scanner";
import { RNCamera } from 'react-native-camera';
import * as Navigation from '../services/navigation';

export default class ScanQrCode extends Component {
  state = {
    qr: ""
  };

  static navigationOptions = {
    title: 'Scan Qr Code',
  };

  onSuccess = e => {
    this.setState({ qr: e.data });
    Navigation.navigate("Details", { data: e.data });
  };

  render() {
    return (
      <View style={{
        flex: 1,
      }}>
        <QRCodeScanner
          style={{ flex: 1 }}
          flashMode={RNCamera.Constants.FlashMode.auto}
          onRead={this.onSuccess}
          cameraStyle={{ height: (Dimensions.get("window").height) - 60 }}
          topViewStyle={{ flex: 0 }}
          bottomViewStyle={{ flex: 0 }}
        />
      </View>
    );
  }
}