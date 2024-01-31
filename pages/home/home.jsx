import { ScrollView, StyleSheet, Text, View, Image,Platform } from "react-native";
import { Button, IconButton,Searchbar } from "react-native-paper";
import { useEffect,useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Octicons } from "react-native-vector-icons";

/* dir import */
import { SearchBarInput } from "../../components/atom/searchbar/searchbarInput";
import { imagesdir } from "../../assets/image";
import { Home_Banner } from "../../components/molecules/banner/homeBanner";
import { TopCategories } from "../../components/molecules/topCategories/topCategories";
import { SpecialDeal } from "../../components/molecules/special Deal/specialDeal";
export default function Home({ navigation }) {
  useEffect(() => {
    console.log("useEffect in homepage");
  }, []);
 

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.homeHeader}>
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
          {/* icon button shadow need to seettled */}
          <IconButton
            icon={() => <Octicons name="location" size={24} />}
            style={[styles.primaryButton, { backgroundColor: "#CED2F4" }]}
            mode="contained-tonal"
          />

          <View>
            <Text style={styles.header_delivery_address}>Delivery Address</Text>
            <Text style={styles.header_delivery_location}>
              12 Rich Terrace,Wigram, NZ
            </Text>
          </View>
        </View>

        {/* icon button shadow need to seettled */}
        <IconButton
        mode=""
        // 'outlined' | 'contained' | 'contained-tonal';
          icon={() => (
            <Image
              source={imagesdir.shopping_bag}
            />
          )}
          size={24}
          style={styles.primaryButton}
        />
      </View>
    
      <SearchBarInput/>
      <Home_Banner/> 
      <TopCategories /> 
      <SpecialDeal/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingTop: 30,
    paddingHorizontal: 20,
    flex: 1,
  },
  homeHeader: {
    flex: 1,
    flexDirection: "row",
  },
  primaryButton: {
    borderWidth: 2,
    borderColor: "#D9D7D7",
    width: 51,
    height: 56,
    justifyContent: "center",
    elevation: 20,
    shadowColor: '#52006A',
  },
  header_delivery_address: {
    fontWeight: "400",
    fontFamily: "Poppins",
    fontSize: 12,
    textAlign: "left",
    lineHeight: 18,
  },
  header_delivery_location: {
    fontWeight: "bold",
    fontFamily: "Poppins",
    fontSize: 14,
    lineHeight: 21,
  },
});
