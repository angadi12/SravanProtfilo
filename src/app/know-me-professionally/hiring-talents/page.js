"use client";
import React, { useLayoutEffect, useState } from "react";
import Image from "next/image";
import arrow from "@/images/common/Arrow.png";
import { motion } from "framer-motion";
import hiring from "@/images/Crouselimage/hiring.png";
import { useRouter } from "next/navigation";


function Page() {
  const router = useRouter();

  useLayoutEffect(() => {
    const body = document.getElementsByTagName("body");
    body[0].style.backgroundColor = "white";
    body[0].style.color = "black";

    return () => {
      body[0].style.backgroundColor = "black";
      body[0].style.color = "white";
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 2 }}
      className="pt-8 min-h-[100vh] pb-4"
    >
      <div className="flex items-center gap-2 p-2  border-b-2 border-b-[#858585] max-w-[80%] mx-auto md:py-5  ">
        <Image
          src={arrow}
          style={{
            rotate: "-90deg",
            width: "40px",
            marginRight: "30px",
            cursor: "pointer",
          }}
          onClick={() => router.back()}
        />
        <p className="md:text-5xl uppercase font-bold"> HIIRING TALENTS</p>
      </div>
      <div className="mt-12 flex flex-col md:flex-row justify-center items-start md:w-3/4 w-[90%] mx-auto gap-8 border-b-2 border-gray-700 pb-8">
        <Image className="h-96 w-96" src={hiring} />
        <p className="text-justify  md:leading-10 text-pretty ">{`At our company, we're on a mission to assemble the best team possible to ensure exceptional results for your projects. We believe that success is built upon the foundation of talent, dedication, and collaboration. That's why we're committed to handpicking individuals who not only excel in their respective fields but also embody our values of innovation, integrity, and excellence. We understand the importance of delivering top-notch solutions, and we're determined to achieve this by fostering a culture of teamwork, continuous learning, and forward-thinking. With our team by your side, you can trust that your projects will be met with unparalleled expertise and a relentless drive for success. Together, let's bring your vision to life and exceed your expectations.`}</p>
      </div>
      <p className="text-center text-xs md:text-base px-2  text-gray-500 uppercase mt-4 font-medium">CURRENTLY THERE ARE NO OPENINGS IN OUR COMPANY</p>
    </motion.div>
  );
}
export default Page;
