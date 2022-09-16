import React from "react";
import menu from "./data";

function Menu() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {menu.map((menu) => {
        const { id, title, category, price, img, desc } = menu;
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
  );
}

export default Menu;
