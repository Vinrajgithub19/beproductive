import React from "react";

const Navbar = () => {
  return (
    <div style={{ display: "block", background: "yellow" }}>
      <nav>
        <ul
          style={{
            display: "flex",
            gap: "40px",
            listStyle: "none",
          }}
        >
          <li>home</li>
          <li>Task manager</li>
          <li>information</li>
          <li>monthly savings</li>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
