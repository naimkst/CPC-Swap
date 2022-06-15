import React from "react";

export default function Sourch() {
  return (
    <div className="bg-[#5f55a5] py-[90px]">
      <div className=" container m-auto">
        <div className="">
          <h1 className="text-white text-center font-bold text-[32px] my-6">
            Secure trading at your fingertips
          </h1>
          <p className="text-white text-center text-[17px] tracking-wider">
            Trustless token-to-token exchange, based on the 0x protocol
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 items-center justify-around w-[80%] m-auto mt-16">
          <div className="flex items-center">
            <div>
              <img src="/assets/images/confimation.svg" alt=""  className="w-[150px] h-full" />
            </div>
            <div className="pl-5">
              <h2 className="text-white text-[23px] font-semibold py-2">
                Instant confirmation
              </h2>
              <p className="text-white tracking-wider	">
                See the final price before trading and finalize in just seconds
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <div>
              <img src="/assets/images/no-blocing.svg" alt=""  className="w-[150px] h-full" />
            </div>
            <div className="pl-5">
              <h2 className="text-white text-[23px] font-semibold py-2">
                No locking
              </h2>
              <p className="text-white tracking-wider	">
                Trade directly from your wallet. No need to deposit funds into
                the exchange
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 items-center justify-around w-[80%] m-auto mt-16 pb-[100px]">
          <div className="flex items-center">
            <div>
              <img src="/assets/images/decentralize.svg" alt="" className="w-[210px] h-full" />
            </div>
            <div className="pl-5">
              <h2 className="text-white text-[23px] font-semibold py-2">
                Decentralized
              </h2>
              <p className="text-white tracking-wider	">
                Fully control your own crypto. Tokens trade wallet-to-wallet via
                on-chain atomic swap
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <div>
              <img src="/assets/images/enhance.svg" alt=""  className="w-[150px] h-full" />
            </div>
            <div className="pl-5">
              <h2 className="text-white text-[23px] font-semibold py-2">
                Enhanced security
              </h2>
              <p className="text-white tracking-wider	">
                Use Face-ID and fingerprint or the imKey hardware wallet for
                large trades
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
