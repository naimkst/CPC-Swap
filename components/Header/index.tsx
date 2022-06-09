import React from "react";

export default function Header() {
  return (
    <div className=" bg-slate-100">
      <div className="container flex items-center justify-between m-auto h-[80px]">
        <div>
          <img src="/assets/images/logo.svg" alt="" />
        </div>
        <div>
          <ul className="flex items-center justify-center gap-10">
            <li className="text-[16px] hover:text-[#5f4dbc] hover: cursor-pointer">Swap</li>
            <li className="text-[16px] hover:text-[#5f4dbc] hover: cursor-pointer">Withdraw</li>
            <li className="text-[16px] hover:text-[#5f4dbc] hover: cursor-pointer">Deposite</li>
          </ul>
        </div>
        <div>
          <button className="bg-[#5f4dbc] text-white py-3 px-6 rounded-full text-[16px]">Connect Wallet</button>
        </div>
      </div>
    </div>
  );
}
