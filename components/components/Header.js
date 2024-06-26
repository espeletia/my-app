import react from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";

const Header = ({ label }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.labelStyle}>{label}</Text>
        </View>
    )
}

const devWidth = Math.round(Dimensions.get("window").width)

const styles = StyleSheet.create({
    container: {
        width: devWidth,
        height: 90,
        backgroundColor: '#a29bfe',
        justifyContent: 'flex-end',
        paddingBottom: 20,
        alignItems: 'center',
    },
    labelStyle: {
        fontSize: 24,
        fontWeight: "700",
    }
})

export default Header
