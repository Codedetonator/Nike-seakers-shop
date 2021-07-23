import React, { Component } from "react";
import Nike from "./svg/nike.svg";
import { Link } from "react-router-dom";
import {DataContext} from './context'

export class Header extends Component {
   static contextType = DataContext;

  state = {
    toggle: false,
  };

  menuToggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  render() {
    const { toggle } = this.state;
   
    return (
      <header>
        <div class="logo">
           <img src ={Nike} alt=""wdith="70px" height="70px"/>
        </div>
        <nav class="nav-middle">
            <ul className={toggle ? "toggle" : ""}>
                <li><a className="aheader" href="#"><Link to="/">Home</Link></a></li>
                <li><a  className="aheader" href="#"><Link to="/collection">collections</Link></a></li>
                <li><a  className="aheader" href="#"><Link to="/product">Product</Link></a></li>
                <li><a  className="aheader" href="#"><Link to="/aboutme">About me</Link></a></li>
            </ul>
        </nav>
        <nav class="nav-right">
            <ul>
                <li><a  className="aheader" href="#"><i class="fas fa-search"></i></a></li>
                <li><Link to="/login"> <a href="#"><i class="fas fa-user"></i> Account</a></Link></li>
                <li><a  className="aheader" href="#"><i class="fas fa-shopping-cart"></i> <Link to="/cart">Cart</Link></a></li>
            </ul>
        </nav>
    </header>
    );
  }
}

export default Header;
