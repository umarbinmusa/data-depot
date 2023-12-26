import React from "react";
import { TiThMenu } from "react-icons/ti";
import { useGlobalContext } from "../context/UserContext";
const LandingNav = () => {
  const { toggleNav } = useGlobalContext();
  return (
    <header className="header ">
      <div className=" bg-black container flex justify-between  ">
       

        <div className=" title">SPPDataDepot</div>
        <div onClick={() => toggleNav()} className="hamburger ">
          <TiThMenu />
        </div>
        <div className="big__nav"></div>
      </div>
    </header>
  );
};

export default LandingNav;
