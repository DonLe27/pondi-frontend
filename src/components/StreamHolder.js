import React from 'react';
import { Link } from 'react-router-dom';
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
        stream: true,
        archive: false,
        ocean: false,
        leftSide: <SideBar 
            addStream={this.addStream.bind(this)} 
            addArchive={this.addArchive.bind(this)}
            addOcean={this.addOcean.bind(this)}
            />,
        rightSide: <Stream key={0} unmountMe={this.handleChildUnmount} />
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.addStream = this.addStream.bind(this);
    this.addOcean = this.addStream.bind(this);
    this.addArchive = this.addStream.bind(this);

  }

  handleAdd(i) {
  }

  addStream(i){
      if (! this.state.stream)
    {
      setTimeout(function(){
        this.setState({rightSide: <div></div>})
      }.bind(this), 500);
      const right = <Stream key={0}/>;
      setTimeout(function(){
        this.setState({rightSide: right});
      }.bind(this), 1100);
      this.setState({archive: false,stream:true,ocean:false})
    }
  }

  addOcean (i){
    if (! this.state.ocean)
    {
      setTimeout(function(){
        this.setState({rightSide: <div></div>})
      }.bind(this), 500);
      const right = <Ocean key={1}/>;
      setTimeout(function(){
        this.setState({rightSide: right});
      }.bind(this), 1100);
      this.setState({archive: false,stream:false,ocean:true})
    }
  }

  addArchive (i){
    if (! this.state.archive)
    {
      setTimeout(function(){
        this.setState({rightSide: <div></div>})
      }.bind(this), 500);
      const right = <Archive key={2}/>;
      setTimeout(function(){
        this.setState({rightSide: right});
      }.bind(this), 1100);
      this.setState({archive: true,stream:false,ocean:false})
    }
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