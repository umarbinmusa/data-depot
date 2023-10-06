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
                        <label for="refferals" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">refferals ID</label>
                        <input type="refferals" id="refferals" class="w-96 hadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
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
                        <select id="select a State" name="State" class="block w-full rounded-lg border-0 py-1.5 text-gray-900">

                            <option value="Abia">Abia</option>
                            <option value="Adamawa">Adamawa</option>
                            <option value="Akwa Ibom">Akwa Ibom</option>
                            <option value="Anambra">Anambra</option>
                            <option value="Bauchi">Bauchi</option>
                            <option value="Bayelsa">Bayelsa</option>
                            <option value="Benue">Benue</option>
                            <option value="Borno">Borno</option>
                            <option value="Cross River">Cross River</option>
                            <option value="Delta">Delta</option>
                            <option value="Ebonyi">Ebonyi</option>
                            <option value="Edo">Edo</option>
                            <option value="Ekiti">Ekiti</option>
                            <option value="Enugu">Enugu</option>
                            <option value="Gombe">Gombe</option>
                            <option value="Imo">Imo</option>
                            <option value="Jigawa">Jigawa</option>
                            <option value="Kaduna">Kaduna</option>
                            <option value="Kano">Kano</option>
                            <option value="Katsina">Katsina</option>
                            <option value="Kebbi">Kebbi</option>
                            <option value="Kogi">Kogi</option>
                            <option value="Kwara">Kwara</option>
                            <option value="Lagos">Lagos</option>
                            <option value="Nasarawa">Nasarawa</option>
                            <option value="Niger">Niger</option>
                            <option value="Ogun">Ogun</option>
                            <option value="Ondo">Ondo</option>
                            <option value="Osun">Osun</option>
                            <option value="Oyo">Oyo</option>
                            <option value="Plateau">Plateau</option>
                            <option value="Rivers">Rivers</option>
                            <option value="Sokoto">Sokoto</option>
                            <option value="Taraba">Taraba</option>
                            <option value="Yobe">Yobe</option>
                            <option value="Zamfara">Zamfara</option>

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