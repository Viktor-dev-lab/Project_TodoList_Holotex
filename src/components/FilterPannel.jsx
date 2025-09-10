import "./FilterPannel.css";
import {useState} from 'react'

const FILTER_ITEMS = [
  {
    id: "all",
    label: "All",
    iconPath: "./public/inbox.png",
  },
  {
    id: "important",
    label: "Important",
    iconPath: "./public/flag.png",
  },
  {
    id: "completed",
    label: "Completed",
    iconPath: "./public/check.png",
  },
  {
    id: "deleted",
    label: "Deleted",
    iconPath: "./public/delete.png",
  },
];

const FilterPannel = () => {
  const [selectFilter, setSelectFilter] = useState("all");

  return (
    <div className="filter-pannel">
      <input type="text" name="search-text" placeholder="Search"></input>
      <div className="filter-container">
        {FILTER_ITEMS.map((item) => {
          return (
            <div className={`filter-item ${item.id === selectFilter ? 'selected' : ''}`}
              onClick={() => setSelectFilter(item.id)}
            >
              <div className="filter-name">
                <img src={item.iconPath} />
                <p>{item.label}</p>
              </div>
              <p>22</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default FilterPannel;
