"use client";
import React, { useLayoutEffect } from "react";
import Thingsbanner from "../../../images/lifestyle/Thingsbanner.png";
import Idea from "../../../images/lifestyle/Idea.png";

import Things1 from "../../../images/lifestyle/Things1.png";
import Things3 from "../../../images/lifestyle/Things3.png";
import Things2 from "../../../images/lifestyle/Things2.png";

import { motion } from "framer-motion";
import arrow from "@/images/common/Arrow.png";
import Image from "next/image";
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
      className="md:pt-12 p-2 md:p-0  min-h-[100vh]"
    >
      <div className="flex items-center md:pb-8 border-b-2 border-b-[#858585] w-[90%] mx-auto py-2 ">
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
        <p className="md:text-4xl uppercase font-bold">things i believe</p>
      </div>
      <div className="flex flex-col justify-center items-center w-11/12 mx-auto py-4">
        <div className="flex justify-center relative items-center">
          <Image src={Thingsbanner} alt="banner" />
          <Image
            src={Idea}
            className="absolute w-32 h-24 -bottom-14 object-contain"
            alt="idea"
          />
        </div>
        <div className="flex flex-col justify-center items-start mt-14 gap-2 w-full">
          <h6 className="uppercase font-semibold">i believe in...</h6>
          <p className="text-justify text-sm leading-6">{`Integrity and innovation are the cornerstones of success. I believe in creating technology that not only serves but also empowers, fostering growth and efficiency for businesses and individuals alike. Commitment to excellence and continuous improvement drives me to deliver solutions that not only meet but exceed expectations. In the digital age, being adaptable and proactive are not just traits, but necessities for making a positive impact.`}</p>
        </div>

        <div className="flex flex-col justify-center items-start mt-8 gap-2 w-full">
          <h6 className="uppercase font-semibold">Life Principles</h6>
          <li className="text-sm leading-6">
            <span className="font-semibold">Innovation :</span> I believe in constantly seeking new ways to solve
            problems and improve the world around us.
          </li>
          <li className="text-sm leading-6">
            <span className="font-semibold">Integrity:</span> Honesty and transparency are non-negotiable values in all
            my dealings.
          </li>
          <li className="text-sm leading-6">
           <span className="font-semibold"> Collaboration:</span> Great things are never done by one person alone;
            they’re achieved through teamwork and shared vision.
          </li>
        </div>
        <div className="flex flex-col justify-center items-start mt-14 gap-2 w-full">
          <h6 className="uppercase font-semibold">Vision for the Future</h6>
          <p className="text-justify text-sm leading-6">{`Looking ahead, my vision is to continue driving technological advancements and fostering a culture of innovation. I am committed to making a positive impact on society and empowering the next generation of leaders.`}</p>
        </div>

        <div className="grid grid-cols-3 place-content-center justify-center items-center mt-8 gap-8">
           <Image src={Things1} className="object-contain" alt="things"/>
           <Image src={Things2}  className="object-contain" alt="things"/>
           <Image src={Things3}   className="object-contain" alt="things"/>
        </div>

      </div>
    </motion.div>
  );
}

export default Page;
