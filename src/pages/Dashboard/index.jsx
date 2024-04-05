import "./index.scss";
import { useState, useEffect, useRef } from "react";

import OverviewNav from "../../components/DashboardComp/OverviewNav";
import InfoTiles from "../../components/DashboardComp/InfoTiles";
import LocationMap from "../../components/DashboardComp/LocationMap";
import ProfileTile from "../../components/ProfileFeedComp/ProfileTile";

function Dashboard() {
  const [elementHeight, setElementHeight] = useState("");
  const heightRef = useRef();

  useEffect(() => {
    setElementHeight(heightRef.current.clientHeight);
  });

  return (
    <>
      <div className="dashboard-main-container">
        <div className="nav-container">
          <div className="ai-surv-container" ref={heightRef}>
            Ai Surveillance
          </div>
          <div className="divider-2"></div>
        </div>
        <div className="divider-1"></div>
        <div className="overview-container">
          <OverviewNav overviewHeight={elementHeight} />
          <InfoTiles />
          <LocationMap />
        </div>
        <div className="divider-1"></div>
        <div className="profile-feed-container">
          <div className="profile-navbar" style={{ height: elementHeight }}>
            Profile
          </div>
          <ProfileTile />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
