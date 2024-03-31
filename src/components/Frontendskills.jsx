import React from "react";
import { skills } from "../data";
const Frontendskills = () => {
  return (
    <ul className="skills__list grid">
      {skills.map(({ title, level, category,img }, index) => {
        if (category === "frontend") {
          return (
            
              <li className="skills__li " key={index}>
                <img className="skills__img" src={img} alt="" />
                <h3>
                  {title}
                  <p>{level}</p>
                </h3>
              </li>
            
          );
        }
        return null;
      })}
    </ul>
  );
};

export default Frontendskills;
