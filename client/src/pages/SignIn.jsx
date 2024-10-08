import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice';
import OAuth from '../components/OAuth';
export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error } =useSelector((state) =>state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) =>{
    setFormData({
      ...formData,
      [e.target.id] : e.target.value,
    });
  };
  const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
      dispatch(signInStart())
      const res = await fetch('api/auth/signin', 
        {
          method: 'POST',
          headers:{
            'Content-type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      console.log(data);
      if(data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate('/'); 
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type='email' placeholder='Enter your email here' className='border p-3 rounded-lg' id='email' onChange={handleChange} />
        <input type='password' placeholder='Enter your password here' className='border p-3 rounded-lg' id='password' onChange={handleChange} />
        <button disabled={loading} className='bg-slate-800 text-white p-3 rounded-lg uppercase hover:opacity-95'>
          {loading ? 'Loading...' : "Sign In" }
        </button>
        <OAuth />
      </form>
      <div className='flex gap-1 mt-2'>
        <p>Dont have an account?</p>
        <Link to='/sign-up'>
          <span className='text-violet-900 font-semibold'>Sign up</span>
        </Link>
      </div>
      {error && <p className='text-red-700 mt-3'>{error}</p>}
    </div>
  )
}
