import "./index.scss";
import { FaFolder, FaFolderOpen } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "../..";

function ProjectComp({ overviewHeight }) {
  const navigate = useNavigate();

  const FolderItem = ({ color, location, locationId }) => {
    return (
      <div className="grid-item--currproj">
        <div className="folder-container">
          <a className="location-title" onClick={() => navigate(locationId)}>
            {location}
          </a>
          <FaFolder
            style={{
              color: color,
              height: "140px",
              width: "140px",
            }}
          />
        </div>
      </div>
    );
  };

  const folderElements = [
    {
      color: "#7279F2",
      location: "Thrikkakara",
      key: 0,
      locationId: "/dashboard/thrikkakara",
    },
    {
      color: "#1AE5CA",
      location: "Edapally",
      key: 1,
      locationId: "/dashboard/edapally",
    },
    {
      color: "#FB174E",
      location: "Palarivattom",
      key: 2,
      locationId: "/dashboard/palarivattom",
    },
    {
      color: "#FFA596",
      location: "Kadavanthra",
      key: 3,
      locationId: "/dashboard/kadavanthra",
    },
    {
      color: "#FAEC8F",
      location: "Kaloor",
      key: 4,
      locationId: "/dashboard/kaloor",
    },
    {
      color: "#E97C64",
      location: "Vennela",
      key: 5,
      locationId: "/dashboard/vennela",
    },
  ];

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
              Current Project Locations:
            </div>
          </div>
          <div className="grid-container--currproj">
            {folderElements.map((item) => (
              <FolderItem
                key={item.key}
                color={item.color}
                location={item.location}
                locationId={item.locationId}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectComp;
