import React from "react";

import projectsInfo from "../../resource/projectsInfo";

import "./Projects.css";

const Projects = () => {
  function cards() {
    return projectsInfo.map((projectsInfo) => {
      return (
        <div key={projectsInfo.id} id="card" className="card">
          <img src={projectsInfo.imageSrc} alt="Project" />
          <div className="title">
            <h4>{projectsInfo.title}</h4>
          </div>
          <div className="description">
            <p>{projectsInfo.description}</p>
            <button className="projects-button">
              <a className="project-link" href={projectsInfo.link}>
                Project Link
              </a>
            </button>
          </div>
        </div>
      );
    });
  }

  return (
    <div id="projects" className="projects">
      {cards()}
    </div>
  );
};

export default Projects;
