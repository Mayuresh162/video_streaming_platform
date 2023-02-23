import React from "react";
import { useSelector } from "react-redux";

const VideoCard = ({ info, lastVideoElementRef }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const themeChange = useSelector((store) => store.toggle.isDark);

  return (
    <div className="p-2 m-2 w-72 shadow-lg h-[340px]" ref={lastVideoElementRef}>
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className={`font-bold py-2 ${themeChange && "text-white" }`}>{title}</li>
        <li className={`${themeChange && "text-white"}`}>{channelTitle}</li>
        <li className={`${themeChange && "text-white"}`} >{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className="border border-red-900 ">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
