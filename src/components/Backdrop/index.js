import React from "react";

function Backdrop({ children, toggle }) {
  return (
    <div
      className="fixed min-h-[100vh] max-h-[100vh] min-w-[100vw] z-[9998] md:hidden"
      id="backdrop"
      onClick={() => toggle((prev) => !prev)}
    >
      {children}
    </div>
  );
}

export default Backdrop;
