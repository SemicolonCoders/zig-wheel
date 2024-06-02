import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { storeContext } from '../context/storeContext';

const Cart = () => {
  const { cartItems, setCartItems, removeFromCart } = useContext(storeContext);
  const navigate = useNavigate(); // Initialize useNavigate

  const increaseQuantity = (id) => {
    const updatedCartItems = cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCartItems);
  };

  const decreaseQuantity = (id) => {
    const updatedCartItems = cartItems.map(item =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartItems(updatedCartItems);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    // Navigate to the home page
    navigate('/');
  };

  return (
    <div className="container mx-auto mt-10 flex-center">
      <div className="mb-20">
        <div className="flex justify-center items-center space-x-4 text-white bg-gray-200 hover:bg-cyan-300 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJxBkSgB2me_Unn4A_sOkW_yDX2HnpjqUdlA&s" alt="Logo" className="w-30 h-12" />
          <h2 className="text-2xl text-center font-serif text-pink-700 font-bold">COLLECT YOUR KEYS HERE!!!</h2>
        </div>
      </div>

      {cartItems.length === 0 ? (
        <div className='mt-50 text-white bg-gray-200 hover:bg-cyan-300 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center'> 
          <p className="text-2xl text-center font-serif text-orange-500 font-bold flex justify-center items-center">  
            Your cart is empty???
            <img className='w-25 h-25' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv8wNwBfV6jEHU4oMyHiUAbIB0jkQAWohMZ84yWcRpXQIyDuBjTaXwvXY8AQ&s" alt="" />
          </p>
        </div> 
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b py-4"
            >
              <div className="flex items-center space-x-4">
                <img
                  className="w-20 h-20 object-cover rounded"
                  src={item.image}
                  alt={item.model}
                />
                <div>
                  <h3 className="text-lg font-bold">{item.model}</h3>
                  <p className="text-gray-800 font-bold">Price: ${item.price}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  -
                </button>
                <p className="text-gray-800 font-bold">{item.quantity}</p>
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-600 font-bold"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="mt-6 p-6 bg-gray-100 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2 font-bold">
            <p>Subtotal</p>
            <p>${calculateTotal()}</p>
          </div>
          <div className="flex justify-between mb-2 font-bold">
            <p>Delivery Fee</p>
            <p>$2</p>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <p>Total</p>
            <p>${calculateTotal() + 2}</p>
          </div>
          <button
            onClick={handleCheckout}
            className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300"
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
