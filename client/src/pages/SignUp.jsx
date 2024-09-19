import React from 'react'
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form className='flex flex-col gap-4'>
        <input type='text' placeholder='Enter your username here' className='border p-3 rounded-lg' id='username'></input>
        <input type='email' placeholder='Enter your email here' className='border p-3 rounded-lg' id='email'></input>
        <input type='password' placeholder='Enter your password here' className='border p-3 rounded-lg' id='password'></input>
        <button className='bg-slate-800 text-white p-3 rounded-lg uppercase hover:opacity-95'>Sign up</button>
      </form>
      <div className='flex gap-1 mt-2'>
        <p>Already have an account?</p>
        <Link to='/sign-in'>
          <span className='text-violet-900 font-semibold'>Sign in</span>
        </Link>
      </div>
    </div>
  )
}
