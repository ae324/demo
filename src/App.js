import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import logo from './images/logo.png';
import './App.css';
import Main from "./pages/main";
import Wallet from "./pages/wallet";


function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/wallet" element={<Wallet />} />
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
