import NoteContext from "./Notecontext";

import { useState } from "react";

const Notestate = (props) => {
  const productInitial = [];
  const [allProduct, setProduct] = useState();
  const [cartDetails, setCart] = useState(productInitial);
  const [users,setUsers] = useState(0);

  


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

  const signup = async(email,password) => {
if(email === "test@mail.com" && password === "test")
  {

    await setUsers(1);
    return 1;
  }
 else{
  alert("wrong credentials")
  setUsers(0);
 }
    
  }

  const cart = async (product) => {
    setCart(cartDetails.concat(product));
  };

console.log(users)

  return (
    <NoteContext.Provider value={{ allProduct, products, cart, cartDetails ,users, signup}}>
      {props.children} {/*children components passing props*/}
    </NoteContext.Provider>
  );
};

export default Notestate;
