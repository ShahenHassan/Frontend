import "./App.css";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Login from "./pages/login/Login";
import {Routes, Route} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Header from "./components/navbar/Header";
import Food from "./pages/product/Food";
import Desserts from "./pages/product/Desserts";
import Drinks from "./pages/product/Drinks";
import Shop from "./pages/shop/Shop";
function App() {
  return (
    <div className="App">
      {/* <h1 className="font-bold ">Hello world!</h1> */}
      <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/Food" element={<Food />} />
        <Route path="/product/Desserts" element={<Desserts />} />
        <Route path="/product/Drinks" element={<Drinks />} />
        <Route path="/Shop" element={<Shop />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
