import React from 'react';
import { Link } from 'react-router-dom';
import { Button, FormGroup, FormControl, ControlLabel, Alert } from "react-bootstrap";
import { CSSTransitionGroup } from 'react-transition-group'; // ES6
import PromptDisplay from './PromptDisplay.js'
import '../styles/transitions.css';
import '../styles/stream.css';


class Stream extends React.Component{
	constructor(props){
		super(props);
		// parse data from parent to get prompts
		this.prompts = [ <PromptDisplay title={0} content={0} />, <PromptDisplay /> ]
	}

	render() {
		return (
		
		<div className="Stream">
		
		{this.prompts}
		</div>
		);
	}
}


export default Stream