import NoteState from "./Context/Notestate";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Product from "./Components/Product";
import Order from "./Components/Order";
import Cart from "./Components/Cart";

function App() {
  return (
    <NoteState>
      <Router>
        <header className="flex justify-between items-center bg-gray-800 text-white py-4 px-8">
          <h1 className="text-2xl font-bold">My E-commerce Site</h1>
          <Link to="/cart" className="text-white">
            Cart
          </Link>
        </header>
        <Routes>
          <Route exact path="/" element={<Product />} />

          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </NoteState>
  );
}

export default App;
