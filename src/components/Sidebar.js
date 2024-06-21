import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SM_SIDEBAR_LINKS, LG_SIDEBAR_LINKS } from "../utils/menuItems";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early return pattern
  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-55 h-screen py-full">
      <div>
        <ul className="mt-5 p-2">
          {SM_SIDEBAR_LINKS.map((item, index) => (
            <Link
              className="md:px-1 md:py-4 lg:py-2 lg:px-3 lg:min-h-[40px] flex md:flex-col lg:flex-row items-center hover:bg-gray-200 rounded-xl"
              key={index}
            >
              <div className="w-6 h-6 ">
                <img src={item.icon} alt="icon" />
              </div>
              <div>
                <span className="text-base">{item.title}</span>
              </div>
            </Link>
          ))}
        </ul>
      </div>
      <div className="h-6 flex items-center">
        <span className="bg-gray-500 border-b w-full "></span>
      </div>
      <div>
        <ul className="mt-2 p-2">
          {LG_SIDEBAR_LINKS.map((item, index) => (
            <Link
              className="md:px-1 md:py-4 lg:py-2 lg:px-3 lg:min-h-[40px] flex md:flex-col lg:flex-row items-center hover:bg-gray-200 rounded-xl"
              key={index}
            >
              <div className="w-6 h-6 ">
                <img src={item.icon} alt="icon" />
              </div>
              <div>
                <span className="text-base">{item.title}</span>
              </div>
            </Link>
          ))}
        </ul>
      </div>
      <h1 className="font-bold">Watch Later</h1>
      <ul className="p-2">
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
