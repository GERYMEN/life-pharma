import { View, Text, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Banner, Button } from "react-native-paper";
import { imagesdir } from "../../../assets/image";
export const Home_Banner = () => {
  // return( <View><Banner></Banner></View>)
  return (
    <View style={[styles.card, styles.elevation]}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1.5, y: 0 }}
        colors={["#C64C98", "#26328C", "#26328C"]}
        style={{
          borderColor: "#D8D6D6",
          borderRadius: 10,
          borderWidth: 1,
          paddingVertical: 23,
          paddingHorizontal: 17,
        }}
      >
        <View style={{ flex: 1, flexDirection: "row", justifyContent:"space-between"}}>
          <View style={{ flex: 1, flexDirection: "column" }}>
            <Text style={styles.bannerText}>
              Get flat{" "}
              <Text style={[styles.bannerText, { color: "#FFF100" }]}>25%</Text>{" "}
              {"off\non all medicines"}
            </Text>
            {/* <View  */}
            <Button labelStyle={{ fontSize: 12,width:50,lineHeight:18 }} mode="contained" textColor="black" style={styles.buyNow}>
              Buy Now
            </Button>
          </View>
          <View style={{ flex: 1}}>
            <Image source={imagesdir.banner_bags} resizeMode={"stretch"} style={{position:"absolute",left:-5,top:-15,zIndex:100}} />
            <Image source={imagesdir.banner_medicines} style={{position:"absolute",right:-35,top:-60,zIndex:100}} resizeMode={"stretch"} />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};
const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    marginBottom: 13,
    fontFamily:"Poppins-SemiBold"
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    // paddingVertical: 45,
    // paddingHorizontal: 25,
    width: "100%",
    marginVertical: 10,
  },
  elevation: {
    elevation: 20,
    shadowColor: "grey",
  },
  bannerText: {
    fontSize: 15,
    fontFamily: "Poppins-Bold",
    width: 286,
    lineHeight: 22.5,
    color: "white",
  },
  buyNow: {
    fontFamily: "Poppins-Medium",
    fontSize: 12,
    marginTop: 10,
    backgroundColor: "white",
    width: 81,
	
  },
});
