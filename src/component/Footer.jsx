import React from "react";
import { Link } from "react-router-dom";



function Footer() {
  return (
    <div class="grid grid-cols-4 gap-30 mt-14 ml-5 space-x-5 bg-white rounded-full lg:space-x-10 lg:ml-20">
      <div>
        <Link to="/">
          <img src="./images/settings.png" class="w-12 " alt="" />

        </Link>
      </div>
      <div>
        <Link to="Airtime">
          <img src="./images/list.png" class="w-12" alt="" />

        </Link>
      </div>
      <div>
        <Link to="/Data">
          <img src="./images/wifi.png" class="w-12" alt="" />

        </Link>
      </div>
      <div>
        <Link to="Contact">
          <img src="./images/profile-user.png" class="w-12" alt="" />

        </Link>
      </div>

    </div>

  );
}

export default Footer;