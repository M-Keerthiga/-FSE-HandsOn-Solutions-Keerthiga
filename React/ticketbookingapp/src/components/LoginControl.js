import React from 'react';

function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
}

function LoginControl(props) {
  const isLoggedIn = props.isLoggedIn;
  let button;
  if (isLoggedIn) {
    button = <LogoutButton onClick={props.onLogoutClick} />;
  } else {
    button = <LoginButton onClick={props.onLoginClick} />;
  }
  return <div>{button}</div>;
}

export default LoginControl;
