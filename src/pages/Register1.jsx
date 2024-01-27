import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaFacebook, FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';
import { IoBarcodeSharp } from 'react-icons/io5';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isConfirmPasswordFocused, setIsConfirmPasswordFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <main className='flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-200 to-slate-500'>
      <div className='bg-white p-8 rounded shadow-lg max-w-md w-full'>
        <div className='flex items-center justify-center mb-2'>
          <IoBarcodeSharp className='w-12 h-12 text-indigo-500 bg-yellow-500 p-2 rounded-full' />
        </div>
        <h2 className='font-bold text-2xl mb-5 text-center text-gray-800'>
          <span className='text-gray-800'>Receipt</span>
          <span className='text-yellow-500'>hub</span>
        </h2>
        <form>
          <div className='relative mb-4 flex items-center'>
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
              value={email}
              re
              className='w-full p-2 border rounded-md focus:outline-none focus:border-indigo-500 transition-all'
              onFocus={() => setIsEmailFocused(true)}
              onBlur={() => setIsEmailFocused(false)}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='relative mb-4 flex items-center'>
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
              onChange={(e) => setPassword(e.target.value)}
            />
            <div
              className='cursor-pointer absolute right-2 top-2 text-gray-400'
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
          <div className='relative mb-4 flex items-center'>
            <label
              id='confirm_password_label'
              htmlFor='confirm_password'
              className={`flex left-2 text-sm absolute items-center transition-all ${
                isConfirmPasswordFocused || confirmPassword
                  ? 'mb-10 bg-white text-indigo-500'
                  : 'text-gray-400'
              }`}
            >
              <FaLock className='mr-1' />
              Confirm Password
            </label>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              id='confirm_password'
              name='confirm_password'
              className='p-2 w-full border rounded-md focus:outline-none focus:border-indigo-500 transition-all'
              onFocus={() => setIsConfirmPasswordFocused(true)}
              onBlur={() => setIsConfirmPasswordFocused(false)}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div
              className='cursor-pointer absolute right-2 top-2 text-gray-400'
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
          <button
            type='submit'
            className='bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:border-indigo-300 w-full'
          >
            Create Account
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
            Sign up with Facebook
          </button>

          <button className='bg-red-600 text-white p-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:border-red-300 flex items-center justify-center w-full mb-2'>
            <FaGoogle className='mr-2' />
            Sign up with Google
          </button>
        </div>

        {/* Already have an account? Login link */}
        <p className='text-sm text-gray-500 text-center mt-4'>
          Already have an account? 
          <a href='login' className='text-indigo-500 hover:underline'>
            {' '}
            Login here
          </a>
        </p>
      </div>
    </main>
  );
}
