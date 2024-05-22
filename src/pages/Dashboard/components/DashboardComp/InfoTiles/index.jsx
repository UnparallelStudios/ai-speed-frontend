import "./index.scss";

function InfoTiles() {
  return (
    <>
      <div className="infotiles-container">
        <div className="tile" style={{ backgroundColor: "#FFAEB2" }}>
          <div className="tile-title">
            <div style={{ paddingLeft: "12px" }}>No. of Vehicles</div>
          </div>
          <div className="tile-info">
            <div style={{ paddingLeft: "12px" }}>000</div>
          </div>
        </div>
        <div className="tile" style={{ backgroundColor: "#CAD5FD" }}>
          <div className="tile-title">
            <div style={{ paddingLeft: "12px" }}>OverSpeeding</div>
          </div>
          <div className="tile-info">
            <div style={{ paddingLeft: "12px" }}>000</div>
          </div>
        </div>
        <div className="tile" style={{ backgroundColor: "#E9FA98" }}>
          <div className="tile-title">
            <div style={{ paddingLeft: "12px" }}>Accuracy</div>
          </div>
          <div className="tile-info">
            <div style={{ paddingLeft: "12px" }}>000</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoTiles;
