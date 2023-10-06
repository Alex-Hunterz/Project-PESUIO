import React from "react";

const Card = ({ pic, title, ch_pic, ch_name, views, duration }) => {
  return (
    <div className="mb-3">
      <img src={pic} className="w-50 h-30 rounded-xl"></img>
      <div className="flex flex-row mt-2">
        <div>
          <img src={ch_pic} className="rounded-full w-10 h-10"></img>
        </div>
        <div className="ml-2">
          <h2 className="font-bold text-sm overflow-hidden text-ellipsis mb-2 ">
            {title}
          </h2>
          <p className="text-xs mt-1 ">{ch_name}</p>
          <span className="text-xs">{views}</span>
          <span> • </span>
          <span className="text-xs">{duration}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
