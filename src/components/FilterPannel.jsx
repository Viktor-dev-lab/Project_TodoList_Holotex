import "./FilterPannel.css";
import CategoryList from "./CategoryList";
import FilterList from "./FilterList";
import './CategoryList.css'


const FilterPannel = (props) => {

  return (
    <div className="filter-pannel">
      <input
        type="text"
        name="search-text"
        placeholder="Search"
        value={props.searchText}
        onChange={(e) => props.setSearchText(e.target.value)}
      />
      <FilterList {...props} />
      <CategoryList />
    </div>
  );
};
export default FilterPannel;
