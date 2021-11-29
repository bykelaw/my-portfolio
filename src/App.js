
import React, { Component } from 'react';
import "./App.css";
import Overlay from "./components/Overlay/Overlay";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Portfolio from "./components/blah/Portfolio";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
class App extends Component{
  render() {
    return (
      <div className='App'>
     {/* <Overlay/> */}
        <Home />
        <Navbar />
        <About />
        <Portfolio />
        {/* <Blog /> */}
        <Contact/>
    </div>
  )
}
}
export default App;
/*
←↓↑
 */