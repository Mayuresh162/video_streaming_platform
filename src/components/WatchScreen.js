import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/toggleSlice";
import Comments from "./Comments";
import LiveChat from "./LiveChat";

const WatchScreen = () => {
  const [searchParams] = useSearchParams();
  const themeChange = useSelector((store) => store.toggle.isDark);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);
  return (
    <div className={`flex flex-col w-full ${themeChange && "bg-black" }`}>
      <div className="px-5 flex w-full">
        <div className="">
          <iframe
            width="1400"
            height="600"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="mx-3">
          <LiveChat />
        </div>
      </div>
      <Comments videoId={searchParams.get("v")} />
    </div>
  );
}

export default WatchScreen