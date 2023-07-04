import React from "react";
import { services } from "../data/data";
import "../styles/services.css";
import { FaWallet, FaTree, FaSocks } from "react-icons/fa";

const Saving = () => {
  const getIconComponent = (iconName) => {
    switch (iconName) {
      case "FaWallet":
        return <FaWallet />;
      case "BsTreeFill":
        return <FaTree />;
      case "FaSocks":
        return <FaSocks />;
      default:
        return null;
    }
  };
  return (
   <section className="serve mt-5">
     <div className="container ">
      <h1 className="text-center">
        OUR <span className="text-primary">SERVICES</span>
      </h1>
      <div className="d-flex mt-1 ">
        {services.map((service) => {
          return (
            <div className="d-flex service" key={service.id}>
              <ul>
                <i id="icon">{getIconComponent(service.icon)}</i>
              </ul>
              <ul>
                <li><h5>{service.title}</h5></li>
                <li>{service.text}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
   </section>
  );
};

export default Saving;
