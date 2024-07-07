import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import store from '../utils/store'

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) {
    return null;
  }

  return (
    <div className="px-4 col-span-2 overflow-y-auto no-scrollbar h-screen sticky left-0 top-0 max-h-fit">
      <li className="list-none">
        <Link to={"/"}>
          <ul className="hover:bg-slate-100 px-2 py-2 text-md rounded-lg">
            Home
          </ul>
        </Link>
        <ul className="hover:bg-slate-100 px-2 py-2 text-md rounded-lg">
          Shorts
        </ul>
        <ul className="hover:bg-slate-100 px-2 py-2 text-md rounded-lg">
          Subscriptions
        </ul>
      </li>
      <hr className="my-2" />
      <li className="list-none">
        <h4 className="font-bold text-md py-2">Explore</h4>
        <ul className="hover:bg-slate-100 px-2 py-2 text-md rounded-lg">
          Trending
        </ul>
        <ul className="hover:bg-slate-100 px-2 py-2 text-md rounded-lg">
          Shopping
        </ul>
        <ul className="hover:bg-slate-100 px-2 py-2 text-md rounded-lg">
          Music
        </ul>
        <ul className="hover:bg-slate-100 px-2 py-2 text-md rounded-lg">
          Movies
        </ul>
        <ul className="hover:bg-slate-100 px-2 py-2 text-md rounded-lg">
          Live
        </ul>
        <ul className="hover:bg-slate-100 px-2 py-2 text-md rounded-lg">
          Gaming
        </ul>
        <ul className="hover:bg-slate-100 px-2 py-2 text-md rounded-lg">
          News
        </ul>
        <ul className="hover:bg-slate-100 px-2 py-2 text-md rounded-lg">
          Sports
        </ul>
        <ul className="hover:bg-slate-100 px-2 py-2 text-md rounded-lg">
          Courses
        </ul>
        <ul className="hover:bg-slate-100 px-2 py-2 text-md rounded-lg">
          Fashion
        </ul>
        <ul className="hover:bg-slate-100 px-2 py-2 text-md rounded-lg">
          Podcast
        </ul>
        <ul className="hover:bg-slate-100 px-2 py-2 text-md rounded-lg">
          Podcast
        </ul>
      </li>
      <hr className="my-2" />
      <li className="list-none">
        <h4 className="font-bold text-md py-2">More from YouTube</h4>
        <ul className="hover:bg-slate-100 px-2 py-2 text-md rounded-lg">
          YouTube Premium
        </ul>
        <ul className="hover:bg-slate-100 px-2 py-2 text-md rounded-lg">
          YouTube Music
        </ul>
        <ul className="hover:bg-slate-100 px-2 py-2 text-md rounded-lg">
          YouTube Kids
        </ul>
      </li>
    </div>
  );
};

export default Sidebar;
