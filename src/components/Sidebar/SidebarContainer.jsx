import React from "react";

import { icons } from "../../icons/icons";

import { sidebarMenu } from "../../data";
import SidebarNavItem from "./SidebarNavItem";

export default function SidebarContainer() {
  return (
    <aside className="sidebar">
      <h2 className="sidebar__logo">Logo</h2>
      <button className="sidebar__btn">{icons.launch}</button>
      <ul className="sidebar__menu">
        {sidebarMenu.map((item) => (
          <SidebarNavItem {...item} key={item.id} />
        ))}
      </ul>
    </aside>
  );
}
