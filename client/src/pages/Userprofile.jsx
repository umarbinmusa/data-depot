import { Link } from "react-router-dom";
function userprofile() {
    return (

        <div class="min-h-screen" style={{ background: 'linear-gradient(to bottom,#F0F4FD,#A1A3BA)', }}>
            <div class=" flex-col flex items-center justify-items-center  bg-transparent p-8">
            <div>
                         <Link to="/"> <img src="images/bg.png" class=" mt-0 h-60" alt="" /> </Link>
                        </div>
                        

                <form class="space-y-4 bg-white p-5">
                    <div class="mb-6">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" id="email" class="w-96 hadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="" required />
                    </div>
                    <div class="mb-6">
                        <label for="UserName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your User Name</label>
                        <input type="Username" id="username" class="w-96 hadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  />
                    </div>
                    <div class="mb-6">
                        <label for="phonenumber" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Phone Number</label>
                        <input type="phonenumber" id="phone number" class="w-96 hadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  />
                    </div>
                    <div> <Link to="Home"><img src="images/home-icon-silhouette.png" class="w-10  " alt="" /></Link></div>


                    
                </form>
            </div>
        </div>

    );
}
export default userprofile;