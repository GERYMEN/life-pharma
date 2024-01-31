import { View, Text, StyleSheet, Image } from "react-native";
import { IconButton } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";
import { primaryColor, productPrimary } from "../../../assets/style";
import { imagesdir } from "../../../assets/image";
export const SpecialProdct = ({ id, name, img }) => {
  return (
    <View
      style={[styles.Productcard, { backgroundColor: productPrimary }]}
      key={id}
    >
      <View style={{paddingHorizontal:5}}>
        <Text style={styles.ProductTitle}>DHA Omega 3</Text>
        <Text style={styles.ProductSubTitle}>950 mg</Text>
        <Text style={styles.ProductPrice}>AED 127</Text>
      </View>
      <View style={{flex:1,flexDirection:"row",alignItems:"center"}}>
      <IconButton
        icon={() => <Ionicons name="add" size={24} color={primaryColor} />}
        style={styles.add}
        size={24}
        iconColor={primaryColor}
        containerColor="#fff"
        mode="outlined"
      />
      <Image source={imagesdir.product_medicine1} style={styles.productImg} resizeMode="contain" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Productcard: {
    borderRadius: 30,
    // flex: 1,
    height: 132,
    width: 155,
    padding: 10,
    margin:10,
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
