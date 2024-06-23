import { useState } from "react";
import "./index.scss";

function LocationMap({ locationId }) {
  if (locationId == null) {
    locationId = "Default(Kakkanad)";
  }

  const [activeFeedItem, setActiveFeedItem] = useState("");

  const CameraFeedItem = ({ title, onClick, active }) => {
    return (
      <a
        className={active ? "feeds-list-item--active" : "feeds-list-item"}
        onClick={onClick}
      >
        {title}
      </a>
    );
  };

  const FeedPointerItem = ({ active, topValue, leftValue }) => {
    console.log(active);
    if (active == false) {
      return (
        <div
          className="map-pointer"
          style={{ top: topValue, left: leftValue }}
        ></div>
      );
    } else {
      return (
        <div
          className="map-pointer--active "
          style={{ top: topValue, left: leftValue }}
        ></div>
      );
    }
  };

  const cameraFeedElements = [
    { title: "Camera Feed 1", key: 0 },
    { title: "Camera Feed 2", key: 1 },
    { title: "Camera Feed 3", key: 2 },
    { title: "Camera Feed 4", key: 3 },
  ];

  const feedPointerElements = [
    { top: "40%", left: "30%", key: 0 },
    { top: "20%", left: "45%", key: 1 },
    { top: "37%", left: "60%", key: 2 },
    { top: "60%", left: "40%", key: 3 },
  ];

  const handleActiveFeedItem = (index) => {
    setActiveFeedItem(index);
  };

  return (
    <>
      <div className="location-map-container">
        <div className="map-container">
          <div className="map-title-container">
            <div style={{ paddingLeft: "30px" }}>
              Map Location: <br />
              {locationId}
            </div>
          </div>
          <div className="map-display-container">
            <div className="full-size-map-display">
              <img
                className="map-image-1"
                src="src/pages/Dashboard/dashAssets/mapimage.png"
              ></img>
            </div>
            {feedPointerElements.map((item, index) => (
              <FeedPointerItem
                key={item.key}
                topValue={item.top}
                leftValue={item.left}
                active={index === activeFeedItem}
              />
            ))}
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
              {cameraFeedElements.map((item, index) => (
                <CameraFeedItem
                  key={item.key}
                  title={item.title}
                  active={index === activeFeedItem}
                  onClick={() => handleActiveFeedItem(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LocationMap;
