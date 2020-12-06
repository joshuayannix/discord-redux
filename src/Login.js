import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';

function Login() {
  const signIn = e => {
    auth.signInWithPopup(provider).catch((error => alert(error.message)));
  };

  return (
    <div className='login'>
      <h2>Login page</h2>
      <div className="login__logo">
        <img src="https://cdn.vox-cdn.com/thumbor/VlgzMj5_REvgw7vItUeOy0KSYnY=/0x172:2400x1429/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/11946613/discord_logo_wordmark_2400.jpg" alt=""/>
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  )
}

export default Login
