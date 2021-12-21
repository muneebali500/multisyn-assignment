import React from "react";

import { icons } from "../../icons/icons";

export default function ActivityTitleWrapper() {
  return (
    <div className="activity-wrapper">
      <h2>Sales Activity for this week</h2>
      <div className="buttons">
        <button className="edit-btn">
          <span>{icons.editLayout}</span>
          <span>Edit Layout</span>
        </button>
        <button className="filter-btn">
          <span>Filter by year</span>
          <span>:</span>
        </button>
      </div>

      <button className="quick-links__btn">{icons.launch} Quick Links</button>
    </div>
  );
}
