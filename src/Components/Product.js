import List from "./List";
import noteContext from "../Context/Notecontext";
import React, {  useContext, useEffect } from "react";

const Product = () => {
  const context = useContext(noteContext);
  const { allProduct, products } = context;

  const callDetails = async () => {
     await products();
  };


  useEffect(() => {
    callDetails();
  }, []);

  return (
    <div className="container mx-auto bg-gray-200  py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Product Listing Page
      </h1>
      <div className="grid grid-cols-1 m-4 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allProduct &&
          allProduct.products.map((product) => (
            <List key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Product;
