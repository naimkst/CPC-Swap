import React from "react";

export default function HowItWork() {
  return (
    <>
      <div className="bg-[#f6f8fb] pt-[220px] pb-[80px]">
        <div className="container m-auto w-[65%]">
          <div>
            <h2 className="text-[32px] leading-5 mb-5 flex justify-center text-[#21213e]">
              How it works
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-16 tems-center justify-around m-auto">
            <div className="flex">
              <div>
                <img src="/assets/images/off-chain.svg" className="w-[120px]" alt="" />
              </div>
              <div className="pl-4">
                <p className="text-[#4e5255] text-[20px] leading-6 tracking-wide mb-5">Off-chain Matching</p>
                <p className="text-[#515558] font-[100] text-[15px]">Market makers provide best-price quotations at any time</p>
              </div>
            </div>
            <div className="flex ">
              <div>
                <img src="/assets/images/on-chain.svg" className="w-[170px]" alt="" />
              </div>
              <div className="pl-4">
                <p className="text-[#4e5255] text-[20px] leading-6 tracking-wide mb-5">On-chain Settlement</p>
                <p className="text-[#515558] font-[100] text-[15px]">As soon as the user clicks to trade, the order is signed and sent to the 0x protocol smart contract</p>
              </div>
            </div>
            <div className="flex ">
              <div>
                <img src="/assets/images/instant-swap.svg" className="w-[170px]" alt="" />
              </div>
              <div className="pl-4">
                <p className="text-[#4e5255] text-[20px] leading-6 tracking-wide mb-5">Instant Swap</p>
                <p className="text-[#515558] font-[100] text-[15px]">The user receives the new tokens into their imToken wallet after just one or two Ethereum blocks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
