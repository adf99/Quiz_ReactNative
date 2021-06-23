import React from 'react';
import {View, StyleSheet,Text } from 'react-native';


export default function Timer(props) {
    let minutos = Math.trunc(props.time/60);
    let segundos = props.time - Math.trunc(props.time/60)*60;
    if (segundos<10){
        segundos='0'+segundos;
    }

	return ( 
        <View style = {styles.timer}>
		  <Text style = {styles.text}>{minutos}:{segundos} </Text>
	   </View>
       );
}

    const styles = StyleSheet.create({
        timer : {
            margin: 10,
            alignItems: 'center'

        },
        text: {
            fontSize: 30
        }

    });