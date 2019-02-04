import React from 'react';
import { Link } from 'react-router-dom';
import { Button, FormGroup, FormControl, ControlLabel, Alert } from "react-bootstrap";
import { CSSTransitionGroup } from 'react-transition-group'; // ES6
import '../styles/test-transitions.css';
import Landing from './Landing.js'
import Login from './Login.js'


class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {items: [ <Landing />]};
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    const newItems = this.state.items.concat([
      <Login />
    ]);
    this.setState({items: newItems});
  }


  randomFunction = () => {
  	for (var i = 0; i < 5; i++)
  		continue;
  }


  handleRemove(i) {
    let newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({items: newItems});   

  }

  render() {
    const items = this.state.items.map((item, i) => (
      <div key={item} onClick={() => {this.handleRemove(i);}}>
        {item}
      </div>
    ));

    return (
      <div>
      <Button onClick={this.handleAdd} />
        <CSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionEnterTimeout={3000}
          transitionLeaveTimeout={3000}
          transitionEnter={true}
      		transitionLeave={true}>
      		
          {items}
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default TodoList