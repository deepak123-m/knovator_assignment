import React, {  useContext, useEffect } from "react";
import noteContext from "../Context/Notecontext";

const List = ({ product }) => {
  const context = useContext(noteContext);
  const { cart, cartDetails } = context;

  const handleCart = async (e, name) => {
    e.preventDefault();
    let status = 0;
    for (let index = 0; index < cartDetails.length; index++) {
      if (cartDetails[index].name === name) {
        cartDetails[index].quantity = cartDetails[index].quantity + 1;
        status = 1;
      }
    }
    if (status === 0) {
      let detailsProduct = {
        name: product.name,
        price: product.price,
        quantity: 1,
        total: product.price,
      };
      await cart(detailsProduct);
    }
  };
  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-[50%] h-40 object-cover mb-4 rounded-md"
      />
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-lg font-bold mt-2">${product.price}</p>
      <button
        onClick={(e) => handleCart(e, product.name)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default List;
