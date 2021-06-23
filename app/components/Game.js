import React from 'react' ;
import Attachment from './Attachment';
import Author from './Author';
import Question from './Question';
import Answer from './Answer';
import Timer from './Timer';

import { View, Text, StyleSheet, Image } from 'react-native';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
      }
    render () {

        const {score,finished,attachment,author,authorPhoto,currentQuiz,quiz,time} = this.props;
        
        return (
            <View>
                {finished == true ? 
                    <View style = {styles.submit}>
                        {this.props.score >= 50 ? 
                            <View style = {styles.resultado}>
                                <Image source={{uri:"https://icons.iconarchive.com/icons/google/noto-emoji-people-bodyparts/256/11959-victory-hand-icon.png"}} style={styles.victory}></Image>
                                <Text style = {styles.resultado}>Tu puntuacion es {score}%</Text>
                            </View>
                            :
                            <View style = {styles.resultado}>
                                <Image source={{uri:"https://www.shareicon.net/data/512x512/2016/01/14/703370_interface_512x512.png"}} style={styles.gameover}></Image>
                                <Text style = {styles.resultado}>Tu puntuacion es {score}%</Text>
                            </View>
                        }
                    </View>
                :
                    <View>
                        <Attachment 
                            attachment={attachment}
                        />
                        <Author 
                            author={author} 
                            photo={authorPhoto}
                        />
                        {attachment!=null ?
                        <View>
                            <Question 
                                index={currentQuiz}
                                question={quiz.question}
                            />
                            <Answer
                                answer={quiz.userAnswer}
                                onQuestionAnswer={this.onQuestionAnswer}
                                currentQuiz={currentQuiz}
                                clickNext={this.clickNext}
                                submit={this.submit}
                            />
                            <Timer 
                                time={time}
                            />
                        </View> :
                            <View>
                            <Question 
                                index={currentQuiz}
                                question={quiz.question}
                            />
                            <Answer
                                answer={quiz.userAnswer}
                                onQuestionAnswer={this.onQuestionAnswer}
                                currentQuiz={currentQuiz}
                                clickNext={this.clickNext}
                                submit={this.submit}
                            />
                            <Timer 
                                time={time}
                            />
                        </View>}
                 </View>}
            </View>
            
        );
    }

    onQuestionAnswer = (answer) => {
        this.props.onQuestionAnswer(answer);
    }
    clickNext = () => {
        this.props.clickNext();
    }
    submit= () => {
        this.props.submit();
    }
}
    const styles = StyleSheet.create({
        submit : {
            marginTop:'30%'
        },

        resultado : {
         textAlign: 'center',
         fontSize: 25,
         color: '#eefbfb',
         alignSelf: 'center'        
        } ,  
        victory : {
            width: 'auto',
            height: 250, 
            margin: 10
        },
        gameover : {
            width: 'auto',
            height: 200, 
            margin: 10
        },
    });