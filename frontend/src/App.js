import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Backdrop from "./components/Backdrop";
import Navbar from "./components/Navbar";
import SideDrawer from "./components/SideDrawer";

import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";

function App() {
  const [sideToggle, setSideToggle] = useState(false)
  
  return (
    <div>
      <Navbar sideToggle={sideToggle} setSideToggle={setSideToggle}/>
      <SideDrawer sideToggle={sideToggle} setSideToggle={setSideToggle} />
      <Backdrop sideToggle={sideToggle} setSideToggle={setSideToggle}/>
      <main className="app">
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/product/:id" element={<ProductPage />}/>
          <Route path="/cart" element={<CartPage />}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
