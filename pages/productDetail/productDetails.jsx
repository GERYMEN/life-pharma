import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
} from "react-native";
import { Badge, Button, IconButton, Searchbar } from "react-native-paper";
import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Ionicons, Feather } from "react-native-vector-icons";

/* dir import */
import { SearchBarInput } from "../../components/atom/searchbar/searchbarInput";
import { imagesdir } from "../../assets/image";
import { Home_Banner } from "../../components/molecules/banner/homeBanner";
import { TopCategories } from "../../components/molecules/topCategories/topCategories";
import { SpecialDeal } from "../../components/molecules/special Deal/specialDeal";
import { OfferDeal } from "../../components/molecules/offerDeal/offerDeal";
import { backColor, badgeColor, fontgray, gray } from "../../assets/style";
import { PremiumProduct } from "../../components/molecules/premiumProduct/premiumProduct";
import { ProductDetailsCard } from "../../components/molecules/productDetailCard/productDetailCard";
import { FrequentPurchase } from "../../components/molecules/frequentPurchase/frequentPurchase";
import { CartFooter } from "../../components/molecules/cartFooter/cartFooter";
import { SubTitle } from "../../components/atom/subTitle/subTitile";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
export default function ProductDetails({ navigation }) {
    const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://fakestoreapi.com/products/1',
    };
    
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      setSearchQuery(response.data)
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);
  
  
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <View style={styles.homeHeader}>
            <View
              style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
            >
              {/* icon button shadow need to seettled */}
              <IconButton
                icon={() => (
                  <Ionicons name="chevron-back" size={34} color={backColor} />
                )}
                style={styles.primaryButton}
                mode="contained-tonal"
                onPress={() => navigation.goBack()}
              />
            </View>

            {/* icon button shadow need to seettled */}
            <View style={{ flexDirection: "row" }}>
              <IconButton
                icon={() => <Feather name="search" size={24} color={gray} />}
                style={styles.primaryButton}
                mode="contained-tonal"
              />
              <IconButton
                mode="outlined"
                // 'outlined' | 'contained' | 'contained-tonal';
                icon={() => (
                  <View>
                    <Badge
                      style={{
                        position: "absolute",
                        top: -8,
                        left: -8,
                        backgroundColor: badgeColor,
                      }}
                      size={17}
                    >
                      <Text>3</Text>
                    </Badge>
                    <Image source={imagesdir.shopping_bag} />
                  </View>
                )}
                size={24}
                style={styles.primaryButton}
              />
            </View>
          </View>

          <ProductDetailsCard price={searchQuery?.price} rating={searchQuery?.rating?.rate}/>
        </View>
        <FrequentPurchase />
        <View style={styles.container}>
          <SubTitle title="Details" />
          <Text style={styles.details}>
           {searchQuery?.description}
          </Text>
          <SubTitle title="It works as follows" />
          <Text style={styles.details}>
          {searchQuery?.description}
          </Text>
          <SubTitle title="How to use" />
          <Text style={styles.details}>
          {searchQuery?.description}
          </Text>
        </View>
      </ScrollView>
      <CartFooter />
    </SafeAreaView>
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
    borderWidth: 1,
    borderColor: "#D9D7D7",
    width: 51,
    height: 56,
    justifyContent: "center",
    elevation: 20,
    shadowColor: "#52006A",
    backgroundColor: "#fff",
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
  details: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    lineHeight: 15,
    fontWeight: "400",
    marginVertical: 10,
  },
});
