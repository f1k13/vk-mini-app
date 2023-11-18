import React from "react";
import { Allergies } from "../../../entities/allergies/model/allergies";

const SymptomsItem = ({ item }: { item: Allergies }) => {
  return (
    <div>
      <h1 className="text-16px text-textMainColor">{item.title}</h1>
      <p className="text-12px text-textMainColor">{item.symptoms}</p>
    </div>
  );
};

export default SymptomsItem;
