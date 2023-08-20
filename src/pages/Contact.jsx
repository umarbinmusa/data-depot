import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

function Contact(){
    return(
        <div class="flex-col m-5   justify-items-center">
        <Navbar />
          <div class="max-w-6xl px-5 mx-auto mt-3 text-center  bg-black text-white  shadow-lg m-5 p-5 ">
              <h1 class="text-center ">WELCOME TO OUR SUPPORT PANEL</h1>
              <h2 class="text-center ">PUSH YOUR COMPLAINS THROUGH OUR HANDLES</h2>
              <h2 class="text-center ">Note!: we are Available for your complains 24/7 </h2>
          </div>
 <div class="max-w-6xl px-5 mx-auto mt-3 text-center bg-white shadow-lg m-5 p-5">
  
      <div class="flex flex-col mt-2 md:flex-row md:space-x-6">
    
      <div class="hidden flex-col items-center p-6 space-y-6 rounded-lg  md:flex md:w-1/3 ">
     
     <img src="./images/Facebook.png" class="w-12 "  alt="Deposite" />
     
    </div>

    <div class="hidden flex-col items-center p-6 space-y-6 rounded-lg  md:flex md:w-1/3 " >
     <img src="./images/Gmail.png" class="w-12 "  alt="" />
     
    </div>

    <div class="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3  ">
      <img src="./images/instagram.png" class="w-12" alt="" />
      
    </div>
    
  </div>
  
  
</div>
<div class="max-w-6xl px-5 mx-auto mt-3 text-center bg-white shadow-lg m-5 p-5">
  
      <div class="flex flex-col mt-2 md:flex-row md:space-x-6">
    
      <div class="hidden flex-col items-center p-6 space-y-6 rounded-lg  md:flex md:w-1/3 ">
     
     <img src="./images/google.png" class="w-12 "  alt="Deposite" />
     
    </div>

    <div class="hidden flex-col items-center p-6 space-y-6 rounded-lg  md:flex md:w-1/3 " >
     <img src="./images/news.png" class="w-12 "  alt="" />
     
    </div>

    <div class="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3  ">
      <img src="./images/phone.png" class="w-12" alt="" />
      
    </div>
    
  </div>
  
  
</div>

<Footer />


  </div>
        

    );
} export default Contact;