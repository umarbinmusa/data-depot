import AdminNav from "./AdminNav";
function Refundhis(){
    return(
        <div class="flex">
            <AdminNav />
            <div class="grid grid-cols-1 gap-2  lg:grid-cols-2">
            <div class=" text-gray-500 ">
                        <table class="rounded-t-lg ml-10 w-5/6 max-auto bg-gray-200 text-gray-800">
                            <tr class="text-left border-b-2 border-gray-300">
                                <th class="px-4 py-3">ID</th>
                                <th class="px-4 py-3">Network</th>
                                <th class="px-4 py-3">reciept Number</th>
                                <th class="px-4 py-3">Number</th>
                                <th class="px-4 py-3">Fullname</th>
                                <th class="px-4 py-3">status</th>
                               
                            </tr>
                            <tr class="bg-gray-100 border-b border-gray-200">
                                <td class="px-4 py-3">01</td>
                                <td class="px-4 py-3">MTN</td>
                                <td class="px-4 py-3">008</td>
                                <td class="px-4 py-3">08100812221</td>
                                <td class="px-4 py-3">Musa Umar</td>
                                <td class="px-4 py-3">Completed</td>

                            </tr>
                            <tr class="bg-gray-100 border-b border-gray-200">
                                <td class="px-4 py-3">02</td>
                                <td class="px-4 py-3">MTN</td>
                                <td class="px-4 py-3">008</td>
                                <td class="px-4 py-3">08100812221</td>
                                <td class="px-4 py-3">Musa Umar</td>
                                <td class="px-4 py-3">Completed</td>

                            </tr>
                            <tr class="bg-gray-100 border-b border-gray-200">
                                <td class="px-4 py-3">01</td>
                                <td class="px-4 py-3">MTN</td>
                                <td class="px-4 py-3">008</td>
                                <td class="px-4 py-3">08100812221</td>
                                <td class="px-4 py-3">Musa Umar</td>
                                <td class="px-4 py-3">Completed</td>

                            </tr>
                            <tr class="bg-gray-100 border-b border-gray-200">
                                <td class="px-4 py-3">01</td>
                                <td class="px-4 py-3">MTN</td>
                                <td class="px-4 py-3">008</td>
                                <td class="px-4 py-3">08100812221</td>
                                <td class="px-4 py-3">Musa Umar</td>
                                <td class="px-4 py-3">Completed</td>

                            </tr>
                            
                        </table>
                    </div>

            </div>

        </div>
    );
}
export default Refundhis;