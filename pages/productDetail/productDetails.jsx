import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useEffect } from 'react';
export default function ProductDetails({navigation}) {
    
    useEffect(() => {
        console.log('useEffect in ProductDetails page',)
    }, [])
    return (
        <ScrollView style={styles.container}>
            <View style={styles.scrollContent}>
            <Text>ProductDetails page</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    scrollContent: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
 
});