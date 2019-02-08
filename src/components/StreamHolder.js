import React from 'react';
import { Link } from 'react-router-dom';
import { Button, FormGroup, FormControl, ControlLabel, Alert } from "react-bootstrap";
import { CSSTransitionGroup } from 'react-transition-group'; // ES6
import '../styles/transitions.css';
import '../styles/streamholder.css';

import Stream from './Stream.js';
import Ocean from './Ocean.js';
import Archive from './Archive.js';
import SideBar from './SideBar.js';


class StreamHolder extends React.Component{


  constructor(props) {
         
    super(props);
    this.state = {
        leftSide: <SideBar 
            addStream={this.addStream.bind(this)} 
            addArchive={this.addArchive.bind(this)}
            addOcean={this.addOcean.bind(this)}
            />,
        rightSide: <Stream />
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.addStream = this.addStream.bind(this);
    this.addOcean = this.addStream.bind(this);
    this.addArchive = this.addStream.bind(this);

  }

  handleAdd(i) {
  }

  addStream(i){
    this.setState({rightSide: 0});
    const right = <Stream key={0}/>;
    this.setState({rightSide: right});

  }

  addOcean (i){

    this.setState({rightSide: 0});
    const right = <Ocean key={1}/>;
    this.setState({rightSide: right});

  }

  addArchive (i){

    this.setState({rightSide: 0});
    const right = <Archive key={2}/>;
    this.setState({rightSide: right});
  }


 


	render(){
		
    ;

		return (
		<div key={this.state.rightSide}>
        <CSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionEnter={true}
      		transitionLeave={true}>
      		{this.state.leftSide}
          {this.state.rightSide}
        </CSSTransitionGroup>
      </div>);
	}
}

export default StreamHolder