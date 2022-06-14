import React from "react";

export default function Hero() {
  return (
    <>
      <div className="py-[90px]">
        <div className="container m-auto">
          <div>
            <h2 className="text-center text-[32px] text-[#454568] font-bold">Smart contract-based decentralized trading</h2>
          </div>
          <div>
            <p className="text-center font-[17px] my-6 text-[#363c4d]">Secure, reliable and seamless mobile trading experience</p>
          </div>
          <div className="items-center justify-center flex my-10">
            <button className=" bg-[#5f4dbc] hover:bg-[#3b24b0] text-white py-3 px-8 rounded-full">Instant Exchange</button>
          </div>
          <div className="flex justify-center">
          <iframe width="700" height="350" src="https://www.youtube.com/embed/jECIZpEsX5s" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
