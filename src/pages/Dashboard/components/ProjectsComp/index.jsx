import "./index.scss";
import { FaFolder, FaFolderOpen } from "react-icons/fa";

function ProjectComp({ overviewHeight }) {
  return (
    <>
      <div className="project-comp-container">
        <div className="project-comp-nav" style={{ height: overviewHeight }}>
          <div className="project-nav-container">
            <div style={{ paddingLeft: "30px" }}>Projects</div>
          </div>
          <div className="project-nav-search"></div>
        </div>
        <div className="projects-divider"></div>
        <div className="new-project-container">
          <div className="new-project-title">
            <div style={{ paddingLeft: "30px", paddingTop: "30px" }}>
              Start a new project:
            </div>
          </div>
          <div className="grid-container--new-proj">
            <div className="grid-item--new-proj">
              <FaFolderOpen
                style={{
                  color: "lightgrey",
                  height: "180px",
                  width: "180px",
                  paddingTop: "20px",
                }}
              />
            </div>
          </div>
        </div>
        <div className="projects-divider"></div>
        <div className="current-project-container">
          <div className="curr-project-title">
            <div style={{ paddingLeft: "30px", paddingTop: "30px" }}>
              Current Projects:
            </div>
          </div>
          <div className="grid-container--currproj">
            <div className="grid-item--currproj">
              <FaFolder
                style={{ color: "#7279F2", height: "180px", width: "180px" }}
              />
            </div>
            <div className="grid-item--currproj">
              <FaFolder
                style={{ color: "#1AE5CA", height: "180px", width: "180px" }}
              />
            </div>
            <div className="grid-item--currproj">
              <FaFolder
                style={{ color: "#FB174E", height: "180px", width: "180px" }}
              />
            </div>
            <div className="grid-item--currproj">
              <FaFolder
                style={{ color: "#FFA596", height: "180px", width: "180px" }}
              />
            </div>
            <div className="grid-item--currproj">
              <FaFolder
                style={{ color: "#FAEC8F", height: "180px", width: "180px" }}
              />
            </div>
            <div className="grid-item--currproj">
              <FaFolder
                style={{ color: "#E97C64", height: "70%", width: "70%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectComp;
