import React, { Component } from "react";
import { DataContext } from "../context";
import "../css/details.css";
import {Link} from 'react-router-dom'

export class Details extends Component {
  static contextType = DataContext;
  state = {
    product: [],
  };
  getProduct = () => {
    if (this.props.match.params.id) {
      const res = this.context.products;
      const data = res.filter((item) => {
        return item.id === this.props.match.params.id;
      });
      this.setState({ product: data });
    }
  };

  componentDidMount() {
    this.getProduct();
  }
  render() {
    const { product } = this.state;
    const{ addCart} = this.context
    return (
      <div>
        {product.map((item) => (
         <div class="container-fluid">
         <div class="cart">
             <div class="row row1">
                 <div class="col-md-4">
                     <img src={item.media.imageUrl} width="100%" id="ProductImg" alt=""/>                       
                 </div>
                 <div class="col-md-6">
                     <h1 class="product-title">{item.title}</h1>
                     <div class="reviews">
                         <i class="fas fa-star"></i>
                         <i class="fas fa-star"></i>
                         <i class="fas fa-star"></i>
                         <i class="fas fa-star-half-alt"></i>
                         <i class="far fa-star"></i>
                         <p>240 reviews</p>
                     </div>
                     <div class="price">
                         <span>${item.retailPrice -10}</span>
                         <span>${item.retailPrice}</span>
                     </div>
                     <div class="row">
                    
                        <div class="col-md-4 sze">
                            <h5 style={{marginTop:"20px",marginLeft:"30px"}}>Size</h5>
                            <select class="size custom-select"style={{marginTop:"20px",marginLeft:"30px"}}>
                                <option >Select Size</option>
                                <option>39</option>
                                <option>40</option>
                                <option>41</option>
                                <option>42</option>
                            </select>
                        </div>
                        <div class="col-md-4 qty">
                            <h5 style={{marginTop:"20px",marginLeft:"30px"}}>Quantity</h5>
                            <select class="quantity custom-select" style={{marginTop:"20px",marginLeft:"30px"}}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </div>
                    </div>
                     <div id="product" class="product-inf">
                         <ul>
                           <li class="active"><a href="#Description">Product Description</a></li>
                         </ul>
                         <div class="tabs-content">
                             <div id="Description">
                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, inventore magnam! Natus, quibusdam ea? Modi nemo corrupti alias quae quis.</p>
                             </div>
                             <div id="Details" >
                                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque sequi eaque quisquam corrupti reprehenderit exercitationem iusto asperiores quae commodi quo?</p>
                             </div>
                         </div>
                     </div>
                     <div class="buttons">
                         <div class="row">
                             <div class="col-md-6">
                             <Link to='/cart' className="custom-btn"onClick={()=> addCart(item.id)}> Add To Cart <i class="fas fa-angle-right"></i></Link>  
                             </div>
                         </div>
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

export default Details;
