import {
  View,
  Text,
  StyleSheet,
  Image,
  Touchable,
  Pressable,
  Dimensions,
} from "react-native";

import { SubTitle } from "../../atom/subTitle/subTitile";
import { SpecialProdct } from "../../atom/specialProduct/specialProduct";

const screenWidth = Dimensions.get("window").width;

export const SpecialDeal = () => {
  
  return (
    <View >
      <SubTitle title="Special Deal" />
      <View style={{ flexDirection: "row", flexWrap: "wrap",flexGrow:1,flexShrink:1 }}>
        <SpecialProdct/>
        <SpecialProdct/>
        <SpecialProdct/>
        <SpecialProdct/>
      </View>
     
    </View>
  );
};
const styles = StyleSheet.create({
 
});
