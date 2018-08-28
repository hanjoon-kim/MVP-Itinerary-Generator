import ResultScreen from "./Results.js";
import PricePoint from "./PricePoint.js";
import Ambiance from "./Ambiance.js";
import PartySize from "./PartySize.js";
import NumberOfPlaces from "./NumberOfPlaces.js";
import Drinks from "./Drinks.js";

import { createStackNavigator } from "react-navigation";

const App = createStackNavigator({
  PricePoint: { screen: PricePoint },
  Ambiance: { screen: Ambiance },
  PartySize: { screen: PartySize },
  NumberOfPlaces: { screen: NumberOfPlaces },
  Drinks: { screen: Drinks },
  Results: { screen: ResultScreen }
});

export default App;
