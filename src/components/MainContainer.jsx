import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  // const [scroll]

  const handleScroll = (e) => {
    console.log("main container handlescroll");
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    console.log(e.target);
    console.log(scrollTop, scrollHeight, clientHeight);
  };

  return (
    <div className="col-span-10 overflow-y-auto px-2" onScroll={handleScroll}>
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
