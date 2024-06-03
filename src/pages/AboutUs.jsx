import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

  // Adjust the import path based on your project structure

const AboutUs = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col items-center bg-fuchsia-200 text-white p-8 rounded-lg shadow-lg">
       
        <h1 className="font-semibold text-2xl text-black mb-4">About Developer</h1>
        <p className="text-pink-950 font-semibold mb-4 text-center">
          Hello! I'm <span className="font-semibold text-white bg-blue-700 rounded-lg px-2">Pragati Srivastava</span>, a dedicated Full Stack Web Developer. I've crafted this website with a passion for detail and a love for creating seamless, user-friendly online stores. My goal is to make your shopping experience not only effortless but also enjoyable. Every element on this site is designed to stand out, providing you with a smooth and delightful journey from browsing to checkout. Welcome, and happy shopping!
        </p>

        <h1 className="font-semibold text-2xl text-black mb-4">About ZigWheels</h1>
        <p className="text-pink-950 font-semibold mb-4 text-center">
        This is an e-commerce application focusing on vehicles, where users can browse, view details, and add different types of vehicles (cars, bikes, and scooties) to a cart. The application uses React for the frontend and has a context-based state management for handling the shopping cart functionality.
        </p>

        <h1 className="font-semibold text-2xl text-black mb-4">Frameworks and Technologies Used</h1>
        <p className="text-gray-900 font-semibold mb-4 text-center">
          When developing the ZigWheels WebApp, I leveraged powerful tools and technologies to create a modern, smooth, single-page application. By using Tailwind CSS for styling and React for the frontend framework, I ensured a seamless user experience. These technologies allowed me to build an optimized, responsive, and highly interactive website that makes online shopping a breeze.
        </p>

        <h1 className="font-semibold text-2xl text-black mb-4">Exploring the Backend</h1>
        <p className="text-gray-900 font-semibold mb-4 text-center">
          While my primary focus is on designing the front end of websites, I also developed a robust backend API to seamlessly fetch data. This integration ensures smooth communication between the frontend and backend, delivering a flawless and enjoyable user experience. My attention to both the visual and functional aspects guarantees that every interaction on the site is efficient and engaging.
        </p>

        <h1 className="font-semibold text-xl text-gray-900 mb-4">I look forward to establishing a connection.</h1>
        <p className="font-semibold text-gray-900 mb-4 text-center">
          Feel free to explore the website, discover our offerings, and don’t hesitate to share any questions or suggestions. Your journey through this online shopping experience matters to us, and we’re here to assist. Happy browsing!
        </p>

        <div className="flex space-x-4 text-black my-8">
          <Link to="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BXUsZx%2BkBT06pNownOs8ehQ%3D%3D" target="_blank" data-aos="zoom-in">
            <FaLinkedin className="hover:text-[#b50030] text-gray-500 transition-all ease duration-300 text-4xl" />
          </Link>
          <Link to="https://github.com/SemicolonCoders/-webapp" target="_blank" data-aos="zoom-in">
            <FaGithub className="hover:text-[#b50009] text-gray-500 transition-all ease duration-300 text-4xl" />
          </Link>
        </div>
      </div>
    
    </div>
  );
};

export default AboutUs;
