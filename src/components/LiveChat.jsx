import React, { useEffect, useState } from "react";
import ChatComment from "./ChatComment";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import store from "../utils/store";
import { nanoid } from "@reduxjs/toolkit";
import { generateRandomUserName, generateString } from "../utils/helper";
import { Form } from "react-router-dom";

const LiveChat = () => {
  const [showLiveChat, setShowLiveChat] = useState(true);
  const [myChatMsg, setMyChatMsg] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    let count = 1;
    const i = setInterval(() => {
      // API POLLING
      // console.log('inside setinterval');

      dispatch(
        addMessage({
          name: generateRandomUserName(),
          message: generateString(20),
          // name: 'Tushar' + ++count,
          // message: 'Dummy msg'
        }),
      );

      return () => {
        clearInterval(i);
      };
    }, 2000);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addMessage({
        name: "Tushar Patne",
        message: myChatMsg,
      }),
    );
    setMyChatMsg("");
  };

  return (
    <div className="border border-slate-400 m-4 rounded-lg">
      <div className="flex justify-between items-center h-[45px] px-4 py-2 border-b border-b-slate-400">
        <span>Live Chat</span>
        <span
          className="cursor-pointer hover:bg-gray-200 active:bg-gray-300 p-2 rounded-full transition-all"
          onClick={() => setShowLiveChat((prev) => !prev)}
        >
          ❌
        </span>
      </div>
      {showLiveChat && (
        <>
          <div className="h-[460px] overflow-y-auto flex flex-col-reverse">
            {chatMessages.map((c) => (
              <ChatComment key={nanoid()} name={c.name} message={c.message} />
            ))}
          </div>
          <Form
            className="h-[45px] bg-slate-500 rounded-b-lg flex border-y border-y-slate-400"
            onSubmit={handleSubmit}
          >
            <input
              value={myChatMsg}
              onChange={(e) => setMyChatMsg(e.target.value)}
              className="min-h-full px-2 flex-1 outline-none bg-slate-100 rounded-bl-lg focus:shadow-sm focus:shadow-sky-800"
              type="text"
              placeholder="type..."
            />
            <button className="max-h-full text-2xl px-4 bg-sky-300 hover:bg-sky-400 hover:shadow-sm hover:shadow-sky-800 rounded-br-lg transition-all">
              🕊
            </button>
          </Form>
        </>
      )}
    </div>
  );
};

export default LiveChat;
