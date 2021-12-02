import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Works from './components/Works/Works';

function App() {
  return (
    // <Router>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
    // </Router>
  );
}
export default App;
