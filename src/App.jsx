import "./App.css";
import Header from "./components/navBar/Header";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Home from "./pages/Home";
import New from "./pages/new/New";
import Hero from "./components/hero/Hero";
import Slider from "./components/slider/Slider";
import Virtual from "./components/virtual/Virtual";
import ProductsPage from "./components/products/ProductsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/new" element={<New />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
