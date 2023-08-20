import React from "react";
import { Link } from "react-router-dom";




function Navbar () {
    return(
        <div class="flex  justify-between space-x-14 m-3   ">
           <div class="flex">
                <Link to="Admin">    <img class="h-20 w-20 " src="./images/logo1.png"  alt=""/></Link>
                </div>
            
          
                        <div class=" md:flex  space-x-7 ">
                                 <Link to ="/userprofile"> <img class="h-10" src="./images/profile-user.png"  alt=""/> </Link>
                              <Link to="/"> <img class="h-10" src="./images/list.png"  alt=""/>  </Link>
          
             </div>
        
             </div>

    );
}

export default Navbar;