import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Question(props) {
    return (
      <View style = {styles.q}>
              <Text style = {styles.titulo}>Pregunta {props.index +1}</Text>
              <View style = {styles.question}><Text>{props.question}</Text></View>
           </View>
           );
}

const styles = StyleSheet.create({
  q: {

    margin: 12,
    flexDirection: 'column', 
    justifyContent: 'space-around', 
    alignItems: 'center',
    color: '#eefbfb'
  },
  titulo: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  question: {
    textAlign: 'center',
    fontSize: 25,
    color: '#eefbfb'
  }

});