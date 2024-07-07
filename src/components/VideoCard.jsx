import React from "react";

const VideoCard = ({ info }) => {
  // console.log(info)
  const { snippet, statistics } = info;

  const getFormattedViews = (viewCount) => {
    if (Number.parseInt(viewCount / 1000000) !== 0) {
      return `${(viewCount / 1000000).toFixed(1)}M`;
    } else if (Number.parseInt(viewCount / 1000) !== 0) {
      return `${Number.parseInt(viewCount / 1000).toFixed(0)}K`;
    } else {
      return viewCount;
    }
  };

  return (
    <div className="flex flex-col w-80 md:w-[17rem] text-sm">
      <img
        src={snippet.thumbnails.medium.url}
        alt="thumbnail"
        className="rounded-xl hover:rounded-none hover:scale-[1.02] transition-all"
      />
      <span className="font-semibold">{snippet.title}</span>
      <span className="text-xs text-gray-600">{snippet.channelTitle}</span>
      <span className="text-xs text-gray-600">
        {getFormattedViews(statistics.viewCount)} views •
      </span>
    </div>
  );
};

export default VideoCard;
