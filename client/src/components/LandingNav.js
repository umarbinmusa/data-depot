import React from "react";
import { TiThMenu } from "react-icons/ti";
import { useGlobalContext } from "../context/UserContext";
const LandingNav = () => {
  const { toggleNav } = useGlobalContext();
  return (
    <div className="bg-[var(--primary-500)] text-white fixed left-0 right-0 top-0 px-2 pt-2 flex justify-between z-50">
      <h3>SPP Data Depot</h3>
      <TiThMenu onClick={toggleNav} size={29} />
    </div>
  );
};

export default LandingNav;
