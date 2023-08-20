import AdminNav from "./AdminNav";
function Electricityhis(){
    return(

        <div class="flex">
            <AdminNav />
            <div class="grid grid-cols-1 gap-2  lg:grid-cols-2">
            <div class=" text-gray-500 ">
                        <table class="rounded-t-lg ml-10 w-5/6 max-auto bg-gray-200 text-gray-800">
                            <tr class="text-left border-b-2 border-gray-300">
                                <th class="px-4 py-3">ID</th>
                                <th class="px-4 py-3">Plan</th>
                                <th class="px-4 py-3">Meter</th>
                                <th class="px-4 py-3">Meter Number</th>
                                <th class="px-4 py-3">Fullname</th>
                                <th class="px-4 py-3">status</th>
                               
                            </tr>
                            <tr class="bg-gray-100 border-b border-gray-200">
                                <td class="px-4 py-3">01</td>
                                <td class="px-4 py-3">Kaduna Electricity</td>
                                <td class="px-4 py-3">Prepaid</td>
                                <td class="px-4 py-3">2323</td>
                                <td class="px-4 py-3">Musa Umar</td>
                                <td class="px-4 py-3">Completed</td>

                            </tr>
                            <tr class="bg-gray-100 border-b border-gray-200">
                                <td class="px-4 py-3">02</td>
                                <td class="px-4 py-3">Enugu Electricity</td>
                                <td class="px-4 py-3">Prepaid</td>
                                <td class="px-4 py-3">2323</td>
                                <td class="px-4 py-3">Musa Umar</td>
                                <td class="px-4 py-3">Completed</td>

                            </tr>
                            <tr class="bg-gray-100 border-b border-gray-200">
                                <td class="px-4 py-3">03</td>
                                <td class="px-4 py-3">Kano Electricity</td>
                                <td class="px-4 py-3">Prepaid</td>
                                <td class="px-4 py-3">2323</td>
                                <td class="px-4 py-3">Musa Umar</td>
                                <td class="px-4 py-3">Completed</td>

                            </tr>
                            <tr class="bg-gray-100 border-b border-gray-200">
                                <td class="px-4 py-3">04</td>
                                <td class="px-4 py-3">Kaduna Electricity</td>
                                <td class="px-4 py-3">Prepaid</td>
                                <td class="px-4 py-3">2323</td>
                                <td class="px-4 py-3">Musa Umar</td>
                                <td class="px-4 py-3">Completed</td>

                            </tr>
                            
                        </table>
                    </div>

            </div>

        </div>
    );
}
export default Electricityhis;