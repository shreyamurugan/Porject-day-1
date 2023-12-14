import React from 'react';

function Signin() {
  return (
    <div className="bg">

    <div className="login-container">
      <form className="login-form">
        <h1>Sign In</h1>
        <label>Username</label>
        <input type="text" placeholder='User name'/>

        <label>E-Mail</label>
        <input type="email" placeholder='@gmail.com' id="mail"/>

        <label>Password</label>
        <input type="password" placeholder='Password'/>

        <label>Confirm Password</label>
        <input type="password" placeholder='Password'/>

        <button type="submit">Login</button>
      </form>
    </div>
    </div>
  );
}

export default Signin;