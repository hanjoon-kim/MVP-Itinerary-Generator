import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import MultiSwitch from "rn-slider-switch";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      type: "",
      price: "$",
      numberOfPeople: 0,
      startTime: "16",
      length: 1
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
        <Text>Hanjoon's MVP Guest List</Text>

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
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
