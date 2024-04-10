import InfoTiles from "./InfoTiles";
import LocationMap from "./LocationMap";
import OverviewNav from "./OverviewNav";
import "./index.scss";

function DashboardComp({ overviewHeight }) {
  return (
    <>
      <OverviewNav overviewHeight={overviewHeight} />
      <InfoTiles />
      <LocationMap />
    </>
  );
}

export default DashboardComp;
