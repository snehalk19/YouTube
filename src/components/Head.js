import React, { useEffect, useState } from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import Logo from "../assets/Icons/youtube-logo.svg";
import Profile from "../assets/Icons/profile-icon.png";
import HamburgerMenu from "../assets/Icons/hamburger-menu.svg";
import Notification from "../assets/Icons/notifications.svg";
import Upload from "../assets/Icons/upload.svg";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const handleClick = (search_string) => {
    setSearchQuery(search_string);

    setShowSuggestions(false);
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg w-full">
      <div className="flex col-span-1 ">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src={HamburgerMenu}
        />
        <a href="/" />
        <img className="h-8 mx-2" alt="youtube-logo" src={Logo} />
      </div>

      <div className="col-span-10 px-10">
        <div>
          <input
            className=" px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setSuggestions([])}
          />
          <button className="border border-gray-400 p-2 rounded-r-full py-2 px-5 bg-gray-100 ">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute bg-white py-2 px-2 w-[30rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((search_query) => (
                <li
                  key={search_query}
                  className=" py-2 px-3 shadow-sm hover:bg-gray-100"
                  onClick={() => handleClick(search_query)}
                >
                  🔍 {search_query}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1  flex  gap-10">
        <button className=" w-8 h-8">
          <img className="h-full w-full  " alt="upload" src={Upload} />
        </button>
        <button className=" w-8 h-8">
          <img
            className="h-full w-full  "
            alt="notification"
            src={Notification}
          />
        </button>
        <button className=" w-8 h-8">
          <img className="h-full w-full" alt="user" src={Profile} />
        </button>
      </div>
    </div>
  );
};

export default Head;
