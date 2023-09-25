import { Link } from "react-router-dom";
function Login() {
    return (

        <div class="min-h-screen" style={{ background: 'linear-gradient(to bottom,#F0F4FD,#A1A3BA)', }}>
            <div class=" flex-col flex items-center justify-items-center  bg-transparent p-8">
            <div>
                      <Link to="/">    <img src="images/bg.png" class=" mt-0 h-60" alt="" /> </Link>
                        </div>
            

                <form class="space-y-4 bg-white p-5">
                    <div class="mb-6">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" id="email" class="w-96 hadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="" required />
                    </div>

                    <div class="mb-6">
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" id="password" class="w-96 hadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                    </div>
                    <div class="flex flex-row  space-x-16 mb-6">
                        <div><button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button></div>
                        <div class=""> <Link to="/forgotpass"> <h1 class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Forgot Password</h1></Link></div>
                        </div>
                    

                    <div class="flex flex-row items-start mb-6">
                        <div class="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                        </div>
                        <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                    </div>
                </form>
            </div>
        </div>
    );

}
export default Login;