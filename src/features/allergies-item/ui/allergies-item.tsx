import React from "react";
import { allergenAdd } from "../../../entities/allergies/lib/allergies-events";
import clsx from "clsx";

type Allergies = {
  id: number;
  title: string;
  color: string;
  start: string;
  end: string;
  symptoms: string;
  crossReactions: string;
};

const AllergiesItem = ({
  item,
  active,
  setActive,
}: {
  item: Allergies;
  active: boolean;
  setActive: (id: number) => void;
}) => {
  return (
    <div
      onClick={() => setActive(item.id)}
      className={clsx(
        "bg-blockSecondaryColor cursor-pointer shadow-outline flex justify-between hover:bg-hoverButton pl-[21px] pr-[12px] items-center w-[153px] h-[39px] rounded-3xl transition-colors duration-200 ",
        active && "bg-selectedColor",
      )}
    >
      <p className="text-textMainColor text-16px">{item.title}</p>
      <span
        className="w-[16px] h-[16px] rounded-full"
        style={{ backgroundColor: item.color }}
      ></span>
    </div>
  );
};

export default AllergiesItem;
