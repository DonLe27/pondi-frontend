import React from 'react';
import { Link } from 'react-router-dom';

const LoginButton = () => (
  <div>
    <Link className="login-landing" to='/login'>login</Link>
  </div>
)

export default LoginButton