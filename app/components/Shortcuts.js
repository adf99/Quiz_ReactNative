import React from 'react' ;
import Shortcut from "./Shortcut";


export default class Shortcuts extends React.Component {

	click = (index)=>{
		this.props.onChangeQuiz(index)
	}


	render () {
		 
		return this.props.quizzes.map((quiz) => {
			let index = this.props.quizzes.indexOf(quiz);
			return (
			  <Shortcut 
				  click={()=>this.props.onChangeQuiz(index)} 
				  finished={this.props.finished}
				  index={index} 
				  key={index}/>
		  );
		});
	}
	
}