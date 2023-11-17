import { Allergies } from "../../../entities/allergies/model/allergies";

const AllergiesItemUser = ({
  item,
  onClick,
}: {
  item: Allergies;
  onClick: (item: Allergies) => void;
}) => {
  return (
    <div
      onClick={() => onClick(item)}
      className="bg-blockSecondaryColor pl-[27px] cursor-pointer py-2 w-full rounded-3xl shadow-outline transition-colors duration-200 hover:bg-hoverButton"
    >
      <p className="text-textMainColor text-20px">{item.title}</p>
    </div>
  );
};

export default AllergiesItemUser;
