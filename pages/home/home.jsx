import { ScrollView, StyleSheet, Text, View, Image,Platform } from "react-native";
import { Badge, Button, IconButton,Searchbar } from "react-native-paper";
import { useEffect,useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Octicons } from "react-native-vector-icons";

/* dir import */
import { SearchBarInput } from "../../components/atom/searchbar/searchbarInput";
import { imagesdir } from "../../assets/image";
import { Home_Banner } from "../../components/molecules/banner/homeBanner";
import { TopCategories } from "../../components/molecules/topCategories/topCategories";
import { SpecialDeal } from "../../components/molecules/special Deal/specialDeal";
import { OfferDeal } from "../../components/molecules/offerDeal/offerDeal";
import { badgeColor } from "../../assets/style";
import { PremiumProduct } from "../../components/molecules/premiumProduct/premiumProduct";
export default function Home({ navigation }) {
  useEffect(() => {
    console.log("useEffect in homepage");
  }, []);
 

  return (
    <ScrollView>
    <View style={styles.container}>
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
        mode="outlined"
        // 'outlined' | 'contained' | 'contained-tonal';
          icon={() => (
            <View>
              <Badge style={{position:"absolute",top:-8,left:-8,backgroundColor:badgeColor,}} size={17}><Text>3</Text></Badge>
            <Image
              source={imagesdir.shopping_bag}
            /></View>
          )}
          size={24}
          style={styles.primaryButton}
        />
        
      </View>
    
      <SearchBarInput/>
      <Home_Banner/> 
      <TopCategories /> 
      <SpecialDeal/>

      
    </View>
    <OfferDeal/>
    <View style={styles.container}>
      <PremiumProduct/>
    </View>
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
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    textAlign: "left",
    lineHeight: 18,
  },
  header_delivery_location: {
    fontWeight: "700",
    fontFamily: "Poppins-Bold",
    fontSize: 14,
    lineHeight: 21,
  },
});
