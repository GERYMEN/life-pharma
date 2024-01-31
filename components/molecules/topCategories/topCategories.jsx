import {
  View,
  Text,
  StyleSheet,
  Image,
  Touchable,
  Pressable,
  Dimensions,
} from "react-native";
import { TopCategoriesCapsule } from "../../atom/topCategoriesCapsule/topCategoriesCapsule";
import { TopCategoriesCapsuleC } from "../../atom/topCategoriesCapsule/topCategoriesCapsule";
import { gray } from "../../../assets/style";
import { imagesdir } from "../../../assets/image";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { useState } from "react";
import { SubTitle } from "../../atom/subTitle/subTitile";

const screenWidth = Dimensions.get("window").width;

export const TopCategories = () => {
  const [index, setIndex] = useState(0);
  const DATA = [
    {
      id: 1,
      img: imagesdir.wellness,
      name: "wellness",
    },
    {
      id: 2,
      img: imagesdir.brand,
      name: "brand care",
    },
    {
      id: 3,
      img: imagesdir.homeo,
      name: "Homeo",
    },
    {
      id: 4,
      img: imagesdir.eye,
      name: "Eye care",
    },
    {
      id: 5,
      img: imagesdir.wellness,
      name: "wellness",
    },
    {
      id: 6,
      img: imagesdir.brand,
      name: "brand care",
    },
    {
      id: 7,
      img: imagesdir.homeo,
      name: "Homeo",
    },
    {
      id: 8,
      img: imagesdir.eye,
      name: "Eye care",
    },
    {
      id: 9,
      img: imagesdir.wellness,
      name: "wellness",
    },
    {
      id: 10,
      img: imagesdir.brand,
      name: "brand care",
    },
    {
      id: 11,
      img: imagesdir.homeo,
      name: "Homeo",
    },
    {
      id: 12,
      img: imagesdir.eye,
      name: "Eye care",
    },
  ];
  return (
    <View style={[styles.card, styles.elevation]}>
      <SubTitle title="Top Categories" />
      <Carousel
        // ref={(c) => this.carousel = c}
        data={DATA}
        activeSlideAlignment="start"
        layout="default"
        renderItem={({ item }) => <TopCategoriesCapsule id={item.id} img={item.img} name={item.name} />}
        sliderWidth={screenWidth - 20}
        sliderHeight={80}
        itemHeight={80}
        itemWidth={95}
        containerCustomStyle={styles.carouselContainer}
        inactiveSlideShift={0}
        useScrollView={false}
        inactiveSlideOpacity={1}
        inactiveSlideScale={1}
        onSnapToItem={(index) => setIndex(index)}
        // scrollInterpolator={scrollInterpolator}
        // slideInterpolatedStyle={animatedStyles}
      />
      <Pagination dotsLength={3} dotColor={gray} activeDotIndex={index/3} containerStyle={{ paddingVertical: 10 }} />
    </View>
  );
};
const styles = StyleSheet.create({
  carouselContainer: {
    marginTop: 10,
  },
  TopCategories: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "500",
    marginRight: 10,
  },
  TopCategoriesCapsule: {
    width: 80,
    height: 73,
    flexShrink: 0,
    borderWidth: 1,
    borderColor: gray,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  TopCategorieslabel: {
    fontFamily: "Poppins-Regular",
    fontSize: 10,
    fontStyle: "normal",
    fontWeight: "500",
  },
  TopCategoriesimg: {
    width: 23,
    height: 23,
  },
});
