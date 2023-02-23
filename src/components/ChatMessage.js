import { useSelector } from "react-redux";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const ChatMessage = ({ name, message }) => {
  const themeChange = useSelector((store) => store.toggle.isDark);

  return (
    <div className={`flex items-center shadow-sm p-2 ${themeChange ? "bg-black" : "bg-gray-200" }`}>
      <AccountCircleIcon className={`${themeChange && "text-white"} !text-2xl`}/>
      <span className={`font-bold px-2 ${themeChange && "text-white"}`}>{name}</span>
      <span className={`${themeChange && "text-white"}`}>{message}</span>
    </div>
  );
};
export default ChatMessage;