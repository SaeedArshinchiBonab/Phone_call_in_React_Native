import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking, Platform } from 'react-native';

export default class App extends Component {
  dialCall = () => {

    let phoneNumber = '';

    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${+989142345131}';
    }
    else {
      phoneNumber = 'telprompt:${+989142345131}';
    }

    Linking.openURL(phoneNumber);
  };

  render() {
    return (
      <View style={styles.MainContainer}>

        <TouchableOpacity onPress={this.dialCall} activeOpacity={0.7} style={styles.button} >

          <Text style={styles.TextStyle}>تماس با سعید آرشین چی بناب</Text>

        </TouchableOpacity>

      </View>

    );
  }
}

const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {

    width: '80%',
    padding: 6,
    backgroundColor: '#FF6F00',
    borderRadius: 7,
  },

  TextStyle: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'IRANSansMobile',
    fontSize: 22
  }

});
