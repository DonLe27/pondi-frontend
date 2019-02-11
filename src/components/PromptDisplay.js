import React from 'react';
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group'; // ES6
import '../styles/promptdisplay.css';

class PromptDisplay extends React.Component {

	constructor(props)
	{
		super(props);
		this.prompt_title = "This is a template title";
		this.prompt_contents = "These are some template contents";
		this.prompt_date = "1/1/1111"
	}

	render(){
		return(
			<section className="prompt">
			<h1 className="prompt_title">{this.prompt_title}</h1>
			<p className="prompt_contents">{this.prompt_contents}</p>
			<p className="prompt_date">{this.prompt_date}</p>
			</section>
		);
	}
}
	

export default PromptDisplay