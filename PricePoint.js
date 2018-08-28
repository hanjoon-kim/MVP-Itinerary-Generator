import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from "react-native-simple-radio-button";

class PricePoint extends React.Component {
  static navigationOptions = {
    title: "1 of 5"
  };

  constructor(props) {
    super(props);

    this.price = "1";

    this.price_props = [
      { label: "$", value: "1" },
      { label: "$$", value: "2" },
      { label: "$$$", value: "3" },
      { label: "$$$$", value: "4" }
    ];

    this.handlePress = this.handlePress.bind(this);
  }

  handlePress() {
    const { navigate } = this.props.navigation;

    navigate("Ambiance", { price: this.price });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          How much money are you trying to spend? {"\n"}
        </Text>
        <RadioForm
          radio_props={this.price_props}
          initial={0}
          formHorizontal={true}
          labelHorizontal={false}
          buttonColor={"#00BF6F"}
          selectedButtonColor={"#00BF6F"}
          animation={true}
          onPress={value => {
            this.price = value;
          }}
        />
        <Text>{"\n"}</Text>
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

export default PricePoint;
