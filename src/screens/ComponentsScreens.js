import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const myName = 'Ryan Lo';


    return( 
        <View>
            <Text style={styles.textStyle}>Getting started with react native!</Text>
            <Text style={{fontSize: 20}}>My name is {myName}</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    textStyle:{
        fontSize: 45,
        fontFamily: "Times New Roman"
    },
});

export default ComponentsScreen;