import React from 'react';
import './Home.css';
const Home = () => {
  return (
    <div className="Home " id="hm">
      <div className='Hero'>
        <h1 className=''>Lawrence Ughonu</h1>
        <h1 className=''> </h1>
        <h1  className=''> Front-End  Web </h1>
        <h1  className=''>Developer</h1>
      </div>
      <div className='ovly'></div>
      <a className="button-container" href="#pf"><button > View my Work <span>→</span> </button></a>
    </div>
  )
}
export default Home;