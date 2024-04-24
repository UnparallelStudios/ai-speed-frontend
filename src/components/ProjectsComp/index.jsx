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
        {/* <div className="divider-4"></div> */}
      </div>
    </>
  );
}

export default ProjectComp;
