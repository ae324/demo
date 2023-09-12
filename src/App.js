import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import NavbarBottom from "./components/navbarBottom";
import NavbarTop from "./components/navbarTop";
import logo from './images/logos/logo.png';
import './App.css';
import Main from "./pages/main";
import Wallet from "./pages/wallet";
import Login from "./pages/login";


function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/navbartop" element={<NavbarTop />} />
        <Route path="/navbarbottom" element={<NavbarBottom />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
