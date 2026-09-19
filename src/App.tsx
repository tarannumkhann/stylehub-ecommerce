import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import About from "./pages/About";

import Login from "./pages/Login";
import Products from "./pages/Products";

function App() {
  return (
    <Routes>
      {/* Navbar + Footer wale pages */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
      </Route>

      {/* Navbar + Footer nahi */}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;