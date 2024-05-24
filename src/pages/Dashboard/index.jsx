import "./index.scss";
import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

import ProfileTile from "./components/ProfileFeedComp/ProfileTile";
import NavSelection from "./components/MainNavBarComp/NavSelection";
import CenterComp from "./components/CenterComp";
import LiveFeed from "./components/LivefeedComp";
import Popup from "reactjs-popup";

function Dashboard(activeUrlIndex) {
  const [elementHeight, setElementHeight] = useState("");
  const [popupState, setPopupState] = useState("");
  const heightRef = useRef();
  const { locationId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setElementHeight(heightRef.current.clientHeight);
  }, []);

  const signoutReset = () => {
    localStorage.removeItem("username");
    navigate("/");
  };

  const closePopup = () => {
    setPopupState(false);
  };

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
              <Popup
                trigger={<a className="logout-button">Sign out</a>}
                position={"center"}
                arrow={false}
                open={popupState}
                closeOnDocumentClick
              >
                <div className="profile-popup-container">
                  <div className="popup-question">
                    Are you sure you want to
                    <br />
                    Sign out?
                  </div>
                  <div className="popup-choice">
                    <a className="choice-yes" onClick={signoutReset}>
                      Yes
                    </a>
                    <a className="choice-no" onClick={closePopup}>
                      No
                    </a>
                  </div>
                </div>
              </Popup>
            </div>
          </div>
          {/* profile tile with username */}
          <ProfileTile />
          <div className="live-feed-title">
            <div style={{ paddingLeft: "25px" }}>Live Feed:</div>
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
