import React, { Component } from "react";
import '../css/about.css'

export class About extends Component {
    render(){
        return(
            <div class="aboutme__content">
              
            <div class="aboutme__card">
              <div class="card__side card__side--front">
                <div class="card__cont">
                  <span class="color__blue">alert</span>
                  <span>(<span class="color__green">'Hello World!'</span>)</span>
                </div>
              </div>
              <div class="card__side card__side--back">
                <div class="card__cta">
                  <p><span class="color__purple">const</span> aboutMe <span class="color__cyan">= </span>&#x7b;
                    <br />
                    <span class="aboutme__space color__red">name</span>
                    <span class="color__cyan">:</span> <span class="color__green">'Bijithpn'</span>,
                    <br/>
                    <span class="aboutme__space color__red">email</span>
                    <span class="color__cyan">:</span> <span class="color__green">'Bijithpn@gmail.com'</span>',
                    <br/>
                    <span class="aboutme__space color__red">position</span>
                    <span class="color__cyan">:</span>
                    <span class="color__green">'front-end developer'</span>,
                    <br/>
                    <span class="aboutme__space color__red">website</span><span class="color__cyan">:</span> <span class="color__green">'https://bijithportfolio.netlify.app'</span>
                    <br/> 
                    &#x7d; ;
                  </p>
                </div>
              </div>
            </div>
            </div>
           
        )
    }
}

export default About