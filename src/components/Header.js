import { toggleMenu, toggleTheme } from "../utils/toggleSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from '@mui/icons-material/LightMode';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const themeChange = useSelector((store) => store.toggle.isDark);
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

  const toggleThemeHandler = () => {
    dispatch(toggleTheme());
  }

  return (
    <div className={`grid grid-flow-col p-2 shadow-lg relative ${themeChange ? "bg-black" : "bg-white"}`}>
      <div className="flex col-span-1 items-center">
        <span className="h-8 cursor-pointer" onClick={() => toggleMenuHandler()}>
          <MenuIcon className={`!text-4xl ${themeChange && "text-white"}`}/>
        </span>
        <a href="/">
          <span className="flex items-center">
            <YouTubeIcon className="text-red-500 !text-4xl"/>
            <span className={`h-6 pl-1 text-2xl font-gothic ${themeChange && "text-white"} leading-none`}>YouTube</span>
          </span>
        </a>
      </div>
      <div className="col-span-10 flex items-center justify-center h-10 my-2">
        <input
          className={`px-5 w-1/2 border border-gray-400 pb-[2px] rounded-l-full h-full ${themeChange && "bg-black text-white border-white"}`}
          value={searchQuery}
          placeholder="Search"
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />
        <button className={`border border-gray-400 rounded-r-full hover:bg-gray-400 h-full ${themeChange && "border-white"}`}>
          <span className="h-8 py-2 px-5">
            <SearchIcon className={`${themeChange && "text-white"}`} />
          </span>
        </button>
      </div>
      {showSuggestions && searchQuery && (
        <div className="absolute top-[60px] h-[500px] z-[2] left-[32%] flex justify-start items-center bg-white py-2 px-2 w-[38%] shadow-lg rounded-lg border border-gray-100">
          <ul className="w-full">
            {suggestions.map((s) => (
              <li
                key={s}
                className="py-2 px-3 shadow-sm hover:bg-gray-100 flex"
              >
                <img
                  src="https://pic.onlinewebfonts.com/svg/img_151815.png"
                  alt="search-btn"
                  className={`h-8 py-2 px-5 ${themeChange && "text-white"}`}
                />{" "}
                {s}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="flex col-span-1 items-center justify-end pr-3">
        <span className="mx-2" onClick={() => toggleThemeHandler()}>
          { themeChange ? <LightModeIcon className={`${themeChange && "text-white"}`} /> : <DarkModeIcon /> }
        </span>
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
