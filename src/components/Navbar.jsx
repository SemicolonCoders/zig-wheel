import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Searchbar from './Searchbar';

// Define the Navbar component
const Navbar = () => {

   // Render the Navbar component
  return (
    <div className="flex flex-col w-[100%] bg-slate-300">

          {/* Primary navigation */}
      <nav className="bg-white border-gray-600 dark:bg-gray-900 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href=""
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://images.zigcdn.com/images/revamp/zigwheels-logo-black.svg"
              className="h-8"
              alt=""
            />
            <img
              src="https://img.freepik.com/free-photo/view-three-dimensional-car-with-neon-lights_23-2150998554.jpg?size=626&ext=jpg&ga=GA1.1.2065522675.1685035157&semt=ais_user"
              className="h-8"
              alt=""
            />
          </a>
                 {/* Searchbar component */}
          <div>
            <Searchbar/>
          </div>
              
        </div>
      </nav>

      
     {/* Navbar 2 for secondary navbar */}

    <nav className="flex bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-6 rtl:space-x-reverse">
          {/* Logo or Brand Name can go here */}
        </a>
          {/* Button to toggle mobile menu */}
        <button
          data-collapse-toggle="navbar-multi-level"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-between text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-multi-level"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round" 
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>

        </button>
         {/* Dropdown menu for products */}
        <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {/* NavLink for Home */}
            <NavLink to="/" activeClassName="active">
              <li className="block py-2 px-3 font-bold text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">
                Home
              </li>
            </NavLink>

                {/* Dropdown menu item for Products */}
            <li className="relative group">
              <button className="flex items-center justify-between w-full py-2 px-3 font-bold text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                Products
                <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
                {/* Dropdown menu for Products */}
              <div className="absolute left-0 z-10 hidden w-44 bg-white divide-y divide-gray-100 rounded-lg shadow group-hover:block dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLargeButton">
                
                 {/* NavLink for All */}
                <NavLink to="/all" activeClassName="active">
                    <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      All
                    </li>
                  </NavLink>
                      {/* NavLink for Cars */}
                  <NavLink to="/cars" activeClassName="active">
                    <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Cars
                    </li>
                  </NavLink>
                   {/* NavLink for Bikes */}
                  <NavLink to="/bikes" activeClassName="active">
                    <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Bikes
                    </li>
                  </NavLink>
                   {/* NavLink for Scooty */}
                  <NavLink to="/scooty" activeClassName="active">
                    <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Scooty
                    </li>
                  </NavLink>
                </ul>
              </div>
            </li>

            {/* NavLink for Gallery */}

            <NavLink to="/gallery" activeClassName="active">
              <li className="block py-2 px-3 font-bold text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Gallery
              </li>
            </NavLink>

             {/* NavLink for AboutUs */}
            <NavLink to="/aboutus" activeClassName="active">
              <li className="block py-2 px-3 font-bold text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                AboutUs
              </li>
            </NavLink>
             {/* NavLink for log in */}
            <NavLink to="/login" activeClassName="active">
              <li className="block py-2 px-3 font-bold text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                LogIn
              </li>
            </NavLink>
              {/* NavLink for sign up */}
            <NavLink to="/signup" activeClassName="active">
              <li className="block py-2 px-3 font-bold text-gray-900 rounded-full hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                SignUp
              </li>
            </NavLink>
            
             {/* NavLink for cart */}
            <NavLink to="/cart" activeClassName="active">
              <li className="block py-2 px-3 font-bold text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                <img src="https://cdn-icons-png.freepik.com/256/891/891468.png?ga=GA1.1.2065522675.1685035157&semt=ais_hybrid" alt=""  className="w-10 h-10 " />
              
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>

    </div>
  );
};

export default Navbar;
