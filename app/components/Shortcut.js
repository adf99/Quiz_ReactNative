import React from 'react';
import {TouchableHighlight, StyleSheet, Text, View} from 'react-native';

export default function Shorcut(props) {

	return (
		<View>
			<TouchableHighlight style={styles.shortcut} onPress={props.click} disabled={props.finished==true}>
        <Text> {props.index+1} </Text> 
       </TouchableHighlight>
		</View>
		);
}

const styles = StyleSheet.create({
  shortcut: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#eee'
  }
});