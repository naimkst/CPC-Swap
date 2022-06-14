import Link from "next/link";
import React from "react";
import { useWeb3React } from "@web3-react/core";
import type { NextPage } from "next";
import { useState, useEffect } from "react";
import { InjectedConnector } from "@web3-react/injected-connector";
import { ethers } from "ethers";
import contracts from "../../public/MyToken.json";
import { disconnect } from "process";
var crypto = require("crypto");
import * as copy from 'copy-to-clipboard';

const injected = new InjectedConnector({ supportedChainIds: [1, 3, 4, 5, 42] });

export default function Header() {
  const [hasMetamask, setHasMetamask] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [localData, setLocalData]: any = useState("");
  const [show, setshow] = useState(false);

  const contractAddress = "0x38a87f7F8Ce9188C51dB10366e96150C6326A0A9";
  const { active, activate, deactivate, chainId, account, library, connector } =
    useWeb3React();

  async function connect() {
    try {
      await activate(injected);
      setHasMetamask(true);
    } catch (e) {
      console.log(e);
    }
  }

  if (active) {
    console.log(active);
    const setAddressLocal = localStorage.setItem("metamaskAddress", account);
  }

  const checkMetamask = async () => {
    // alert("Trigger!")
    const localData = localStorage.getItem("metamaskAddress");
    if (localData !== undefined && localData !== null) {
      await activate(injected);
    } else {
      if (active) {
        await activate(injected);
        console.log("active");
      } else {
        const setAddressLocal = localStorage.removeItem("metamaskAddress");
        setLocalData(setAddressLocal);
        console.log("not active");
      }
    }
  };

  const getAddressLocal = async () => {
    if (library) {
      const { provider: ethereum } = library;
      ethereum.on("accountsChanged", async () => {
        const addr = await library.listAccounts();

        console.log("#########", addr.length);
        if (addr) {
          // window.location.reload();
          const setAddressLocal = await localStorage.removeItem(
            "metamaskAddress"
          );
          setLocalData(setAddressLocal);
          console.log("disconnect!");
        } else {
          // await activate(injected);
          console.log("Add Item account");
          const setAddressLocal = await localStorage.setItem(
            "metamaskAddress",
            account
          );
          // window.location.reload();
        }
        // window.location.reload();
      });
    }
  };

  const checkActiveOrNot = async () => {
    if (active == false) {
      const setAddressLocal = localStorage.removeItem("metamaskAddress");
    }
  };

  useEffect(() => {
    const setAddressLocal = localStorage.getItem("metamaskAddress");
    setLocalData(setAddressLocal);
    if (!localData) {
      checkMetamask();
    }
    checkActiveOrNot();
    getAddressLocal();
  }, [hasMetamask, active, checkMetamask, localData]);

  return (
    <>
      {JSON.stringify(active)}
      <div className=" bg-slate-100">
        <div className="container flex items-center justify-between m-auto h-[80px]">
          <div>
            <Link href="/">
              <img
                className="hover: cursor-pointer"
                src="/assets/images/logo.svg"
                alt=""
              />
            </Link>
          </div>
          <div>
            <ul className="flex items-center justify-center gap-10">
              <Link href="/swap">
                <li className="text-[16px] hover:text-[#5f4dbc] hover: cursor-pointer">
                  Swap
                </li>
              </Link>
              <li className="text-[16px] hover:text-[#5f4dbc] hover: cursor-pointer">
                Withdraw
              </li>
              <li className="text-[16px] hover:text-[#5f4dbc] hover: cursor-pointer">
                Deposite
              </li>
              <Link href="/blog">
                <li className="text-[16px] hover:text-[#5f4dbc] hover: cursor-pointer">
                  Blog
                </li>
              </Link>
            </ul>
          </div>
          {account ? (
            <div>
              <button
                onClick={() => connect()}
                className="bg-[#5f4dbc] text-white py-3 px-6 rounded-full text-[16px]"
              >
                Connect Wallet
              </button>
            </div>
          ) : (
            <div onClick={() => setshow(!show)} className="relative">
              <div className="flex items-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 mr-2 bg-[#5f4dbc] rounded-full p-[5px] text-[#fff]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p>0xC095...0044</p>
                  <p className="text-[12px]">0.01 ETH</p>
                </div>
              </div>

              <div className="absolute bg-slate-200 p-4 w-[300px] left-0 top-14 rounded-md">
                <div>
                  <div>My Wallet</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {show && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-[30%]">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-[20px] font-semibold">My Wallet</h3>
                  <svg
                    onClick={() => setshow(!show)}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#000] hover:cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div>
                    <div>
                      <div className="text-gray-400 text-[13px]">
                        Wallet Address
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-[14px] text-gray-600">
                          0xC095768Dd0FcD7Ba8f2Fbfb0DF6Ff8337113A5E3
                        </div>
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-gray-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*footer*/}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
}
