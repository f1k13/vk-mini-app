import React from "react";

type Allergies = {
  id: number;
  title: string;
  color: string;
  start: string;
  end: string;
  symptoms: string;
  crossReactions: string;
};

const AllergiesItem = ({ item, index }: { item: Allergies; index: number }) => {
  return (
    <div className="bg-blockSecondaryColor shadow-outline flex justify-between pl-[21px] pr-[12px] items-center w-[153px] h-[39px] rounded-3xl">
      <p className="text-textMainColor text-16px">{item.title}</p>
      <span
        className="w-[16px] h-[16px] rounded-full"
        style={{ backgroundColor: item.color }}
      ></span>
    </div>
  );
};

export default AllergiesItem;
