import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className=" bg-slate-100">
      <div className="container flex items-center justify-between m-auto h-[80px]">
        <div>
          <Link href="/">
          
          <img className="hover: cursor-pointer" src="/assets/images/logo.svg" alt="" />
          </Link>
        </div>
        <div>
          <ul className="flex items-center justify-center gap-10">
            <Link href="/swap">
            <li className="text-[16px] hover:text-[#5f4dbc] hover: cursor-pointer">Swap</li>
            </Link>
            <li className="text-[16px] hover:text-[#5f4dbc] hover: cursor-pointer">Withdraw</li>
            <li className="text-[16px] hover:text-[#5f4dbc] hover: cursor-pointer">Deposite</li>
            <Link href="/blog">
              <li className="text-[16px] hover:text-[#5f4dbc] hover: cursor-pointer">Blog</li>
            </Link>
          </ul>
        </div>
        <div>
          <button className="bg-[#5f4dbc] text-white py-3 px-6 rounded-full text-[16px]">Connect Wallet</button>
        </div>
      </div>
    </div>
  );
}
