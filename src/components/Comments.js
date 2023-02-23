import React from 'react'
import { commentsData } from '../utils/data';
import { useSelector } from "react-redux";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Comment = ({ data, themeChange }) => {
  const { name, text } = data;
  return (
    <div className={`flex shadow-sm p-2 rounded-lg my-2 ${themeChange ? "bg-black" : "bg-gray-100" }`}>
      <AccountCircleIcon className={`${themeChange && "text-white"} !text-5xl`}/>
      <div className="px-3">
        <p className={`${themeChange && "text-white"} font-bold`}>{name}</p>
        <p className={`${themeChange && "text-white"}`}>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments, themeChange }) => {
  // Disclaimer: Don't use indexes as keys
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} themeChange={themeChange}/>
      <div className={`pl-5 border ${themeChange ? "bg-black" : "border-l-black"}`}>
        <CommentsList comments={comment.replies} themeChange={themeChange} />
      </div>
    </div>
  ));
};

const Comments = ({ videoId }) => {
  // const [comments, setComments] = useState([])
  const themeChange = useSelector((store) => store.toggle.isDark);
  // useEffect(() => {
  //   getComments();
  // }, [])

  // const getComments = async () => {
  //   const data = await fetch(YOUTUBE_COMMENTS_API + `&videoId=${videoId}`);
  //   const json = await data.json();
  //   console.log(json);
  //   // setVideos(json.items);
  // } 

  return (
    <div className={`p-5 ${themeChange && "bg-black"}`}>
      <h1 className={`text-2xl font-bold ${themeChange && "text-white"}`}>Comments: </h1>
      <CommentsList comments={commentsData} themeChange={themeChange} />
    </div>
  );
};
export default Comments