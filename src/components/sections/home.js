import React, { Component } from "react";
import "../css/home.css";
import { DataContext } from "../context";


export class Home extends Component {
  static contextType = DataContext;
  render() {
    return (
      <div>
        <main>
          <section class="left">
            <div class="product-info">
              <h1>Nike blue shoe</h1>
              <p>New and improved</p>
              <h2>$499</h2>
              <div class="info-btns">
                <div class="btn discover-btn">more info</div>
                <div class="btn cart-btn">add to cart</div>
              </div>
            </div>
          </section>
          <section class="right">
            <img
              src="http://pluspng.com/img-png/nike-shoe-png-nike-shoes-transparent-background-800.png"
              alt=""
            />
          </section>
        </main>
        <section>
          
        <ul class="home2__ul">
    <li class="home2__li">
      <div class="details">
        <h2 class="home2__h2">Nike Odyssey React Shield</h2>
        <p class="home2__p">$130</p>
        <p class="home2__p">$130</p>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/nike01a.png" alt=""class="home2__img"/>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/nike01b.png" alt=""class="home2__img"/>
      </div>
    </li>
    <li class="home2__li">
      <div class="details">
        <h2 class="home2__h2">LeBron 16</h2>
        <p class="home2__p">$185</p>
        <p class="home2__p">$185</p>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/nike02a.png"alt="" class="home2__img"/>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/nike02b.png"alt="" class="home2__img"/>
      </div>
    </li>
    <li class="home2__li">
      <div class="details">
        <h2 class="home2__h2">Nike Epic React Flyknit</h2>
        <p class="home2__p">$150</p>
        <p class="home2__p">$150</p>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/nike03a.png" alt="" class="home2__img"/>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/nike03b.png" alt="" class="home2__img"/>
      </div>
    </li>
    <li class="home2__li">
      <div class="details">
        <h2 class="home2__h2">Nike Air Max 97 Premium</h2>
        <p class="home2__p">$180</p>
        <p class="home2__p">$180</p>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/nike04a.png" alt=""class="home2__img"/>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/nike04b.png" alt=""class="home2__img"/>
      </div>
    </li>
    <li class="home2__li">
      <div class="details">
        <h2 class="home2__h2">Nike Free RN Motion Flyknit 2018</h2>
        <p class="home2__p">$150</p>
        <p class="home2__p">$150</p>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/nike05a.png" alt="" class="home2__img" />
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/nike05b.png" alt="" class="home2__img" />
      </div>
    </li>
    <li class="home2__li">
      <div class="details">
        <h2 class="home2__h2">Nike Free RN Flyknit 2018</h2>
        <p class="home2__p">$120</p>
        <p class="home2__p">$120</p>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/nike06a.png" alt="" class="home2__img" />
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/nike06b.png" alt="" class="home2__img" />
      </div>
    </li>
    <li class="home2__li">
      <div class="details">
        <h2 class="home2__h2">Nike Rise React Flyknit LMTD</h2>
        <p class="home2__p">$175</p>
        <p class="home2__p">$175</p>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/nike07a.png" alt="" class="home2__img" />
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/nike07b.png" alt="" class="home2__img" />
      </div>
    </li>
    <li class="home2__li">
      <div class="details">
        <h2 class="home2__h2">Nike Flyknit Racer G</h2>
        <p class="home2__p">$175</p>
        <p class="home2__p">$175</p>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/nike08a.png"  alt=""class="home2__img" />
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/nike08b.png"  alt=""class="home2__img" />
      </div>
    </li>
    <li class="home2__li">
      <div class="details">
        <h2 class="home2__h2">Nike EXP-X14 Premium iD</h2>
        <p class="home2__p">$160</p>
        <p class="home2__p">$160</p>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/nike09a.png" alt="" class="home2__img" />
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/nike09b.png" alt="" class="home2__img" />
      </div>
    </li>
    <li class="home2__li">
      <div class="details">
        <h2 class="home2__h2">Nike Free x Retcon</h2>
        <p class="home2__p">$120</p>
        <p class="home2__p">$120</p>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/nike10a.png"  alt="" class="home2__img" />
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/nike10b.png"  alt="" class="home2__img" />
      </div>
    </li>
    <li class="home2__li">
      <div class="details">
        <h2 class="home2__h2">Nike Air Force 1 '07 Suede</h2>
        <p class="home2__p">$90</p>
        <p class="home2__p">$90</p>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/nike11a.png" alt="" class="home2__img" />
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/nike11b.png" alt="" class="home2__img" />
      </div>
    </li>
    <li class="home2__li">
      <div class="details">
        <h2 class="home2__h2">Nike Metcon 4 iD</h2>
        <p class="home2__p">$150</p>
        <p class="home2__p">$150</p>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/nike12a.png" alt="" class="home2__img" />
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/nike12b.png" alt="" class="home2__img" />
      </div>
    </li>
    </ul>
        </section>
        <br/><br/>
        <br/>
        <br/>

      </div>
    );
  }
}

export default Home;
