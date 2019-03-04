import React from 'react';
import LoginButton from './LoginButton';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { CSSTransitionGroup } from 'react-transition-group'; // ES6
import '../styles/transitions.css';
import "../styles/landing.css";


const Landing = () => (
    <CSSTransitionGroup className="Landing"
          transitionName="example"
          transitionAppear={true}
          transitionEnter={true}
          transitionLeave={true}>
    <LoginButton className="LoginButton login-landing"/>
    <div className="PondiCircles one"></div>
    <div className="PondiCircles two" ></div>
    <div className="PondiCircles three" ></div>
    <div className="PondiCircles four" ></div>
        <h1 className="LandingTitle">pondi</h1>

    <Form className="LandingPrompt"/>
        </CSSTransitionGroup>




)

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div className="form-group LandingForm">
            <form onSubmit={this.handleSubmit}>
                <label>
                     <p>Is water wet?</p>
                     <textarea type="text" value={this.state.value} onChange={this.handleChange} placeholder="Respond Here..." />
                </label>
                <Link to='/register'>
                    <button className="btn btn-primary">Register</button>
                </Link>
            </form>
            </div>


        );
    }
}

export default Landing