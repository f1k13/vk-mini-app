
const NavBar = ({ title, back }: { title?: string; back?: boolean }) => {
  
  return (
    <div className="bg-headerColor w-full rounded-br-[60px]  text-textMainColor p-[25px]">
      {back && <button></button>}
      <p className="text-40px">{title}</p>
    </div>
  );
};

export default NavBar;
