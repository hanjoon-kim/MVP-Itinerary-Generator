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
    limit: 2
  }
};

class FormScreen extends React.Component {
  static navigationOptions = {
    title: "Welcome"
  };
  constructor(props) {
    super(props);

    this.state = {
      price: 1,
      crazy: 1,
      partySize: "small",
      numberOfPlaces: 2,
      drinks: 0
    };

    this.price_props = [
      { label: "$", value: 1 },
      { label: "$$", value: 2 },
      { label: "$$$", value: 3 },
      { label: "$$$$", value: 4 }
    ];

    this.ambiance_props = [
      { label: "Chill", value: 1 },
      { label: "Constantly on fire", value: 2 },
      { label: "Somewhere in the middle", value: 3 },
      { label: "Start slow and ascend", value: 4 }
    ];

    this.people_props = [
      { label: "1-2", value: "small" },
      { label: "3-6", value: "medium" },
      { label: "7-10", value: "large" },
      { label: "11+", value: "extra large" }
    ];

    this.places_props = [
      { label: "2", value: 2 },
      { label: "3", value: 3 },
      { label: "4", value: 4 },
      { label: "5", value: 5 }
    ];

    this.drinks_props = [
      { label: "Water", value: 0 },
      { label: "Beer", value: 1 },
      { label: "Wine", value: 2 },
      { label: "Whiskey", value: 3 },
      { label: "Cocktails", value: 4 },
      { label: "Other Spirits", value: 5 }
    ];

    this.searchRequest = {
      term: "bar",
      location: "san francsisco, ca"
    };

    this.handlePress = this.handlePress.bind(this);
  }

  handlePress() {
    const { navigate } = this.props.navigation;
    axios
      .get("https://api.yelp.com/v3/businesses/search", config)
      .then(response => console.log(response));
    navigate("Results");
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Hanjoon's MVP Guest List {"\n"}</Text>
        <ScrollView
          width="90%"
          display="flex"
          contentContainerStyle={{ alignItems: "stretch" }}
        >
          <View style={styles.buttons}>
            <Text>What's your price point? {"\n"}</Text>
            <RadioForm
              radio_props={this.price_props}
              initial={0}
              formHorizontal={false}
              labelHorizontal={true}
              buttonColor={"#2196f3"}
              animation={true}
              onPress={value => {
                this.setState({ price: value });
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
                this.setState({ crazy: value });
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
                this.setState({ partySize: value });
              }}
            />
            <Text>How many places? {"\n"}</Text>
            <RadioForm
              radio_props={this.places_props}
              initial={0}
              formHorizontal={false}
              labelHorizontal={true}
              buttonColor={"#2196f3"}
              animation={true}
              onPress={value => {
                this.setState({ numberOfPlaces: value });
              }}
            />
            <Text>What kind of drinks do you want? {"\n"}</Text>
            <RadioForm
              radio_props={this.drinks_props}
              initial={0}
              formHorizontal={false}
              labelHorizontal={true}
              buttonColor={"#2196f3"}
              animation={true}
              onPress={value => {
                this.setState({ drinks: value });
              }}
            />
          </View>
        </ScrollView>
        <Button
          onPress={this.handlePress}
          title="Submit"
          color="#841584"
          accessibilityLabel="Submit"
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
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  buttons: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start"
  }
});

export default FormScreen;
