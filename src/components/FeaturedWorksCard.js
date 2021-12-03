import React from "react";
import digifigs from "../assets/images/digifigs.png";

function FeaturedWorksCard() {
  return (
    <div className={`mx-1.125rem border-b border-light-transparent pb-4`}>
      <div className={`h-[14.375rem] w-[]`}>
        <img
          src={digifigs}
          alt="I built this website while working and digifigs"
          className={`w-full h-full rounded-md object-contain`}
        />
      </div>
      <h2 className={`text-dark leading-[1.875rem] text-[1.5rem] font-bold mt-[1rem]`}>Designing Dashboards</h2>
      <div className={`flex space-x-[1.375rem] mt-[1rem]`}>
        <div className={`w-[3.875rem] h-[1.5rem] text-white bg-dark font-extrabold text-[1rem]  rounded-r-[12px] rounded-l-[12px] flex justify-center`}>2020</div> <p className={`text-[1rem] leading-[1.5rem] text-light`}>Dashboard</p>
      </div>
      <p className={`mt-[1.5rem] text-dark text-[1rem] leading-[1.5rem]`}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </p>
    </div>
  );
}

export default FeaturedWorksCard;
