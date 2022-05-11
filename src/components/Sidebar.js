import React, { useState } from "react";
import {
  RiArrowLeftLine,
  RiPieChartLine,
  RiDashboardLine,
  RiWechat2Line,
  RiTaskLine,
  RiTeamLine,
  RiArrowDownSLine,
} from "react-icons/ri";
import "./Sidebar.css";

function Sidebar() {
  const sidebarCollapsed = localStorage.getItem("sidebar-collapsed");
  const [isExpanded, setIsExpanded] = useState(sidebarCollapsed ? false : true);

  const handleToggler = () => {
    if (isExpanded) {
      setIsExpanded(false);
      localStorage.setItem("sidebar-collapsed", true);
      return;
    }
    setIsExpanded(true);
    localStorage.removeItem("sidebar-collapsed");
  };

  return (
    <div className={isExpanded ? "Sidebar" : "Sidebar collapsed"}>
      <div className="sidebar-header">
        <RiArrowLeftLine className="sidebar-icon" onClick={handleToggler} />
        <span className="sidebar-logo">Logo</span>
      </div>
      <ul>
        <li className="sidebar-items">
          <RiDashboardLine className="sidebar-icon" />
          <span className="sidebar-text">Dashboard</span>
        </li>
        <li className="sidebar-items">
          <RiWechat2Line className="sidebar-icon" />
          <span className="sidebar-text">Chat</span>
        </li>
        <li className="sidebar-items">
          <RiTeamLine className="sidebar-icon" />
          <span className="sidebar-text">Teams</span>
        </li>
        <li className="sidebar-items">
          <RiTaskLine className="sidebar-icon" />
          <span className="sidebar-text">Task</span>
        </li>
        <li className="sidebar-items">
          <RiPieChartLine className="sidebar-icon" />
          <span className="sidebar-text">Analytics</span>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
