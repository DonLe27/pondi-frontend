import React from 'react';
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group'; // ES6
import '../styles/transitions.css';
import '../styles/archive.css';
import PromptDisplay from './PromptDisplay.js'
import Categories from './Categories.js'

class Archive extends React.Component{
	constructor(props){
		super(props);
		// parse data from parent to get prompts
		this.prompts = [ <PromptDisplay title={0} content={0} />, <PromptDisplay /> ]
	}

	render() {
		return (
		
		<div className="Archive">
		<Categories />
		{this.prompts}
		</div>
		);
	}
}
export default Archive