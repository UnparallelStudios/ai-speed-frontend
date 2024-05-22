import InfoTiles from "./InfoTiles";
import LocationMap from "./LocationMap";
import OverviewNav from "./OverviewNav";
import "./index.scss";

function DashboardComp({ overviewHeight, locationId }) {
  return (
    <>
      <OverviewNav overviewHeight={overviewHeight} />
      <InfoTiles />
      <LocationMap locationId={locationId} />
    </>
  );
}

export default DashboardComp;
