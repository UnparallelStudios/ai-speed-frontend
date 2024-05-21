import { RxDashboard } from "react-icons/rx";
import { RxCardStackPlus } from "react-icons/rx";
import "./index.scss";
import { useNavigate } from "react-router-dom";

const NavItem = ({ active, logo, title, onClick }) => {
  return (
    <a className={active ? "nav-item-active" : "nav-item"} onClick={onClick}>
      {logo}
      {title}
    </a>
  );
};

const logoStyle = {
  height: "40%",
  marginLeft: "10%",
  marginRight: "5%",
};

function NavSelection({ activeIndex }) {
  const navigate = useNavigate();
  const urlIndex = activeIndex["activeUrlIndex"];

  const navElements = [
    {
      logo: <RxDashboard style={logoStyle} />,
      title: "Overview",
      navigator: "/dashboard",
      key: 0,
    },
    {
      logo: <RxCardStackPlus style={logoStyle} />,
      title: "Projects",
      navigator: "/project",
      key: 1,
    },
    { title: "Placeholder", key: 2 },
    { title: "Placeholder", key: 3 },
  ];

  return (
    <>
      <div className="navselection-container">
        <div className="nav-list">
          {navElements.map((item, index) => (
            <NavItem
              key={item.key}
              logo={item.logo}
              title={item.title}
              active={index == urlIndex}
              onClick={() => {
                navigate(item.navigator);
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default NavSelection;
