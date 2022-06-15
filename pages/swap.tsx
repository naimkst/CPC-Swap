import React from "react";
import Exchange from "../components/Exchange/exchange";
import { SwapWidget } from "@uniswap/widgets";
import "@uniswap/widgets/fonts.css";
import { useWeb3React } from "@web3-react/core";

// Infura endpoint
const jsonRpcEndpoint =
  "https://ropsten.infura.io/v3/6780316e173b457c8ade056310790a31";

const CMC_TOKEN_LIST =
  "https://api.coinmarketcap.com/data-api/v3/uniswap/all.json";

// Use the native token of the connected chain as the default input token
const NATIVE = "NATIVE"; // Special address for native token

// WBTC as the default output token
const WBTC = "0xBdfdAc75d450154737ec1C4d8D949884F7B21ae2";

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
          <SwapWidget
            width="100%"
            provider={provider}
            jsonRpcEndpoint={jsonRpcEndpoint}
            // tokenList={CMC_TOKEN_LIST}
            defaultInputTokenAddress={NATIVE}
            defaultOutputTokenAddress={WBTC}
          />
        </div>
      </div>
    </>
  );
}
