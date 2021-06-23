import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Attachment(props) {
	
	return (
	 <View style = {styles.attachment}>
		{(props.attachment != undefined) ? <Image style = {styles.attachment} source={{uri: props.attachment }}></Image> : <Text></Text>} 
	</View>
	);
}

    const styles = StyleSheet.create({
    	attachment : {
    		width: 'auto',
    		height: 200,
    	}
    });