import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
function Currency() {
  return (
    <div class="flex-col m-5   justify-items-center">
      <Navbar />
      <div class="w-6xl px-5 mx-auto mt-3 text-center  bg-blue-900 text-white  rounded-xl shadow-lg m-5 p-5 ">
        <h1 class="text-center ">WELCOME TO Currency Market</h1>
        <h2 class="text-center ">Exchange Naira To Any Currency</h2>
        <h2 class="text-center ">Note!: All Changes Attract 10% of your money</h2>
      </div>
      <div class="w-6xl px-5 mx-auto mt-3 text-center bg-white shadow-lg m-5 p-5">

        <div class="grid grid-cols-3 gap-3  space-x-5 mt-2  justify-items-center  ">
          <div>

            <img src="./images/usdt.jpeg" class="w-12" alt="" />

          </div>
          <div>

            <img src="./images/euro.jpeg" class="w-12" alt="" />
          </div>
          <div>

            <img src="./images/riyal.jpeg" class="w-12" alt="" />
          </div>

        </div>

        <form>

          <div class=" p-2">
            <select id="select a Network" name="Network" autocomplete="Network name" class="block w-full rounded-lg border-0 py-1.5 text-gray-900">
              <option>Select Currency</option>
              <option>Dollar</option>
              <option>Euro</option>
              <option>Riyal</option>
              <option>pi</option>
            </select>

          </div>

          <div class="flex ">

            <input type="text" name="username" id="username" autocomplete="username" class="block w-full rounded-lg border-0 py-1.5 text-gray-900" placeholder="enter your Wallet Address" />
          </div>
          <div class="flex ">

            <input type="text" name="username" id="username" autocomplete="username" class="block w-full rounded-lg border-0 py-1.5 text-gray-900" placeholder="enter The Amount" />
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
export default Currency;