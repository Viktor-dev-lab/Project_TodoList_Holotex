import { CATEGORY_ITEMS } from "../constants";
import { useContext } from "react";
import { Appcontext } from "../context/AppProvider";

const CategoryList = () => {
  const { selectIDCategory, setSelectIDCategory } = useContext(Appcontext);

  return (
    <div>
      <div className="category-list">
        {CATEGORY_ITEMS.map((item) => {
          return (
            <div
              key={item.id}
              className={`category-item ${selectIDCategory === item.id ? "active" : ""}`}
              onClick={() => setSelectIDCategory(item.id)}
            >
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
