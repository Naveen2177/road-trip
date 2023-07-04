import React from "react";
import Items from '../header/items'
import Icon from "../header/Links";
import '../styles/nav.css'



const Navbar = () => {
  return (
     <div className="trip bg-light ">
      <div className="head d-flex row ">
      <div className="col-4">
          <h1>Back<span>Roads</span></h1>
      </div>
      <nav className="col-4 ">
        <Items/>
      </nav>
      <div className="col-4">
        <Icon/>
      </div>
    </div>
     </div>
  );
};

export default Navbar;
