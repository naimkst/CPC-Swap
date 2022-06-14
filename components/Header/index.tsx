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
import * as copy from "copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";

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

  //Conenct to Metamask All Time
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

  //Address Change Event
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

  //Check Connection Active Or Not
  const checkActiveOrNot = async () => {
    if (active == false) {
      const setAddressLocal = localStorage.removeItem("metamaskAddress");
    }
  };

  //Address Clipboard Function
  const copyAddress = async () => {
    console.log("copy");
    const addressGet = account;
    copy(account?.toString());
    toast.success("🦄 Copy Successfull!");
  };

  //Logout Or Disconnect Form Metamask
  const logOut = async () => {
    const setAddressLocal = await localStorage.removeItem(
      "metamaskAddress"
    );
    const getAddressLocal = localStorage.getItem("metamaskAddress");
    setLocalData(getAddressLocal);
    deactivate();
    setshow(!show);
  }

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
          {!account ? (
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
              <div className="flex items-center hover:cursor-pointer">
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
                  <p className="text-gray-600 text-[14px] tracking-wider ">{ account.substring(0, 6) }...{ account.substring(36, 100) }</p>
                  <p className="text-[11px] text-gray-500">0.01 ETH</p>
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
                            onClick={() => copyAddress()}
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-gray-600 hover:cursor-pointer"
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

                      <div className="mt-16 flex items-center gap-5 text-center justify-between">
                        <div className="hover:cursor-pointer">
                          <div className="">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-9 w-9 text-gray-600 text-center m-auto"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={1.7}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </div>
                          <div className="text-gray-600 text-[13px] text-center m-auto">
                            Transaction
                          </div>
                        </div>

                        <div className="hover:cursor-pointer">
                          <div className="">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-9 w-9 text-gray-600 text-center m-auto"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={1.7}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                              />
                            </svg>
                          </div>
                          <div className="text-gray-600 text-[13px] text-center m-auto">
                            Authorization
                          </div>
                        </div>

                        <div onClick={() => logOut()} className="hover:cursor-pointer">
                          <div className="">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-9 w-9 text-gray-600 text-center m-auto"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={1.7}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                              />
                            </svg>
                          </div>
                          <div className="text-gray-600 text-[13px] text-center m-auto">
                            Disconnect
                          </div>
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
