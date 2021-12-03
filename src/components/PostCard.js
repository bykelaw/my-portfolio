import React from "react";

function PostCard() {
  return (
    <div
      className={`max-w-[90%] mx-auto p-[12px] bg-white rounded-[4px] mb-[1.125rem]`}
    >
      <h2
        className={`font-bold text-[1.375rem] text-dark leading-[30px] mb-[0.75rem]`}
      >
        Making a design system from scratch
      </h2>
      <div className={`leading-[23px] text-[1rem]`}>
        <span>12 Feb 2020</span> <span>|</span> <span>Design, Pattern</span>
      </div>
      <p className={`text-[1rem] text-dark leading-[23px] mt-[1.25rem]`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias fugit
        officia eveniet odit facilis. Voluptas laudantium ea doloribus totam
        voluptates cumque, soluta ab! Quae repellat voluptatem eligendi
        corrupti, tenetur quas?
      </p>
    </div>
  );
}

export default PostCard;
