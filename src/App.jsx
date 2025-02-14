import React from "react";
import About from "./Components/About";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import PortFolio from "./Components/PortFolio";
import Experiance from "./Components/Experiance";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Po from "./Components/Po";
import { Toaster } from "react-hot-toast";
//import { ToastContainer } from "react-toastify"; // ✅ Import ToastContainer
//import "react-toastify/dist/ReactToastify.css"; // ✅ Import Toastify CSS

function App() {
  return (
    <>
      <div>
        <Po/>
        <Navbar />
        <Home />
        <About />
        <PortFolio />
        <Experiance />
        <Contact />
        <Footer />
       
      </div>
      <Toaster position="top-right"/>

      {/* ✅ Fix: Ensure ToastContainer is defined 
     <ToastContainer position="top-center" autoClose={3000} hideProgressBar />*/}
    </>
  );
}

export default App;
