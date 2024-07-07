import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import {
  YOUTUBE_SEARCH_AUTOSUGGEST_API,
  YOUTUBE_SEARCH_AUTOSUGGEST_API_2,
} from "../utils/constants";
import { useEffect, useState } from "react";

const Head = () => {
  const dispatch = useDispatch();
  const handleMenuToggle = () => {
    dispatch(toggleMenu());
  };

  const [searchQuery, setSearchQuery] = useState("");

  // DEBOUNCING IN REACT
  useEffect(() => {
    // console.log(searchQuery);
    const timer = setTimeout(() => {
      // getAutoSuggestions();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getAutoSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_AUTOSUGGEST_API + searchQuery);
    // const data = await fetch(YOUTUBE_SEARCH_AUTOSUGGEST_API_2 + searchQuery + "&xhr=t&xssi=t&gl=in");
    const json = await data.json();
    console.log(json);
  };

  return (
    <div className="flex justify-between items-center h-16 px-5 sticky top-0 left-0 bg-white z-10">
      <div className="flex gap-3 justify-center items-center h-full">
        <span
          className="font-bold text-xl cursor-pointer"
          onClick={handleMenuToggle}
        >
          &#9776;
        </span>
        <img
          className="bg-transparent h-full cursor-pointer"
          src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
          alt=""
        />
      </div>
      <div className="h-2/3">
        <input
          className="h-full px-3 w-[32rem] outline-none border border-slate-400 border-r-0 text-sm rounded-l-full"
          type="text"
          name=""
          id=""
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="h-full px-3 border border-slate-400 rounded-r-full bg-slate-100">
          &#128269;
        </button>
      </div>
      <div className="h-full flex justify-center items-center">
        <img
          className="max-h-8"
          src="https://t4.ftcdn.net/jpg/04/83/90/95/360_F_483909569_OI4LKNeFgHwvvVju60fejLd9gj43dIcd.jpg"
          alt="profile_icon"
        />
      </div>
    </div>
  );
};

export default Head;
