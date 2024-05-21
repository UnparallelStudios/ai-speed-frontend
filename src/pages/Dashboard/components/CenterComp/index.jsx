import DashboardComp from "../DashboardComp";
import ProjectComp from "../ProjectsComp";
import "./index.scss";

function CenterComp({ locationId, overviewHeight, activeIndex }) {
  const DashboardPass = () => {
    return (
      <DashboardComp overviewHeight={overviewHeight} locationId={locationId} />
    );
  };

  const ProjectPass = () => {
    return <ProjectComp overviewHeight={overviewHeight} />;
  };

  const urlIndex = activeIndex["activeUrlIndex"];

  const activeComponents = {
    0: DashboardPass,
    1: ProjectPass,
  };

  const SelectedComponent = activeComponents[urlIndex];

  return <SelectedComponent />;
}

export default CenterComp;
