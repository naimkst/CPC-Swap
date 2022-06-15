import React from "react";
import Exchange from "../components/Exchange/exchange";
import { SwapWidget } from "@uniswap/widgets";
import "@uniswap/widgets/fonts.css";
import { useWeb3React } from "@web3-react/core";

// Infura endpoint
const jsonRpcEndpoint =
  "https://ropsten.infura.io/v3/6780316e173b457c8ade056310790a31";

export default function Swap() {
  const {
    active,
    activate,
    deactivate,
    chainId,
    account,
    library: provider,
  } = useWeb3React();
  return (
    <>
      {/* <Exchange/> */}

      <div className=" py-20 m-auto items-center justify-center container text-center w-[25%]">
        <div className="Uniswap">
          <SwapWidget width="100%" provider={provider} jsonRpcEndpoint={jsonRpcEndpoint} />
        </div>
      </div>
    </>
  );
}
