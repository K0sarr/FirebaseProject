import React from 'react'
import { auth, provider } from '../config/firebase';
import { signInWithPopup } from 'firebase/auth';

const login = () => {
  return (
    <div>
        <p>Sign In with Google to continue</p>
        <button>Sign in with Google</button>
    </div>
  )
}

export default login
