import React from "react";
import {useMemo} from "react";

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

const FilterList = (props) => {
  const countFilterType = useMemo(() => {
    return props.todolist.reduce(
      (acc, todo) => {
        if (todo.isDeleted) {
          acc.deleted += 1;
        }
        if (todo.isCompleted) {
          acc.completed += 1;
        }
        if (todo.isImportant) {
          acc.important += 1;
        }
        return acc;
      },
      { all: props.todolist.length, important: 0, completed: 0, deleted: 0 }
    );
  }, [props.todolist]);

  return (
    <div>
      <div className="filter-container">
        {FILTER_ITEMS.map((item) => {
          return (
            <div
              key={item.id}
              className={`filter-item ${
                item.id === props.selectFilter ? "selected" : ""
              }`}
              onClick={() => props.setSelectFilter(item.id)}
            >
              <div className="filter-name">
                <img src={item.iconPath} />
                <p>{item.label}</p>
              </div>
              <p>{countFilterType[item.id]}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilterList;
