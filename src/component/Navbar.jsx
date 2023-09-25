import React from "react";
import { Link } from "react-router-dom";

function Navbar () {
    return(
        <div class="flex  justify-between space-x-14 m-3   ">
           <div class="flex bg-transperent">
                <Link to="/Home">    <img class="h-20 w-90 bg-transperent " src="./images/bg.png"  alt=""/></Link>
                </div>
                        <div class=" md:flex  space-x-7 ">
                                 <Link to ="/userprofile"> <img class="h-20" src="./images/profile-user.png"  alt=""/> </Link>
                              <Link to="../home"> <img class="h-20" src= "./images/list.png"  alt=""/>  </Link>
             </div>
        
             </div>
    );
}

export default Navbar;