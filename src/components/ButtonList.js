import Button from './Button';
import React from 'react';
import { SHORTCUT_BUTTON as shortcuts } from '../utils/data';
import { useSelector } from "react-redux";

const ButtonList = () => {
  const themeChange = useSelector((store) => store.toggle.isDark);

  return (
    <div className={`flex sticky top-0 px-5 ${themeChange ? "bg-black" : "bg-white" }`}>
        {
            shortcuts.map((elem, index) => (
                <Button elem={elem} key={index}/>
            ))
        }
    </div>
  )
}

export default ButtonList