import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import Header from '../components/Header';
import RestaurantCard from '../components/RestaurantCard';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Header label={"Menuroo"} />
            <Text>Hello world!</Text>
            <RestaurantCard />
            <StatusBar style="" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6c5ce7',
        alignItems: 'center',
    },
    sex: {
        backgroundColor: '#000',
        color: '#fff',
    },
});

export default HomeScreen;
