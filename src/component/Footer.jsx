import React from "react";
import { Link } from "react-router-dom";



function Footer () {
    return(
        <div class="grid grid-cols-4 gap-30   mt-2    ">
        <div>
          <Link to="/">
          <img src="./images/logo1.png" class="w-12" alt="" />
          
          </Link>
        </div>
        <div>
          <Link to="Airtime">
        <img src="./images/tup-up.png" class="w-12" alt="" />
        
        </Link>
        </div>
        <div>
          <Link to="/Data">
        <img src="./images/wifi.png" class="w-12" alt="" />
        
        </Link>
        </div>
        <div>
          <Link to="Contact">
        <img src="./images/logo1.png" class="w-12" alt="" />
        
        </Link>
        </div>
        
       
           
          </div>
  


    );
}

export default Footer;