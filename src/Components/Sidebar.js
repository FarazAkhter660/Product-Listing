import React from "react";
import "./Sidebar.css";

const Sidebar = ({ show, toggleSidebar, itemCount }) => {
  const filters = [
    "IDEAL FOR",
    "OCCASION",
    "WORK",
    "FABRIC",
    "SEGMENT",
    "SUITABLE FOR",
    "RAW MATERIALS",
    "PATTERN",
  ];

  if (!show) return null;

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <button className="hide-filter-btn" onClick={toggleSidebar}>
          HIDE FILTER
        </button>
      </div>

      <div className="customizable">
        <label>
          <input type="checkbox" />
          CUSTOMIZABLE
        </label>
      </div>

      {filters.map((filter) => (
        <div key={filter} className="filter-group">
          <label className="filter-label">{filter}</label>
          <select className="filter-select">
            <option>All</option>
          </select>
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;