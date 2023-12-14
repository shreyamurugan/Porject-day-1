import React from 'react';

function Login() {
  return (
    <div className="bg">

    <div className="login-container">
      <form className="login-form">
        <h1>Login</h1>
        <label>Username</label>
        <input type="text" placeholder='User Name'/>

        <label>Password</label>
        <input type="password" placeholder='Password'/>

        <button type="submit">Login</button>
      </form>
    </div>
    </div>
  );
}

export default Login;