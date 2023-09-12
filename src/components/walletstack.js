import React from "react";
import "../walletstack.css";
import vectorWhite from "../images/vector-white.png";
const WalletStack = () => {
  return (
    <>
 <div className="box">
      <div className="group">
        <div className="overlap-group">
          <img className="vector" alt="Vector" src={vectorWhite}/>
          <div className="rectangle" />
          <div className="clover-symbol-logo">
            <img
              className="img"
              alt="Clover symbol logo"
              src="https://c.animaapp.com/QEX3mcFu/img/clover-symbol-logo@2x.png"
            />
          </div>
          <div className="frame" >
            <div className="text-wrapper">$ 5.00</div>
            <div className="div">Available Balance</div>
          </div>
          <div className="text-wrapper-2">*4753</div>
          <a href="/account-details"> <img
            className="clip-path-group"
            alt="Clip path group"
            src="https://c.animaapp.com/QEX3mcFu/img/clip-path-group-2@2x.png"
          />
          </a>
         
          <div className="text-wrapper-3">Your Debit Cards</div>
          <div className="rectangle-2" />
          <div className="rectangle-3" />
          <div className="group-wrapper">
            <img className="img" alt="Group" src="https://c.animaapp.com/QEX3mcFu/img/group-158@2x.png" />
          </div>
          <div className="img-wrapper">
            <img className="group-2" alt="Group" src="https://c.animaapp.com/QEX3mcFu/img/group-160@2x.png" />
          </div>
          <div className="frame-2">
            <div className="text-wrapper">$ 5.00</div>
            <div className="div">Available Balance</div>
          </div>
          <div className="frame-3">
            <div className="text-wrapper">$ 5.00</div>
            <div className="div">Available Balance</div>
          </div>
          <div className="text-wrapper-4">*4756</div>
          <div className="text-wrapper-5">*4768</div>
          <img
            className="clip-path-group-2"
            alt="Clip path group"
            src="https://c.animaapp.com/QEX3mcFu/img/clip-path-group-1@2x.png"
          />
          <img
            className="clip-path-group-3"
            alt="Clip path group"
            src="https://c.animaapp.com/QEX3mcFu/img/clip-path-group@2x.png"
          />
        </div>
      </div>
    </div>
    </>
  )
}
export default WalletStack;