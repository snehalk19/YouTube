import React, { useEffect, useState } from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { useNavigate } from "react-router-dom";

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
          src="https://png.pngtree.com/png-vector/20220623/ourmid/pngtree-hamburger-menu-button-list-content-png-image_5288864.png"
        />
        <a href="/" />
        <img
          className="h-8 mx-2"
          alt="youtube-logo"
          src="data:image/png;base64,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"
        />
      </div>

      <div className="col-span-10 px-10">
        <div>
          <input
            className=" px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
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

      <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src="data:image/png;base64,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"
        />
      </div>
    </div>
  );
};

export default Head;
