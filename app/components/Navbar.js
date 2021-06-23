import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
export default function Navbar(props) {
	
	return (

	 <View  style = {styles.navbar}>
		<Text align='center' style={styles.text}> QUIZ Game </Text>
	</View>
	);
}

const styles = StyleSheet.create({
  navbar: {
	backgroundColor: '#12232e',
	flex: 1,
	alignItems: 'center',
	justifyContent: 'center'
  },
  text: {
  	fontSize: 20,
    fontWeight: 'bold',
    color: '#eefbfb'
  }
});