import {
  View,
  StyleSheet,
  Dimensions,
  Touchable,
  ToastAndroid,
  Text,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons, Feather } from "@expo/vector-icons";
import { gray, primaryColor } from "../../../assets/style";
import { useState } from "react";
import { Button } from "react-native-paper";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
export const CartFooter = () => {
  const [index, setIndex] = useState(0);

  return (
    <View style={styles.cartFooter}>
      <View
        style={{
          borderRadius: 30,
          height: 50,
          width: 120,
          justifyContent: "space-between",
          flexDirection: "row",
          alignContent: "center",
          alignSelf: "center",
          alignItems: "center",
          marginLeft: 10,
          paddingHorizontal: 10,
          borderWidth: 1,
          borderColor: gray,
          borderRadius: 30,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            ToastAndroid.show("Minus button click", ToastAndroid.SHORT);
            index <= 1 ? setIndex(0) : setIndex(index - 1);
          }}
        >
          <Feather name="minus" size={24} color={gray} />
        </TouchableOpacity>
        <Text>{index}</Text>

        <TouchableOpacity
          onPress={() => {
            ToastAndroid.show("add button click", ToastAndroid.SHORT);
            setIndex(index + 1);
          }}
        >
          <Ionicons name="add" size={24} color={primaryColor} />
        </TouchableOpacity>
      </View>

      <Button
        style={{
          borderRadius: 30,
          height: 50,
          width: 140,
          justifyContent: "space-between",
          flexDirection: "row",
          alignContent: "center",
          alignSelf: "center",
          alignItems: "center",
      marginRight: 10,
          paddingHorizontal: 10,
          borderWidth: 1,
          borderColor: primaryColor,
          backgroundColor:primaryColor,
          borderRadius: 30,
          fontSize: 10,
          lineHeight:21,
        }}
        mode="text"
        onPress={() => {
          ToastAndroid.show("Add to cart button click", ToastAndroid.SHORT);
        }}
      >
        <Text style={{fontSize:14,lineHeight:21,color:"white",fontFamily:"Poppins-SemiBold",fontWeight:"600"}}>Add to Cart</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  cartFooter: {
    width: screenWidth,
    height: 80,
    borderRadius: 50,
    borderColor: gray,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    position: "absolute",
    bottom:0,
  },
});
