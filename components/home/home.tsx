import { View } from "react-native";
import { CharacterCards } from "../characterCards/characterCards";
import { HomeStyles } from "./homeStyles";

export const Home = () => {
  return (
    <View>
      <HomeStyles.Title>Dragon Ball</HomeStyles.Title>
      <CharacterCards />
    </View>
  );
};
