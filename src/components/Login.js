import React from 'react'
import { Link } from 'react-router-dom'
import { Button, FormGroup, FormControl, ControlLabel, Alert } from "react-bootstrap"
import "../styles/login.css";


const Login = () => (


	<div>
	<h1 className="Login-H1">Login</h1>
	<div className="Login">
	<LoginForm  />
	<RegisterButton/>
	</div>
	</div>
)

const RegisterButton = () => (
    <div className="RegisterButton">
        <div>New to Pondi?</div>
        <Link to='/register' >Sign up now!</Link>
    </div>
)

/*
const checkRender = (num) => {
	if(num < 7)
		return (
		<Alert variant='danger'>
            Password must be at least 8 characters. ( {8 - num} characters remaining)
        </Alert>    
	); 	
}
*/
class LoginForm extends React.Component {
	state = {
		toProfile: false,
		email: "",
		password: ""
	}

	nameHandler = () => {
		// do something here
		this.setState(() => ({
			toProfile: true
		}));
	}

	passHandler = (uPass) => {
		// do something here
			this.setState(() => ({
			toProfile: true
		}));	}

	handleChange = event => {
		this.setState({
			[event.target.id]: event.target.value
		});
	}

	handleSubmit = (event) => {
		event.preventDefault();
	}

	validateForm() {
		return this.state.email.length > 0
		&& this.state.password.length > 7;
	}

	render() {
		if (this.state.toProfile == true) {
					
		}

		        document.body.style = 'background: #D6E4EE;';


		return (
				<form onSubmit={this.handleSubmit}>

				<FormGroup controlId="email" bsSize="large">
                	<FormControl className="login-wide"
					placeholder="email" 
					autoFocus 
					type="email" 
					value={this.state.email} 
					onChange={this.handleChange} 
					/>
				</FormGroup>

				<FormGroup controlId="password" bsSize="large" >
                	<FormControl className="login-wide"
                	placeholder="password"
                	autoFocus
                	type="password"
                	value={this.state.password}
                	onChange={this.handleChange}
                	/>
            	</FormGroup>

            		

			<Button className="login-button"
                block
                bsSize="large"
                disabled={!this.validateForm()}
                type="submit"
            >Log In
            </Button>




				</form>
				);
	}



}


export default Login