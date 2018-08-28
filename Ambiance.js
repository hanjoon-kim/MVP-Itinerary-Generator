import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from "react-native-simple-radio-button";

class Ambiance extends React.Component {
  static navigationOptions = {
    title: "2 of 5"
  };
  constructor(props) {
    super(props);

    this.ambiance = 1;

    this.ambiance_props = [
      { label: "    Chill     ", value: 1 },
      { label: "   On Fire   ", value: 2 },
      { label: "In Between", value: 3 }
    ];

    this.handlePress = this.handlePress.bind(this);
  }

  handlePress() {
    const { navigate } = this.props.navigation;

    navigate("PartySize", { ambiance: this.ambiance });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          What kind of ambiance do you want? {"\n"}
        </Text>
        <RadioForm
          radio_props={this.ambiance_props}
          initial={0}
          formHorizontal={true}
          labelHorizontal={false}
          buttonColor={"#00BF6F"}
          selectedButtonColor={"#00BF6F"}
          animation={true}
          onPress={value => {
            this.ambiance = value;
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

export default Ambiance;
