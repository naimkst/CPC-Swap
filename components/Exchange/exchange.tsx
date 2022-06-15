import React from "react";

export default function Exchange() {
  return (
    <div className="bg-[#f5f8fb] py-[100px]">
      <div>
        <div className="container m-auto w-[450px] bg-white rounded-lg p-6">
          <div>
            <img src="/assets/images/logo.svg" className="w-[100px]" alt="" />
          </div>
          <div>
            <div className="mt-7">
              <p className=" text-gray-300 text-[12px] mb-2">To</p>
            </div>
            <div className=" relative">
              {/* <div className="flex items-center justify-center shadow shadow-indigo-500/40 w-[120px] p-2 rounded-full absolute bg-white mt-[7px] ml-[8px]">
                <img
                  src="/assets/images/ehter.png"
                  className="w-[30px] border rounded-full mr-2 "
                  alt=""
                />
                <p className="text-[15px] font-[500] text-gray-700">ETHER</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div> */}
              <div>
                <input
                  className="bg-[#fafafc] border p-[17px] w-full rounded-full border-[#EFF0FA]"
                  type="text"
                  placeholder="To.."
                />
              </div>
            </div>
          </div>

          <div>
            <div className="mt-7">
              <p className=" text-gray-300 text-[12px] mb-2">Amount</p>
            </div>
            <div className=" relative">
              {/* <div className="flex items-center justify-center shadow shadow-indigo-500/40 w-[120px] p-2 rounded-full absolute bg-white mt-[7px] ml-[8px]">
                <img
                  src="/assets/images/ehter.png"
                  className="w-[30px] border rounded-full mr-2 "
                  alt=""
                />
                <p className="text-[15px] font-[500] text-gray-700">ETHER</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div> */}
              <div>
                <input
                  className="bg-[#fafafc] border p-[17px] w-full rounded-full border-[#EFF0FA]"
                  type="text"
                  placeholder="Amount.."
                />
              </div>
            </div>
          </div>

          <div>
            <button className="py-[15px] text-white rounded-full mt-7 w-full bg-[#5f4dbc]">Connect Wallet</button>
          </div>

        </div>
      </div>
    </div>
  );
}
