import Link from "next/link";
import React from "react";

export default function Blog() {
  return (
    <>
      <div className="container m-auto py-[100px]">
        <div>
          <div>
            <h2 className="text-[32px] font-bold mb-20">Blog</h2>
          </div>

          <div className="grid grid-cols-3 gap-10">
            <Link href="/blog/1">
              <div className=" shadow-sm hover:cursor-pointer hover:scale-[1.03] transition ease-in-out">
                <div>
                  <img
                    src="/assets/images/blog1.jpeg"
                    className="h-[270px] w-full object-cover"
                    alt=""
                  />
                </div>
                <div className="p-8">
                  <div>
                    <h3 className="text-[24px] font-semibold mb-3">
                      Tokenlon Weekly
                    </h3>
                  </div>
                  <div>
                    <p className="text-[16px] leading-[1.5rem] font-light text-gray-500 tracking-wide mb-4">
                      The Optimism network released their native token, $OP,
                      this week. As the first Layer 2 Network on ETH to issue a
                      token, it had the market’s attention. You can check if you
                      met the airdrop{" "}
                    </p>
                  </div>
                  <div>
                    <p>2022-06-03</p>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/blog/1">
              <div className=" shadow-sm hover:cursor-pointer hover:scale-[1.03] transition ease-in-out">
                <div>
                  <img
                    src="/assets/images/blog2.png"
                    className="h-[270px] w-full object-cover"
                    alt=""
                  />
                </div>
                <div className="p-8">
                  <div>
                    <h3 className="text-[24px] font-semibold mb-3">
                      Tokenlon Weekly
                    </h3>
                  </div>
                  <div>
                    <p className="text-[16px] leading-[1.5rem] font-light text-gray-500 tracking-wide mb-4">
                      The Optimism network released their native token, $OP,
                      this week. As the first Layer 2 Network on ETH to issue a
                      token, it had the market’s attention. You can check if you
                      met the airdrop{" "}
                    </p>
                  </div>
                  <div>
                    <p>2022-06-03</p>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/blog/1">
              <div className=" shadow-sm hover:cursor-pointer hover:scale-[1.03] transition ease-in-out">
                <div>
                  <img
                    src="/assets/images/blog3.png"
                    className="h-[270px] w-full object-cover"
                    alt=""
                  />
                </div>
                <div className="p-8">
                  <div>
                    <h3 className="text-[24px] font-semibold mb-3">
                      Tokenlon Weekly
                    </h3>
                  </div>
                  <div>
                    <p className="text-[16px] leading-[1.5rem] font-light text-gray-500 tracking-wide mb-4">
                      The Optimism network released their native token, $OP,
                      this week. As the first Layer 2 Network on ETH to issue a
                      token, it had the market’s attention. You can check if you
                      met the airdrop{" "}
                    </p>
                  </div>
                  <div>
                    <p>2022-06-03</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
