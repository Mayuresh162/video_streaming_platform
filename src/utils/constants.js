const GOOGLE_API_KEY = "AIzaSyC5Fe_rhSZ7TnGPTHycztTh-7AkOiEX4DM";

export const LIVE_CHAT_COUNT = 25;

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_COMMENTS_API = 'https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&key=' + GOOGLE_API_KEY;