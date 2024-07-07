import React from "react";

const ChatComment = ({ name, message }) => {
  return (
    <div className="flex items-center text-sm px-2 hover:bg-gray-100">
      <img
        className="w-6 rounded-full m-2"
        src="https://yt4.ggpht.com/ytc/AIdro_kSgzsn-PaGdvyWXb6AMhFa1gscZpG84RXiatevNLqmSu1hqWQ=s64-c-k-c0x00ffffff-no-rj"
        alt=""
      />
      <span className="font-semibold pr-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatComment;
