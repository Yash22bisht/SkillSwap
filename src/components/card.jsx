import React from "react";

const Card = (props) => {
  return (
    <div className="card my-8 mx-12 w-[20vw] flex flex-col  items-center gap-4">
      <img src={props.src} className="rounded-xl" alt="" />
      <div className="desc space-y-2">
        <h1 className="text-3xl font-bold text-center text-blue-900">
          {props.title}
        </h1>
        <p className="text-lg text-center  px-2 text-blue-950">
          {props.desc}
        </p>
      </div>
    </div>
  );
};

export default Card;
