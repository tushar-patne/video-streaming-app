import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams, useParams, useLocation } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  const [searchParams, setSearchParams] = useSearchParams();
  // const searchParams = useSearchParams();
  const v = searchParams.get("v");
  // console.log(searchParams.get('v'));

  const params = useParams();
  const location = useLocation();

  return (
    <div className="grid grid-cols-12 grid-flow-col px-10">
      <div className="col-span-8">
        <div className="py-4">
          <iframe
            className="rounded-xl w-full"
            // width={'full'}
            height="488"
            src={
              "https://www.youtube.com/embed/" +
              v +
              "?si=mIR9TiToO18z58V2&autoplay=1"
            }
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <CommentsContainer />
      </div>
      <div className="col-span-4">
        <LiveChat />
      </div>
    </div>
  );
};

export default WatchPage;
