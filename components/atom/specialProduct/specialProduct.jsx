import { View, Text, StyleSheet, Image, Touchable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { IconButton } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";
import { primaryColor, productPrimary,thirdarycolor } from "../../../assets/style";
import { imagesdir } from "../../../assets/image";
import { TouchableOpacity } from "react-native-gesture-handler";
export const SpecialProdct = ({ id, name, img, price, weight }) => {
  const navigation=useNavigation()
  return (
    <TouchableOpacity
      style={[styles.Productcard, { backgroundColor: id%2===0?thirdarycolor:productPrimary }]}
      key={id}
    onPress={() => navigation.navigate("ProductDetails")}
    >
      <View style={{paddingHorizontal:5}}>
        <Text style={styles.ProductTitle}>{name}</Text>
        <Text style={styles.ProductSubTitle}>{weight}</Text>
        <Text style={styles.ProductPrice}>{price}</Text>
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
      <Image source={img} style={styles.productImg} resizeMode="contain" />
      </View>
    </TouchableOpacity>
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
    fontFamily: "Poppins-Medium",
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