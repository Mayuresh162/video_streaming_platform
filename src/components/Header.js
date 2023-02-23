import { toggleMenu } from "../utils/toggleSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery && searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        if (searchQuery) {
          getSearchSuggestions();
        }
      }
    }, 200);
    
    const getSearchSuggestions = async () => {
      const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const json = await data.json();
      setSuggestions(json[1]);
  
      // update cache
      dispatch(
        cacheResults({
          [searchQuery]: json[1],
        })
      );
    };

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery, searchCache, dispatch]);


  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg relative">
      <div className="flex col-span-1 items-center">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAPFBMVEX///8AAAD5+fk1NTX19fXv7+86OjoLCwuHh4ff39+UlJRkZGSNjY3b29uBgYHl5eVXV1dsbGxLS0tERETbCDCwAAABDUlEQVR4nO3aSRKDIBCFYTpmwBGH+981sbLIAnRHP6vyfxd4HSGgDSEAAAAAuJhbdWfpaVhf1a1DOsqP5iSW83uvfLNe+vt3hWfQeuabtVkBg28BQ1ZA41tAkxXgm292vQLkQyCfhKNvAWO+EEye+VOeH8Lil7+U8sOt88rvjvbkFLemum0qjP/PvbqzdAAA8HkpeVR31iBIcX5WN8fD/oDfK1n56c9e+WZzaRz+vj/gNgG+8mkg/zj1zac/UBgC+SSU/w3lC5F+KZZvRkG/HQf5CwkAAAjqdv04SQ8s5Ec26kMr9bGd/OBSfnQr/zj1zac/oL8/QH8gz9df5dJfZtNf59tpLzQCAAAAUHgDGPQrV8nRqDEAAAAASUVORK5CYII="
          alt="sidenav-btn"
          className="h-8 cursor-pointer"
          onClick={() => toggleMenuHandler()}
        />
        <a href="/">
          <img
            src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
            alt="logo"
            className="h-14"
          />
        </a>
      </div>
      <div className="col-span-10 flex items-center justify-center h-10 my-2">
        <input
          className="px-5 w-1/2 border border-gray-400 pb-[2px] rounded-l-full h-full"
          value={searchQuery}
          placeholder='Search'
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />
        <button className="border border-gray-400 rounded-r-full hover:bg-gray-400 h-full">
          <img
            src="https://pic.onlinewebfonts.com/svg/img_151815.png"
            alt="search-btn"
            className="h-8 py-2 px-5"
          />
        </button>
      </div>
      {showSuggestions && searchQuery && (
        <div className="absolute top-[60px] h-[500px] z-[2] left-[32%] flex justify-start items-center bg-white py-2 px-2 w-[38%] shadow-lg rounded-lg border border-gray-100">
          <ul className="w-full">
            {suggestions.map((s) => (
              <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100 flex">
                <img
                  src="https://pic.onlinewebfonts.com/svg/img_151815.png"
                  alt="search-btn"
                  className="h-8 py-2 px-5"
                /> {s}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="flex col-span-1 items-center justify-end pr-3">
        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="user"
          className="h-8"
        />
      </div>
    </div>
  );
};

export default Header;
