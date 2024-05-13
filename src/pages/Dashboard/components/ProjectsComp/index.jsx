import "./index.scss";
import { FaFolder, FaFolderOpen } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

function ProjectComp({ overviewHeight }) {
  return (
    <>
      <div className="project-comp-container">
        <div className="project-comp-nav" style={{ height: overviewHeight }}>
          <div className="project-nav-container">
            <div style={{ paddingLeft: "30px" }}>Projects</div>
          </div>
          <div className="project-search-bar">
            <input type="text" placeholder="Search"></input>
          </div>
        </div>
        <div className="projects-divider"></div>
        <div className="new-project-container">
          <div className="new-project-title">
            <div
              style={{
                paddingLeft: "20px",
              }}
            >
              Start a new project:
            </div>
          </div>
          <div className="grid-container--new-proj">
            <div className="grid-item--new-proj">
              <FaFolderOpen
                style={{
                  color: "lightgrey",
                  height: "140px",
                  width: "140px",
                }}
              />
            </div>
          </div>
        </div>
        <div className="projects-divider"></div>
        <div className="current-project-container">
          <div className="curr-project-title">
            <div
              style={{
                paddingLeft: "20px",
              }}
            >
              Current Projects:
            </div>
          </div>
          <div className="grid-container--currproj">
            <div className="grid-item--currproj">
              <FaFolder
                style={{ color: "#7279F2", height: "140px", width: "140px" }}
              />
            </div>
            <div className="grid-item--currproj">
              <FaFolder
                style={{ color: "#1AE5CA", height: "140px", width: "140px" }}
              />
            </div>
            <div className="grid-item--currproj">
              <FaFolder
                style={{ color: "#FB174E", height: "140px", width: "140px" }}
              />
            </div>
            <div className="grid-item--currproj">
              <FaFolder
                style={{ color: "#FFA596", height: "140px", width: "140px" }}
              />
            </div>
            <div className="grid-item--currproj">
              <FaFolder
                style={{ color: "#FAEC8F", height: "140px", width: "140px" }}
              />
            </div>
            <div className="grid-item--currproj">
              <FaFolder
                style={{ color: "#E97C64", height: "140px", width: "140px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectComp;
