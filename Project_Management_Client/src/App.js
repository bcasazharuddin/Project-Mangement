import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
