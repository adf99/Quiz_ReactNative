import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Actionbar(props) {
	return (
		<View style = {styles.author}>
                {(props.author!=null) ? <Text>Creado por {props.author}</Text> :<Text>La pregunta es anonima</Text>}
                <Image style = {styles.authorphoto} source={{uri: props.photo }} ></Image>
    	</View>
    	);
}


const styles = StyleSheet.create({
	author : {
		margin: 8,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-around',

	},

	authorphoto : {
    	width: 40,
    	height: 40,
    	borderRadius: 4,
    	alignItems: 'center',

	}

});