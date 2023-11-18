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
      className="bg-blockSecondaryColor flex justify-between w-full items-center px-[27px] cursor-pointer py-2 rounded-3xl shadow-outline transition-colors duration-200 hover:bg-hoverButton"
    >
      <p className="text-textMainColor text-20px">{item.title}</p>
      <span
        className="w-[10px] h-[10px] rounded-full"
        style={{ backgroundColor: item.color }}
      ></span>
    </div>
  );
};

export default AllergiesItemUser;
