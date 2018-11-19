import React, { Component } from 'react'
// import {Header, NavBar} from './Components/header'
import Navdropdown from './Components/navdropdown'
import Jumbo from './Components/jumbo'
import Footer from './Components/footer' 


import './App.css'


class App extends Component {
  constructor(){
    super();
    this.state={

    }
  }


  render() {

    return (
      <div className="App">
        <Navdropdown/>
        <Jumbo/>
        <Footer/>
      </div>
    );
  }
}

export default App;
