import React from 'react'
import ButtonList from './ButtonList'
import VideoList from './VideoList'
import { useSelector } from "react-redux";

const MainContainer = () => {
  const themeChange = useSelector((store) => store.toggle.isDark);

  return (
    <div className={`w-full overflow-y-scroll ${themeChange && "bg-black"}`}>
        <ButtonList />
        <VideoList />
    </div>
  )
}

export default MainContainer