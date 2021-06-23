import React from 'react';
import { View, TouchableHighlight, Text, StyleSheet, Image} from 'react-native';
import Navbar from "./Navbar";
export default class IndexScreen extends React.Component {
    render() {
        return(
          <View style={styles.app}>
              <View style={styles.navbar}>
                  <Navbar/>
              </View>
              <View style={styles.main}>
              <Image source={require('../../assets/welcome.gif')} style={{width: 'auto', height: 200,}} />
              <Text style={styles.text}>Bienvenido al Quiz Game</Text>
              <TouchableHighlight onPress={() => this.props.navigation.navigate('GameScreen')} >
                  <Text style={styles.button}>Clicka para jugar</Text>
              </TouchableHighlight>
              </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#eee',
    fontSize: 25,
    textAlign: 'center',
    padding: 10,
  },
  main : {
     flex: 7,
     margin: 20,
     justifyContent: 'center'
  },
  navbar: {
    flex:1,
    alignSelf: 'stretch'
  },
  app: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#203647'
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
    padding: 10,
    color: '#eefbfb',
  }
})