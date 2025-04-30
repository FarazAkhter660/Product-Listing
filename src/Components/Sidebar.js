import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const filters = [
    "IDEAL FOR", "OCCASION", "WORK", "FABRIC", "SEGMENT", "SUITABLE FOR", "RAW MATERIALS", "PATTERN"
  ];

  return (
    <aside className="sidebar">
      <h4>CUSTOMIZE</h4>
      {filters.map((filter) => (
        <div key={filter} className="filter-group">
          <label>{filter}</label>
          <select>
            <option>All</option>
          </select>
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
