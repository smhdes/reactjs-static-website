import React, { Component } from 'react';
import './resources/styles.css';
import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueNfo from './components/venueNfo';
import Highlight from './components/highlights';
import Pricing from './components/pricing';
import Location from './components/location';
import Footer from './components/header_footer/Footer';
import {Element} from 'react-scroll';

class App extends Component {
  render() {
    return (
      <div className="App" style={{height:'1500px',background:'cornflowerblue'}}>
            <Header/>
           <Element name="featured" >
           <Featured/>
           </Element>
            <Element name="venue" >
            <VenueNfo/>
            </Element>
            <Element name="highlights">
                <Highlight/>
            </Element>
          <Element name="pricing" >
          <Pricing  />
          </Element>
          <Element name="location" >
          <Location />
          </Element>
            <Footer/>
      </div>
    );
  }
}

export default App;
