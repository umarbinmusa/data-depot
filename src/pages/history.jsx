import { Link } from "react-router-dom";
function history(){
    return(
        <div class="lex flex-col min-h-screen " style={{ background: 'linear-gradient(to bottom,#F0F4FD,#A1A3BA)', }}>
             <div class=" flex-col flex items-center justify-items-center  bg-transparent p-8">
            <div>
                         <Link to="/"> <img src="images/bg.png" class=" mt-0 h-60" alt="" /> </Link>
                        </div>
                        

                <div class="space-y-4 bg-white p-5">
                <table class="rounded-t-lg ml-10 w-5/6 max-auto bg-gray-200 text-gray-800">
                            <tr class="text-left border-b-2 border-gray-300">
                                <th class="px-4 py-3">ID</th>
                                <th class="px-4 py-3">Type</th>
                                <th class="px-4 py-3">Amount</th>
                                <th class="px-4 py-3">Date</th>
                                <th class="px-4 py-3">status</th>
                                                            
                            </tr>
                            <tr class="bg-gray-100 border-b border-gray-200">
                                <td class="px-4 py-3"></td>
                                <td class="px-4 py-3"></td>
                                <td class="px-4 py-3"></td>
                                <td class="px-4 py-3"></td>
                                <td class="px-4 py-3"></td>

                                
                            </tr>
                            <tr class="bg-gray-100 border-b border-gray-200">
                                 <td class="px-4 py-3"></td>

                                <td class="px-4 py-3"></td>
                                <td class="px-4 py-3"></td>
                                <td class="px-4 py-3"></td>
                                <td class="px-4 py-3"></td>
                                
                            </tr>
                            <tr class="bg-gray-100 border-b border-gray-200">
                                <td class="px-4 py-3"></td>
                                <td class="px-4 py-3"></td>
                                <td class="px-4 py-3"></td>
                                <td class="px-4 py-3"></td>
                                <td class="px-4 py-3"></td>
                                
                            </tr>
                            <tr class="bg-gray-100 border-b border-gray-200">
                                <td class="px-4 py-3"></td>
                                <td class="px-4 py-3"></td>
                                <td class="px-4 py-3"></td>
                                <td class="px-4 py-3"></td>
                                <td class="px-4 py-3"></td>
                               
                            </tr>
                            <tr class="bg-gray-100 border-b border-gray-200">
                                <td class="px-4 py-3"></td>
                                <td class="px-4 py-3"></td>
                                <td class="px-4 py-3"></td>
                                <td class="px-4 py-3"></td>
                                <td class="px-4 py-3"></td>
                               
                            </tr>
                           
                           


                        </table>
                    
                   
                    
                   
                    
                   

                    
                    
                </div>
            </div>
            

        </div>

    );
}
export default history;