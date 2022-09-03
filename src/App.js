import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Brochure from './components/Brochure/Brochure';
import About from './components/About/About'
import Schools from './components/Schools/Schools';
import Academics from './components/Academics/Academics';
import Admisions from './components/Admission/Admission';
import Alumni from './components/Alumni/Alumni';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Brochure';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Hero />
        <Brochure />
        <About />
        <Schools />
        <Academics />
        <Admisions />
        <Alumni />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
