"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import arrow from "@/images/common/ArrowWhite.png";
import sravan from "@/images/common/sravan.jpg";

import Image from "next/image";
import Crouselslider from "../Crouselslider";
function MyStory() {
  const [showMyStory, setShowMyStory] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowMyStory((prev) => !prev);
    }, 2000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col">
    
      <div className="flex py-12 mt-4 mb-8 gap-12   justify-center text-right">
        <div>
          <motion.p
            initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
            whileInView={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            viewport={{ once: false }}
            transition={{ duration: 2,}}
            className="text-[--color-theme] text-3xl md:text-8xl leading-10 font-semibold "
          >
            MY
          </motion.p>
          {showMyStory ? (
            <motion.div
              // reveals content from left to right
              initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
              animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
              viewport={{ once: false }}
              transition={{ duration: 2, repeat: Infinity }}
              className=" text-3xl md:text-8xl leading-10 font-semibold md:w-96 w-32"
            >
              STORY.
            </motion.div>
          ) : (
            <motion.div
              // reveals content from left to right
              initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
              animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
              viewport={{ once: false }}
              transition={{ duration: 2, repeat: Infinity }}
              className=" text-3xl md:text-8xl leading-10 font-semibold md:w-96 w-32"
            >
              WORLD.
            </motion.div>
          )}
        </div>
        <div className="relative min-h-[60px] min-w-[60px] md:min-h-[140px] md:min-w-[140px] ms-5 flex items-end">
          <motion.div
            whileInView={{ rotate: "-135deg" }}
            transition={{
              ease: "linear",
              duration: 2,
              repeat: 0,
            }}
            viewport={{ once: false }}
            className="text-white flex items-end min-h-[60px] min-w-[60px] md:min-h-[140px] md:min-w-[140px]"
          >
            <Image
              src={arrow}
              height={60}
              width={60}
              className="h-[60px] w-[60px] md:h-[120px] md:w-[120px]"
              unoptimized
            />
          </motion.div>
        </div>
      </div>
      <div className="mt-10 md:max-w-[800px] mx-auto text-center">
        <p className="mx-auto md:text-4xl text-2xl font-bold leading-14 tracking-tighter">
          WELCOME TO MY WORLD.
        </p>
        <p className="mt-5 text-base font-normal leading-7 tracking-tighter text-center">
          The Founder and CEO of{" "}
          <span className="text-[--color-theme]">
            Angadi World Technologies Pvt. Ltd.
          </span>{" "}
          and{" "}
          <span className="text-[--color-theme]">
            International Business Expedition Trailblazers
          </span>
          . My goal is to support aspiring entrepreneurs, collaborate with
          like-minded individuals, and create ventures that bring health,
          wealth, and happiness to all involved.
        </p>
      </div>
      <div className="mt-10 md:w-11/12 md:h-96 w-full mx-auto text-center flex md:flex-row flex-col   border-white border ">
        <div className="md:flex-1 ">
          <Image
            className="w-full h-[23rem] object-cover "
            src={sravan}
            height={100}
            width={100}
            // style={{
            //   width: "100%",
            //   height: "100%",
            //   objectFit: "cover",
            //   verticalAlign: "middle",
            // }}
            unoptimized
          />
        </div>
        <div className="border-s border-s-white p-5 flex items-center  flex-col flex-1 text-[14px] text-left md:text-center">
          <p>
            {`“A Journey of Innovation and Impact   
Welcome to a world where curiosity meets innovation. I am Sravan Kumar Angadi, the entrepreneurial mind behind Angadi World Technologies, leading a suite of ventures from the forefront of technological innovation and sustainable development. Transitioning from aeronautical engineering to pioneering in diverse industries, my mission is clear: leverage technology to forge solutions that address real-world challenges, fostering progress and positive change. Through endeavors like QR Angadi, Interior Angadi, and Organic Angadi, I aim to craft a future where innovation not only drives business success but also contributes to a sustainable and impactful tomorrow”`}
          </p>
          <p className="mt-2 mb-1 text-base font-semibold leading-7 tracking-tighter">
            SRAVAN KUMAN ANGADI
          </p>
          <p className="text-[--color-theme] text-base font-semibold leading-7 tracking-tighter">
            FOUNDER - CEO
          </p>
        </div>
      </div>
      <div className="py-28">
        <Crouselslider />
      </div>
    </div>
  );
}

export default MyStory;
