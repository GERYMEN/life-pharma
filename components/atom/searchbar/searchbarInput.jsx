import { useState } from "react";
import { StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import { Feather } from "react-native-vector-icons"
const color="#D9D7D7"
export const SearchBarInput = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  // return( <View><Banner></Banner></View>)
  return (
    <Searchbar
    mode="bar"
    
    icon={() => <Feather name="search" size={24} color={color}/>}
      placeholder="Search"
      placeholderStyle={{fontWeight:"bold",fontFamily:"Poppins",fontSize:20}}
      placeholderTextColor={color}
      onChangeText={onChangeSearch}
      style={styles.searchBar}
      value={searchQuery}
    />
  );
};
const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth:1,
    borderColor:"#D9D7D7",
    paddingHorizontal: 10,
    marginVertical: 5,
    fontSize:14,
    fontWeight:"500",
    fontFamily:"Poppins",
    elevation: 5,
  }
});
