import "./index.scss";
import { useState, useEffect, useRef } from "react";
import MLOutput from "./components/MLOutput";
import { useNavigate, useParams } from "react-router-dom";

import ProfileTile from "./components/ProfileFeedComp/ProfileTile";
import NavSelection from "./components/MainNavBarComp/NavSelection";
import CenterComp from "./components/CenterComp";
import LiveFeed from "./components/LivefeedComp";
import Dropdown from "react-dropdown";
import { IoSettings } from "react-icons/io5";

function Dashboard(activeUrlIndex) {
  const [elementHeight, setElementHeight] = useState("");
  const heightRef = useRef();
  const { locationId } = useParams();
  const navigate = useNavigate();

  const userName = localStorage.getItem("username");

  useEffect(() => {
    setElementHeight(heightRef.current.clientHeight);
  }, []);

  const signoutReset = (value) => {
    if (value.label == "Sign Out?") {
      localStorage.removeItem("username");
      navigate("/");
    }
  };

  const options = [{ value: "signout", label: "Sign Out?" }];

  // if (userName == null) {
  //   navigate("/");
  // }

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
            <div className="profile-nav-title">Profile</div>
            <div className="profile-nav-logout">
              <Dropdown
                className="logout-dropdown"
                menuClassName="logout-dropdown-menu"
                placeholderClassName="logout-dropdown-placeholder"
                placeholder={<IoSettings />}
                onChange={signoutReset}
                options={options}
              />
            </div>
          </div>
          {/* profile tile with username */}
          <ProfileTile />
          <div className="live-feed-title">
            <div style={{ paddingLeft: "25px" }}>Live Feed:</div>
          </div>
          <div className="live-feed-container">
            <LiveFeed />
            <MLOutput />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
