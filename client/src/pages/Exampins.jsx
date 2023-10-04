import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
function Exampins(){
    return(

        <div class="flex-col m-5   justify-items-center">
          <Navbar />
            <div class="w-6xl px-5 mx-auto mt-3 text-center  bg-blue-900 text-white rounded-xl shadow-lg m-5 p-5 ">
                <h1 class="text-center ">RESULT CHECKER</h1>
                <h2 class="text-center ">Check your Result Here!</h2>
            </div>
   <div class="w-6xl px-5 mx-auto mt-3 text-center bg-white shadow-lg m-5 p-5">
    
   <div class="grid grid-cols-3 gap-3  space-x-5 mt-2  justify-items-center  ">
            <div>
              
              <img src="./images/waec.png" class="w-12" alt="" />
             
            </div>
            <div>
              
            <img src="./images/neco.webp" class="w-12" alt="" />
            </div>
            <div>
              
            <img src="./images/waec.png" class="w-12" alt="" />
            </div>
               
              </div>
      
    <form>

        <div class=" p-2">
        <select id="select a Network" name="Network" autocomplete="Network name" class="block w-full rounded-lg border-0 py-1.5 text-gray-900">
              <option>Select Exam</option>
              <option>WAEC</option>
              <option>NECO</option>
              <option>JAMB</option>
            </select>
          
        </div>
        
        <div class="flex ">
              
              <input type="text" name="username" id="username" autocomplete="username"  class="block w-full rounded-lg border-0 py-1.5 text-gray-900" placeholder="enter your Exam number" />
            </div>

            <div class="flex ">
              
              <input type="text" name="username" id="username" autocomplete="username"  class="block w-full rounded-lg border-0 py-1.5 text-gray-900" placeholder="Amount to Paid" />
            </div>
            <div class="flex mt-5 ">
          
             <input type="submit" Value="ENTER"   class="block w-full bg-blue-900 rounded-lg border-0 py-1.5 text-white" />
           </div>
    
        
        
        </form>
    
    
  </div>
  <Footer />
  

    </div>
    );
}
export default Exampins;