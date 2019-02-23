import React from 'react';
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group'; // ES6
import '../styles/promptdisplay.css';
import ProfPic from './ProfPic.js'

class PromptDisplay extends React.Component {

	constructor(props)
	{
		super(props);
		this.prompt_title = this.props.title;
		this.prompt_contents = this.props.content;
		this.prompt_date = this.props.date;
		this.avatar = this.props.avatar;

	}

	render(){
		return(
			<div>
			<ProfPic classType="avatar-prompt" avatar={this.avatar}/>
			<div className="prompt">
			<h1 className="prompt_title">{this.prompt_title}</h1>
			<p className="prompt_contents">{this.prompt_contents}</p>
			<p className="prompt_date">{this.prompt_date}</p>
			<hr/>
			</div>
			</div>

		);
	}
}
	

export default PromptDisplay