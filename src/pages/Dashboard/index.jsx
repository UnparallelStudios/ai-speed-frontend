import "./index.scss";
import { useState, useEffect, useRef } from "react";

import ProfileTile from "./components/ProfileFeedComp/ProfileTile";
import NavSelection from "./components/MainNavBarComp/NavSelection";
import CenterComp from "./components/CenterComp";
import { useParams } from "react-router-dom";

function Dashboard(activeUrlIndex) {
  const [elementHeight, setElementHeight] = useState("");
  const heightRef = useRef();
  const { locationId } = useParams();

  console.log(locationId);

  useEffect(() => {
    setElementHeight(heightRef.current.clientHeight);
  }, []);

  return (
    <>
      <div className="dashboard-main-container">
        <div className="nav-container">
          <div className="ai-surv-container" ref={heightRef}>
            Ai Surveillance
          </div>
          <div className="divider-2"></div>
          <NavSelection activeIndex={activeUrlIndex} />
          <div className="divider-2"></div>
        </div>
        <div className="divider-1"></div>
        <div className="center-container">
          <CenterComp
            locationId={locationId}
            overviewHeight={elementHeight}
            activeIndex={activeUrlIndex}
          />
        </div>
        <div className="divider-1"></div>
        <div className="profile-feed-container">
          <div className="profile-navbar" style={{ height: elementHeight }}>
            Profile
          </div>
          <ProfileTile />
          <div className="live-feed-title">
            <div style={{ paddingLeft: "18px" }}>Live Feed:</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
