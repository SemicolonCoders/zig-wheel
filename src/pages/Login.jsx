import React, { useState } from 'react';
import { supabaseClient } from '../Client'; // Import the Supabase client


// Define the Login component
const Login = () => {

   // State variables for email, password, error message, and success message
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

   // Function to handle login form submission
  const handleLogin = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Attempt to sign in using Supabase authentication
    const { data, error } = await supabaseClient.auth.signInWithPassword({
      email: email,
      password: password,
    });

     // Handle errors or successful login
    if (error) {
      setError(error.message); // Set error message if authentication fails
      setSuccess(null); // Clear success message
    } else {
      console.log(data?.session?.access_token); // Log access token to the console
      setSuccess('Login successful!'); // Set success message
      setError(null);  // Clear error message
      // Optionally, redirect or perform other actions after successful login
    }
  };

    // Render the login form
  return (
    <div>
        {/* Login form section */}
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
             {/* ZigWheels logo */}
            <img src="https://images.zigcdn.com/images/revamp/zigwheels-logo-black.svg" alt="ZigWheels logo" />
          </a>

           {/* Login form container */}
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              {/* Login form header */}
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Log in to your account
              </h1>
              {/* Error message display */}
              {error && <p className="text-red-600">{error}</p>}
               {/* Success message display */}
              {success && <p className="text-green-600">{success}</p>}
               {/* Login form */}
              <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
                <div>
                    {/* Email input field */}
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                  <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                      {/* Password input field */}
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>

                  {/* Remember me checkbox and Forgot password link */}
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                    </div>
                  </div>
                  <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                </div>
                 {/* Login button */}
                <button type="submit" className="w-full text-blue-700  bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Log in</button>
              {/* Link to sign up page */}
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet? <a href="/signup" className="font-medium text-orange-600 text-primary-600 hover:underline dark:text-primary-500">Click here</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
