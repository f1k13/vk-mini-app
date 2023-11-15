import React, { useEffect } from "react";
import { userFx } from "../entities/user/lib/userFx";

const HelloPage = () => {
  useEffect(() => {
    userFx();
  }, []);
  return (
    <div className="bg-cover bg-center h-screen w-screen flex pt-[34px] items-center flex-col bg-bgHello">
      <h2 className="text-textMainColor text-32px">Ag-Allergies</h2>
      <p className="text-textMainColor mt-[51px] text-40px">Привет</p>
    </div>
  );
};

export default HelloPage;
