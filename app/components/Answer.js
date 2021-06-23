import React from 'react' ;

import { StyleSheet, TextInput, View } from 'react-native';

export default class Answer extends React.Component {
    constructor(props) {
        super(props);
      }

      render(){
            return (
                <View>
                <TextInput style={styles.input}
                    value = {this.props.answer || ''}
                    onChangeText={(text)=>this.props.onQuestionAnswer(text)}
                    placeholder ="Escriba aquí su respuesta" />
                </View>
            );
        }
    
}

const styles = StyleSheet.create({
  input: {
    margin: 10,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#eefbfb',
    padding: 10
  }

});