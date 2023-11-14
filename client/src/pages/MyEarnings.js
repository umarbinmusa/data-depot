import React from "react";
import Pagination from "../components/Pagination";
import avatar from "../images/avatar.svg";
import { useGlobalContext } from "../context/UserContext";

const MyEarnings = () => {
  const { earningBalance, totalReferred, totalEarned, referralList } =
    useGlobalContext();
  return (
    <div className=" md:ml-[6rem] px-4  ">
      <h3 className="text-center title  underline">My Earnings</h3>
      <div className="card m-auto bg-[var(--primary-400)] text-white">
        <div className="flex">
          <p className="text-left font-extrabold text-3xl">
            ₦ {earningBalance}
          </p>
          <button className=" ml-auto btn btn-danger">withdraw</button>
        </div>
        <p className=" capitalize text-sm font-light text-left">
          Current balance
        </p>
        <div className="card bg-black flex justify-around m-auto">
          <div className="">
            <p className=" capitalize text-sm font-light text-left">
              Total referred
            </p>
            <p className="font-bold text-lg">{totalReferred}</p>
          </div>
          <div className="">
            <p className=" capitalize text-sm font-light text-left">
              {" "}
              Total earned
            </p>
            <p className="font-bold text-lg">₦ {totalEarned}</p>
          </div>
          <div className="">
            <p className=" capitalize text-sm font-light text-left">
              withdrawn
            </p>
            <p className="font-bold text-lg">
              ₦ {totalEarned - earningBalance}
            </p>
          </div>
        </div>
      </div>
      <Pagination />
      <div className="mt-4 md:flex justify-center gap-3 flex-wrap">
        {referralList.length > 0 ? (
          referralList.map((e) => {
            return (
              <div key={e.userName} className=" card relative m-auto my-4">
                <div
                  className={`absolute ${
                    e.amountEarned < 1
                      ? "bg-red-100 text-red-700"
                      : "bg-green-100 text-green-700"
                  }  p-1 px-3 font-extrabold rounded top-0 left-0`}
                >
                  Earned: ₦ {e.amountEarned}
                </div>
                <div className="avatar flex gap-4 items-center mt-5">
                  <div className="w-12">
                    <img src={avatar} alt="" className="img" />
                  </div>
                  <p className="font-extrabold">{e.userName}</p>
                  <p
                    className={`ml-auto font-bold ${
                      e.currentBalance < 1 ? " text-red-700" : " text-green-500"
                    }`}
                  >
                    {" "}
                    Bal: ₦{e.currentBalance}
                  </p>
                </div>
                <div className="flex justify-between mt-2">
                  <p className="text-sm font-light">Joined: {e.joinedOn}</p>
                  <p className="text-sm font-light">Last seen: {e.lastSeen}</p>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center">
            <div className="loading"></div>
            <p>No referral yet</p>
          </div>
        )}
      </div>
      <Pagination />
    </div>
  );
};

export default MyEarnings;
