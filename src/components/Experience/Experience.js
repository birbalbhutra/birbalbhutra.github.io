import React from "react";

import experienceInfo from "../../resource/experienceInfo";

import "./Experience.css";

const Experience = () => {
  function cards() {
    return experienceInfo.map((experienceInfo) => {
      return (
        <div key={experienceInfo.id} id="e-card" className="card">
          <img src={experienceInfo.imageSrc} alt="Experience" />
          <div className="title">
            <h4>{experienceInfo.title}</h4>
          </div>
          <div className="designation">
            <h4>{experienceInfo.designation}</h4>
          </div>
          <div className="description">
            <p>{experienceInfo.description}</p>
          </div>
          <div className="year">
            <h4>{experienceInfo.year}</h4>
          </div>
        </div>
      );
    });
  }

  return (
    <div id="experience" className="experience">
      {cards()}
    </div>
  );
};

export default Experience;
