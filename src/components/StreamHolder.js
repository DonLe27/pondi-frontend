import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import {
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
  Alert
} from "react-bootstrap";
import { CSSTransitionGroup } from "react-transition-group"; // ES6
import "../styles/transitions.css";
import "../styles/streamholder.css";

import Stream from "./Stream.js";
import Ocean from "./Ocean.js";
import Archive from "./Archive.js";
import SideBar from "./SideBar.js";
import Prompt from "./Prompt.js";

class StreamHolder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stream: true,
      archive: false,
      ocean: false,
      prompt: false,
      leftSide: (
        <SideBar
          addStream={this.addStream.bind(this)}
          addArchive={this.addArchive.bind(this)}
          addOcean={this.addOcean.bind(this)}
          addPrompt={this.addPrompt.bind(this)}
        />
      ),
      rightSide: <Stream key={0} unmountMe={this.handleChildUnmount} />
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.addStream = this.addStream.bind(this);
    this.addOcean = this.addStream.bind(this);
    this.addArchive = this.addStream.bind(this);
    this.addPrompt = this.addPrompt.bind(this);
  }

  handleAdd(i) {}

  addStream(i) {
    if (!this.state.stream) {
      setTimeout(
        function() {
          this.setState({ rightSide: <div /> });
        }.bind(this),
        500
      );
      const right = <Stream key={0} />;
      setTimeout(
        function() {
          this.setState({ rightSide: right });
        }.bind(this),
        1000
      );
      this.setState({
        archive: false,
        stream: true,
        ocean: false,
        prompt: false
      });
    }
  }

  addOcean(i) {
    if (!this.state.ocean) {
      setTimeout(
        function() {
          this.setState({ rightSide: <div /> });
        }.bind(this),
        500
      );
      const right = <Ocean key={1} />;
      setTimeout(
        function() {
          this.setState({ rightSide: right });
        }.bind(this),
        1000
      );
      this.setState({
        archive: false,
        stream: false,
        ocean: true,
        prompt: false
      });
    }
  }

  addArchive(i) {
    if (!this.state.archive) {
      setTimeout(
        function() {
          this.setState({ rightSide: <div /> });
        }.bind(this),
        500
      );
      const right = <Archive key={2} />;
      setTimeout(
        function() {
          this.setState({ rightSide: right });
        }.bind(this),
        1000
      );
      this.setState({
        archive: true,
        stream: false,
        ocean: false,
        prompt: false
      });
    }
  }

  addPrompt(i) {
    if (!this.state.prompt) {
      setTimeout(
        function() {
          this.setState({ rightSide: <div /> });
        }.bind(this),
        500
      );
      const right = <Prompt key={3} />;
      setTimeout(
        function() {
          this.setState({ rightSide: right });
        }.bind(this),
        1000
      );
      this.setState({
        archive: true,
        stream: false,
        ocean: false,
        prompt: true
      });
    }
  }

  render() {
    return (
      <div key={this.state.rightSide}>
        <CSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionEnter={true}
          transitionLeave={true}
        >
          {this.state.leftSide}
          {this.state.rightSide}
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default StreamHolder;
