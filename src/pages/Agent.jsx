import React, { useState } from 'react';
import { Link } from "react-router-dom";
const generateReferralLink = (referralCode) => {
    const baseUrl = 'https://spp-data-depot.com/signup?referral=';
    return baseUrl + referralCode;
  };
  

  const ReferralComponent = () => {
    const [referralCode, setReferralCode] = useState('username'); // Replace with your logic to get the user's referral code
    const referralLink = generateReferralLink(referralCode);
  
    const copyToClipboard = () => {
      const textField = document.createElement('textarea');
      textField.innerText = referralLink;
      document.body.appendChild(textField);
      textField.select();
      document.execCommand('copy');
      textField.remove();
      alert('Referral link copied to clipboard!');
    };
  
    return (
      <div class=" flex flex-col min-h-screen " style={{ background: 'linear-gradient(to bottom,#F0F4FD,#A1A3BA)', }}>
        <div class="  flex-col flex items-center justify-items-center  bg-transparent p-6">
        <div>
                         <Link to="/"> <img src="images/bg.png" class=" mt-0 h-60" alt="" /> </Link>
                        </div>
           
          <div class="bg-white space-y-5 p-5" >
        <p>Your Referral Link:</p>
        
        <input type="text" class="w-96 hadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={referralLink} readOnly />
        <button class="block w-full bg-blue-900 rounded-lg border-0 py-1.5 text-white" 
           onClick={copyToClipboard}>Copy to Clipboard</button>
                 <div> <Link to="Home"><img src="images/home-icon-silhouette.png" class="w-10  " alt="" /></Link></div>
           </div>
           </div>
      </div>
    );
  };
  
  export default ReferralComponent;
    