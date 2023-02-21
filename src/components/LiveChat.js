import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // API Polling

      dispatch(
        addMessage({
          id: Date.now(),
          name: generateRandomName(),
          message: makeRandomMessage(20) + " 🚀",
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <div className='border border-gray-500 h-[600px] rounded-2xl'>
      <div className='h-[10%] flex items-center pl-3'>
        <span>Top Chat</span>
      </div>
      <div className="w-full p-2 overflow-y-scroll flex flex-col-reverse h-[80%]">
        <div>
          {
            // Disclaimer: Don't use indexes as keys
            chatMessages.map((c) => (
              <ChatMessage key={c.id} name={c.name} message={c.message} />
            ))
          }
        </div>
      </div>
      <form
        className="w-full p-1 shadow-lg flex h-[60px] rounded-2xl"
        onSubmit={(e) => {
          e.preventDefault();

          dispatch(
            addMessage({
              id: Date.now(),
              name: "Mayuresh Bhagat",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="px-2 w-96 outline-none border-b border-gray mb-2"
          type="text"
          placeholder="Say something..."
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
    </div>
  )
}

export default LiveChat