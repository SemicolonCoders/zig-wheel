import React from "react";
import Navbar from "./components/Navbar"; // Importing the Navbar component
import Footer from "./pages/Footer"; // Importing the Footer component
import { Routes, Route } from "react-router-dom"; // Importing Routes and Route components from react-router-dom
import Home from "./pages/Home"; // Importing the Home page component
import Login from "./pages/Login"; // Importing the Login page component
import Signup from "./pages/Signup"; // Importing the Signup page component
import "slick-carousel/slick/slick.css"; // Importing slick carousel CSS
import "slick-carousel/slick/slick-theme.css"; // Importing slick carousel theme CSS
import AboutUs from "./pages/AboutUs"; // Importing the AboutUs page component
import All from "./Products/All"; // Importing the All products component
import Cars from "./Products/Cars"; // Importing the Cars component
import Bikes from "./Products/Bikes"; // Importing the Bikes component
import Scooty from "./Products/Scooty"; // Importing the Scooty component
import Gallery from "./pages/Gallery"; // Importing the Gallery page component
import Cart from "./pages/Cart"; // Importing the Cart page component
import StoreProvider from './context/storeContext'; // Importing the StoreProvider from the context folder

function App() {
  return (
    <>
      <StoreProvider> {/* Wrapping the application with the StoreProvider */}
        <div>
          <Navbar /> {/* Rendering the Navbar component */}
        {/* other components */}
      </div>
      {/* <div className="App">
      <ProductPage />
    </div> */}

      <div>
          <Routes>
            <Route path="/" element={<Home />} /> {/* Setting up route for the Home page */}
            <Route path="/aboutus" element={<AboutUs />} /> {/* Setting up route for the AboutUs page */}
            <Route path="/gallery" element={<Gallery />} /> {/* Setting up route for the Gallery page */}
            <Route path="/cart" element={<Cart />} /> {/* Setting up route for the Cart page */}

            <Route path="/cars" element={<Cars />} /> {/* Setting up route for the Cars page */}
            <Route path="/all" element={<All />} /> {/* Setting up route for the All products page */}
            <Route path="/bikes" element={<Bikes />} /> {/* Setting up route for the Bikes page */}
            <Route path="/scooty" element={<Scooty />} /> {/* Setting up route for the Scooty page */}

            <Route path="/login" element={<Login />} /> {/* Setting up route for the Login page */}
            <Route path="/signup" element={<Signup />} /> {/* Setting up route for the Signup page */}
          </Routes>
      </div>

      <div>
          <Footer /> {/* Rendering the Footer component */}
        </div>
        </StoreProvider> {/* Closing the StoreProvider */}
        document.getElementById('root') {/* This line seems misplaced */}
    </>
    
  );
}

export default App;
