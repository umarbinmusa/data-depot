import { Link } from "react-router-dom";

function land() {
    return (

        <div class="min-h-screen"
            style={{ background: 'linear-gradient(to bottom,#F0F4FD,#A1A3BA)', }}>

            <div class="flex flex-col lg:flex-row   ">
            <div>
                      <Link to="/">    <img src="images/bg.png" class=" mt-0 h-20" alt="" /> </Link>
                        </div>
            
                <div class='m-20 text-center lg:text-left'>
                    <h1 class='font-black text-5xl lg:text-6xl'>
                        WELCOME TO
                        <br />
                        <span class='font-quicksand font-light'>SPP-DATA-DEPOT</span>
                    </h1>
                    <p class='text-xl text-gray-900'>WE PROVIDE THE BEST VTU SYSTEM FOR YOU AND OUR PRODUCT ARE TESTED ABD TRUSTED BY OUR USERS</p>
                    <p class='text-xl text-gray-900'>AND ALSO WE PROVIDE APIS TO PEOPLE WHO WANT TO USE OUR API </p>
                    <input class="inline-block bg-indigo-500  px-10 py-5 rounded-full shadow-lg uppercase text-lg tracking-wide mt-5 ml-12" type="button" value="contact-us" />

                </div>

                <div > <img src="./images/bg.png" alt='' className='w-screen lg:max-w-xl' /></div>
            </div>
            <div class="flex mt-5 flex-col lg:flex-row lg:mt-7   ">
                <div > <img src="./images/svg1.svg" alt='' className='w-screen lg:max-w-xl' /></div>

                <div class='m-20 text-center lg:text-left'>
                    <h1 class='font-black text-5xl lg:text-6xl'>
                        Our Services are

                    </h1> 
                    <ol type="numbers">
                        <li class=' text-2xl lg:text-3xl'>Airtime</li>
                        <li class=' text-2xl lg:text-3xl'>Data</li>
                        <li class=' text-2xl lg:text-3xl'>Cable Subscription</li>
                        <li class='text-2xl lg:text-3xl'>Currency Exchage</li>
                        <li class='text-2xl lg:text-3xl'>Ambassadorship</li>
                        <li class='text-2xl lg:text-3xl'>Refer and get paid</li>



                    </ol>
                   <Link to="/Register"> <input class="inline-block bg-indigo-500  px-10 py-5 rounded-full shadow-lg uppercase text-lg tracking-wide mt-5 ml-12" type="button" value="Register" /></Link>
                   <Link to=""> <input class="inline-block bg-indigo-500  px-10 py-5 rounded-full shadow-lg uppercase text-lg tracking-wide mt-5 ml-12" type="button" value="Download App" /> </Link>
                </div>
                

            </div>
            <div class=" text-center flex lg:items-center lg:justify-items-center lg:text-center"> <h1 class=" items-center justify-items-center"> copyright @ 2023 spp-data-depot dev </h1></div>
          


        </div>


    );
}
export default land;