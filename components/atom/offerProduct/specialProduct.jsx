
import { View, Text, StyleSheet, Image } from "react-native";
import { IconButton } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";
import { fontColor, fontSecondaryColor, gray, primaryColor, productPrimary } from "../../../assets/style";
import { imagesdir } from "../../../assets/image";
export const OfferProduct = ({ id,off,img,title }) => {
  return (
    <View
      style={[styles.Productcard, { backgroundColor: "#fff" }]}
      key={id}
    >
      {/* <View style={{paddingHorizontal:5}}> */}
        <Text style={styles.Productoffer}>Up to <Text style={styles.offerText}>{off}% off</Text></Text>
        
      {/* </View> */}
      {/* <View style={{flex:1,flexDirection:"row",alignItems:"center"}}> */}
      <Image source={img} style={styles.productImg} resizeMode="contain" />
      <Text style={styles.ProductTitle}>{title}</Text>
      {/* </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  Productcard: {
    borderRadius: 20,
    height: 170,
    width: 155,
    padding: 10,
    margin:10,
    borderWidth:1,
    borderColor:gray,
    justifyContent: "space-between",
    overflow:"hidden",
    alignItems:"center"
  },
  add: { borderColor: primaryColor, borderWidth: 1, borderRadius: 10 },
  offerText:{
    fontSize:16,
    lineHeight:24,
    fontWeight:"700",
    fontFamily:"Poppins-Bold",
  },
  Productoffer:{
    fontSize:10,
    lineHeight:15,
    fontWeight:"500",
    fontFamily:"Poppins-Regular",
    color:fontColor
  },
  ProductTitle: {
    fontFamily: "Poppins-Medium",
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "500",
    color:fontSecondaryColor
  },
  ProductSubTitle: {
    fontFamily: "Poppins-Regular",
    fontSize: 10,
    lineHeight: 15,
  },
  ProductPrice: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 12,
    lineHeight: 18,
  },
  productImg:{
    right:5,
    bottom:0,
    width:100,
    height:100,
  }
});

