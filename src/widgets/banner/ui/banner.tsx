import ArrowButton from "../../../shared/icons/arrow-button";
import router from "../../../shared/router/router";

const Banner = ({ title, back }: { title?: string; back?: boolean }) => {
  return (
    <div className="bg-headerColor w-full rounded-br-[60px]  text-textMainColor p-[25px]">
      <div className="flex w-[100%] px-2 justify-between">
        {back && (
          <button
            className="cursor-pointer shadow-outline bg-secondaryColor px-5 rounded-3xl"
            onClick={() => router.navigate(-1)}
          >
            <ArrowButton />
          </button>
        )}
        <p className="text-40px">{title}</p>
      </div>
    </div>
  );
};

export default Banner;
