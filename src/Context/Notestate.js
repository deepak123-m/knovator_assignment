import NoteContext from "./Notecontext";

import { useState } from "react";

const Notestate = (props) => {
  const productInitial = [];
  const [allProduct, setProduct] = useState();
  const [cartDetails, setCart] = useState(productInitial);

  const products = async () => {
    const response = await fetch("http://localhost:5000/api/v2/product", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const items = await response.json();

    setProduct(items);
    return items;
  };

  const cart = async (product) => {
    setCart(cartDetails.concat(product));
  };

  console.log("notesttate");
  console.log(allProduct);

  return (
    <NoteContext.Provider value={{ allProduct, products, cart, cartDetails }}>
      {props.children} {/*children components passing props*/}
    </NoteContext.Provider>
  );
};

export default Notestate;
