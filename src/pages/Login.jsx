import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaFacebook, FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';
import { IoBarcodeSharp } from 'react-icons/io5';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Validation state
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset previous error messages
    setEmailError('');
    setPasswordError('');

    // Validation checks
    if (!email) {
      setEmailError('Email is required');
    }

    if (!password) {
      setPasswordError('Password is required');
    }

    // If no errors, proceed with form submission logic
    if (!emailError && !passwordError) {
      // Perform your login logic here
      console.log('Login successful');
    }
  };

  return (
    <main className='flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-200 to-slate-500'>
      <div className='bg-white p-8 rounded shadow-lg max-w-md w-full'>
        <div className='flex items-center justify-center mb-2'>
          <IoBarcodeSharp className='w-12 h-12 text-indigo-500 bg-yellow-500 p-2 rounded-full' />
        </div>
        <h2 className='font-bold text-2xl text-center mb-5 text-gray-800'>
          <span className='text-gray-800'>Receipt</span>
          <span className='text-yellow-500'>hub</span>
        </h2>
        <form onSubmit={handleSubmit}>
          <div className='relative flex items-center'>
            <label
              id='email_label'
              htmlFor='email'
              className={`flex left-2 text-sm absolute items-center transition-all ${
                isEmailFocused || email ? 'mb-10 bg-white text-indigo-500' : 'text-gray-400'
              }`}
            >
              <FaEnvelope className='mr-1' />
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className='w-full p-2 border rounded-md focus:outline-none focus:border-indigo-500 transition-all'
              onFocus={() => setIsEmailFocused(true)}
              onBlur={() => setIsEmailFocused(false)}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError(''); // Clear error when typing
              }}
            />
          </div>
          {emailError && <p className='text-red-500'>{emailError}</p>}
          <div className='relative mt-4 flex items-center'>
            <label
              id='password_label'
              htmlFor='password'
              className={`flex left-2 text-sm absolute items-center transition-all ${
                isPasswordFocused || password ? 'mb-10 bg-white text-indigo-500' : 'text-gray-400'
              }`}
            >
              <FaLock className='mr-1' />
              Password
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id='password'
              name='password'
              className='p-2 w-full border rounded-md focus:outline-none focus:border-indigo-500 transition-all'
              onFocus={() => setIsPasswordFocused(true)}
              onBlur={() => setIsPasswordFocused(false)}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError(''); // Clear error when typing
              }}
            />
            <div
              className='cursor-pointer absolute right-2 top-2 text-gray-400'
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </div>
          </div>
          {passwordError && <p className='text-red-500'>{passwordError}</p>}
          <button
            type='submit'
            className='bg-indigo-500 text-white mt-4 p-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:border-indigo-300 w-full'
          >
            Login
          </button>
        </form>

        {/* Separator and "or" text */}
        <div className='flex items-center mt-4'>
          <hr className='flex-grow border-t border-gray-300' />
          <div className='mx-4 text-gray-600'>or</div>
          <hr className='flex-grow border-t border-gray-300' />
        </div>

        {/* Social Media Sign up options */}
        <div className='flex flex-col items-center mt-4'>
          <button className='bg-blue-600 text-white rounded-md p-2 hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300 flex items-center justify-center w-full mb-2'>
            <FaFacebook className='mr-2' />
            Sign in with Facebook
          </button>

          <button className='bg-red-600 text-white p-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:border-red-300 flex items-center justify-center w-full mb-2'>
            <FaGoogle className='mr-2' />
            Sign in with Google
          </button>
        </div>

        {/* Already have an account? Register link */}
        <p className="mt-4 text-sm text-gray-600 text-center">Don't have an account? <a href="register" className="text-indigo-500 hover:underline">Register here</a></p>

      </div>
    </main>
  );
}
