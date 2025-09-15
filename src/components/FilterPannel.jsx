import "./FilterPannel.css";

const FILTER_ITEMS = [
  {
    id: "all",
    label: "All",
    iconPath: "/inbox.png",
  },
  {
    id: "important",
    label: "Important",
    iconPath: "/flag.png",
  },
  {
    id: "completed",
    label: "Completed",
    iconPath: "/check.png",
  },
  {
    id: "deleted",
    label: "Deleted",
    iconPath: "/delete.png",
  },
];

const FilterPannel = (props) => {
  return (
    <div className="filter-pannel">
      <input type="text" name="search-text" placeholder="Search"></input>
      <div className="filter-container">
        {FILTER_ITEMS.map((item) => {
          return (
            <div
              key={item.id}
              className={`filter-item ${ item.id === props.selectFilter ? "selected" : ""}`}
              onClick={() => props.setSelectFilter(item.id)}
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
