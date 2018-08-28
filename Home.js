import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from "react-native-simple-radio-button";

class Home extends React.Component {
  static navigationOptions = {
    title: "MVP Guest List"
  };
  constructor(props) {
    super(props);

    this.handlePress = this.handlePress.bind(this);
  }

  handlePress() {
    const { navigate } = this.props.navigation;

    navigate("PricePoint");
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Ready for a fun night? {"\n"}</Text>
        <Text>{"\n"}</Text>
        <Button
          onPress={this.handlePress}
          title="Let's Start!"
          color="#00BF6F"
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

export default Home;
