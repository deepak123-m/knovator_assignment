import React, { useState, useContext, useEffect } from "react";
import noteContext from "../Context/Notecontext";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const context = useContext(noteContext);
  const {users,  cartDetails } = context;
  var total = 0;

  let navigate = useNavigate();
console.log("cart users")
  console.log(users)


  const handletotal = (price, quantity) => {
    //var x = Math.floor(n);
    total = total + price * quantity;
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.firstName.trim() === "" ||
      formData.lastName.trim() === "" ||
      formData.address.trim() === ""
    ) {
      alert("Please fill in all fields.");
      return;
    }

    console.log("Form submitted:", formData);

    setFormData({
      firstName: "",
      lastName: "",
      address: "",
    });

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  useEffect(() => {
    
if(users !== 1)
  {
  console.log("bnsodfg")
  navigate("/login")
    // eslint-disable-next-line react-hooks/exhaustive-deps
}
  },[])

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-semibold mb-6">Cart</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Product Name</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Quantity</th>
                <th className="px-4 py-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {cartDetails &&
                cartDetails.map((item) => (
                  <tr key={item.id}>
                    <td className="border px-4 py-2">{item.name}</td>
                    <td className="border px-4 py-2">${item.price}</td>
                    <td className="border px-4 py-2">{item.quantity}</td>
                    <td className="border px-4 py-2">
                      ${item.price}
                      {handletotal(item.price, item.quantity)}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="col-span-1">
          <div className="bg-gray-200 p-4">Total: ${total}</div>
        </div>
      </div>

      <div className="container mx-auto bg-gray-200  mt-10">
        <h1 className="text-3xl font-bold  mb-6 text-center">
          Fill Your details to place the order
        </h1>
        {submitted && (
          <div className="text-green-600 text-3xl font-bold text-center">
            Successfully Placed Order!
          </div>
        )}
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your first name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your last name"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="address"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your address"
              required
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Cart;
