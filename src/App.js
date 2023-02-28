import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from "./Home";
import Service from './Service'
import About from './About';
import {Route, Routes} from 'react-router-dom';
/* Route and Routes are the two component that allow us 
to route in to the browser and group them together */
/* Routes component wrap everything, and going to 
wrap all of our individual routes, it say hey here's
 a list of different routes choose the one that fits best
*/
/* Route contain the element that are going to route in the browser.
we are going to out our component using the  element={<Component />}*/ 
function App() {
  return (
    <div >
     <Navbar />
     <div className="container">
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/About" element={<About />}  />
      </Routes>
     </div>
     
    </div>
  );
}

export default App;
