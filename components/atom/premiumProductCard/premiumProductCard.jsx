import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { IconButton } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";
import { fontgray, primaryColor, productPrimary, thirdarycolor } from "../../../assets/style";
import { imagesdir } from "../../../assets/image";
const ScreenWidth = Dimensions.get("window").width;

export const PremiumProductCard = ({ id,title,sub,img,price }) => {
  return (
    <View
      style={[styles.Productcard, { backgroundColor:id%2==0 ?thirdarycolor: productPrimary }]}
      key={id}
    >
      <View>
        <Image
          source={img}
          style={styles.productImg}
          resizeMode="contain"
        />
      </View>
      <View>
        <View style={styles.productDetail}>
          <Text style={styles.ProductTitle}>
            {title}
          </Text>
          <Text style={styles.ProductSubTitle}>
            {sub}
          </Text>
        </View>
        <View style={styles.productDetail2}>
          <View style={{flexDirection:"row"}}>
            <Text style={styles.ProductPrice}>{price}</Text>
            <Text style={[styles.ProductSubTitle,{paddingLeft:10}]}>1 KG</Text>
          </View>
          <IconButton
            icon={() => <Ionicons name="add" size={24} color={primaryColor} />}
            style={styles.add}
            size={24}
            iconColor={primaryColor}
            containerColor="#fff"
            mode="outlined"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Productcard: {
    borderRadius: 20,
    // flex: 1,
    height: 110,
    width: ScreenWidth - 40,
    padding: 10,
    marginVertical: 10,
    flexDirection: "row",
  },
  productDetail: {
    // marginTop:10,
    marginVertical: 5,
  },
  productDetail2:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"baseline"
  },
  add: { borderColor: primaryColor, borderWidth: 1, borderRadius: 10,marginBottom:20 },
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
    color: fontgray,
  },
  ProductPrice: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 12,
    lineHeight: 18,
  },
  productImg: {
    width: 91,
    height: 124,
    bottom: 30,
  },
});
