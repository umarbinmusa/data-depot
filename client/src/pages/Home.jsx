import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import "../App.css";

function Home() {
  return (
    <div className="flex-container   items-center  m-5 ">
      <Navbar />

      <div class="flex-col bg-blue-900 rounded-xl shadow-lg  ">
        <div class="flex-col">
          <p class="pt-2 text-center text-3xl text-white">Hello Umar Musa!</p>
          <h1 class="text-center mt-7 text-3xl text-white">Bal: N 900,000</h1>

          <div class="grid grid-cols-3 gap-3  space-x-7 mt-7  justify-items-center p-5 ">
            <div class="text-center">
              <Link to="Deposite">
                <img
                  src="./images/icons8-plus-50.png"
                  class=" bg-white rounded-xl m-4 p-3"
                  alt=""
                />
                <p class="text-white ease-in-out duration-300">Deposite</p>
              </Link>
            </div>
            <div class="text-center">
              <Link to="Transfer">
                <img
                  src="./images/icons8-initiate-money-transfer-50.png"
                  class=" bg-white rounded-xl m-4 p-3"
                  alt=""
                />
                <h6 class="text-white ease-in-out duration-700">Transfer</h6>
              </Link>
            </div>
            <div class="text-center">
              <Link to="Contact">
                <img
                  src="./images/icons8-phone-message-50.png"
                  class=" bg-white rounded-xl m-4 p-3"
                  alt=""
                />
                <h6 class="text-white ease-in-out duration-300"> Contact</h6>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div class=" justify-items-center bg-white shadow-lg mt-5 ">
        <div class="grid-cols-4  mt-7 lg: grid  gap-4  justify-items-center   ">
          <div class="text-center ">
            <Link to="Airtime">
              <img
                src="./images/icons8-phone-50.png"
                class=" bg-blue-900  rounded-xl m-4 p-3 "
                alt=""
              />
              <h6>Airtime</h6>
            </Link>
          </div>
          <div class="text-center ">
            <Link to="Data">
              <img
                src="./images/icons8-wifi-50.png"
                class=" bg-blue-900  rounded-xl m-4 p-3"
                alt=""
              />
              <h6>Data</h6>
            </Link>
          </div>
          <div class=" text-center">
            <Link to="Electricity">
              <img
                src="./images/icons8-light-on-50.png"
                class=" bg-blue-900 rounded-xl m-4 p-3"
                alt=""
              />
              <h6>Electricity</h6>
            </Link>
          </div>
          <div class="text-center ">
            <Link to="Currency">
              <img
                src="./images/icons8-dollar-ethereum-exchange-50.png"
                class=" bg-blue-900  rounded-xl m-4 p-3"
                alt=""
              />
              <h6>Currency</h6>
            </Link>
          </div>
          <div class="text-center ">
            <Link to="Agent">
              <img
                src="./images/icons8-male-user-50.png"
                class=" bg-blue-900  rounded-xl m-4 p-3"
                alt=""
              />
              <h6>Agent</h6>
            </Link>
          </div>
          <div class="text-center ">
            <Link to="Cabletv">
              <img
                src="./images/icons8-tv-50.png"
                class=" bg-blue-900  rounded-xl m-4 p-3"
                alt=""
              />
              <h6>Cable-TV</h6>
            </Link>
          </div>
          <div class=" text-center">
            <Link to="Datapins">
              <img
                src="./images/icons8-magnetic-card-50.png"
                class=" bg-blue-900  rounded-xl m-4 p-3"
                alt=""
              />
              <h6>Data-PIN</h6>
            </Link>
          </div>
          <div class="text-center">
            <Link to="Refund">
              <img
                src="./images/icons8-phone-50.png"
                class=" bg-blue-900  rounded-xl m-4 p-3"
                alt=""
              />
              Refund
            </Link>
          </div>
          <div class="text-center ">
            <Link to="Exampins">
              <img
                src="./images/icons8-graduation-cap-50.png"
                class=" bg-blue-900  rounded-xl m-4 p-3"
                alt=""
              />
              Exam-PINS
            </Link>
          </div>
          <div class="text-center ">
            <Link to="Settings">
              <img
                src="./images/icons8-settings-50.png"
                class=" bg-blue-900  rounded-xl m-4 p-3"
                alt=""
              />
              Settings
            </Link>
          </div>
          <div class="text-center">
            <Link to="Ambassadors">
              <img
                src="./images/icons8-collaborating-in-circle-50.png"
                class="   bg-blue-900 rounded-xl m-4 p-3"
                alt=""
              />
              <h6>Ambassadors</h6>
            </Link>
          </div>

          <div class="text-center ">
            <Link to="History">
              <img
                src="./images/icons8-hamburger-menu-50.png"
                class=" bg-blue-900  rounded-xl m-4 p-3"
                alt=""
              />
              History
            </Link>
          </div>
        </div>
      </div>
      <div class="footer mt-5  ">
        <Footer />
      </div>
    </div>
  );
}
export default Home;
