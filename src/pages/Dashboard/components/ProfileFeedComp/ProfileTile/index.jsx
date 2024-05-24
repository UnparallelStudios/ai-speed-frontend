import "./index.scss";
import { FaUserSecret } from "react-icons/fa6";

function ProfileTile() {
  const userUsername = localStorage.getItem("username");

  return (
    <>
      <div className="profile-tile-container">
        <div className="profile-tile">
          <div className="profile-logo" style={{ marginTop: "20px" }}>
            <FaUserSecret style={{ height: "50px", width: "50px" }} />
          </div>
          <div className="profile-user-name">{userUsername}</div>
        </div>
      </div>
    </>
  );
}

export default ProfileTile;
