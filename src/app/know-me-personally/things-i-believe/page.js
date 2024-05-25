"use client";
import React, { useLayoutEffect } from "react";

function Page() {
  useLayoutEffect(() => {
    const body = document.getElementsByTagName("body");
    body[0].style.backgroundColor = "white";
    body[0].style.color = "black";

    return () => {
      body[0].style.backgroundColor = "black";
      body[0].style.color = "white";
    };
  }, []);
  return (
    <div className="pt-20">
      <p className="text-3xl"> things i believe</p>
    </div>
  );
}

export default Page;
