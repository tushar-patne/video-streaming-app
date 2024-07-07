import React from "react";
import Sidebar from "./Sidebar";
// import MainContainer from './MainContainer'
import { Outlet } from "react-router-dom";

const Body = () => {
  const handleScroll = (e) => {
    console.log("Body handlescroll");
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    console.log(e.target);
    console.log(scrollTop, scrollHeight, clientHeight);
  };

  return (
    <div className="grid grid-flow-col h-full" onScroll={handleScroll}>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
