import React from "react";

import { icons } from "../../icons/icons";

export default function Header() {
  return (
    <header>
      <nav className="nav-items">
        <a href="/#" className="nav-items__link">
          {icons.salesOrders} Sales Orders
        </a>
        <a href="/#" className="nav-items__link">
          {icons.purchaseOrders} Purchase Orders
        </a>
        <a href="/#" className="nav-items__link">
          {icons.products} Products
        </a>
      </nav>

      <div className="input-groups">
        <div className="input-group__task">
          <div className="input-group__task--item">
            <span className="icon">{icons.availableApps}</span>
            <span className="item-name">Task list</span>
          </div>

          <div className="input-group__task--progress">
            <progress id="file" value="33" max="100"></progress>
            <label htmlFor="file">33%</label>
          </div>

          <span>Task has done on 33%</span>
        </div>
        <div className="input-group__search">
          <button>
            <i className="fas fa-chevron-down"></i>
          </button>
          <input type="text" placeholder="Search" />
          <i className="fas fa-search search-icon"></i>
        </div>
      </div>

      <div className="user-details">
        <span className="bell-icon">
          <i className="far fa-bell"></i>
        </span>
        <figure className="user-details__photo">
          <img
            src="https://thumbs.dreamstime.com/b/handsome-man-black-suit-white-shirt-posing-studio-attractive-guy-fashion-hairstyle-confident-man-short-beard-125019349.jpg"
            alt=""
          />
        </figure>
        <h3 className="user-details__name">Mohammad Hosen</h3>
        <button>
          <i className="fas fa-chevron-down"></i>
        </button>
      </div>
    </header>
  );
}
