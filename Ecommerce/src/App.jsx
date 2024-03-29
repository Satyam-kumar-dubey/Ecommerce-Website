import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

import AppContext from "./Utils/Context";
import Footer from "./components/Footer/Footer";
import NewsLetter from "./components/Newsletter/NewsLetter";
import Category from "./components/Category/Category";

import SingleProduct from "./components/SingleProduct/SingleProduct";


function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<Category/>} />
          <Route path="/product/:id" element={<SingleProduct />} />
        </Routes>
        < NewsLetter />
        < Footer />
    </BrowserRouter>
  );
}

export default App;
