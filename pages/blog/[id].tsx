import React from "react";

export default function SingleBlog() {
  return (
    <>
      <div className="w-[65%] py-[100px] m-auto">
        <div className="pb-9">
          <h3 className="text-[32px] font-medium pb-3">Blog post title</h3>
          <p className="text-gray-400">Updated at 2022-06-10</p>
        </div>

        <hr />

        <div>
          <img
            src="/assets/images/single-blog.jpeg"
            className="w-full mt-12 mb-5"
            alt=""
          />
        </div>

        <div>
          <p className="leading-7 tracking-wide py-4">
            The Optimism network released their native token, $OP, this week. As
            the first Layer 2 Network on ETH to issue a token, it had the
            market’s attention. You can check if you met the airdrop conditions,
            and receive it here. Tokenlon will also be online on the Arbitrum
            network very soon - stay tuned for our L2 development.
          </p>

          <p className="leading-7 tracking-wide py-4">
            The Optimism network released their native token, $OP, this week. As
            the first Layer 2 Network on ETH to issue a token, it had the
            market’s attention. You can check if you met the airdrop conditions,
            and receive it here. Tokenlon will also be online on the Arbitrum
            network very soon - stay tuned for our L2 development.
          </p>

          <p className="leading-7 tracking-wide py-4">
            The Optimism network released their native token, $OP, this week. As
            the first Layer 2 Network on ETH to issue a token, it had the
            market’s attention. You can check if you met the airdrop conditions,
            and receive it here. Tokenlon will also be online on the Arbitrum
            network very soon - stay tuned for our L2 development.
          </p>
        </div>
      </div>
    </>
  );
}
