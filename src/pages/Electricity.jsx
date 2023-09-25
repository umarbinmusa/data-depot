import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

function Electricity() {
  return (

    <div class="flex-col m-5   justify-items-center">
      <Navbar />
      <div class="w-6xl px-5 mx-auto mt-3 text-center  bg-blue-900 text-white  rounded-xl shadow-lg m-5 p-5 ">
        <h1 class="text-center ">ELECTRICITY PAYMENT</h1>
        <h2 class="text-center ">Pay your Electricity and enjoy 1 Week Bunus</h2>
      </div>
      <div class="w-6xl px-5 mx-auto mt-3 text-center bg-white shadow-lg m-5 p-5">
        <div class="grid grid-cols-3 gap-3  space-x-5 mt-2  justify-items-center  ">
          <div>

            <img src="./images/kad.png" class="w-12" alt="" />

          </div>
          <div>

            <img src="./images/kano.png" class="w-12" alt="" />
          </div>
          <div>

            <img src="./images/enugu.png" class="w-12" alt="" />
          </div>

        </div>


        <form>

          <div class=" p-2">
            <select id="select a Network" name="Network" autocomplete="Network name" class="block w-full rounded-lg border-0 py-1.5 text-gray-900">
              <option>Select a Plan</option>
              <option>Kaduna Electricity</option>
              <option>Kano Electricity</option>
              <option>sokoto Electricity</option>
              <option>Kwara Electricity</option>
              <option>Edo Electricity</option>
              <option>Lagos Electricity</option>
              <option>Gombe Electricity</option>
              <option>Bauchi Electricity</option>
              <option>Borno Electricity</option>
              <option>Adamawa Electricity</option>

            </select>

          </div>
          <div class=" p-4">
            <select id="select Type" name="type" autocomplete="type" class="block w-full rounded-lg border-0 py-1.5 text-gray-900">
              <option>Select a Meter</option>
              <option>postpaid</option>
              <option>PrePaid</option>


            </select>

          </div>



          <div class="flex ">

            <input type="text" name="meternumber" id="meternumber" class="block w-full rounded-lg border-0 py-1.5 text-gray-900" placeholder="enter your Meter Number" />
          </div>
          <div class="flex ">

            <input type="text" name="Amount" id="Amount" class="block w-full rounded-lg border-0 py-1.5 text-gray-900" placeholder="Amount" />
          </div>

          <div class="flex mt-5 ">

            <input type="submit" Value="ENTER" class="block w-full bg-blue-900 rounded-lg border-0 py-1.5 text-white" />
          </div>


        </form>


      </div>
      <Footer />


    </div>



  );
}
export default Electricity;