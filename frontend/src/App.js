import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <div>
      <Navbar />
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
