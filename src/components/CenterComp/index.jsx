import DashboardComp from "../DashboardComp";
import ProjectComp from "../ProjectsComp";
import "./index.scss";

function CenterComp({ overviewHeight, activeIndex }) {
  const DashboardPass = () => {
    return <DashboardComp overviewHeight={overviewHeight} />;
  };

  const activeComponents = {
    0: DashboardPass,
    1: ProjectComp,
  };

  const SelectedComponent = activeComponents[activeIndex];

  return <SelectedComponent />;
}

export default CenterComp;
