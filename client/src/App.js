// MODULE IMPORT
import { Route, Routes } from "react-router-dom";
import React, { useEffect } from "react";
import "./style.css";
import { useGlobalContext } from "./context/UserContext";
import Landing from "./pages/Landing";

// PAGES
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/SharedLayout";
import NotFound from "./pages/NotFound";
import BuyData from "./pages/BuyData";
import DashBoard from "./pages/DashBoard";
import Landing2 from "./pages/Landing2";
import BuyAirtime from "./pages/BuyAirtime";
import Transactions from "./pages/Transactions";
import Transfer from "./pages/Transfer";
import UserDetails from "./pages/UserDetails";
import Settings from "./pages/Settings";
import FundWallet from "./pages/FundWallet";
import RequestResetPassword from "./pages/RequestResetPassword";
import ResetPassword from "./pages/ResetPassword";

import Admin from "./pages/Admin/Admin";
import MyUsers from "./pages/Admin/MyUsers";
import GenerateCoupon from "./pages/Admin/GenerateCoupon";
import SendEmail from "./pages/Admin/SendEmail";
import PriceList from "./pages/PriceList";
import Loading from "./components/Loading";
import WhatsAppIcon from "./components/WhatsAppIcon";
import BuyElectricity from "./pages/BuyElectricity";
import UpdatePrice from "./pages/UpdatePrice";
import MyBonus from "./pages/MyBonus";
import Contacts from "./pages/Contacts";

export default function App() {
  const { token, checkLoggedIn, isLoading } = useGlobalContext();

  useEffect(() => {
    if (token) checkLoggedIn();
    // eslint-disable-next-line
  }, [token]);

  return (
    <>
      {isLoading && <Loading />}
      <WhatsAppIcon />
      <Routes>
        {/* <Route exact path="/" element={<Landing />} /> */}
        <Route exact path="/" element={<Landing2 />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register">
          <Route index element={<Register />} />
          <Route path=":referralId" element={<Register />} />
        </Route>
        <Route exact path="/profile" element={token ? <Profile /> : <Login />}>
          <Route index element={<DashBoard />} />
          <Route path="buyData" element={<BuyData />} />
          <Route path="buyAirtime" element={<BuyAirtime />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="bonus" element={<MyBonus />} />
          <Route path="transfer" element={<Transfer />} />
          <Route path="user" element={<UserDetails />} />
          <Route path="changePassword" element={<Settings />} />
          <Route path="fundWallet" element={<FundWallet />} />
          <Route path="electricity" element={<BuyElectricity />} />
          <Route path="updatePrice" element={<UpdatePrice />} />
        </Route>
        {/* ADMIN */}
        <Route path="/admin" element={<Profile />}>
          <Route index element={<Admin />} />
          <Route path="generateCoupon" element={<GenerateCoupon />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="users" element={<MyUsers />} />
          <Route path="sendmail" element={<SendEmail />} />
        </Route>
        <Route
          exact
          path="/requestPasswordReset"
          element={<RequestResetPassword />}
        />
        <Route exact path="/priceList" element={<PriceList />} />

        <Route exact path="/passwordReset" element={<ResetPassword />}>
          <Route index element={<ResetPassword />} />
          <Route path=":token/:userId" />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
