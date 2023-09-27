import React from "react";

const Insight = ({ insights }) => {
  return (
    <div className="w-full bg-accent text-light whitespace-nowrap overflow-hidden">
      <div className="animate-roll w-full py-3 flex items-center justify-center capitalize font-semibold tracking-wider text-base">
        {insights.map((text, ind) => (
          <div key={ind}>
            {text} <span className="px-4">|</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Insight;
