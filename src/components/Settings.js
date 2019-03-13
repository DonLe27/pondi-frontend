import React from 'react';
import { Link } from 'react-router-dom';
import { Button, FormGroup, FormControl, ControlLabel, Alert } from "react-bootstrap";
import '../styles/settings.css';




class Settings extends React.Component{
	constructor(props){
		super(props);
		// parse data from parent to get prompts
		


		this.friends = "0";
	}

	render() {
		return (
		
		<div className="Settings">
		<h4>Friend List + Default Post Visibility</h4>
		<p>....</p>
		{this.friends}
		</div>
		);
	}
}


export default Settings