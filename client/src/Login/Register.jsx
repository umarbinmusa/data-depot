import { Link } from "react-router-dom";
function Register() {
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
                        <input type="Username" id="username" class="w-96 hadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                    </div>
                    <div class="mb-6">
                        <label for="phonenumber" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Phone Number</label>
                        <input type="phonenumber" id="phone number" class="w-96 hadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                    </div>
                    <div class="mb-6">
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" id="password" class="w-96 hadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                    </div>
                    <div class="mb-6">
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">confirm password</label>
                        <input type="password" id="password" class="w-96 hadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                    </div>
                    <div class="mb-6">
                        <label for="State" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">State of Origin</label>
                        <select id="select a State" name="State"  class="block w-full rounded-lg border-0 py-1.5 text-gray-900">
                            <option>Select State</option>
                            <option>Kaduna</option>
                            <option>kano</option>
                            <option>Katsina</option>
                            <option>kebi</option>
                            <option>Borno</option>
                            <option>kogi</option>
                            <option>kwara</option>
                            <option>Adamawa</option>
                            <option>oyo</option>
                            <option>ondo</option>
                            <option>osun</option>
                            <option>Anambara</option>
                            <option>Ekiti</option>
                            <option>Cross River</option>
                            <option>Lagos</option>
                            <option>Akwaibom</option>
                            <option>Bauchi</option>
                            <option>Gombe</option>
                            <option>Imo</option>
                            <option>Enugu</option>
                            <option>Abia</option>
                            <option></option>
                            <option></option>
                            <option></option>
                            <option></option>
                            <option></option>
                            <option></option>
                            <option></option>
                            <option></option>
                        </select>

                    </div>


                    <div class="flex flex-row  space-x-16 mb-6">
                        <div><button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button></div>
                        <div class=""> <Link to="/Login"> <h1 class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</h1></Link></div>
                    </div>


                </form>
            </div>
        </div>

    );
}
export default Register;