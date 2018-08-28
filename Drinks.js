import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from "react-native-simple-radio-button";
import axios from "axios";
import "./yelpAPI.js";

const apiKey = global.YELP_API_KEY;
const config = {
  headers: {
    Authorization: `Bearer ${apiKey}`
  },
  params: {
    term: "bars",
    location: "944 market st, san francisco, ca",
    limit: 5
  }
};

class Drinks extends React.Component {
  // static navigationOptions = {
  //   title: "Welcome"
  // };
  constructor(props) {
    super(props);

    this.drinks = "Water";

    this.drinks_props = [
      { label: "Water ", value: 0 },
      { label: "  Beer  ", value: 1 },
      { label: " Wine ", value: 2 },
      { label: "Whiskey", value: 3 },
      { label: "Cocktails", value: 4 },
      { label: "Everything", value: 5 }
    ];

    this.handlePress = this.handlePress.bind(this);
  }

  handlePress() {
    const { navigate } = this.props.navigation;
    axios
      .get("https://api.yelp.com/v3/businesses/search", config)
      .then(response => console.log(response));
    navigate("Results", { drinks: this.drinks });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>What kind of drinks do you want? {"\n"}</Text>
        <RadioForm
          radio_props={this.drinks_props}
          initial={0}
          formHorizontal={true}
          labelHorizontal={false}
          buttonColor={"#00BF6F"}
          animation={true}
          onPress={value => {
            this.drinks = value;
          }}
        />
        <Button
          onPress={this.handlePress}
          title="Submit"
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

export default Drinks;
