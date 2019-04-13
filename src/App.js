import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Feature from './components/Feature';
import Discover from './components/Discover';
class App extends Component {
  render() {
    return (
      <div>       
        <Header />
        <Feature />
        <Discover />
        <Footer />
      </div>
    );
  }
}

export default App;
