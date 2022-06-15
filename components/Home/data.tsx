import React from "react";

export default function Data() {
  return (
    <>
      <div className="relative">
        <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[65%] m-auto justify-center items-center py-24 shadow-xl px-[50px] rounded-lg  bg-white">
          <div className=" container flex items-center justify-between m-auto">
            <div>
              <h2 className="text-[32px] leading-5 mb-5">Data</h2>
              <p className="text-gray-500">Monthly</p>
            </div>
            <div>
              <div className="flex items-center ">
                <div className="h-[10px] w-[10px] bg-[#3253d7]"></div>
                <h2 className="text-[17px] leading-5  text-[#3253d7] pl-3">
                  Volume
                </h2>
              </div>
              <p className="text-[#3253d7] text-[32px] font-semibold mt-4">
                $380,470,548
              </p>
            </div>

            <div>
              <div className="flex items-center ">
                <div className="h-[10px] w-[10px] bg-[#f9c14d]"></div>
                <h2 className="text-[17px] leading-5  text-[#f9c14d] pl-3">
                  Transactions
                </h2>
              </div>
              <p className="text-[#f9c14d] text-[32px] font-semibold mt-4">
                10967
              </p>
            </div>

            <div>
              <div className="flex items-center ">
                <div className="h-[10px] w-[10px] bg-[#4dc5d8]"></div>
                <h2 className="text-[17px] leading-5  text-[#4dc5d8] pl-3">
                  Trading addresses
                </h2>
              </div>
              <p className="text-[#4dc5d8] text-[32px] font-semibold mt-4">
                4035
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
