import React from 'react';
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group'; // ES6
import '../styles/promptdisplay.css';

class PromptDisplay extends React.Component {

	constructor(props)
	{
		super(props);
		this.prompt_title = "This is a template title";
		this.prompt_contents = "This is some template content";
		this.prompt_date = "Jan 11, 1111";
	}

	render(){
		return(
			<div className="prompt">
			<h1 className="prompt_title">{this.prompt_title}</h1>
			<p className="prompt_contents">{this.prompt_contents}</p>
			<p className="prompt_date">{this.prompt_date}</p>
			<hr/>
			</div>

		);
	}
}
	

export default PromptDisplay