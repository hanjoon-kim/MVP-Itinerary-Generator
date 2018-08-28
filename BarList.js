import React, { Component } from "react";
import { ScrollView, View } from "react-native";

import BarListEntry from "./BarListEntry.js";

function BarList(props) {
  const bars = props.bars;
  return (
    <View>
      <ScrollView>
        {bars.map(bar => (
          <BarListEntry bar={bar} />
        ))}
      </ScrollView>
    </View>
  );
}

export default BarList;
