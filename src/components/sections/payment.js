import React,{Component} from 'react'
import { DataContext } from "../context";
import '../css/payment.css'

export class Payment extends Component{
    static contextType = DataContext;
    componentDidMount() {
      this.context.getTotal();
    }
    render(){
        const { total } = this.context;
        return(
            <div>
                <div class="pay__container">
  <div class="pay__info">
    <span></span>
  </div>
  <form class="pay__modal">
    <header class="pay__header">
      <h1>Payment of ${total + 30 + (total / 100) * 8}</h1>
      <div class="pay__card-type">
        <a class="pay__card pay__active" href="#">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/Amex.png"/>
        </a>
        <a class="pay__card" href="#">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/Discover.png"/>
        </a>
        <a class="pay__card" href="#">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/Visa.png"/>
        </a>
        <a class="pay__card" href="#">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/MC.png"/>
        </a>
      </div>
    </header>
    <div class="pay__content">
      <div class="pay__form">
        <div class="pay__form-row">
          <div class="pay__input-group">
            <label>Name on card</label>
            <input type="text"></input>
          </div>
        </div>
        <div class="pay__form-row">
          <div class="pay__input-group">
            <label>Card Number</label>
            <input maxlength="16" ></input>
          </div>
        </div>
        <div class="pay__form-row">
          <div class="pay__input-group">
            <label>Expiry Date</label>
            <input type="month"></input>
          </div>
          <div class="pay__input-group">
            <label>CVV</label>
            <input maxlenght="3" ></input>
          </div>
        </div>
      </div>
    </div>
    <footer class="pay__footer">
      <button class="pay__button">Complete Payment</button>
    </footer>
  </form>
</div>

            </div>
        )
    }
}
export default Payment



