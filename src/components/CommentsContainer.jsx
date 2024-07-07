import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";

const commentsList = [
  {
    name: "Tushar Patne",
    text: "My test comment. :)",
    replies: [
      {
        name: "Tushar Patne",
        text: "My test comment. :)",
        replies: [
          {
            name: "Tushar Patne",
            text: "My test comment. :)",
            replies: [
              {
                name: "Tushar Patne",
                text: "My test comment. :)",
                replies: [],
              },
              {
                name: "Tushar Patne",
                text: "My test comment. :)",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "Tushar Patne",
        text: "My test comment. :)",
        replies: [
          {
            name: "Tushar Patne",
            text: "My test comment. :)",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Tushar Patne",
    text: "My test comment. :)",
    replies: [
      {
        name: "Tushar Patne",
        text: "My test comment. :)",
        replies: [],
      },
      {
        name: "Tushar Patne",
        text: "My test comment. :)",
        replies: [],
      },
    ],
  },
  {
    name: "Tushar Patne",
    text: "My test comment. :)",
    replies: [],
  },
];

const Comment = ({ data, mainComment }) => {
  const { name, text, replies } = data;
  const [showReplies, setShowReplies] = useState(false);
  return (
    <div className="flex gap-2 align-center text-sm my-3">
      <img
        className={mainComment ? "w-10 h-full" : "w-5 h-full"}
        src="https://t4.ftcdn.net/jpg/04/83/90/95/360_F_483909569_OI4LKNeFgHwvvVju60fejLd9gj43dIcd.jpg"
        alt=""
      />
      <div>
        <p className="font-semibold">{name}</p>
        <p>{text}</p>
        {replies.length > 0 && (
          <button
            className="font-semibold hover:bg-sky-200 py-1 px-2 rounded-full text-sky-800"
            onClick={() => setShowReplies((prev) => !prev)}
          >
            Replies
          </button>
        )}
        {showReplies && (
          <div className="pl-8 border-l-2 border-l-slate-300">
            <CommentsList mainComment={false} comments={replies} />
          </div>
        )}
      </div>
    </div>
  );
};

const CommentsList = ({ comments, mainComment }) => {
  return comments.map((comment) => (
    <Comment key={nanoid()} mainComment={mainComment} data={comment} />
  ));
};

const CommentsContainer = () => {
  return (
    <div className="">
      <p className="font-bold text-lg py-4">Comments ✍:</p>
      <CommentsList mainComment={true} comments={commentsList} />
    </div>
  );
};

export default CommentsContainer;
