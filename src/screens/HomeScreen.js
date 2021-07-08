import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
	return (
		<View>
			<Text style={styles.text}>Hi there!!!!</Text>
			<Button
				onPress={() => navigation.navigate('Components')}
				title="Go to components demo"
			/>
			<Button
				onPress={() => navigation.navigate('List')}
				title="Go to List Demo"
			/>
			<Button
				onPress={() => navigation.navigate('Image')}
				title="Go to Image Demo"
			/>
			<Button
				onPress={() => navigation.navigate('Counter')}
				title="Go to Counter Screen"
			/>
			<Button
				onPress={() => navigation.navigate('Color')}
				title="Go to Color Demo"
			/>
			<Button
				onPress={() => navigation.navigate('Square')}
				title="Go to Square Demo"
			/>
			<Button
				onPress={() => navigation.navigate('Text')}
				title="Go to TextScreen"
			/>
			{/* <TouchableOpacity onPress={ () =>props.navigation.navigate("List")}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30,
	},
});

export default HomeScreen;
