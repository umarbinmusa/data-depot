import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

function Cabletv(){
    return(

        <div class="flex-col m-5   justify-items-center">
          <Navbar />
            <div class="max-w-6xl px-5 mx-auto mt-3 text-center  bg-black text-white  shadow-lg m-5 p-5 ">
                <h1 class="text-center ">TV SUBSCRIPTIONS</h1>
                <h2 class="text-center ">Subscribe your Tv to get 30% discunt</h2>
            </div>
   <div class="max-w-6xl px-5 mx-auto mt-3 text-center bg-white shadow-lg m-5 p-5">
    
   <div class="grid grid-cols-3 gap-3  space-x-5 mt-2  justify-items-center  ">
            <div>
              
              <img src="./images/gotv.png" class="w-12" alt="" />
             
            </div>
            <div>
              
            <img src="./images/startimes.png" class="w-12" alt="" />
            </div>
            <div>
              
            <img src="./images/dstv.png" class="w-12" alt="" />
            </div>
               
              </div>
      
    <form>

        <div class=" p-2">
        <select id="select a Network" name="Network" autocomplete="Network name" class="block w-full rounded-lg border-0 py-1.5 text-gray-900">
              <option>Select a Plan</option>
              <option>Startimes</option>
              <option>Go TV</option>
              <option>DSTV</option>
              <option>SUNNAH TV</option>

            </select>
          
        </div>
        <div class=" p-4">
        <select id="select Type" name="type" autocomplete="type" class="block w-full rounded-lg border-0 py-1.5 text-gray-900">
              <option>Payment TYPE</option>
              <option>DAILY</option>
              <option>WEEKLY</option>
              <option>MONTHLY</option>

            </select>
          
        </div>

        <div class=" p-4">
        <select id="select Type" name="type" autocomplete="type" class="block w-full rounded-lg border-0 py-1.5 text-gray-900">
              
              <option>TYPE</option>
              <option>#200 DAILY</option>
              <option># 500 WEEKLY</option>
              <option># 1000 MONTHLY</option>
              <option># 5000 YEARLY</option>

            </select>
          
        </div>
        
        <div class="flex ">
              
              <input type="text" name="Card_number" id="Card_number"  class="block w-full rounded-lg border-0 py-1.5 text-gray-900" placeholder="enter your card number" />
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
export default Cabletv;