import react from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";


const RestaurantCard = () => {
    return (
        <View style={styles.cardContainer}>
            <Image style={styles.imageStyle} source={require('../../assets/josef.jpeg')} />
            <Text style={styles.titleStyle}>Josef Vinar</Text>
        </View>
    )
}

const devWidth = Math.round(Dimensions.get("window").width)
const radius = 20

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#a29bfe',
        width: devWidth - 25,
        height: 200,
        borderRadius: radius,

        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.75,
        elevation: 9,
        shadowRadius: 5,
    },
    imageStyle: {
        height: 130,
        width: devWidth - 25,
        borderTopLeftRadius: radius,
        borderTopRightRadius: radius,
    },
    titleStyle: {
        fontSize: 20,
        fontWeight: "900",
    }
})

export default RestaurantCard
