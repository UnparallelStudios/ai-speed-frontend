import { useEffect, useState, useRef } from "react";
import "./index.scss";

const NavItem = ({ active, title, onClick }) => {
  return (
    <a className={active ? "nav-item-active" : "nav-item"} onClick={onClick}>
      {title}
    </a>
  );
};

function NavSelection({ activeIndex, onChangeActive }) {
  const navElements = [
    { title: "OverView", key: 0 },
    { title: "Projects", key: 1 },
    { title: "Tasks", key: 2 },
    { title: "Schedule", key: 3 },
  ];

  return (
    <>
      <div className="navselection-container">
        <div className="nav-list">
          {navElements.map((item, index) => (
            <NavItem
              key={item.key}
              title={item.title}
              active={index === activeIndex}
              onClick={() => onChangeActive(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default NavSelection;
