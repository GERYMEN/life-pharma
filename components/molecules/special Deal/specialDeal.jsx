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
import { imagesdir } from "../../../assets/image";

const screenWidth = Dimensions.get("window").width;

export const SpecialDeal = () => {
  
  return (
    <View >
      <SubTitle title="Special Deal" />
      <View style={{ flexDirection: "row", flexWrap: "wrap",flexGrow:1,flexShrink:1 }}>
        <SpecialProdct name={"DHA Omega 3"} img={imagesdir.product_medicine1} id={1} price={"AED 127"} weight={"950 mg"}/>
        <SpecialProdct name={"Vick Steam Inhaler"} img={imagesdir.product_medicine2} id={2} price={"AED 127"} weight={"950 mg"}/>
        <SpecialProdct name={"DHA Omega 3"} img={imagesdir.product_medicine3} id={4} price={"AED 127"} weight={"950 mg"}/>
        <SpecialProdct name={"DHA Omega 3"} img={imagesdir.product_medicine4} id={3} price={"AED 127"} weight={"950 mg"}/>
      </View>
     
    </View>
  );
};
const styles = StyleSheet.create({
 
});
