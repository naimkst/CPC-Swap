import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <>
      <div className="bg-[#f6f8fb] py-28">
        <div className=" container m-auto flex  justify-between">
          <div>
            <img src="/assets/images/logo.svg" alt="" />
            <div className="flex items-center mt-5 gap-5">
              <AiOutlineTwitter className=" text-gray-300 text-[30px] hover:text-[#5f55a5] hover:cursor-pointer" />
              <AiOutlineInstagram className=" text-gray-300 text-[30px] hover:text-[#5f55a5] hover:cursor-pointer" />
            </div>
          </div>
          <div>
            <div>
              <h2 className="text-[#5a5d6d] text-lg font-bold">Discover</h2>
              <ul className="">
                <li className="mt-3 text-gray-500 cursor-pointer hover:text-[#5f55a5]">
                  Litepaper
                </li>
                <li className="mt-3 text-gray-500 cursor-pointer hover:text-[#5f55a5]">
                  Audit Report
                </li>
                <li className="mt-3 text-gray-500 cursor-pointer hover:text-[#5f55a5]">
                  Im BTC
                </li>
                <li className="mt-3 text-gray-500 cursor-pointer hover:text-[#5f55a5]">
                  Brand
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <h2 className="text-[#5a5d6d] text-lg font-bold">Developer</h2>
              <ul className="">
                <li className="mt-3 text-gray-500 cursor-pointer hover:text-[#5f55a5]">
                  Onboarding
                </li>
                <li className="mt-3 text-gray-500 cursor-pointer hover:text-[#5f55a5]">
                  Open API
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <h2 className="text-[#5a5d6d] text-lg font-bold">Community</h2>
              <ul className="">
                <li className="mt-3 text-gray-500 cursor-pointer hover:text-[#5f55a5]">
                  Discord
                </li>
                <li className="mt-3 text-gray-500 cursor-pointer hover:text-[#5f55a5]">
                  Governance Forum
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <h2 className="text-[#5a5d6d] text-lg font-bold">Support</h2>
              <ul className="">
                <li className="mt-3 text-gray-500 cursor-pointer hover:text-[#5f55a5]">
                  Help Center
                </li>
                <li className="mt-3 text-gray-500 cursor-pointer hover:text-[#5f55a5]">
                  Tokenlon Tutorial
                </li>
                <li className="mt-3 text-gray-500 cursor-pointer hover:text-[#5f55a5]">
                  Support Token
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center h-[60px] bg-[#5f4dbc] items-center text-white">
        <p>© 2022 - 2022 COMPANY NAME. All rights reserved</p>
      </div>
    </>
  );
}
