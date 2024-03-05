import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaCopy } from "react-icons/fa";
import airtime from "../images/airtime.svg";
import data from "../images/data.jpg";
import cable from "../images/cable.jpg";
import utility from "../images/utility.jpg";
import historyImage from "../images/history.png";
import withdraw from "../images/withdraw.png";
import earnings from "../images/earnings.svg";
import { useGlobalContext } from "../context/UserContext";
import WarningAlert from "../components/WarningAlert";
import { FaWhatsapp } from "react-icons/fa";
import contacts from "../images/contacts.png";
import loan from "../images/loan.svg";

const DashBoard = () => {
  const { user } = useGlobalContext();
  const navigate = useNavigate();

  const copyReferralLink = async () => {
    const userName = encodeURIComponent(user.userName);
    await window.navigator.clipboard.writeText(
      `https://www.SPPDataDepot.com/register/${userName}`
    );
    toast.success("Referral link copied");
  };

  const [showAlert, setShowAlert] = useState(false);
  useEffect(() => {
    if (user.userType === "smart earner") {
      const time = Math.random() * 7000;
      setTimeout(() => {
        setShowAlert(true);
      }, [time]);
    }
    // eslint-disable-next-line
  }, []);

  const navigation = [
    { name: "Airtime", image: airtime, link: "/profile/buyairtime" },
    { name: "data", image: data, link: "/profile/buydata" },
    { name: "Tv subscription", image: cable, link: "/profile" },
    { name: "Utility", image: utility, link: "/profile/electricity" },
    { name: "History", image: historyImage, link: "/profile/transactions" },
    { name: "Contacts", image: contacts, link: "/profile/contacts" },
    { name: "my earnings", image: earnings, link: "/profile/earnings" },
    // { name: "Loan", image: loan, link: "/profile/loan" },
    { name: "withdraw", image: withdraw, link: "/profile" },
  ];
  const copyAccNo = async (number) => {
    window.navigator.clipboard.writeText(number);
    toast.success("Account number copied");
  };
  const pay_with_card = () => {
    if (user.reservedAccountNo3) {
      window.open(
        `https://topup.vpay.africa/${user.reservedAccountNo3}`,
        "blank"
      );
    } else {
      navigate("/profile/fundWallet");
    }
  };

  return (
    <div className=" md:ml-[6rem] bg-white p-4">
      {showAlert && <WarningAlert close={() => setShowAlert(false)} />}
      <div className=" mx-auto bg-[#25d366] max-w-[400px] rounded-lg mt-1 ">
        <p className="text-center text-small leading-none text-white">
          <FaWhatsapp className="m-1" />
          <a
            href="https://chat.whatsapp.com/KGLHysp0hD7AeNnhzcVw02"
            target="blank"
          >
            click here{" "}
          </a>
          to join our whatsapp community
        </p>
      </div>
      <p className=" text-lg font-bold text-center underline title p-0 m-0">
        Welcome back, {user.userName && user.userName.substring(0, 10)}
      </p>

      <div className="flex justify-between items-center px-4 py-2 md:pl-20">
        <div className="text-xl font-bold md:font-extrabold  ">
          ₦{user.balance.toFixed(2)}
        </div>
        <a href="#fundWallet" className="btn text-xs">
          fund your wallet
        </a>
      </div>
      <section className="flex flex-wrap m-auto justify-center items-stretch gap-4 cursor-pointer ">
        {navigation.map((e, index) => (
          <div
            className=" border-2 border-[var(--primary-500)] w-[40%] max-w-[200px] bg-white rounded-xl "
            key={index}
            onClick={() => navigate(`${e.link}`)}
          >
            <div className="max-w-[4rem] md:max-w-[5rem] m-auto">
              <img
                className="img"
                src={e.image}
                alt={e.name}
                // width={"200px"}
              />
            </div>
            <p className="font-bold text-center capitalize">{e.name}</p>
          </div>
        ))}
      </section>
      <h3 className="text-center title underline mt-2">Payment accounts</h3>
      <div className="md:flex md:justify-between md:items-center md:space-x-4 md:p-4">
        {/* Payment accounts */}
        <div
          className="card bg-[var(--primary-500)] text-white m-auto md:m-0 md:w-[50%] self-stretch "
          id="fundWallet"
        >
          <div className="w-100 bg-white rounded-lg text-center">
            <p className="text-lg text-[#25d366] font-bold ">
              1.08% charges is applied
            </p>
          </div>
          <h3 className="text-lg p-0 m-0">
            Account name: SPPDataDepot-
            {user.userName && user.userName.substring(0, 10)}
          </h3>
          <div className="text-sm">
            {user.accountNumbers.map((e) => {
              return (
                <p key={e.accountNumber} className="">
                  {e.bankName} <b>{e.accountNumber}</b>
                  <FaCopy
                    onClick={() => copyAccNo(e.accountNumber)}
                    className="copy__icon"
                  />
                </p>
              );
            })}

            <p className="text-xs capitalize opacity-60">
              All payments made to the above account number will automatically
              fund your wallet
            </p>
            <button
              onClick={pay_with_card}
              className="btn btn-block btn-hipster "
            >
              Pay with ATM card instead (1% charges)
            </button>
          </div>
        </div>
        {/* refer link section */}
        <div className="card bg-[var(--red-light)] text-[var(--red-dark)] m-auto md:m-0  md:w-[50%] self-stretch ">
          <h1 className="sub__title">refer a friend</h1>
          <div className="note">
            Refer people to SPPDataDepot and earn ₦500 immediately the person
            upgrade his/her account to Reseller.
          </div>
          <button className="btn btn-hipster" onClick={copyReferralLink}>
            Copy referral link
          </button>
          <div className="">
            {user.userType === "smart earner" && (
              <>
                <p className="title mb-1">Upgrade your account</p>
                <button
                  className="btn btn-danger"
                  onClick={() => setShowAlert(true)}
                >
                  Upgrade to reseller @ ₦1000
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
