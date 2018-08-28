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
let config = {
  headers: {
    Authorization: `Bearer ${apiKey}`
  },
  params: {
    term: "bars",
    location: "944 market st, san francisco, ca",
    limit: 5,
    price: "4"
  }
};

class Drinks extends React.Component {
  static navigationOptions = {
    title: "5 of 5"
  };
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
    config.params.limit = this.props.navigation.state.params.places;
    config.params.price = this.props.navigation.state.params.price;
    axios
      .get("https://api.yelp.com/v3/businesses/search", config)
      .then(response =>
        navigate("Results", {
          bars: response.data.businesses,
          drinks: this.drinks
        })
      );
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
          selectedButtonColor={"#00BF6F"}
          animation={true}
          onPress={value => {
            this.drinks = value;
          }}
        />
        <Text>{"\n"}</Text>
        <Button
          onPress={this.handlePress}
          title="Submit"
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

export default Drinks;
