import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => (
  <div>
    <h1>Log In Here!</h1>
    <RegisterButton />
  </div>
)

const RegisterButton = () => (
    <div>
        <div>New to Pondi?</div>
        <Link to='/register'>Sign up now!</Link>
    </div>
)

export default Login
