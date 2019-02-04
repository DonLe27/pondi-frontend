import React from 'react';
import { Link } from 'react-router-dom';
import { Button, FormGroup, FormControl, ControlLabel, Alert } from "react-bootstrap";
import { CSSTransitionGroup } from 'react-transition-group'; // ES6
import '../styles/transitions.css';
import '../styles/stream.css';
import Stream from './Stream.js';
import Ocean from './Ocean.js';
import SideBar from './SideBar.js';


class StreamHolder extends React.Component{


	selectNext = (i) => {
		handleRemove(i);
	}

	
	constructor(props) {
    super(props);
    this.state = {items: [ <SideBar />, <Stream selectNext={this.selectNext()}/>]};
    //this.handleAdd = this.handleAdd.bind(this);
  }


	render(){
		const items = this.state.items.map((item, i) => (
      	<div>
        	{item}
      	</div>
    	));


		return (
		<div>
        <CSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionEnterTimeout={3000}
          transitionLeaveTimeout={3000}
          transitionEnter={true}
      		transitionLeave={true}>
      		{items}
        </CSSTransitionGroup>
      </div>);
	}
}

export default StreamHolder