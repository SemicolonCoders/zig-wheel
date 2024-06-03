import React from 'react';
import { fetch_scooty_data } from '../Data/ScootyData' 

const scootys = () => {
  return (
    <div className="flex flex-wrap gap-5 p-5">
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
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add To Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default scootys;
