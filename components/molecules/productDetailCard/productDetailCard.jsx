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
const screenWidth = Dimensions.get("window").width;
export const ProductDetailsCard = ({price,rating}) => {
  const [index, setIndex] = useState(0);
  const Data = [
    {
      id: 1,
      img: imagesdir.product_detail_img,
      name: "wellness",
    },
    {
      id: 1,
      img: imagesdir.product_detail_img,
      name: "wellness",
    },
    {
      id: 1,
      img: imagesdir.product_detail_img,
      name: "wellness",
    },
    {
      id: 1,
      img: imagesdir.product_detail_img,
      name: "wellness",
    },
  ];
  const ProductDetailCard = () => {
    return (
      <View style={styles.productDetailCard}>
        <View>
          <View style={styles.productImg}>
            <Image
              source={Data[0].img}
              style={styles.productImgCard}
              resizeMode="contain"
            />
          </View>
          <View style={{ flex: 1, alignItems: "flex-end", marginTop: 30 }}>
            <IconButton
              icon={() => (
                <EvilIcons name="share-google" size={24} color={fontgray} />
              )}
              style={styles.heart}
              size={24}
              containerColor="transparent"
              mode="outlined"
            />
            <IconButton
              icon={() => (
                <MaterialCommunityIcons
                  name="cards-heart-outline"
                  size={24}
                  color={fontgray}
                />
              )}
              style={styles.heart}
              size={24}
              containerColor="transparent"
              mode="outlined"
            />
          </View>
        </View>
        <View style={styles.productDesc}>
          <View
            style={{
              position: "relative",
              padding: 20,
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: 5,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Image source={imagesdir.epa} width={16} height={16} />
                <Text style={styles.productFeature}>EPA & DHA</Text>
              </View>
              <View style={{ flexDirection: "row", width: 100 }}>
                <Image source={imagesdir.hear_health} width={16} height={16} />
                <Text style={styles.productFeature}>Hear Healthy</Text>
              </View>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={imagesdir.eliminated_mercury}
                  width={16}
                  height={16}
                />
                <Text style={styles.productFeature}>Eliminated Mercury</Text>
              </View>
              <View style={{ flexDirection: "row", width: 100 }}>
                <Image
                  source={imagesdir.new_item}
                  width={16}
                  height={16}
                  resizeMode="contain"
                />
                <Text style={styles.productFeature}>New Item</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View>
      <Carousel
        data={Data}
        activeSlideAlignment="start"
        layout="default"
        renderItem={({ item }) => <ProductDetailCard />}
        sliderWidth={screenWidth - 40}
        sliderHeight={233}
        itemHeight={233}
        itemWidth={screenWidth - 20}
        containerCustomStyle={styles.carouselContainer}
        inactiveSlideShift={0}
        useScrollView={false}
        inactiveSlideOpacity={1}
        inactiveSlideScale={1}
        onSnapToItem={(index) => setIndex(index)}
      />
      <Pagination
        dotsLength={Data.length}
        activeDotIndex={index}
        dotColor={gray}
        dotStyle={styles.dotStyle}
      />

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View
            style={{
              width: 44,
              height: 24,
              borderRadius: 16,
              backgroundColor: fontgray,
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
              opacity: 0.7,
              paddingHorizontal: 5,
            }}
          >
            <Image
              source={imagesdir.kid_star}
              width={10}
              height={10}
              resizeMode="contain"
            />
            <Text style={{ color: "#753F92" }}>{rating}</Text>
          </View>
          <Text style={{ color: primaryColor, marginLeft: 10 }}>
            (50 Reviews)
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={imagesdir.omega}
            resizeMode="contain"
            width={30}
            height={30}
          />
          <Text style={{ color: primaryColor, marginLeft: 10 }}>
            View all products
          </Text>
        </View>
      </View>

      <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
        <View style={{ flex: 1, paddingVertical: 15 }}>
          <Text
            style={{
              fontSize: 14,
              lineHeight: 21,
              color: primaryColor,
              fontFamily: "Poppins-Medium",
              fontWeight: "500",
            }}
          >
            DHA Omega 3
          </Text>
          <Text
            style={{
              fontSize: 16,
              lineHeight: 24,
              fontFamily: "Poppins-SemiBold",
            }}
          >
            AED {price} (VAT Incl.)
          </Text>
        </View>
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: 155,
            height: 32,
            backgroundColor: "#E3B550",
            paddingHorizontal: 15,
            borderRadius: 16,
            justifyContent: "space-between",
          }}
        >
          <Image source={imagesdir.payments} width={18} height={18} />
          <Text style={{ color: "#753F92", fontSize: 10, lineHeight: 15 }}>
            Interest Free available{" "}
          </Text>
        </Pressable>
      </View>

      <View style={{ flexDirection: "row",marginBottom:20 }}>
        <Octicons name="location" size={18} />
        <Text style={{  fontSize: 10, lineHeight: 15,paddingHorizontal:10 }}>
          Delivered within <Text style={{color:primaryColor}}>2-3</Text> days to:
        </Text>
        <Text style={{  fontSize: 12, lineHeight: 18,color:primaryColor,fontFamily:'Poppins-Medium' }}>
        12 Rich Terrace,Wigram
        </Text>
      </View>
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
    backgroundColor: productPrimary,
    marginTop: 40,
    borderRadius: 30,
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
