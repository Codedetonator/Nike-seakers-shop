import React,{Component} from "react";
import Products from './sections/product'
import Details from './sections/details'
import {Route} from 'react-router-dom';
import Cart from './sections/cart'
import Home from './sections/home'
import Payment from './sections/payment'
import About from './sections/about'
import Login from './sections/login'
import Collection from './sections/collection'


export class Section extends Component {
    render() {
      return (
        <section>
          <Route path="/" component={Home} exact />
          <Route path="/product" component={Products} exact />
          <Route path="/aboutme" component={About} exact />
          <Route path="/product/:id" component={Details} exact/>
          <Route path="/login" component={Login} exact/>
          <Route path="/collection" component={Collection} exact/>
          <Route path="/cart" component={Cart} exact/>
          <Route path="/payment" component={Payment} exact/>
        </section>
          
      )
    }
}

export default Section