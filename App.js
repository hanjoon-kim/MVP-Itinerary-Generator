import React, { Component } from "react";
import {
  AppRegistry,
  ViewPropTypes,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Button
} from "react-native";
import PropTypes from "prop-types";
import MultiSwitch from "rn-slider-switch";
import Slider from "react-native-slider";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      type: "",
      price: "$",
      numberOfPeople: 0,
      startTime: "16",
      length: 1,
      value: 0.2
    };

    this.handlePress = this.handlePress.bind(this);
  }

  handlePress() {
    console.log("pressed skrrt");
  }

  render() {
    // Type of Night Selection
    // Ascending
    // Descending
    // Constantly on fire
    // Chill
    // Somewhere in the middle
    // Price Point
    // $
    // $$
    // $$$
    // $$$$
    // Number of People in Party
    // Input
    // Start time
    // Length of Night
    // Number of Places

    return (
      <View style={styles.container}>
        <Text style={styles.header}>Hanjoon's MVP Guest List</Text>

        <View style={styles.choices}>
          <Slider
            value={this.state.value}
            onValueChange={value => this.setState({ value })}
          />
          <Text>Value: {this.state.value}</Text>
        </View>

        <MultiSwitch
          currentStatus={"Open"}
          disableScroll={value => {
            console.log("scrollEnabled", value);
            // this.scrollView.setNativeProps({
            //     scrollEnabled: value
            // });
          }}
          isParentScrollEnabled={false}
          onStatusChanged={text => {
            console.log("Change Status ", text);
          }}
        />
        <Button
          onPress={this.handlePress}
          title="Submit"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontWeight: "bold"
  },
  choices: {
    flex: 0.5,
    marginLeft: 15,
    marginRight: 15,
    alignItems: "stretch"
    // justifyContent: "center"
  },
  container: {
    flex: 0.5,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
