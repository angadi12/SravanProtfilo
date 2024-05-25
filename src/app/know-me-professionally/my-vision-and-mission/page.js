"use client";
import React, { useLayoutEffect, useState } from "react";
import Image from "next/image";
import arrow from "@/images/common/Arrow.png";
import vision from "@/images/Crouselimage/vision.png";
import visioneye from "@/images/Crouselimage/vision-eye.png";
import mission from "@/images/Crouselimage/mission.png";
import missiongoal from "@/images/Crouselimage/mission-goal.png";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();

  const [hoveredIndex, setHoveredIndex] = useState(null);

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
      className="pt-8 min-h-[100vh]"
    >
      <div className="flex items-center gap-2 p-2  border-b-2 border-b-[#858585] max-w-[90%] mx-auto md:py-5  ">
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
        <p className="md:text-5xl uppercase font-bold"> my mission & vision</p>
      </div>

      <div className="hidden md:flex  justify-center items-start gap-4 h-[100vh] w-11/12 mt-12 mx-auto">
        <motion.div
          onMouseOver={() => setHoveredIndex(1)}
          onMouseLeave={() => setHoveredIndex(null)}
          className="relative border-2 border-black flex flex-col items-center"
        >
          <motion.div
            initial={{ opacity: 1 }}
            animate={{
              opacity: hoveredIndex === 1 ? 1 : 0,
            }}
            transition={{ duration: 0.8 }}
            onMouseOver={() => setHoveredIndex(1)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Image
              className=" h-80 w-[32rem] transition-all duration-1000 border-1"
              src={vision}
            />
          </motion.div>
          <div className="absolute mt-12 flex flex-col justify-center items-center gap-2">
            <motion.p
              initial={{ opacity: 0, y: 0 }}
              animate={{
                opacity: hoveredIndex === 1 ? 1 : 0,
                y: hoveredIndex === 1 ? 340 : 0,
              }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="w-[24rem] text-justify break-all z-10"
            >
              {` To create a dynamic and informative digital solutions that  serves
              as a hub of knowledge and inspiration for aspiring  entrepreneurs
              looking to start, grow and scale their  businesses.`}
            </motion.p>
            <motion.p
              initial={{ opacity: 1, y: 0, color: "black" }}
              animate={{
                y: hoveredIndex === 1 ? 40 : 0,
                color: hoveredIndex === 1 ? "white" : "black",
              }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="font-bold leading-7 text-2xl uppercase"
            >
              vision
            </motion.p>
          </div>
          <Image className="absolute -bottom-14 h-28 w-28 " src={visioneye} />
        </motion.div>
        <motion.div
          onMouseOver={() => setHoveredIndex(2)}
          onMouseLeave={() => setHoveredIndex(null)}
          className="relative border-2 border-black flex flex-col items-center"
        >
          <motion.div
            initial={{ opacity: 1 }}
            animate={{
              opacity: hoveredIndex === 2 ? 1 : 0,
            }}
            transition={{ duration: 0.8 }}
            onMouseOver={() => setHoveredIndex(2)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Image
              className=" h-80 w-[32rem] transition-all duration-1000 border-1"
              src={mission}
            />
          </motion.div>
          <div className="absolute mt-12 flex flex-col justify-center items-center gap-2">
            <motion.p
              initial={{ opacity: 0, y: 0 }}
              animate={{
                opacity: hoveredIndex === 2 ? 1 : 0,
                y: hoveredIndex === 2 ? 340 : 0,
              }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="w-[24rem] text-justify break-all z-10"
            >
              {`My mission is to empower entrepreneurs with the  resources, tools and information they need to succeed in  their business ventures. Through our platform, we aim to  provide actionable insights, expert guidance, and valuable  resources to help entrepreneurs achieve their goals.`}
            </motion.p>
            <motion.p
              initial={{ opacity: 1, y: 0, color: "black" }}
              animate={{
                y: hoveredIndex === 2 ? 10 : -40,
                color: hoveredIndex === 2 ? "white" : "black",
              }}
              transition={{ duration: 0.8 }}
              className="font-bold leading-7 text-2xl uppercase"
            >
              mission
            </motion.p>
          </div>
          <Image className="absolute -bottom-14 h-28 w-28  " src={missiongoal} />
        </motion.div>
      </div>
      <div className="flex md:hidden flex-col  justify-center items-center gap-4 h-[70vh] w-11/12 mx-auto">
        <div className="relative">
          <Image src={vision} />
          <div className="absolute top-16 left-4 text-white flex flex-col justify-center items-center gap-2  self-center">
            <p className="text-xl font-semibold">VISION</p>
            <p className="text-xs">
              {" "}
              {` To create a dynamic and informative digital solutions that  serves
              as a hub of knowledge and inspiration for aspiring  entrepreneurs
              looking to start, grow and scale their  businesses.`}
            </p>

            {/* <Image className="h-16 w-16" src={visioneye} /> */}
          </div>
        </div>
        <div className="relative">
          <Image src={mission} />
          <div className="absolute top-12 left-4 text-white flex flex-col justify-center items-center gap-2  self-center">
            <p className="text-xl font-semibold">MISSION</p>
            <p className="text-xs">
            {`My mission is to empower entrepreneurs with the  resources, tools and information they need to succeed in  their business ventures. Through our platform, we aim to  provide actionable insights, expert guidance, and valuable  resources to help entrepreneurs achieve their goals.`}
            </p>

          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Page;
