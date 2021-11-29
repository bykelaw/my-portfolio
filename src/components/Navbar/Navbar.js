import React,{useState} from 'react';
import "./Navbar.css";
const Navbar = () => { 
  const [useButton, setNav] = useState({
    nav: null,
    showClass:''
  })
  const showNavHandler = () => {
    if (useButton.nav === null) {
      return setNav({
        nav: destTopView,
        showClass:' show'
      })
    }
    else return setNav({
      nav: null,
      showClass:''
    })
  }
  const destTopView = (
  
    <nav >
    
      <div className={`Navbar${useButton.showClass}`}>
        <a onClick={showNavHandler} className="home" href="#hm">Home</a>
        <a onClick={showNavHandler} className="home" href="#ab">About</a>
        <a onClick={showNavHandler} className="home" href="#pf">Portfolio</a>
        {/*onClick={showNavHandler}  <a className="home" href="#bg">Blog</a> */}
        <a onClick={showNavHandler} className="home" href="#ct">Contact </a>
      </div>
    </nav>
  );
  
  
  return (<div className='nav-container'> 
    <button onClick={showNavHandler}className="more">{useButton.nav ? 'X':'≡'}</button>
    {destTopView}
  </div>);
}
export default Navbar; 