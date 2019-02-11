import React from 'react';
import { Link } from 'react-router-dom';
import { Button, FormGroup, FormControl, ControlLabel, Alert } from "react-bootstrap";
import { CSSTransitionGroup } from 'react-transition-group'; // ES6
import PromptDisplay from './PromptDisplay.js'
import '../styles/transitions.css';
import '../styles/stream.css';


const Stream = () => (
	<div className="Stream">
	<PromptDisplay />
	</div>
)



export default Stream