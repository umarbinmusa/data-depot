import { Link } from "react-router-dom";
function forgotpass() {
    return (
        <div class="min-h-screen" style={{ background: 'linear-gradient(to bottom,#F0F4FD,#A1A3BA)', }}>
            <div class=" flex-col flex items-center justify-items-center  bg-transparent p-8">
            <div>
                        <Link to="/">  <img src="images/bg.png" class=" mt-0 h-60" alt="" /></Link>
                        </div>
            

                <form class="space-y-4 bg-white p-5">
                    <div class="mb-6">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" id="email" class="w-96 hadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="" required />
                    </div>

                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send</button>
                </form>
            </div>
        </div>

    );
}
export default forgotpass;