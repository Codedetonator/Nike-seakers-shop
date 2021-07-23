import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import  Header  from './components/header'
import Section from './components/section'
import {DataProvider} from './components/context'
import Footer from './components/footer'

class App extends React.Component {
  render() {
    return (
      <DataProvider>
        <div className="app">
        <Router>
          <Header />
          <Section />
          <Footer />
        </Router>
      </div>
      </DataProvider>
    );
  }
}

export default App;
