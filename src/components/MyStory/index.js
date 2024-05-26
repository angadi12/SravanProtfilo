"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import arrow from "@/images/common/ArrowWhite.png";
import sravan from "@/images/common/sravan.jpg";
import Sravann from "@/images/hero/Sravann.png";

import Image from "next/image";
import Crouselslider from "../Crouselslider";
import { Divider } from "@nextui-org/react";
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
            whileInView={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            }}
            viewport={{ once: false }}
            transition={{ duration: 2 }}
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

      <div className="w-11/12 py-6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 place-content-center justify-between items-end gap-24">
        <div className="w-full  flex justify-center items-start relative">
          <Image
            src={sravan}
            className="h-[32rem] object-contain"
            alt="personal pic"
          />
          <Image
            className="absolute -bottom-8 -right-8 object-contain h-60"
            src={Sravann}
            alt="personal pic"
          />
        </div>
        <div className="w-full flex flex-col gap-4 justify-center items-start">
          <p className="text-[#FF7143] uppercase font-semibold">About me</p>
          <h6 className="text-3xl font-bold uppercase">
            WELCOME TO MY <br></br>WORLD.
          </h6>
          <p className="text-justify font-medium">
            The Founder and CEO of{" "}
            <span className="text-[#FF7143]">
              Angadi World Technologies Pvt. Ltd.
            </span>{" "}
            and{" "}
            <span className="text-[#FF7143]">
              International Business Expedition Trailblazers.
            </span>{" "}
            My goal is to support aspiring entrepreneurs, collaborate with
            like-minded individuals, and create ventures that bring health,
            wealth, and happiness to all involved.
          </p>
          <Divider className="bg-white" />
          <p>
            “I unite top talents to pursue greatness through teamwork and
            collaboration. Fueled by innovation, I've built a thriving business,
            impacting many lives.”
          </p>
          <div>
            <h6 className="uppercase font-semibold text-lg">SRAVAN KUMAN ANGADI</h6>

            <p className="text-[#FF7143] text-sm font-medium">FOUNDER - CEO</p>
          </div>
        </div>
      </div>

      <div className="py-28">
        <Crouselslider />
      </div>
    </div>
  );
}

export default MyStory;
