import React from "react";
import "../styles/link.css";
import { socialLinks } from "../data/data";
import { AiFillFacebook, AiFillTwitterCircle } from "react-icons/ai";
import { FaSquarespace } from "react-icons/fa";

const Icon = () => {
  const getIconComponent = (iconName) => {
    switch (iconName) {
      case "AiFillFacebook":
        return <AiFillFacebook style={{ color: "blue" }} />;
      case "AiFillTwitterCircle":
        return <AiFillTwitterCircle style={{ color: "rgb(24, 173, 233)" }} />;
      case "FaSquarespace":
        return <FaSquarespace style={{ color: "#222E3C" }} />;
      default:
        return null;
    }
  };

  return (
    <div
      className="d-flex mt-1 justify-content-center"
      style={{ marginLeft: "10px", gap: "20px" }}
    >
      {socialLinks.map((icon) => {
        return (
          <div key={icon.id}>
            <ul className="list-unstyled link">
              <li>
                <a href={icon.href}>{getIconComponent(icon.icon)}</a>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Icon;
