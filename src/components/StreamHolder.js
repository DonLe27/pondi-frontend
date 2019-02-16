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
    // parse through data, get username, etc

    this.streamData = "this is some stream data";
    this.userData = "this is a username";
    this.state = {
        stream: true,
        archive: false,
        ocean: false,
        leftSide: <SideBar 
            userData={this.userData} 
            addStream={this.addStream.bind(this)} 
            addArchive={this.addArchive.bind(this)}
            addOcean={this.addOcean.bind(this)}
            />,
        rightSide: <Stream key={0} unmountMe={this.handleChildUnmount}  streamData={this.streamData} userData={this.userData}/>
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
      const right = <Stream key={0} streamData={this.streamData} userData={this.userData} />;
      setTimeout(function(){
        this.setState({rightSide: right});
      }.bind(this), 1100);
      this.setState({archive: false, stream:true, ocean:false})
    }
  }

  addOcean (i){
    if (! this.state.ocean)
    {
      setTimeout(function(){
        this.setState({rightSide: <div></div>})
      }.bind(this), 500);
      const right = <Ocean key={1} streamData={this.streamData} userData={this.userData}/>;
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
      const right = <Archive key={2} streamData={this.streamData} userData={this.userData}/>;
      setTimeout(function(){
        this.setState({rightSide: right});
      }.bind(this), 1100);
      this.setState({archive: true,stream:false,ocean:false})
    }
  }

	render(){
		
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