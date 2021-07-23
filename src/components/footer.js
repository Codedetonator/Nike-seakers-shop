import React, { Component } from "react";
import './css/footer.css'

export class Footer extends Component {
    render(){
return(
        <div>
            <footer className="footer section" style={{marginLeft:"130px"}}>
        <div className="footer__container bd-grid">
          <div className="footer__box">
            <h3 className="footer__title">Shoekada</h3>
            <p className="footer__description">New collection of 2021.</p>
          </div>
          <div className="footer__box">
            <h3 className="footer__title">EXPLORE</h3>
            <ul className="footer__ul">
              <li>
                <a href="#home" className="footer__link">
                  Home
                </a>
              </li>
              <li>
                <a href="#featured" className="footer__link">
                  Featured
                </a>
              </li>
              <li>
                <a href="#women" className="footer__link">
                  AboutMe
                </a>
              </li>
              <li>
                <a href="#new" className="footer__link">
                  Cart
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__box">
            <h3 className="footer__title">SUPPORT</h3>
            <ul>
              <li>
                <a href="#" className="footer__link">
                  Product Help
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Customer Care
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Athorized services
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__box">
            <a href="#" className="footer__social">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="#" className="footer__social">
              <i class="bx bxl-instagram"></i>
            </a>
            <a href="#" className="footer__social">
              <i class="bx bxl-twitter"></i>
            </a>
            <a href="#" className="footer__social">
              <i class="bx bxl-google"></i>
            </a>
          </div>
        </div>
        <p className="footer__copy">&#169; 2021 Shoes All right reserved</p>
        <p className="footer__copy">created by Bijith</p>
      </footer>
    </div>
)
    }
}

export default Footer
