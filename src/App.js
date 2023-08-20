import React from "react";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Home from "./pages/Home";
import Data from "./pages/Data";
import Electricity from "./pages/Electricity";
import History from "./pages/history";
import Cabletv from "./pages/Cabletv";
import Agent from "./pages/Agent";
import Currency from "./pages/Currency";
import Rechargecard from "./pages/Rechargecard";
import Exampins from "./pages/Exampins";
import Airtime from "./pages/Airtime";
import Datapins from "./pages/Datapins";
import Deposite from "./pages/Deposite";
import Transfer from "./pages/Transfer";
import Contact from "./pages/Contact";
import Refund from "./pages/Refund";
import Ambassadors from "./pages/Ambassadors";
import Userprofile from "./pages/Userprofile";
import Admin from "./Admindashbord/Admin";
import Airtimehis from "./Admindashbord/Airtimehis";
import Datahis from "./Admindashbord/Datahis";
import Cabletvhis from "./Admindashbord/Cabletvhis";
import Currencyhis from "./Admindashbord/Currencyhis";
import Depositehis from "./Admindashbord/Depositehis";
import Refundhis from "./Admindashbord/Refundhis";
import Electricityhis from "./Admindashbord/Electricityhis";
import Exampinhis from "./Admindashbord/Exampinhis";
import Login from "./Login/Login";
import Register from "./Login/Register";








function App() {
  return( 
    <BrowserRouter>
    
    <Routes>
      
    <Route path='/' exact element={<Home />} />
      <Route path="Home" element={<Home /> } />
        <Route path="Data" element={<Data />} />
        <Route path="Userprofile" element={<Userprofile />} />
        <Route path="Electricity" element={<Electricity />} />
        <Route path="History" element={<History />} />
        <Route path="Cabletv" element={<Cabletv />} />
        <Route path="Agent" element={<Agent />} />
        <Route path="Currency" element={<Currency />} />
        <Route path="Rechargecard" element={<Rechargecard />} />
        <Route path="Exampins" element={<Exampins />} />
        <Route path="Ambassadors" element={<Ambassadors />} />
        <Route path="Datapins" element={<Datapins />} />
        <Route path="Airtime" element={<Airtime/>} />
        <Route path="Refund" element={<Refund/>} />
        <Route path="Deposite" element={<Deposite/>} />
        <Route path="Transfer" element={<Transfer/>} />
        <Route path="Contact" element={<Contact/>} />
        <Route path="Admin" element={<Admin/>} />
        <Route path="Airtimehis" element={<Airtimehis/>} />
        <Route path="Datahis" element={<Datahis/>} />
        <Route path="Cabletvhis" element={<Cabletvhis/>}  />
        <Route path="Currencyhis" element={<Currencyhis/>} />
        <Route path="Depositehis" element={<Depositehis/>} />
        <Route path="Refundhis" element={<Refundhis/>} />
        <Route path="Electricityhis" element={<Electricityhis/>} />
        <Route path="Exampinhis" element={<Exampinhis/>} />
        <Route path="Login" element={<Login/>} />
        <Route path="Register" element={<Register/>} >
        
        



        
        
      </Route>
    </Routes>
  </BrowserRouter>
  

  );
}
export default App;