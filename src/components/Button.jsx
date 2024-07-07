import React from "react";

const Button = ({ name }) => {
  return (
    <div className="py-1 px-3 bg-slate-100 rounded-md cursor-pointer font-semibold hover:bg-slate-200 flex-shrink-0 active:bg-black active:text-white">
      {name}
    </div>
  );
};

export default Button;
