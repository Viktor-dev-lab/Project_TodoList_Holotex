import React from "react";

const CATEGORY_ITEMS = [
  {
    id: "work",
    label: "Work",
  },
  {
    id: "personal",
    label: "Personal",
  },
  {
    id: "shopping",
    label: "Shopping",
  },
  {
    id: "other",
    label: "Other",
  },
];

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