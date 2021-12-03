import React from "react";
import FeaturedWorksCard from "./FeaturedWorksCard";

function FeaturedWorks() {
  return (
    <div className={`bg-white px-[1.125rem]`}>
      <h2 className={`leading-[3.75rem] text-[1.125rem] text-dark text-center`}>
        Featured Works
      </h2>
      <FeaturedWorksCard />
    </div>
  );
}

export default FeaturedWorks;
