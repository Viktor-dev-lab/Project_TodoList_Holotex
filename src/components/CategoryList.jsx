import React from "react";
import {CATEGORY_ITEMS} from "../constants";

const CategoryList = () => {
  return (
	<div>
	  <div className="category-list">
      {CATEGORY_ITEMS.map((item) => {
        return (
          <div key={item.id} className="category-item">
            <p className="category-label">{item.label}</p>
            <span className="category-count">0</span>
          </div>
        );
      })}
    </div>
	</div>
  );
};

export default CategoryList;