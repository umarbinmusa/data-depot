import { Link } from "react-router-dom";

function settings(){
    return(
        <div class="min-h-screen" style={{ background: 'linear-gradient(to bottom,#F0F4FD,#A1A3BA)', }}>
           
        <div class=" flex-col flex items-center justify-items-center  bg-transparent p-8">
        <div>
                     <Link to="home/"> <img src="images/bg.png" class=" mt-0 h-60" alt="" /> </Link>
                    </div>
                    

            <form class="space-y-4 bg-white p-5">
                <div class="mb-6">
                    <label for="current-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current Password</label>
                    <input type="password" id="password" class="w-96 hadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="" required />
                </div>
                <div class="mb-6">
                    <label for="New password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
                    <input type="New password" id="Password" class="w-96 hadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                </div>
                <div class="mb-6">
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confrim Password</label>
                    <input type="password" id="Password" class="w-96 hadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                </div>
                
                <div class="flex flex-row  space-x-16 mb-6">
                    <div><button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button></div>
                    <div> <Link to="Home"><img src="images/home-icon-silhouette.png" class="w-10  " alt="" /></Link></div>
        
                    </div>
                
            </form>
        </div>
      
    </div>

    );

}
export default settings;