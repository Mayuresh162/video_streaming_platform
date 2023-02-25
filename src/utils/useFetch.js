import { useState, useEffect, useCallback } from 'react';
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { setToken } from "./tokenSlice";

function useFetch(token) {
  const [loading, setLoading] = useState(false);
  const [videos, setVideos] = useState([]);
  const dispatch = useDispatch();

  const getPhotos = useCallback(async () => {
    try {
      setLoading(true);
      let url = YOUTUBE_VIDEOS_API;
      if (token) {
        url = YOUTUBE_VIDEOS_API + `&pageToken=${token}`;
      }
      const data = await fetch(url);
      const json = await data.json();
      dispatch(setToken(json.nextPageToken));
      setVideos(prevVideos => [...prevVideos, ...json.items]);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  }, [token, dispatch]);

  useEffect(() => {
    getPhotos();
  }, [getPhotos]);

  return { loading, videos };
}

export default useFetch;