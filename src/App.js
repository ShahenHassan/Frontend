import "./App.css";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Login from "./pages/login/Login";
import {Routes, Route} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Header from "./components/navbar/Header";
function App() {
  return (
    <div className="App">
      {/* <h1 className="text-3xl font-bold ">Hello world!</h1> */}
      <Navbar />
      <Header />
      <Routes>
        <Route path="/:id" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
