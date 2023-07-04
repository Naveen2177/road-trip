import React from "react";
import Items from "../header/items";
import Icon from "../header/Links";
import '../styles/footer.css'

const Footer = () => {
  return (
   <div className="footer">
     <div className="foot ">
      <div style={{marginTop:'50px'}}>
        <Items/>
      </div>
      <div style={{justifyContent:'center'}}>
        <Icon/>
      </div>
      <p className="text-center">Copyright Backroads Travel Tours Company 2030. All Rights Reserved</p>
    </div>
   </div>
  );
};

export default Footer;
