import React, { Component } from "react";
import {
  AppRegistry,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView
} from "react-native";

class ResultScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View>
        <Text>Hello this is the second page!</Text>
      </View>
    );
  }
}

export default ResultScreen;
