import React, { usteState } from "react";
import logo from "../../img/statics/logo.png";
import account from "../../img/statics/account.png";
import cart from "../../img/statics/shopping-cart.png";
import "./navBar.css";

const NavBar = () => {



  return (
    <div className="container-navBar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="box">
        <div className="container-1">
          <input
            className="form-control-lg border-0"
            type="search"
            id="search"
            placeholder="Search..."
          />

          <i className="fa fa-search"></i>
        </div>
      </div>

      <div>
        <img src={account} alt="account" />
      </div>
      <p className="textUsser">Minha Conta</p>
      <div>
        <img src={cart} alt="cart" />
        
      </div>
    </div>
  );
};

export default NavBar;
