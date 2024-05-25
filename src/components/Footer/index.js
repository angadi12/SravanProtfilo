import React from "react";

import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareTwitter } from "react-icons/fa6";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react"
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

function Footer() {

  gsap.registerPlugin(useGSAP,ScrollToPlugin);

  useGSAP(() => {
    const button = document.querySelector("#aboutme");
    const button2 = document.querySelector("#socialmedia");
  
    button.addEventListener("click", () => {
      gsap.to(window, {duration: 3, scrollTo:{y:"#section1", offsetY:70},ease:"back.out"});
    });
    button2.addEventListener("click", () => {
      gsap.to(window, {duration: 3, scrollTo:{y:"#section4", offsetY:70},ease:"back.out"});
    });
   
  },
 
); 

  return (
    <div>
      <div className="md:m-10 m-4 flex items-center justify-center border border-white rounded-lg p-32 relative ">
        <p className="text-5xl font-semibold relative z-30">
          Let's start a{" "}
          <span className="font-[Pacifico] text-7xl font-normal">Project</span>
        </p>
        <div
          className="absolute text-white rounded-lg z-20 flex justify-center items-end"
          id="start"
        >
          <button className="relative z-30 mb-20 font-semibold">
            {" "}
            CONTACT ME
          </button>
        </div>
      </div>
      <div className="md:p-10 p-4 flex uppercase justify-between flex-wrap gap-5">
        <div className="flex flex-col gap-3">
          <p className="text-[--color-theme] font-bold text-sm">Links</p>
          <p id="aboutme" className="font-normal cursor-pointer text-sm">about me</p>

          <p className="font-normal text-sm">our solutions</p>
          <p className="font-normal text-sm">our projects</p>
          <p id="socialmedia" className="font-normal text-sm">social</p>
        </div>
        <div className="flex flex-col gap-3 min-w-fit">
          <p className="text-[--color-theme] font-bold text-sm">company</p>
          <p className="font-normal text-sm">
            {" "}
            angadi world technologies pvt ltd
          </p>
          <Link href={'https://www.qrangadi.com'}>
          <p className="font-normal text-sm">qr angadi</p>

          </Link>
          <p className="font-normal text-sm">
            international business expedition trailblazers
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <hr className="lg:hidden"></hr>
          <div>
            <p className="text-[12px]">email</p>
            <p className="md:text-3xl lowercase">sravan@angadiworldtech.com </p>
          </div>
          {/* <div>
            <p className="text-[12px]">phone</p>
            <p className="text-3xl">+91-9110314465</p>
          </div> */}
          <div>
            <p className="text-[12px]">social</p>
            <p className="text-3xl flex gap-2 mt-2">
              <Link href={'https://www.instagram.com/angadiworldtech/'}>
              <AiFillInstagram />

              </Link>
              <Link href={''}>

              <FaFacebookSquare />
              </Link>
              <Link href={'https://www.linkedin.com/company/awt-technology'}>

              <IoLogoLinkedin />
              </Link>
              <FaSquareTwitter />
              <TbBrandYoutubeFilled />
            </p>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="flex justify-center md:text-[14px] py-3 text-xs">
        <p>2024 SRAVAN KUMAR ANGADI - All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
