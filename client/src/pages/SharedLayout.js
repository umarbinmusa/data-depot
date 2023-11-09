import React, { useState } from "react";
import SideMenu from "../components/SideMenu";
import ProfileHeader from "../components/ProfileHeader";
import { Outlet } from "react-router-dom";

function Profile() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  return (
    <div className="bg-[hsl(0,_19%,_89%)] min-h-[calc(100vh_-_50px)] m-auto">
      <ProfileHeader isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className="min-h-full flex self-stretch">
        <SideMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <div className="mt-[4rem] md:ml-[0rem] p-4 w-full min-h-full mx-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Profile;
