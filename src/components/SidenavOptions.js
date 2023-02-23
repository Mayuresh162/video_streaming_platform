import React from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const SidenavOptions = ({elem}) => {
    const navigate = useNavigate();
    const themeChange = useSelector((store) => store.toggle.isDark);

    const navigateHomeHandler = (name) => {
        if (name === 'Home') {
            navigate('/');
        }
    }

    return (
        <div className={`flex flex-row p-2 cursor-pointer ${themeChange && "text-white"}`}>
            {elem.icon}
            <span className="pl-2" onClick={() => navigateHomeHandler(elem.name)}>{elem.name}</span>
        </div>
    )
}

export default SidenavOptions