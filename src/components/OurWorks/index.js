"use client";
import React from "react";
import { motion } from "framer-motion";
import arrow from "@/images/common/ArrowWhite.png";
import Image from "next/image";
import image1 from "@/images/ourworks/image1.png";
import image2 from "@/images/ourworks/image2.png";
import image3 from "@/images/ourworks/image3.png";
import image4 from "@/images/ourworks/image4.png";
import image6 from "@/images/ourworks/image6.png";
import image7 from "@/images/ourworks/image7.png";

function OurWorks() {
  return (
    <div
      style={{ maxWidth: "85%", marginInline: "auto", paddingBlock: "80px" }}
    >
      {" "}
      <div className="flex flex-col justify-center text-right">
        <div className="flex justify-center text-right mb-10">
          <motion.div
            // reveals content from left to right
            initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
            whileInView={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className=" text-4xl md:text-8xl font-bold "
          >
            <p className="text-[--color-theme]">OUR</p>
            WORKS.
          </motion.div>
          <div className="relative min-h-[60px] min-w-[60px] md:min-h-[140px] md:min-w-[140px] ms-5 flex items-end">
            <motion.div
              whileInView={{ rotate: "-135deg" }}
              transition={{
                ease: "linear",
                duration: 0.3,
                repeat: 0,
              }}
              viewport={{ once: true }}
              className="text-white flex items-end min-h-[60px] min-w-[60px] md:min-h-[140px] md:min-w-[140px] absolute"
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
        <div className="flex justify-center text-center flex-wrap px-20">
          <motion.div
            className="flex-1 relative px-5 py-3"
            initial={{ opacity: 0, left: "-30%" }}
            whileInView={{ opacity: 1, left: "0%" }}
            transition={{
              ease: [0.32, -0.26, 0.39, 1.43],
              duration: 1,
              repeat: 0,
            }}
            viewport={{ once: true }}
          >
            <div className="bg-[#C4C4C41A] p-2 flex flex-col rounded-md">
              <Image
                src={image1}
                height={100}
                width={100}
                style={{
                  width: "100%",
                }}
                unoptimized
              />
              <button className="uppercase text-[10px] font-semibold bg-[#FFFFFF0D] rounded-md p-2 mt-3">
                website design & development
              </button>
            </div>
          </motion.div>
          <motion.div
            className="flex-1 relative px-5 py-3 "
            initial={{ opacity: 0, right: "-30%" }}
            whileInView={{ opacity: 1, right: "0%" }}
            transition={{
              ease: [0.32, -0.26, 0.39, 1.43],
              duration: 1,
              repeat: 0,
            }}
            viewport={{ once: true }}
          >
            <div className="bg-[#C4C4C41A] p-2 flex flex-col rounded-md">
              <Image
                src={image2}
                height={100}
                width={100}
                style={{
                  width: "100%",
                }}
                unoptimized
              />
              <button className="uppercase text-[10px] font-semibold bg-[#FFFFFF0D] rounded-md p-2 mt-3">
                website design & development
              </button>
            </div>
          </motion.div>
        </div>
        <div className="flex justify-center text-center flex-wrap px-20">
          <motion.div
            className="flex-1 relative px-5 py-3"
            initial={{ opacity: 0, left: "-30%" }}
            whileInView={{ opacity: 1, left: "0%" }}
            transition={{
              ease: [0.32, -0.26, 0.39, 1.43],
              duration: 1,
              repeat: 0,
            }}
            viewport={{ once: true }}
          >
            <div className="bg-[#C4C4C41A] p-2 flex flex-col rounded-md">
              <Image
                src={image3}
                height={100}
                width={100}
                style={{
                  width: "100%",
                }}
                unoptimized
              />
              <button className="uppercase text-[10px] font-semibold bg-[#FFFFFF0D] rounded-md p-2 mt-3">
                website design & development
              </button>
            </div>
          </motion.div>
          <motion.div
            className="flex-1 relative px-5 py-3 "
            initial={{ opacity: 0, right: "-30%" }}
            whileInView={{ opacity: 1, right: "0%" }}
            transition={{
              ease: [0.32, -0.26, 0.39, 1.43],
              duration: 1,
              repeat: 0,
            }}
            viewport={{ once: true }}
          >
            <div className="bg-[#C4C4C41A] p-2 flex flex-col rounded-md">
              <Image
                src={image4}
                height={100}
                width={100}
                style={{
                  width: "100%",
                }}
                unoptimized
              />
              <button className="uppercase text-[10px] font-semibold bg-[#FFFFFF0D] rounded-md p-2 mt-3">
                website design & development
              </button>
            </div>
          </motion.div>
        </div>{" "}
        <div className="flex justify-center text-center flex-wrap px-20">
          <motion.div
            className="flex-1 relative px-5 py-3"
            initial={{ opacity: 0, left: "-30%" }}
            whileInView={{ opacity: 1, left: "0%" }}
            transition={{
              ease: [0.32, -0.26, 0.39, 1.43],
              duration: 1,
              repeat: 0,
            }}
            viewport={{ once: true }}
          >
            <div className="bg-[#C4C4C41A] p-2 flex flex-col rounded-md">
              <Image
                src={image6}
                height={100}
                width={100}
                style={{
                  width: "100%",
                }}
                unoptimized
              />
              <button className="uppercase text-[10px] font-semibold bg-[#FFFFFF0D] rounded-md p-2 mt-3">
                website design & development
              </button>
            </div>
          </motion.div>
          <motion.div
            className="flex-1 relative px-5 py-3 "
            initial={{ opacity: 0, right: "-30%" }}
            whileInView={{ opacity: 1, right: "0%" }}
            transition={{
              ease: [0.32, -0.26, 0.39, 1.43],
              duration: 1,
              repeat: 0,
            }}
            viewport={{ once: true }}
          >
            <div className="bg-[#C4C4C41A] p-2 flex flex-col rounded-md">
              <Image
                src={image7}
                height={100}
                width={100}
                style={{
                  width: "100%",
                }}
                unoptimized
              />
              <button className="uppercase text-[10px] font-semibold bg-[#FFFFFF0D] rounded-md p-2 mt-3">
                website design & development
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default OurWorks;
