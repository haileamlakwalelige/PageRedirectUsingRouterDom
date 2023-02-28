import React from 'react';
import {Link, useMatch, useResolvedPath} from "react-router-dom";
// import Home from './Home';
// import About from './About';
// import Service from './Service';
/*useMatch allow us to compare essentially the current path 
that we are on to whatever path we want?*/
/*useResolvedPath essentially allows us to take 
a relative or absolute path,
 it combines with the the current path you're on
  and gives you the actual full path that you would be accessing.
  */
function Navbar(){

    return(
        <nav className="nav">
      <Link to="/" className="site-title">Site Title</Link>
      <ul>
        <CustomLink to="/Service">Service</CustomLink>  
        <CustomLink to="/About">About</CustomLink>   
        </ul>    
        </nav>
    );
}
function CustomLink({to, children, ...props}){
    const resolvedpath = useResolvedPath(to);
    const isActive = useMatch({path:resolvedpath.pathname, end:true});
return(
    <li className={isActive ? "active" : ""}>
    <Link to={to} {...props}>{children}</Link>
    </li>

);
}
export default Navbar;