import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from "react-native-simple-radio-button";

class PartySize extends React.Component {
  // static navigationOptions = {
  //   title: "Welcome"
  // };
  constructor(props) {
    super(props);

    this.people = "small";

    this.people_props = [
      { label: "1-2", value: "small" },
      { label: "3-6", value: "medium" },
      { label: "7-10", value: "large" },
      { label: "11+", value: "extra large" }
    ];

    this.handlePress = this.handlePress.bind(this);
  }

  handlePress() {
    const { navigate } = this.props.navigation;

    navigate("NumberOfPlaces", { people: this.people });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          How many people are in your party? {"\n"}
        </Text>
        <RadioForm
          radio_props={this.people_props}
          initial={0}
          formHorizontal={true}
          labelHorizontal={false}
          buttonColor={"#00BF6F"}
          animation={true}
          onPress={value => {
            this.people = value;
          }}
        />
        <Button
          onPress={this.handlePress}
          title="Next"
          color="#00BF6F"
          accessibilityLabel="Submit"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: "#00BF6F"
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default PartySize;
