import "./index.scss";

function OverviewNav({ overviewHeight }) {
  return (
    <>
      <div className="main-overview-container">
        <div className="overview-nav" style={{ height: overviewHeight }}>
          <div className="overview-title">
            <div style={{ paddingLeft: "30px" }}>Overview</div>
          </div>
          <div className="overview-search-bar"></div>
        </div>
        <div className="overview-performance">
          <div className="performance-title">
            <div style={{ paddingLeft: "30px" }}>Performance</div>
          </div>
          <div className="performance-period"></div>
        </div>
      </div>
    </>
  );
}

export default OverviewNav;
