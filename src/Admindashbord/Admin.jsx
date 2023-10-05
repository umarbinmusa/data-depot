import { Link } from "react-router-dom";

function Admin() {
    return (
        <div className="flex">
            <div className="flex flex-col  p-3 bg-blue-900 shadow-lg w-90">
                <div className="space-y-3">
                    <div className="flex items-center">
                        <h2 className="text-xl font-bold text-white">Dashboard</h2>
                    </div>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center py-4">
                            <button
                                type="submit"
                                className="p-2 focus:outline-none focus:ring"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </button>
                        </span>
                        <input
                            type="search"
                            name="Search"
                            placeholder="Search..."
                            className="w-full py-2 pl-10 text-sm rounded-md focus:outline-none"
                        />
                    </div>
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            <li className="rounded-sm">
                                <Link class="flex items-center p-2 space-x-3 rounded-md" to="/Depositehis">

                                    <img src="images/icons8-add-67.png" class="w-5" alt="" />
                                    <span className="text-gray-100">Deposite</span>
                                </Link>
                            </li>
                            <li className="rounded-sm">
                                <Link class="flex items-center p-2 space-x-3 rounded-md" to="/Depositehis">


                                    <img src="images/icons8-initiate-money-transfer-50.png" class="w-5" alt="" />
                                    <span className="text-gray-100">Transfer</span>

                                </Link>
                            </li>
                            <li className="rounded-sm">
                                <Link class="flex items-center p-2 space-x-3 rounded-md" to="/Airtimehis">

                                    <img src="images/phone.png" class="w-5" alt="" />
                                    <span className="text-gray-100">Contact</span>

                                </Link>
                            </li>
                            <li className="rounded-sm">
                                <Link class="flex items-center p-2 space-x-3 rounded-md" to="/Airtimehis">

                                    <img src="images/icons8-phone-50.png" class="w-5" alt="" />
                                    <span className="text-gray-100">Airtime</span>

                                </Link>
                            </li>

                            <li className="rounded-sm">
                                <Link class="flex items-center p-2 space-x-3 rounded-md" to="Datahis">
                                    <img src="images/icons8-wifi-50.png" class="w-5" alt="" />



                                    <span className="text-gray-100">Data</span>

                                </Link>
                            </li>
                            <li className="rounded-sm">
                                <Link class="flex items-center p-2 space-x-3 rounded-md" to="">
                                    <img src="images/icons8-tv-50.png" class="w-5" alt="" />

                                    <span className="text-gray-100">Cabletv</span>
                                </Link>
                            </li>

                            <li className="rounded-sm">
                                <Link class="flex items-center p-2 space-x-3 rounded-md" to="">
                                    <img src="images/icons8-dollar-ethereum-exchange-50.png" class="w-5" alt="" />

                                    <span className="text-gray-100">Currency</span>
                                </Link>
                            </li>
                            <li className="rounded-sm">
                                <Link class="flex items-center p-2 space-x-3 rounded-md" to="">

                                    <img src="images/icons8-magnetic-card-50.png" class="w-5" alt="" />
                                    <span className="text-gray-100">Datapins</span>
                                </Link>
                            </li>
                            <li className="rounded-sm">
                                <Link class="flex items-center p-2 space-x-3 rounded-md" to="">
                                    <img src="images/icons8-hamburger-menu-50.png" class="w-5" alt="" />
                                    <span className="text-gray-100">History</span>
                                </Link>
                            </li>

                            <li className="rounded-sm">
                                <Link class="flex items-center p-2 space-x-3 rounded-md" to="">

                                    <img src="images/icons8-male-user-50.png" class="w-5" alt="" />
                                    <span className="text-gray-100">Userprofile</span>
                                </Link>
                            </li>
                            <li className="rounded-sm">
                                <Link class="flex items-center p-2 space-x-3 rounded-md" to="">
                                    <img src="images/icons8-phone-50.png" class="w-5" alt="" />
                                    <span className="text-gray-100">Refond</span>
                                </Link>
                            </li>
                            <li className="rounded-sm">
                                <Link class="flex items-center p-2 space-x-3 rounded-md" to="">
                                    <img src="images/icons8-graduation-cap-50.png" class="w-5" alt="" />
                                    <span className="text-gray-100">Exampin</span>
                                </Link>
                            </li>
                            <li className="rounded-sm">
                                <Link class="flex items-center p-2 space-x-3 rounded-md" to="">

                                    <img src="images/icons8-light-on-50.png" class="w-5" alt="" />
                                    <span className="text-gray-100">Electricity</span>
                                </Link>
                            </li>
                            <li className="rounded-sm">
                                <Link class="flex items-center p-2 space-x-3 rounded-md" to="">

                                    <img src="images/icons8-male-user-50.png" class="w-5" alt="" />
                                    <span className="text-gray-100">Agent</span>
                                </Link>
                            </li>
                            <li className="rounded-sm">
                                <Link class="flex items-center p-2 space-x-3 rounded-md" to="">

                                    <img src="images/icons8-settings-50.png" class="w-5" alt="" />
                                    <span className="text-gray-100">Settings</span>
                                </Link>
                            </li>
                            <li className="rounded-sm">
                                <Link class="flex items-center p-2 space-x-3 rounded-md" to="">

                                    <img src="images/icons8-collaborating-in-circle-50.png" class="w-5" alt="" />
                                    <span className="text-gray-100">Ambassadors</span>
                                </Link>
                            </li>
                            <li className="rounded-sm">
                                <Link class="flex items-center p-2 space-x-3 rounded-md" to="">
                                    <img src="images/" alt="" />
                                    <span className="text-gray-100">Logout</span>
                                </Link>
                            </li>



                        </ul>
                    </div>
                </div>
            </div>



            <div className="container mx-auto mt-5 mr-6 ml-6">
                <h1  class="text-center  text-3xl mb-3">Hello Admin</h1>
                <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
                    <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                        <div className="text-sm mt-3 font-medium text-gray-500 truncate">
                            Total users
                        </div>
                        <div className="mt-1 text-3xl font-semibold text-gray-900">
                            800,000
                        </div>
                    </div>
                    <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                        <div className="text-sm font-medium text-gray-500 truncate">
                            Total Profit
                        </div>
                        <div className="mt-1 text-3xl font-semibold text-gray-900">
                             1,000,000
                        </div>
                    </div>
                    <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                        <div className="text-sm font-medium text-gray-500 truncate">
                            Total Orders
                        </div>
                        <div className="mt-1 text-3xl font-semibold text-gray-900">
                            100,000,000,000
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}
export default Admin;