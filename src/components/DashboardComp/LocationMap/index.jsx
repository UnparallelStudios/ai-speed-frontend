import "./index.scss";

function LocationMap() {
  return (
    <>
      <div className="location-map-container">
        <div className="map-container">
          <div className="map-title-container">
            <div style={{ paddingLeft: "30px" }}>
              Map Location: <br />
              Kakkanad
            </div>
          </div>
          <div className="map-display-container">
            <div className="full-size-map-display"></div>
          </div>
        </div>
        <div className="divider-3"></div>
        <div className="available-camera-feed">
          <div className="camera-feeds-title">
            <div style={{ paddingLeft: "20px" }}>Camera Feeds:</div>
          </div>
          <div className="camera-feeds">
            {/* links need to be reworked for further dev */}
            <div className="feeds-list">
              <a>Camera Feed 1</a>
              <a>Camera Feed 2</a>
              <a>Camera Feed 3</a>
              <a>Camera Feed 4</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LocationMap;
