import React from "react";
import "../styles/tours.css";

const Tour = ({ image, date, title, info, location, duration, cost }) => {
  return (
      <div>

        <div  className="card shadow-lg" style={{backgroundColor:' #ece9e9', border:'none'}}>
          <img src={image} style={{ width: "450px", height: "280px" }} alt=""/>
          <div className="date">
          <p >{date}</p>
          </div>
          
          <div>
            <div className="text-tours">
              <h2 className="text-center">{title}</h2>
              <p >{info}</p>
            </div>
            <div
              className="d-flex justify-content-center"
              style={{ gap: "100px",color:'#00b5ff' }}
            >
              <p>
                <span>{location}</span>
              </p>
              <p>form ${cost}</p>
              <p>{duration} days</p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Tour;
