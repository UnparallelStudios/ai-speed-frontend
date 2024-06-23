import "./index.scss";
import userimage from "../../../dashAssets/userimage.png";

function ProfileTile() {
  const userUsername = localStorage.getItem("username");

  return (
    <>
      <div className="profile-tile-container">
        <div className="profile-tile">
          <div className="profile-logo" style={{ marginTop: "20px" }}>
            <img src={userimage} style={{ height: "100%", width: "100%" }} />
          </div>
          <div className="profile-user-name">{userUsername}</div>
        </div>
      </div>
    </>
  );
}

export default ProfileTile;
