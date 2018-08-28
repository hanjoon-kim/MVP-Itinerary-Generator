import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const BarListEntry = props => (
  <View>
    <Image
      source={{ uri: props.bar.image_url }}
      style={{
        width: 400,
        height: 400
      }}
    />
    {/* <Text style={styles.name}>{props.bar.name}</Text> */}
  </View>
);

const styles = StyleSheet.create({
  name: {
    width: "95%",
    fontSize: 30
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
export default BarListEntry;
