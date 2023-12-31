import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import NavbarBottom from "./components/navbarBottom";
import NavbarTop from "./components/navbarTop";
import InitialPage from "./pages/initialpage";
import Wallet from "./pages/wallet";
import Login from "./pages/login";
import AccountDetails from "./pages/account-details";
import RewardsCard from "./components/rewardsCard";
import DebitCardAccount from "./pages/debit-card-account";

function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path="/debit-card-account" element={<DebitCardAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/account-details" element={<AccountDetails/>}/>
        <Route path="/navbartop" element={<NavbarTop />} />
        <Route path="/navbarbottom" element={<NavbarBottom />} />
        <Route path="/rewardscard" element={<RewardsCard />} />
        <Route path="/footer" element={<Footer />} />

      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
