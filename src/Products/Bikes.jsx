// Importing React and the bike data
import React from 'react';
import { fetch_bike_data } from '../Data/BikeData';
const Bikes = () => {
  return (
    <div className="flex flex-wrap gap-5 p-5">
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
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add To Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Bikes;
