import React, { Component } from "react";
import { DataContext } from "../context";
import "../css/cart.css";
import { Link } from "react-router-dom";
export class Cart extends Component {
  static contextType = DataContext;
  componentDidMount() {
    this.context.getTotal();
  }

  render() {
    const { cart, reduction, increase, removeProduct, total } = this.context;
    if (cart.length === 0) {
      return <h2 style={{ textAlign: "center" }}>Nothings</h2>;
    } else {
      return (
        <div>
          {cart.map((item) => (
            <div class="cart__container">
              <section id="cart">
                <article class="product">
                  <header>
                    <a class="remove">
                      <img src={item.media.imageUrl} alt="" />

                      <h3 onClick={() => removeProduct(item.id)}>Remove </h3>
                    </a>
                  </header>

                  <div class="content">
                    <h1 classname="cart__title">{item.title}</h1>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Soluta, numquam quis perspiciatis ea ad omnis provident
                    laborum dolore in atque.
                  </div>

                  <footer class="content">
                    <button class="qt-minus" onClick={() => reduction(item.id)}>
                      -
                    </button>
                    <span class="qt">{item.count}</span>
                    <button class="qt-plus" onClick={() => increase(item.id)}>
                      +
                    </button>

                    <h2 class="full-price">${item.retailPrice * item.count}</h2>

                    <h2 class="price">${item.retailPrice}</h2>
                  </footer>
                </article>
              </section>
            </div>
          ))}
          <footer id="site-footer">
            <div class="cart__container clearfix">
              <div class="left__side">
                <h2 class="subtotal">
                  Subtotal: <span>${total}</span>
                </h2>
                <h3 class="tax">
                  Taxes (5%): <span></span>${(total / 100) * 8}
                </h3>
                <h3 class="shipping">
                  Shipping: <span></span>$30
                </h3>
              </div>

              <div class="right__side">
                <h1 class="total">
                  Total: <span>${total + 30 + (total / 100) * 8}</span>
                </h1>
                <a class="btn">  <Link to={"/payment"}>Checkout</Link></a>
              </div>
            </div>
          </footer>
        </div>
      );
    }
  }
}

export default Cart;
