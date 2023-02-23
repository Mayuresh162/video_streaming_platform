import React, { useRef, useCallback, useState } from "react";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";
import useVideo from "../utils/useVideo";
import { useSelector } from "react-redux";

const VideoList = () => {
  const [count, setCount] = useState(null);
  const [token, setPageToken] = useState(null);

  const { videos, hasMore, videoCount } = useVideo(count, token);

  const pageToken = useSelector(store => store.token.pageToken);

  const observer = useRef()
  const lastVideoElementRef = useCallback(node => {
    // console.log(node);
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        console.log('isVisible');
        setCount(videoCount);
        setPageToken(pageToken)
      }
    })
    if (node) observer.current.observe(node)
  }, [hasMore, videoCount, pageToken])


  return (
    <div className="flex flex-wrap px-9">
      {videos[0] && <AdVideoCard info={videos[0]} />}
      {videos.map((video, index) => {
          if (videos.length === index + 1) {
            return (<Link key={video.id} to={"/watch?v=" + video.id}>
              <VideoCard lastVideoElementRef={lastVideoElementRef} info={video} />
            </Link>)
          } else {
            return (<Link key={video.id} to={"/watch?v=" + video.id}>
              <VideoCard info={video} />
            </Link>)
          }
      })}
    </div>
  );
};

export default VideoList;
