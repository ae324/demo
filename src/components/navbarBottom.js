
import React from "react";
import '../navbarBottom.css';
import './App.css';
import wallet from "../images/icons/wallet-icon.png";
import loan from "../images/icons/loan-icon.png";
import cashadvance from "../images/icons/cashadvance-icon.png";

const NavbarBottom = () => {
    return (
        <>
            <div>
                <nav class="mobile-nav">
                    <a href="/wallet" class="bloc-icon">
                        <img src={wallet} alt=""></img>
                    </a>
                    <a href="/cashadvance" class="bloc-icon">
                        <img src={cashadvance} alt=""></img>
                    </a>
                    <a href="/loan" class="bloc-icon">
                        <img src={loan} alt=""></img>
                    </a>
                </nav>
            </div>
        </>
    )
}

export default NavbarBottom;