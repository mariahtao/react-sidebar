import React, { useState } from "react";
import {
  RiMenuLine,
  RiLayoutGridFill,
  RiChat4Fill,
  RiTeamFill,
  RiTaskFill,
  RiPieChart2Fill,
} from "react-icons/ri";
import "./Sidebar.css";

function Sidebar() {
  const sidebarCollapsed = localStorage.getItem("sidebar-collapsed");
  const [isExpanded, setIsExpanded] = useState(sidebarCollapsed ? false : true);

  const handleToggler = () => {
      if (isExpanded) {
          setIsExpanded(false);
          localStorage.setItem('sidebar-collapsed', true);
          return;
      }
      setIsExpanded(true);
      localStorage.removeItem('sidebar-collapsed');
  };

  return (
    <div className={isExpanded ? "Sidebar" : "Sidebar collapsed"}>
      <div className="sidebar-header">
        <RiMenuLine className="sidebar-icon" onClick={handleToggler} />
        <h1 className="sidebar-logo">Logo</h1>
      </div>
      <div className="sidebar-items">
        <RiLayoutGridFill className="sidebar-icon" />
        <span className="sidebar-text">Dashboard</span>
      </div>
      <div className="sidebar-items">
        <RiChat4Fill className="sidebar-icon" />
        <span className="sidebar-text">Chat</span>
      </div>
      <div className="sidebar-items">
        <RiTeamFill className="sidebar-icon" />
        <span className="sidebar-text">Teams</span>
      </div>
      <div className="sidebar-items">
        <RiTaskFill className="sidebar-icon" />
        <span className="sidebar-text">Task</span>
      </div>
      <div className="sidebar-items">
        <RiPieChart2Fill className="sidebar-icon" />
        <span className="sidebar-text">Analytics</span>
      </div>
    </div>
  );
}

export default Sidebar;