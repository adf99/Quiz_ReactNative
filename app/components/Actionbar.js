import React from 'react';
import {TouchableHighlight, StyleSheet, Text, View} from 'react-native';

export default function Actionbar(props) {
  return (
    <View style={styles.buttons}>
      <View style = {styles.actionbar}>

          <TouchableHighlight style={styles.actions} onPress={props.reset}>
              <Text>Reset</Text>
           </TouchableHighlight>

          {(props.currentQuiz != 0 && props.finished != true) ? <TouchableHighlight style={styles.actions} onPress={props.clickPrev}>
                                                                    <Text>Previous</Text>
                                                                </TouchableHighlight> 
                                                              : <TouchableHighlight style={styles.disabled} disabled>
                                                                  <Text>Previous</Text>
                                                                </TouchableHighlight>}
          



          {(props.currentQuiz != 9 && props.finished != true) ? <TouchableHighlight style={styles.actions} onPress={props.clickNext}>
                                                                    <Text>Next</Text>
                                                                </TouchableHighlight> 
                                                              : <TouchableHighlight style={styles.disabled} disabled>
                                                                  <Text>Next</Text>
                                                                </TouchableHighlight>}

          {props.finished !== true ? <TouchableHighlight style={styles.actions} onPress={props.submit}>
                                        <Text>Submit</Text>
                                      </TouchableHighlight>
                                    : <TouchableHighlight style={styles.disabled} disabled>
                                        <Text>Enviar</Text>
                                      </TouchableHighlight>}
      
      </View>
      <View style={styles.actionbar2}>
          <TouchableHighlight style={styles.actions2} onPress={props.save}>
            <Text>Save</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.actions2} onPress={props.load}>
            <Text>Load</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.actions2} onPress={props.remove}>
            <Text>Remove</Text>
          </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttons : {
    flex:1, 
    flexDirection:'column',
    justifyContent:'flex-end',
  },
  actionbar : {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  actions: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#eee',
    fontSize: 10,
    alignItems:'center',
    padding: 10,
    width:"25%"
  },
  disabled : {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#eee',
    fontSize: 10,
    alignItems:'center',
    padding: 10,
    width:"25%"
  },
  actionbar2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actions2: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#eee',
    fontSize: 10,
    alignItems:'center',                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
    padding:10,
    width: '33.33333%',
  },
});