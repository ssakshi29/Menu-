import React from "react";

function Categories(props) {
  const { filterItems, category } = props;
  return (
    <div
      style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
    >
      {category.map((category) => {
        return (
          <div>
            <button onClick={() => filterItems(category)} className="btn ">
              {category}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Categories;
