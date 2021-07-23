import React, { Component } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context";
import "../css/product.css";

export class Products extends Component {
  static contextType = DataContext;
  render() {
    const { products, addCart } = this.context;

    return (
      <div id="product">
        {products.map((product) => (
          <div className="container page-wrapper">
            {console.log("image", product.imageUrl)}
            <div className="page-inner">
              <div className="row">
                <div className="el-wrapper">
                  <div className="box-up">
                    <Link to={`/product/${product.id}`}>
                      <img
                        src={product.media.imageUrl}
                        alt={product.name}
                        className="product__img"
                      />
                    </Link>
                    <div className="img-info">
                      <div className="info-inner">
                        <span className="p-name">
                          <Link to={`/product/${product.id}`}>
                            {product.name}
                          </Link>
                        </span>
                        <span className="p-company">{product.gender}</span>
                      </div>
                      <div className="a-size">
                        sizes : <span className="size">7 , 8 , 9 , 10</span>
                      </div>
                    </div>
                  </div>

                  <div className="box-down">
                    <div className="h-bg">
                      <div className="h-bg-inner"></div>
                    </div>

                    <a className="product__cart" href="#">
                      <span className="price">${product.retailPrice}</span>
                      <span className="add-to-cart">
                        <span
                          className="txt"
                          onClick={() => addCart(product.id)}
                        >
                          Add in cart
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>
    );
  }
}

export default Products;
