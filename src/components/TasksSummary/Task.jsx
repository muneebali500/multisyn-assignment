import React from "react";

export default function Task({ taskStatus, icon, number, text, arrowIcon }) {
  return (
    <div className="tasks-card">
      <div className="tasks-card__top">
        <h4>{taskStatus}</h4>
        <span>{icon}</span>
      </div>
      <div className="tasks-card__middle">{number}</div>
      <div className="tasks-card__bottom">
        <span>{text}</span>
        <span>{arrowIcon}</span>
      </div>
    </div>
  );
}
