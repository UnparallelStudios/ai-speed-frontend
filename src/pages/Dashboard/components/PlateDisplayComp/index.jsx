import "./index.scss";
import axios from "axios";
import app from "../../../../firebase.js";
import { getDownloadURL, getStorage, ref } from "firebase/storage";

function PlateDisplayComp({ overviewHeight }) {
  const urlPlates = "https://8671-34-125-164-104.ngrok-free.app/plate-info";
  const storage = getStorage(app);

  const reference = ref(
    storage,
    "Speed_detection_AI/enhanced_plates/plate2-1.png"
  );
  const url = getDownloadURL(reference);
  console.log(url);

  axios
    .get(urlPlates, {
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "random",
      },
    })
    .then(function (response) {
      console.log(response.status);
      const data = response.data;
      console.log(data);
    })
    .catch(function (error) {
      console.log(error);
    });

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
        <div className="pd-grid">
          <div className="pd-grid-item">ss</div>
        </div>
      </div>
    </>
  );
}

export default PlateDisplayComp;
