import {
  View,
  Text,
  StyleSheet,
  Image,
  Touchable,
  Pressable,
  Dimensions,
} from "react-native";

import Carousel, { Pagination } from "react-native-snap-carousel";
import { imagesdir } from "../../../assets/image";
import {
  fontgray,
  gray,
  primaryColor,
  productPrimary,
} from "../../../assets/style";
import { useState } from "react";
import { IconButton } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Octicons from "react-native-vector-icons/Octicons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { SpecialProdct } from "../../atom/specialProduct/specialProduct";
import { SubTitle } from "../../atom/subTitle/subTitile";
const screenWidth = Dimensions.get("window").width;
export const FrequentPurchase = () => {
  const [index, setIndex] = useState(0);
  const Data = [...Array(4).keys()].map((i) => ({
    id: i,
  }));
  
  return (
    <View style={{backgroundColor:"#F8F8F8",paddingTop:10}}>
      <SubTitle title="Frequently Bought Together" style={{paddingLeft:20}}/>
      <Carousel
        data={Data}
        activeSlideAlignment="start"
        layout="default"
        renderItem={({ item }) => <SpecialProdct name={"DHA Omega 3"} img={imagesdir.product_medicine1} id={item.id} price={"AED 127"} weight={"950 mg"}/>}
        sliderWidth={screenWidth }
        sliderHeight={132}
        itemHeight={132}
        itemWidth={180}
        containerCustomStyle={styles.carouselContainer}
        inactiveSlideShift={0}
        useScrollView={false}
        inactiveSlideOpacity={1}
        inactiveSlideScale={1}
        onSnapToItem={(index) => setIndex(index)}
      />
      <Pagination
        dotsLength={Data.length}
        activeDotIndex={index/1}
        dotColor={gray}
        dotStyle={styles.dotStyle}
      />

     
    </View>
  );
};

const styles = StyleSheet.create({
  productFeature: {
    paddingHorizontal: 5,
    fontFamily: "Poppins-Medium",
    fontSize: 10,
    lineHeight: 15,
  },
  productDetailCard: {
    backgroundColor: productPrimary,
    height: 233,
    width: screenWidth - 40,
    borderRadius: 30,
    marginTop: 40,
    flex: 2,
  },
  carouselContainer: {
    paddingLeft:10
  },
  productImg: {
    position: "absolute",
    top: -70,
    left: 10,
    right: 0,
  },
  productImgCard: {
    //  position:'absolute',
    //  top:0,
    //  left:0
  },
  heart: {
    borderWidth: 0,
  },
  productDesc: {
    height: 80,
    width: 291,
    backgroundColor: productPrimary,
    opacity: 0.7,
    position: "absolute",
    bottom: 40,
    left: 30,
    borderRadius: 20,
  },
  dotStyle: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: gray,
  },
});
