import "./index.scss";
import { useState, useEffect, useRef } from "react";

import ProfileTile from "./components/ProfileFeedComp/ProfileTile";
import NavSelection from "./components/MainNavBarComp/NavSelection";
import CenterComp from "./components/CenterComp";
import LiveFeed from "./components/LivefeedComp";

function Dashboard() {
  const [elementHeight, setElementHeight] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const heightRef = useRef();

  useEffect(() => {
    setElementHeight(heightRef.current.clientHeight);
  });

  const handleChangeActive = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <div className="dashboard-main-container">
        <div className="nav-container">
          <div className="ai-surv-container" ref={heightRef}>
            Ai Surveillance
          </div>
          <div className="divider-2"></div>
          <NavSelection
            activeIndex={activeIndex}
            onChangeActive={handleChangeActive}
          />
          <div className="divider-2"></div>
        </div>
        <div className="divider-1"></div>
        <div className="center-container">
          <CenterComp
            overviewHeight={elementHeight}
            activeIndex={activeIndex}
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
          <div className="live-feed-container">
            <LiveFeed />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
