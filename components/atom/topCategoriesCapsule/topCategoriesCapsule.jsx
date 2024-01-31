import { View, Text, StyleSheet, Image } from "react-native";
import { gray } from "../../../assets/style";
export const TopCategoriesCapsule = ({id,name,img}) => {
    return (
        <View style={styles.TopCategoriesCapsule} key={id}>
            <Image source={img} style={styles.TopCategoriesimg} resizeMode="contain"/>
            <Text style={styles.TopCategorieslabel}>{name}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    TopCategories: {
        fontFamily: "Poppins-Regular",
        fontSize: 14,
        fontStyle: "normal",
        fontWeight: "500",
        marginRight:10
      },
      TopCategoriesCapsule: {
        width: 90,
        height: 73,
        flexShrink: 0,
        borderWidth:1,
        borderColor:gray,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",},
      TopCategorieslabel: {
        fontFamily: "Poppins-Regular",
        fontSize: 10,
        fontStyle: "normal",
        fontWeight: "500",
        textTransform:"capitalize"
      },
      TopCategoriesimg:{
        width:23,
        height:23
      }
})