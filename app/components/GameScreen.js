import React from 'react';
//import '../App.css';
import { connect } from 'react-redux';
import Game from "./Game";
import Navbar from "./Navbar";
import Shortcuts from "./Shortcuts";
import Actionbar from './Actionbar';
import { questionAnswer, changeQuiz, submit , initQuizzes, resetQuizzes, timer} from '../redux/actions'
import { AsyncStorage, View, Text, TouchableHighlight, StyleSheet, Image } from 'react-native';

class GameScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cargando: true,
    };
  }

  render(){
    const {currentQuiz,quizzes,score,finished,time} = this.props;
    if (!this.props.quizzes|| quizzes.length === 0 || this.cargando) {
      return (
        <View style={styles.cargando}>
            {this.state.cargando?<Text style= {{fontSize: 25,textAlign: 'center',padding: 10,color: '#eefbfb'}}>Cargando</Text> : <Text style= {{fontSize: 25,textAlign: 'center',padding: 10,color: '#eefbfb'}}>No hay quizzes</Text>}
       </View>
       );
    } 

    
    const attachment = quizzes[currentQuiz].attachment || "";
    const author= quizzes[currentQuiz].author || "";

    let authorPhoto;
    author === "" ? authorPhoto = "" : (authorPhoto=author.photo || "");
    return (
      <View style={styles.App}>
        <View style={styles.navbar}>
          <Navbar/>
        </View>
        <View style={styles.main}>
          <Game quiz = {quizzes[currentQuiz]}
            currentQuiz={currentQuiz}
            onQuestionAnswer={this.onQuestionAnswer}
            attachment = {attachment.url}
            author = {author.username}
            authorPhoto = {authorPhoto.url}
            score = {10*score}
            finished = {finished}
            clickNext={this.clickNext}
            submit={this.submit}
            time={time}
          />
        <Actionbar 
          clickNext={this.clickNext}
          clickPrev={this.clickPrev}
          submit={this.submit}
          currentQuiz={currentQuiz}
          finished={finished}
          reset={this.reset}
          load={ () => {this._loadData()}}
          remove={ () => {this._removeData()}}
          save={ () => {this._saveData(quizzes)}} 
        />
        <TouchableHighlight onPress={() => {
          clearInterval(this.interval);
          this.props.navigation.goBack();}
        } >
            <Text style={styles.button}>Go Back</Text>
        </TouchableHighlight>
      </View>
      </View>
    );
  }
  onQuestionAnswer= (answer) => {
    this.props.dispatch(questionAnswer(this.props.currentQuiz, answer));
  }
  onChangeQuiz= (index) => {
    this.props.dispatch(changeQuiz(index));
  }
  submit= () => {
    this.props.dispatch(submit(this.props.quizzes));
  }
  clickNext = () => {
    if (this.props.currentQuiz<9)
        this.props.dispatch(changeQuiz(this.props.currentQuiz+1)); 
  }
  clickPrev = () => {
    if (this.props.currentQuiz>0)
      this.props.dispatch(changeQuiz(this.props.currentQuiz-1)); 
  }
  
  timer = () => {
    this.props.time > 0 ? this.props.dispatch(timer()) : this.submit();
  }

  async componentDidMount() {
    const TOKEN='1ff5fdf04822f422355b';
    const response = await fetch('https://core.dit.upm.es/api/quizzes/random10wa?token='+TOKEN);
    const quizzes = await response.json();
    this.props.dispatch(initQuizzes(quizzes));
    this.interval = setInterval(() => {
        this.timer();
    }, 1000);
  }
  reset = async () =>{
    const TOKEN='1ff5fdf04822f422355b';
    const response = await fetch('https://core.dit.upm.es/api/quizzes/random10wa?token='+TOKEN);
    const quizzes = await response.json();
    this.props.dispatch(resetQuizzes(quizzes));
  }

  async _saveData(quizzes){
    try {
      var quizzes = JSON.stringify(quizzes);
      await AsyncStorage.setItem('@P5_2020_IWEB:quiz', quizzes); 
        alert("Se guardaron los datos");
    } catch (error) { 
        alert("Error, no se guardaron las preguntas " + error); 
    }
  }

  async _loadData(){
    try {
      var value = await AsyncStorage.getItem('@P5_2020_IWEB:quiz');
      var valuesparseados = JSON.parse(value)
      if (value !== null) {
        alert("Se han cargado las preguntas");
        this.props.dispatch(initQuizzes(valuesparseados));
      }
      else {
        alert("Error, no hay preguntas almacenadas " + error);
      }
    } catch (error) { 
        alert("Error, no se han cargado las preguntas " + error); 
    }
  }

  async _removeData(){
    try {
      await AsyncStorage.removeItem('@P5_2020_IWEB:quiz');
      alert("Se han borrado las preguntas");
    } catch (error) { 
        alert("Error, no se han borrado las preguntas " + error); 
    }
  }


   
}
function mapStateToProps(state) {
  return {
    ...state
  };
}

const styles = StyleSheet.create({
  navbar: {
    flex:1,
    alignSelf: 'stretch'
  },
  button: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#eee',
    fontSize: 10,
    textAlign: 'center',
    padding: 10
  },
  App: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#203647'
  },
  cargando: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#203647'
  },
  main : {
    flex:8,
    margin: 30,
    backgroundColor: '#7abfe4',
    
    
  } ,
  shortcuts : {

  }
});




export default connect(mapStateToProps)(GameScreen);
