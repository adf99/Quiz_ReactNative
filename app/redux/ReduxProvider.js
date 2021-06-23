import { Provider } from 'react-redux';
import GlobalState from './reducers';
import { createStore } from 'redux';
//import { quizzes } from "../assets/mock-data.js";

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from '../components/IndexScreen';
import GameScreen from '../components/GameScreen';

const Stack = createStackNavigator();

export default class ReduxProvider extends React.Component {
    constructor(props) {
        super(props);
        this.initialState = { 
            score: 0,
            finished: false,
            currentQuiz: 0,
            quizzes: [
                //...quizzes
            ],
            time: 300,
        };
        this.store = this.configureStore();
}
    render() {
        return (
            <Provider store={ this.store }>
               <NavigationContainer> 
               <Stack.Navigator initialRouteName="Home"> 
                  <Stack.Screen name="Home" component={IndexScreen} />
                  <Stack.Screen name="GameScreen" component={GameScreen} /> 
               </Stack.Navigator> 
              </NavigationContainer> 

            </Provider>
        );
    }
    configureStore() {
        return createStore(GlobalState, this.initialState);
    }
}
