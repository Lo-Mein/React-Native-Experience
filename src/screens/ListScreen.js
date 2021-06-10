import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () =>{
    const friends = [
        {name: 'Maureen', age: 4},
        {name: 'Herman', age: 60},
        {name: 'Brittany', age: 28},
        {name: 'Derek', age: 25},
        {name: 'Ryan', age: 21},
        {name: 'Morgan', age: 18}
    ];


    return(
        <FlatList 
            keyExtractor={(friend) => friend.name}
            data={friends}
            renderItem={({item}) =>{
                return <Text style= {styles.textStyle}>{item.name} -- Age: {item.age}</Text>;
            }}
        />
    );
};

const styles = StyleSheet.create({
     textStyle:{
         marginVertical: 50
     }
});

export default ListScreen;