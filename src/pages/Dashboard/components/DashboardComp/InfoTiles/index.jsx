import { useEffect, useState } from "react";
import "./index.scss";

function InfoTiles() {
  const [vehicleNumberValue, setVehicleNumberValue] = useState("");
  const [overspeedValue, setOverspeedValue] = useState("");
  const [accuracyValue, setAccuracyValue] = useState("");

  useEffect(() => {
    let vehicleMin = 4;
    let overspeedMin = 1;
    let accuracyList = ["98%", "96%", "99%", "94%"];
    for (let i = 1; i <= 1000; i++) {
      setTimeout(() => {
        //randomizing values
        vehicleMin = vehicleMin + Math.floor(Math.random() * 8) + 1;
        overspeedMin = overspeedMin + Math.floor(Math.random() * 2) + 1;
        setVehicleNumberValue(vehicleMin);
        setOverspeedValue(overspeedMin);
        setAccuracyValue(
          accuracyList[Math.floor(Math.random() * accuracyList.length)]
        );
      }, i * 3000);
    }
  }, []);

  return (
    <>
      <div className="infotiles-container">
        <div className="tile" style={{ backgroundColor: "#FFAEB2" }}>
          <div className="tile-title">
            <div style={{ paddingLeft: "12px" }}>No. of Vehicles</div>
          </div>
          <div className="tile-info">
            <div style={{ paddingLeft: "12px" }}>{vehicleNumberValue}</div>
          </div>
        </div>
        <div className="tile" style={{ backgroundColor: "#CAD5FD" }}>
          <div className="tile-title">
            <div style={{ paddingLeft: "12px" }}>OverSpeeding</div>
          </div>
          <div className="tile-info">
            <div style={{ paddingLeft: "12px" }}>{overspeedValue}</div>
          </div>
        </div>
        <div className="tile" style={{ backgroundColor: "#E9FA98" }}>
          <div className="tile-title">
            <div style={{ paddingLeft: "12px" }}>Accuracy</div>
          </div>
          <div className="tile-info">
            <div style={{ paddingLeft: "12px" }}>{accuracyValue}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoTiles;
