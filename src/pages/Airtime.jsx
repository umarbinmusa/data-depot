import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

function Airtime (){
    return(
        <div class="flex-col m-5   justify-items-center">
          <Navbar />
            <div class="max-w-6xl px-5 mx-auto mt-3 text-center  bg-black text-white  shadow-lg m-5 p-5 ">
                <h1 class="text-center ">WELCOME TO AIRTIME MARKET</h1>
                <h2 class="text-center ">Buy Airtime at cheeper price</h2>
            </div>
                   <div class="max-w-6xl px-5 mx-auto mt-3 text-center bg-white shadow-lg ">
                    <div class="grid grid-cols-3 gap-3  space-x-5 mt-2  justify-items-center  ">
            <div>
              
              <img src="./images/mtn.png" class="w-12" alt="" />
             
            </div>
            <div>
              
            <img src="./images/glo.png" class="w-12" alt="" />
            </div>
            <div>
              
            <img src="./images/Airtel.png" class="w-12" alt="" />
            </div>
               
              </div>
      
    
      
    <form>

        <div class=" p-2">
        <select id="select a Network" name="Network" autocomplete="Network name" class="block w-full rounded-lg border-0 py-1.5 text-gray-900">
              <option>Select Network</option>
              <option>M T N</option>
              <option>Airtel</option>
              <option>9mobile</option>
              <option>Glo</option>
            </select>
          
        </div>
        <div class=" p-4">
        <select id="select Type" name="type" autocomplete="type" class="block w-full rounded-lg border-0 py-1.5 text-gray-900">
              <option>VTU</option>
            </select>
          
        </div>
        <div class="flex ">
              
              <input type="text" name="username" id="username" autocomplete="username"  class="block w-full rounded-lg border-0 py-1.5 text-gray-900" placeholder="enter your number" />
            </div>

            <div class="flex mt-5 ">
          
             <input type="submit" Value="ENTER"   class="block w-full bg-black rounded-lg border-0 py-1.5 text-white" />
           </div>
    
        
        </form>
    
    
  </div>
  <Footer />
  

    </div>
   
    );
}
export default Airtime;