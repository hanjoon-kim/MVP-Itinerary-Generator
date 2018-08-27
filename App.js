import React, { Component } from "react";
import {
  AppRegistry,
  ViewPropTypes,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView
} from "react-native";
import MultiSwitch from "rn-slider-switch";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from "react-native-simple-radio-button";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      type: "",
      price: "$",
      numberOfPeople: 0,
      startTime: "16",
      length: 1,
      value: 0.2,
      radio: 0
    };

    this.price_props = [
      { label: "$", value: 0 },
      { label: "$$", value: 1 },
      { label: "$$$", value: 2 },
      { label: "$$$$", value: 3 }
    ];

    this.crazy_props = [
      { label: "Chill", value: 0 },
      { label: "Constantly on fire", value: 1 },
      { label: "Start slow and ascend", value: 2 },
      { label: "Somewhere in the middle", value: 3 }
    ];

    this.people_props = [
      { label: "1-2", value: 0 },
      { label: "3-6", value: 1 },
      { label: "7-10", value: 2 },
      { label: "11+", value: 3 }
    ];
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
        <Text style={styles.header}>
          {"\n"} Hanjoon's MVP Guest List {"\n"}
        </Text>
        <ScrollView
          width="90%"
          display="flex"
          contentContainerStyle={{ alignItems: "stretch" }}
        >
          <View>
            <Text>What's your price point? {"\n"}</Text>
            <RadioForm
              radio_props={this.price_props}
              initial={0}
              formHorizontal={false}
              labelHorizontal={true}
              buttonColor={"#2196f3"}
              animation={true}
              onPress={value => {
                this.setState({ value: value });
              }}
            />
            <Text>What kind of night do you want? {"\n"}</Text>
            <RadioForm
              radio_props={this.crazy_props}
              initial={0}
              formHorizontal={false}
              labelHorizontal={true}
              buttonColor={"#2196f3"}
              animation={true}
              onPress={value => {
                this.setState({ value: value });
              }}
            />
            <Text>How many people are you in your party? {"\n"}</Text>
            <RadioForm
              radio_props={this.people_props}
              initial={0}
              formHorizontal={false}
              labelHorizontal={true}
              buttonColor={"#2196f3"}
              animation={true}
              onPress={value => {
                this.setState({ value: value });
              }}
            />
          </View>
        </ScrollView>
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
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
