import React, { useState } from "react";
import Categories from "./Categories";
import menu from "./data";

const allCategories = new Set(menu.map((menu) => menu.category));

console.log(allCategories);
function Menu() {
  const [menuItems, setMenuItems] = useState(menu);
  const [category] = useState(["all", ...allCategories]);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(menu);
      return;
    }

    let newItems = menu.filter((menu) => menu.category === category);

    setMenuItems(newItems);
  };

  return (
    <div>
      <Categories filterItems={filterItems} category={category} />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {menuItems.map((menu) => {
          const { id, title, price, img, desc } = menu;
          return (
            <article
              className="card"
              key={id}
              style={{
                width: "350px",
                marginTop: "20px",
                paddingLeft: "25px",
                paddingTop: "20px",
              }}
            >
              <div style={{ width: "15rem" }}>
                <img src={img} alt={title} width={300} />
              </div>
              <header
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingRight: "25px",
                }}
              >
                <h5>{title.toUpperCase()}</h5>
                <h6> {price}</h6>
              </header>
              <p>{desc}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
