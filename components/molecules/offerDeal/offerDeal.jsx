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
import { OfferProduct } from "../../atom/offerProduct/specialProduct";
import { secondaryColor } from "../../../assets/style";
import { imagesdir } from "../../../assets/image";

const screenWidth = Dimensions.get("window").width;

export const OfferDeal = () => {
  return (
    <View style={styles.offerContainer}>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          flexGrow: 1,
          flexShrink: 1,
        }}
      >
        <OfferProduct id={1} off={50} img={imagesdir.nutrition} title={"Nutrition"}/>
        <OfferProduct id={2} off={30} img={imagesdir.mensglooming} title={"Men’s Grooming"}/>
        <OfferProduct id={3} off={40} img={imagesdir.orcalCare} title={"Oral Care"}/>
        <OfferProduct id={4} off={35} img={imagesdir.fish_oil_and_Omeagas} title={"Fish Oil & Omegas"}/>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  offerContainer:{
    backgroundColor:secondaryColor,
    justifyContent:"center",
    paddingHorizontal:20
  }
});
