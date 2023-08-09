'use client';

import React from 'react';
import { signIn } from 'next-auth/react';

const Login = () => {
  return (
    <div>
      <button
        onClick={() => signIn('google')}
        className='rounded bg-blue-500 mx-5 my-5 p-2 text-white capitalize'
      >
        Google sign in
      </button>

      <button
        onClick={() => signIn('github')}
        className='rounded bg-blue-500 mx-5 my-5 p-2 text-white capitalize'
      >
        Github sign in
      </button>
    </div>
  );
};

export default Login;
