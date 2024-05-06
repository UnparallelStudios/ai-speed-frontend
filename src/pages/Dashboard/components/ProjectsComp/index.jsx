import "./index.scss";

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
        <div className="new-project-container"></div>
        <div className="current-project-container">
          <div className="grid-container--currproj">
            <div className="grid-item--currproj">
              <img src="src/pages/Dashboard/DashAssets/Group 40.png"></img>
            </div>
            <div className="grid-item--currproj">x</div>
            <div className="grid-item--currproj">x</div>
            <div className="grid-item--currproj">x</div>
            <div className="grid-item--currproj">x</div>
            <div className="grid-item--currproj">x</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectComp;
