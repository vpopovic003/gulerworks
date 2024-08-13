import LineDivider from "components/atoms/LineDivider";
import Image from "next/image";
import React from "react";

const LogoList = () => {
  return (
    <>
      <section
        className="py-8 m-0 flex flex-row flex-wrap place-items-center justify-around gap-4 md:gap-0 border-b border-borderLight"
        data-aos="fade-left"
      >
        {/* <a
          href="https://luxemoodshop.com/"
          rel="noreferrer"
          target="_blank"
          className=""
        >
          <Image
            src={"/brands/logo-luxemood-white.png"}
            width={175}
            height="36"
            alt="luxemood logo"
          />
        </a> */}
        <a
          href="https://holulu.net/"
          rel="noreferrer"
          target="_blank"
          className=""
        >
          <Image
            src={"/brands/logo-holulu.png"}
            width={135}
            height="36"
            alt="holulu logo"
          />
        </a>
      </section>
    </>
  );
};

export default LogoList;
