
import { Routes,Route } from "react-router-dom";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Works from "./components/Works";
function App() {
  return (
    < >
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/works" element={<Works />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </>
  );
}

export default App;