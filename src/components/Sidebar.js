import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early return pattern
  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-48">
      <ul className="mt-5 p-2">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Shorts</li>
        <li>Live</li>
        <li>Video</li>
      </ul>
      <h1 className="font-bold">Subscriptions</h1>
      <ul className="p-2">
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
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
