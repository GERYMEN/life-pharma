import {
    View,
    Text,
    StyleSheet,
  } from "react-native";
  
  
  export const SubTitle = ({title,style}) => {
   
    return (
      <View style={[styles.card, styles.elevation,{...style}]}>
        <Text style={styles.SubTitle}>{title}</Text>
      </View>
    );
  };
  const styles = StyleSheet.create({
    SubTitle: {
      fontFamily: "Poppins-Medium",
      fontSize: 14,
      fontStyle: "normal",
      fontWeight: "500",
      marginRight: 10,
      paddingVertical:10
    }
  });
  