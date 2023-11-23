import React from "react";

const Loan = () => {
  return (
    <div>
      <h3 className="text-center title underline">Apply for loan </h3>
      <div className="card text-white bg-[var(--primary-800)]">
        <p className="capitalize">your loan limit</p>
        <h2 className="font-extrabold">₦ 3000</h2>
        <div className="card">outstanding</div>
        <div className="text-center  space-x-4">
          <button className="btn btn-danger">Repay loan</button>
          <button className="btn">Apply for loan</button>
        </div>
      </div>
    </div>
  );
};

export default Loan;
