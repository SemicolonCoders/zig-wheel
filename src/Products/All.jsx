import React, { useContext, useState } from 'react'; // Importing necessary hooks and libraries
import { fetch_cars_data } from '../Data/CarData'; // Importing car data
import { fetch_bike_data } from '../Data/BikeData'; // Importing bike data
import { fetch_scooty_data } from '../Data/ScootyData'; // Importing scooty data
import { storeContext } from '../context/storeContext'; // Importing store context

const All = () => {
  const { addToCart } = useContext(storeContext); // Using the store context to get the addToCart function
  const [productQuantity, setProductQuantity] = useState({}); // State to track quantity of products added to cart

  // Function to handle adding a product to the cart
  const handleAddToCart = (product) => {
    addToCart(product); // Add product to cart using context function
    setProductQuantity(prevQuantity => ({
      ...prevQuantity,
      [product.id]: (prevQuantity[product.id] || 0) + 1 // Update the quantity of the product
    }));
  };

  return (
    <div className="flex flex-wrap gap-5 p-5">
      {/* Render car data */}
      {fetch_cars_data.map((car) => (
        <div
          key={car.id}
          className="max-w-sm bg-white border-gray-400 border-2 rounded-lg shadow-lg p-6"
        >
          <img
            className="w-full h-48 object-cover rounded-t-lg"
            src={car.image}
            alt={car.model}
          />
          <div className="p-5">
            <h2 className="text-2xl font-bold mb-2">{car.model}</h2>
            <p className="text-gray-700 mb-2">{car.description}</p>
            <ul className="mb-2">
              <li>
                <span className="font-semibold">Price:</span> {car.price}
              </li>
              <li>
                <span className="font-semibold">Color:</span> {car.color}
              </li>
              <li>
                <span className="font-semibold">Max Speed:</span> {car.max_speed} km/h
              </li>
              <li>
                <span className="font-semibold">Make Year:</span> {car.make_year}
              </li>
              <li>
                <span className="font-semibold">Fuel:</span> {car.fuel}
              </li>
              <li>
                <span className="font-semibold">Location:</span> {car.location}
              </li>
            </ul>
            <div className="flex justify-between items-center">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => handleAddToCart(car)}
              >
                Add To Cart
              </button>
              <div className="flex items-center">
                {productQuantity[car.id] && (
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex justify-center items-center">
                    {productQuantity[car.id]}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* Render bike data */}
      {fetch_bike_data.map((bike) => (
        <div
          key={bike.id}
          className="max-w-sm bg-white border-gray-400 border-2 rounded-lg shadow-lg p-6"
        >
          <img
            className="w-full h-48 object-cover rounded-t-lg"
            src={bike.image}
            alt={bike.model}
          />
          <div className="p-5">
            <h2 className="text-2xl font-bold mb-2">{bike.model}</h2>
            <p className="text-gray-700 mb-2">{bike.description}</p>
            <ul className="mb-2">
              <li>
                <span className="font-semibold">Price:</span> {bike.price}
              </li>
              <li>
                <span className="font-semibold">Color:</span> {bike.color}
              </li>
              <li>
                <span className="font-semibold">Max Speed:</span> {bike.max_speed} km/h
              </li>
              <li>
                <span className="font-semibold">Make Year:</span> {bike.make_year}
              </li>
              <li>
                <span className="font-semibold">Fuel:</span> {bike.fuel}
              </li>
              <li>
                <span className="font-semibold">Location:</span> {bike.location}
              </li>
            </ul>
            <div className="flex justify-between items-center">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => handleAddToCart(bike)}
              >
                Add To Cart
              </button>
              <div className="flex items-center">
                {productQuantity[bike.id] && (
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex justify-center items-center">
                    {productQuantity[bike.id]}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* Render scooty data */}
      {fetch_scooty_data.map((scooty) => (
        <div
          key={scooty.id}
          className="max-w-sm bg-white border-gray-400 border-2 rounded-lg shadow-lg p-6"
        >
          <img
            className="w-full h-48 object-cover rounded-t-lg"
            src={scooty.image}
            alt={scooty.model}
          />
          <div className="p-5">
            <h2 className="text-2xl font-bold mb-2">{scooty.model}</h2>
            <p className="text-gray-700 mb-2">{scooty.description}</p>
            <ul className="mb-2">
              <li>
                <span className="font-semibold">Price:</span> {scooty.price}
              </li>
              <li>
                <span className="font-semibold">Color:</span> {scooty.color}
              </li>
              <li>
                <span className="font-semibold">Max Speed:</span> {scooty.max_speed} km/h
              </li>
              <li>
                <span className="font-semibold">Make Year:</span> {scooty.make_year}
              </li>
              <li>
                <span className="font-semibold">Fuel:</span> {scooty.fuel}
              </li>
              <li>
                <span className="font-semibold">Location:</span> {scooty.location}
              </li>
            </ul>
            <div className="flex justify-between items-center">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => handleAddToCart(scooty)}
              >
                Add To Cart
              </button>
              <div className="flex items-center">
                {productQuantity[scooty.id] && (
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex justify-center items-center">
                    {productQuantity[scooty.id]}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default All; // Exporting the All component
