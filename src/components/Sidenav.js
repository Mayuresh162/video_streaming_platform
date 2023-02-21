import React from "react";
import { useSelector } from "react-redux";
import SidenavOptions from "./SidenavOptions";
import {
  HOME_SIDEBAR_OPTIONS as homeIcons,
  EXTRA_SIDEBAR_OPTIONS as extraIcons,
  EXPLORE_SIDEBAR_OPTIONS as exploreIcons,
  SETTINGS_SIDEBAR_OPTIONS as settingIcons,
} from "../utils/data";

const Sidenav = () => {
  const isMenuOpen = useSelector((store) => store.toggle.isOpen);

  return (
    isMenuOpen && (
      <div className="ml-2 p-5 shadow-lg w-72 flex flex-col overflow-y-scroll">
        <div className="border-b border-b-gray-400 pb-2 flex flex-col">
          {homeIcons.map((elem, index) => (
            <SidenavOptions elem={elem} key={index}/>
          ))}
        </div>
        <div className="border-b border-b-gray-400 pb-2 flex flex-col">
          {extraIcons.map((elem, index) => (
            <SidenavOptions elem={elem} key={index} />
          ))}
        </div>
        <span>Explore</span>
        <div className="border-b border-b-gray-400 pb-2 flex flex-col">
          {exploreIcons.map((elem, index) => (
            <SidenavOptions elem={elem} key={index} />
          ))}
        </div>
        <div className="border-b border-b-gray-400 pb-2 flex flex-col">
          {settingIcons.map((elem, index) => (
            <SidenavOptions elem={elem} key={index} />
          ))}
        </div>
      </div>
    )
  );
};

export default Sidenav;
