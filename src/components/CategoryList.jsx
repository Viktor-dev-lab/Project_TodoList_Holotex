import { CATEGORY_ITEMS } from "../constants";
import { useContext } from "react";
import { Appcontext } from "../context/AppProvider";
import { useMemo } from "react";

const CategoryList = (props) => {
  const { selectIDCategory, setSelectIDCategory } = useContext(Appcontext);

  const countByCategory = useMemo(() => {
    return props.todoList.reduce((acc, cur) => {
      return {...acc, [cur.category]: acc[cur.category] + 1};
    }, {
      work: 0,
      personal: 0,
      study: 0,
      shopping: 0,
      other: 0,
    });
  }, [props.todoList]);

  console.log(countByCategory);

  return (
    <div>
      <div className="category-list">
        {CATEGORY_ITEMS.map((item) => {
          return (
            <div
              key={item.id}
              className={`category-item ${
                selectIDCategory === item.id ? "active" : ""
              }`}
              onClick={() => setSelectIDCategory(item.id)}
            >
              <p className="category-label">{item.label}</p>
              <span className="category-count">{countByCategory[item.id]}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryList;
