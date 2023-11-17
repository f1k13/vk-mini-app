import React from "react";
import { Allergies } from "../../../entities/allergies/model/allergies";

const ReactionsItem = ({ item }: { item: Allergies }) => {
  return (
    <div>
      <h1 className="text-24px text-textMainColor">{item.title}</h1>
      <p className="text-16px text-textMainColor">{item.crossReactions}</p>
    </div>
  );
};

export default ReactionsItem;
