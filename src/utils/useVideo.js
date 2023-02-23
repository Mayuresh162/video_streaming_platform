import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import { setToken } from "./tokenSlice";

const useVideo = (count, token) => {
  const [videos, setVideos] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [videoCount, setVideoCount] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    getVideos()
  }, [count, token]);

  console.log(count, videoCount, hasMore, videos.length, token)

  const getVideos = async () => {
    let url = YOUTUBE_VIDEOS_API;
    if (token) {
      url = YOUTUBE_VIDEOS_API + `&pageToken=${token}`;
    }
    const data = await fetch(url);
    const json = await data.json();
    setVideos(prevVideos => [...prevVideos, ...json.items]);
    setVideoCount(prevCount => prevCount + 20);
    setHasMore(json.pageInfo.totalResults > 0);
    dispatch(setToken(json.nextPageToken));
  };
  
  return { videos, hasMore, videoCount };
};

export default useVideo;
