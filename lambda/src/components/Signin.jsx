import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { loginStart, loginSuccess, loginFailure } from '../slices/authSlice';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSignup = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post('http://localhost:5000/user/signup', { username, email, password }, { withCredentials: true });
      alert('Signup successful');
      const { token } = res.data;
      Cookies.set('token', token, { expires: 1, path: '/', domain: 'localhost' });
      dispatch(loginSuccess(res.data.user));  // Pass the user data from the response
      window.location.href = '/';
    } catch (error) {
      console.error('Signup error:', error);
      dispatch(loginFailure(error.response.data.message));
    }
  };

  return (
    <div className="rounded-lg bg-card text-card-foreground shadow-lg bg-[#202022] text-[#E7E7E4]">
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="whitespace-nowrap font-semibold tracking-tight text-2xl">Create an account</h3>
        <p className="text-sm text-muted-foreground text-[#DBDBD7]">
          Enter your details to get started.
        </p>
      </div>
      <form onSubmit={handleSignup} className="p-6 space-y-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#DBDBD7]">
            Username
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="flex h-10 w-full rounded-md border border-zinc-800 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-[#0F0F10]"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#DBDBD7]">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="m@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex h-10 w-full rounded-md border border-zinc-800 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-[#0F0F10]"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="password" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#DBDBD7]">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter the password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="flex h-10 w-full rounded-md border border-zinc-800 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-[#0F0F10]"
          />
        </div>
        <div className="flex items-center p-6">
          <button
            type="submit"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full bg-[#E6E6E6] text-black"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;