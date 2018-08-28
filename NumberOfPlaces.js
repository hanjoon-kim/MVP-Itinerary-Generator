import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from "react-native-simple-radio-button";

class NumberOfPlaces extends React.Component {
  // static navigationOptions = {
  //   title: "Welcome"
  // };
  constructor(props) {
    super(props);

    this.places = 2;

    this.places_props = [
      { label: "2", value: 2 },
      { label: "3", value: 3 },
      { label: "4", value: 4 },
      { label: "5", value: 5 }
    ];

    this.handlePress = this.handlePress.bind(this);
  }

  handlePress() {
    const { navigate } = this.props.navigation;

    navigate("Drinks", { places: this.places });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>How many places? {"\n"}</Text>
        <RadioForm
          radio_props={this.places_props}
          initial={0}
          formHorizontal={true}
          labelHorizontal={false}
          buttonColor={"#00BF6F"}
          animation={true}
          onPress={value => {
            this.places = value;
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

export default NumberOfPlaces;
