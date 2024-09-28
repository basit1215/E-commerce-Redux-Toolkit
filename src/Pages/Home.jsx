import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../config/redux/reducers/cartSlice.js';

const App = () => {
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    axios("https://dummyjson.com/products")
      .then((res) => {
        setProduct(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addToCart = (item) => {
    dispatch(addCart({
      item
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-center text-3xl font-bold mb-6">E-commerce</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {product ? product.map((item) => (
          <div key={item.id} className="bg-white p-4 shadow-md rounded-lg flex flex-col justify-between">
            <img src={item.thumbnail} alt={item.title} className="w-full h-48 object-cover mb-4 rounded-lg" />
            <h1 className="text-lg font-semibold mb-2">{item.title}</h1>
            <p className="text-gray-600 mb-2">{item.description}</p>
            <p className="text-lg font-bold mb-4">${item.price}</p>
            <button 
              onClick={() => addToCart(item)} 
              className="bg-black text-white py-2 rounded-lg transition-transform transform hover:scale-105 hover:bg-gray-900 shadow-md">
              Add to cart
            </button>
          </div>
        )) : (
          <p className="text-center w-full text-xl font-bold text-blue-600 animate-pulse">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default App;