
import { Routes,Route } from "react-router-dom";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import WorkDetail from "./components/WorkDetail";
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
        <Route path="/works/detail" element={<WorkDetail />}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;