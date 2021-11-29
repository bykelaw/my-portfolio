import React from 'react';
import "./Portfolio.css";
import millenniapets from "./../../assets/images/millenniapets.png";
import burgerPurchase from "./../../assets/images/burger-purchase.png";
import calculator from "./../../assets/images/calculator.png";
import digifigs from "./../../assets/images/digifigs.png";
import swift from "./../../assets/images/swift.png";


const projects = [

  {
    name: 'Digifigs',
    link: 'https://digifigs.com/',
    image: digifigs
  },
  {
    name: 'SwiftBranding',
    link: 'https://www.swiftbranding.ng/',
    image: swift
  },
  {
    name: 'Millenniapets',
    link: 'https://www.millenniapets.com',
    image: millenniapets
  },
  {
    name: 'BurgerPurchase app',
    link: 'https://burger-purchase.herokuapp.com',
    image: burgerPurchase
  },
  {
    name: 'Calculator app',
    link: 'https://lawscalculator-app.herokuapp.com',
    image: calculator
  },

]

const Portfolio = () => {
  return (
    <>
     
      <div id="pf" className="w-full bg-gray-800">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
          <div className="text-center pb-12">
            <h2 className="text-base font-bold text-indigo-600">
            </h2>
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-white">
              Check our awesome projects
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {projects.map(
              project => <a className="w-full bg-gray-900 rounded-lg sahdow-lg 
            {/* p-12 */}
             flex flex-col justify-center items-center hover:bg-gray-700 hover:transform hover:scale-125"
             href={project.link}
             
             >
                <div className="mb-2">
                  <img className="object-center   object-fit
                {/*rounded-full*/}
                 h-60 w-70" src={project.image} alt="photo" />
                </div>
                <div className="text-center">
                  <p className="text-xl text-white font-bold mb-1">{project.name}</p>
                  {/* <p className="text-base text-gray-400 font-normal">Software Engineer</p> */}
                </div>
              </a>
            )
            }



          </div>
        </section>
      </div>
    </>
  )
}
export default Portfolio;