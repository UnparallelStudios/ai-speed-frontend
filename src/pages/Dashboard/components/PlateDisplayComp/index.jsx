import "./index.scss";

function PlateDisplayComp({ overviewHeight }) {
  return (
    <>
      <div className="platedisplay-main-container">
        <div
          className="pd-nav-container"
          style={{
            height: overviewHeight,
            width: "100%",
          }}
        >
          <div style={{ paddingLeft: "30px" }}>View Vehicle Plates</div>
        </div>
        <div className="divider-pd-1"></div>
      </div>
    </>
  );
}

export default PlateDisplayComp;
