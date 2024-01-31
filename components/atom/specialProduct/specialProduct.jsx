import { View, Text, StyleSheet, Image } from "react-native";
import { IconButton } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";
import { gray, primaryColor, productPrimary } from "../../../assets/style";
import { imagesdir } from "../../../assets/image";
export const OfferProduct = ({ id, name, img }) => {
  return (
    <View
      style={[styles.Productcard, { backgroundColor: productPrimary }]}
      key={id}
    >
      <View style={{paddingHorizontal:5}}>
        <Text style={styles.Productoffer}>Up to <Text style={styles.offerText}>30% off</Text></Text>
        
      </View>
      <View style={{flex:1,flexDirection:"row",alignItems:"center"}}>
      <Image source={imagesdir.product_medicine1} style={styles.productImg} resizeMode="contain" />
      <Text style={styles.ProductTitle}>{name}</Text>
      </View>
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
    overflow:"hidden"
  },
  add: { borderColor: primaryColor, borderWidth: 1, borderRadius: 10 },
  ProductTitle: {
    fontFamily: "Poppins-Bold",
    fontSize: 12,
    lineHeight: 18,
    fontWeight: "500",
  },
  ProductSubTitle: {
    fontFamily: "Poppins-Regular",
    fontSize: 10,
    lineHeight: 15,
  },
  ProductPrice: {
    fontFamily: "Poppins-Bold",
    fontSize: 12,
    lineHeight: 18,
    fontWeight: "600",
  },
  productImg:{
    right:5,
    bottom:0,
    width:100,
    height:100,
  }
});
