import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutUs from "./pages/AboutUs";
import All from "./Products/All";
import Cars from "./Products/Cars";
import Bikes from "./Products/Bikes";
import Scooty from "./Products/Scooty";
import Gallery from "./pages/Gallery";
import Cart from "./pages/Cart";
import StoreProvider from './context/storeContext'; 
// import ProductPage from "./components/productPage";

function App() {
  return (
    <>
      <StoreProvider>
        <div>
          <Navbar />
        {/* other components */}
      </div>
      {/* <div className="App">
      <ProductPage />
    </div> */}

      <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/cart" element={<Cart />} />

            <Route path="/cars" element={<Cars />} />
            <Route path="/all" element={<All />} />
            <Route path="/bikes" element={<Bikes />} />
            <Route path="/scooty" element={<Scooty />} />

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
      </div>

      <div>
          <Footer />
        </div>
        </StoreProvider>
        document.getElementById('root')
    </>
    
  );
}

export default App;
