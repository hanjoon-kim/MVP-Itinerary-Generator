import ResultScreen from "./Results.js";
import PricePoint from "./PricePoint.js";
import Ambiance from "./Ambiance.js";
import PartySize from "./PartySize.js";
import NumberOfPlaces from "./NumberOfPlaces.js";
import Drinks from "./Drinks.js";
import Home from "./Home.js";

import { createStackNavigator } from "react-navigation";

const App = createStackNavigator(
  {
    Home: { screen: Home },
    PricePoint: { screen: PricePoint },
    Ambiance: { screen: Ambiance },
    PartySize: { screen: PartySize },
    NumberOfPlaces: { screen: NumberOfPlaces },
    Drinks: { screen: Drinks },
    Results: { screen: ResultScreen }
  },
  {
    initialRouteName: "Home",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#00BF6F"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);
console.disableYellowBox = true;
export default App;
