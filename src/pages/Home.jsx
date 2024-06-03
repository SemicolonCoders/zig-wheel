import React from "react";
import Slider from "react-slick"; // Import Slider component from react-slick library
import "slick-carousel/slick/slick.css"; // Import slick carousel styles
import "slick-carousel/slick/slick-theme.css"; // Import slick carousel theme styles

// Array containing image sources for the slider
const imageSources = [
  "https://img.freepik.com/free-photo/sports-car-driving-asphalt-road-night-generative-ai_188544-8052.jpg",
  "https://images.unsplash.com/photo-1537984822441-cff330075342?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1621688285384-92e5019db2d4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://img.freepik.com/free-photo/sports-car-races-through-dark-blurred-motion-generative-ai_188544-12490.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1716768000&semt=ais_user",
  "https://images.unsplash.com/photo-1526550517342-e086b387edda?q=80&w=1529&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1530906358829-e84b2769270f?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

// Settings for the Slider component
const sliderSettings = {
  dots: true,  // Show navigation dots
  infinite: true, // Allow infinite loop of slides
  slidesToShow: 1,  // Number of slides to show at once
  slidesToScroll: 1, // Number of slides to scroll at a time
  autoplay: true,  // Enable autoplay
  speed: 2000,  // Slide transition speed in milliseconds
  autoplaySpeed: 2000, // Autoplay speed in milliseconds
  cssEase: "linear" // Transition effect
};

// Define the Home component
function Home() {
  

  return (
    <>
   
     
    <div className="slider-container overflow-hidden">
      <Slider {...sliderSettings}>
        {imageSources.map((src, index) => (
          <div key={index} className="p-3">
            <img
              className="w-full h-[700px] object-cover"
              src={src}
              alt={`slide-${index}`}
            />
          </div>
        ))}
      </Slider>
    </div>

    
    </>
  );
}

// Export the Home component
export default Home;
