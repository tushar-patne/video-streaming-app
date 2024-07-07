import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const topics = [
    "All",
    "Indian Premier League",
    "News",
    "Street Food",
    "Live",
    "Gaming",
    "Baking",
    "Bollywood",
    "Rohit Sharma",
    "Cricket",
    "IPL",
    "Podcast",
    "Comedy",
    "Javascript",
    "Physics",
    "Dance",
    "WWE SmackDown",
  ];
  return (
    <div className="flex gap-2 p-2 text-sm overflow-x-auto no-scrollbar">
      {topics.map((topic) => (
        <Button key={topic} name={topic} />
      ))}
    </div>
  );
};

export default ButtonList;
