import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import BarList from "./BarList.js";

class ResultScreen extends React.Component {
  static navigationOptions = {
    title: "Results"
  };
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.navigation.state.params.bars);
    return (
      <View>
        <View>
          <BarList bars={this.props.navigation.state.params.bars} />
        </View>

        <Button
          onPress={() => this.props.navigation.navigate("Home")}
          title="Start Again"
          color="#00BF6F"
          selectedButtonColor={"#00BF6F"}
          accessibilityLabel="Submit"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    width: "95%",
    fontSize: 30,
    color: "#00BF6F",
    textAlign: "center"
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default ResultScreen;
