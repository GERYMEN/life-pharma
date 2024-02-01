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
import { PremiumProductCard } from "../../atom/premiumProductCard/premiumProductCard";
import { imagesdir } from "../../../assets/image";


export const PremiumProduct = () => {
  
  return (
    <View >
      <SubTitle title="Premium Picks" />
      <View style={{ flexDirection: "row", flexWrap: "wrap",flexGrow:1,flexShrink:1 }}>
        <PremiumProductCard id={1} title={"Vega protean"} sub={"Lorem ipsum dolor sit amet consectetur"} img={imagesdir.vega_products} price={"AED 222"}/>
        <PremiumProductCard id={2} title={"Dymatize Iso 100 5 Lb Chocolate"} sub={"Lorem ipsum dolor sit amet consectetur"} img={imagesdir.dymatize} price={"AED 329"}/>
        <PremiumProductCard id={3} title={"Vega protean"} sub={"Lorem ipsum dolor sit amet consectetur"} img={imagesdir.vega_products} price={"AED 222"}/>
      </View>
     
    </View>
  );
};
const styles = StyleSheet.create({
 
});
