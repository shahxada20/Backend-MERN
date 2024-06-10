
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Service from "./components/Service.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Error_page from "./components/Error_page.jsx";
import { Navbar } from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

const app = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="*" element={<Error_page/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}
export default app;