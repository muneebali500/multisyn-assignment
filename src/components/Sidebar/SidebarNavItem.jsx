import React from "react";

export default function SidebarNavItem({ icon, name, dropBtn, selected }) {
  return (
    <li className={`sidebar__menu--item ${selected ? "active" : ""}`}>
      <span className="sidebar__menu--item-icon">{icon}</span>
      <h3 className="sidebar__menu--item-name">{name}</h3>
      <button className="sidebar__menu--item-dropBtn">{dropBtn}</button>
    </li>
  );
}
