import {
    View,
    Text,
    StyleSheet,
  } from "react-native";
  
  
  export const SubTitle = ({title}) => {
   
    return (
      <View style={[styles.card, styles.elevation]}>
        <Text style={styles.SubTitle}>{title}</Text>
      </View>
    );
  };
  const styles = StyleSheet.create({
    SubTitle: {
      fontFamily: "Poppins-Regular",
      fontSize: 14,
      fontStyle: "normal",
      fontWeight: "500",
      marginRight: 10,
      paddingVertical:10
    }
  });
  