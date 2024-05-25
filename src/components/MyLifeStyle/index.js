"use client";
import React, { useState } from "react";
import styles from "./index.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import personalGrey from "@/images/lifestyle/personalGrey.png";
import personalRed from "@/images/lifestyle/personalRed.png";
import professionalBlue from "@/images/lifestyle/professionalBlue.png";
import professionalgrey from "@/images/lifestyle/professionalgrey.png";
import quotes from "@/images/lifestyle/quotes.png";
import myHobbies from "@/images/lifestyle/myHobbies.png";
import inspiration from "@/images/lifestyle/inspiration.png";
import belifes from "@/images/lifestyle/belifes.png";

import expertise from "@/images/lifestyle/expertise.png";
import vision from "@/images/lifestyle/vision.png";
import hiring from "@/images/lifestyle/hiring.png";
import myJourney from "@/images/lifestyle/myJourney.png";
import Vector from '@/images/Crouselimage/Vector.png'

import arrow from "@/images/common/Arrow.png";
import { useRouter } from "next/navigation";
function MyLifestyle() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(1);

  const personal = [
    {
      title: "my HOBBIES",
      subTitle: "World Beyond Work",
      linkText: "Unleashing My Passions",
      link: "/know-me-personally/my-hobbies",
      bgImage: myHobbies,
    },
    {
      title: "Quotes i found",
      subTitle: "Wise Words",
      linkText: "Words that bought Hope",
      link: "/know-me-personally/quotes-i-found-interesting",
      bgImage: quotes,
    },
    {
      title: "things i belive",
      subTitle: "Power of Belief",
      linkText: "I put my trust in",
      link: "/know-me-personally/things-i-believe",
      bgImage: belifes,
    },
    {
      title: "what inspires me",
      subTitle: "Sources of Inspiration",
      linkText: "Fuel for My Creativity",
      link: "/know-me-personally/what-inspires-me",
      bgImage: inspiration,
    },
  ];

  const professional = [
    {
      title: "my expertise",
      subTitle: "Areas of Mastery",
      linkText: "Expertise and Skills",
      link: "/know-me-professionally/my-expertise",
      bgImage: expertise,
    },
    {
      title: "my vision & mission",
      subTitle: "Purpose in Action",
      linkText: "Statement for Success",
      link: "/know-me-professionally/my-vision-and-mission",
      bgImage: vision,
    },
    {
      title: "hiring talents",
      subTitle: "Players On Board",
      linkText: "Building Dream Team",
      link: "/know-me-professionally/hiring-talents",
      bgImage: hiring,
    },
    {
      title: "my journey",
      subTitle: "Career Snapshot",
      linkText: "Professional Experience",
      link: "/know-me-professionally/my-journey",
      bgImage: myJourney,
    },
  ];
  const variants = {
    left: {
      backgroundColor: "#ff3535",
      x: 0,
      y: 0,
      transition: {
        ease: "linear",
        duration: 0.2,
      },
    },
    right: {
      backgroundColor: "#1877f2",
      right: 0,
      x: "100%",
      transition: {
        ease: "linear",
        duration: 0.2,
      },
    },
  };
  return (
    <div className="bg-white text-black pb-10">
      <p className="uppercase text-2xl font-bold leading-tight tracking-tighter text-center">
        showcase of my lifestyle
      </p>
      <div className="flex mt-10 justify-center border-b border-b-[#858585] md:max-w-[80%] mx-auto mb-10 relative">
        <div
          className="flex-1 justify-center items-center flex py-5"
          onClick={() => {
            setActiveTab(1);
          }}
        >
          {activeTab === 1 ? (
            <Image src={personalRed} className="max-w-[85%]" />
          ) : (
            <Image src={personalGrey} className="max-w-[85%]" />
          )}
        </div>
        <div
          className="flex-1 justify-center items-center flex py-5"
          onClick={() => {
            setActiveTab(2);
          }}
        >
          {activeTab === 2 ? (
            <Image src={professionalBlue} className="max-w-[85%]" />
          ) : (
            <Image src={professionalgrey} className="max-w-[85%]" />
          )}
        </div>
        <motion.div
          className={`absolute min-h-[1px] bottom-0 w-[50%] left-0`}
          style={{
            backgroundColor: activeTab == 1 ? "#ff3535" : "#1877f2",
          }}
          key="animation-on-state"
          variants={variants}
          animate={activeTab == 1 ? "left" : "right"}
        ></motion.div>
      </div>
      <div
        style={{
          minHeight: "fit-content",
          maxWidth: "70%",
          marginInline: "auto",
          marginBottom: "30px",
        }}
        className={`${styles.container} hidden ${styles.show}`}
      >
        {activeTab == 1 &&
          personal.map((p, index) => {
            return (
              <div
                key={index}
                className={styles.item}
                style={{
                  overflow: "hidden",
                  position: "relative",
                }}
                onClick={() => router.push(p.link)}
              >
                <div
                  className="shadow-[0px_0px_4px_1px_#00000040]"
                  style={{
                    backgroundColor: "transparent",
                    minHeight: "300px",
                    minWidth: "fit-content",
                    overflow: "hidden",
                    padding: "20px",
                    whiteSpace: "nowrap",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <p className="text-xs font-bold leading-tight tracking-tighter text-[#858585] mt-auto mb-2">
                    {p.subTitle}
                  </p>
                  <p className="text-3xl font-extrabold leading-none tracking-tighter whitespace-break-spaces uppercase mb-2">
                    {p.title}
                  </p>
                  <div className={`min-h-[2px] ${styles.divider}`} />
                  <div className="flex justify-between mt-2">
                    <p className="text-sm font-sm leading-none tracking-tighter">
                      {p.linkText}
                    </p>
                    <Image
                      src={arrow}
                      height={20}
                      width={20}
                      style={{
                        width: "10px",
                        rotate: "90deg",
                      }}
                      unoptimized
                    />
                  </div>
                </div>
                <div className={styles.testBg}>
                  <Image
                    className={styles.image}
                    src={p.bgImage}
                    unoptimized
                  ></Image>
                </div>
              </div>
            );
          })}

        {activeTab == 2 &&
          professional.map((p, index) => {
            return (
              <div
                key={index}
                className={`${styles.item}`}
                style={{
                  overflow: "hidden",
                  position: "relative",
                }}
                onClick={() => router.push(p.link)}
              >
                <div
                  className="shadow-[0px_0px_4px_1px_#00000040]"
                  style={{
                    backgroundColor: "transparent",
                    minHeight: "300px",
                    minWidth: "fit-content",
                    overflow: "hidden",
                    padding: "20px",
                    whiteSpace: "nowrap",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <p className="text-xs font-bold leading-tight tracking-tighter text-[#858585] mt-auto mb-2">
                    {p.subTitle}
                  </p>
                  <p className="text-3xl font-extrabold leading-none tracking-tighter whitespace-break-spaces uppercase mb-2">
                    {p.title}
                  </p>
                  <div className={`min-h-[2px] ${styles.divider}`} />
                  <div className="flex justify-between mt-2">
                    <p className="text-sm font-sm leading-none tracking-tighter">
                      {p.linkText}
                    </p>
                    <Image
                      src={arrow}
                      height={20}
                      width={20}
                      style={{
                        width: "10px",
                        rotate: "90deg",
                      }}
                      unoptimized
                    />
                  </div>
                </div>
                <div className={styles.testBg}>
                  <Image
                    className={styles.image}
                    src={p.bgImage}
                    height={100}
                    width={100}
                    unoptimized
                  ></Image>
                </div>
              </div>
            );
          })}
      </div>
      <div className="flex flex-col md:hidden">
        {activeTab == 1 &&
          personal.map((p, index) => {
            return (
              <div
                key={index}
                className={styles.item}
                style={{
                  overflow: "hidden",
                  position: "relative",
                }}
                onClick={() => router.push(p.link)}
              >
                <div
                  className="shadow-[0px_0px_4px_1px_#00000040]"
                  style={{
                    backgroundColor: "transparent",
                    minWidth: "fit-content",
                    overflow: "hidden",
                    padding: "20px",
                    whiteSpace: "nowrap",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <p className="text-xs font-bold leading-tight tracking-tighter text-[#858585] mt-auto mb-2">
                    {p.subTitle}
                  </p>
                  <p className="text-3xl font-extrabold leading-none tracking-tighter whitespace-break-spaces uppercase mb-2 text-black">
                    {p.title}
                  </p>
                  <div className={`min-h-[2px] bg-black`} />
                  <div className="flex justify-between mt-2">
                    <p className="text-sm font-sm leading-none tracking-tighter text-black">
                      {p.linkText}
                    </p>
                    <Image
                      src={arrow}
                      height={20}
                      width={20}
                      style={{
                        width: "10px",
                        rotate: "90deg",
                      }}
                      unoptimized
                    />
                  </div>
                </div>
              </div>
            );
          })}

        {activeTab == 2 &&
          professional.map((p, index) => {
            return (
              <div
                key={index}
                className={`${styles.item}`}
                style={{
                  overflow: "hidden",
                  position: "relative",
                }}
                onClick={() => router.push(p.link)}
              >
                <div
                  className="shadow-[0px_0px_4px_1px_#00000040]"
                  style={{
                    backgroundColor: "transparent",
                    minWidth: "fit-content",
                    overflow: "hidden",
                    padding: "20px",
                    whiteSpace: "nowrap",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <p className="text-xs font-bold leading-tight tracking-tighter text-[#858585] mt-auto mb-2">
                    {p.subTitle}
                  </p>
                  <p className="text-3xl font-extrabold leading-none tracking-tighter whitespace-break-spaces uppercase mb-2">
                    {p.title}
                  </p>
                  <div className={`min-h-[2px] ${styles.divider}`} />
                  <div className="flex justify-between mt-2">
                    <p className="text-sm font-sm leading-none tracking-tighter">
                      {p.linkText}
                    </p>
                    <Image
                      src={arrow}
                      height={20}
                      width={20}
                      style={{
                        width: "10px",
                        rotate: "90deg",
                      }}
                      unoptimized
                    />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div className="md:w-3/4 mx-auto md:p-10 p-3 ">
        <div className="flex justify-start items-end gap-2">
          <Image className="mb-6" src={Vector}/>
          <h6 className="leading-7 tracking-wide uppercase font-semibold w-96">Navigating Life's Pathways with Purpose, attitude and approach.</h6>
        </div>
        <div className="flex justify-center md:flex-row flex-col items-center gap-12 mt-8">
          <div className=" border-l-2 p-4 border-black flex flex-col justify-between items-start gap-16 h-auto">
            <div>
              <p className="font-extrabold text-4xl leading-10">01</p>
              <p className="uppercase font-medium">purpose</p>
            </div>
            <div className="flex justify-start items-start gap-2 flex-col">
              <li className="text-xs font-semibold w-52 text-justify uppercase break-all">{`My philosophy is rooted in the belief that success is achieved through hard work,  determination, and a willingness to take risks.`}</li>
              <li className="text-xs font-semibold w-52 text-justify uppercase break-all">{`I strive to make a positive impact on the world and give back to society.`}</li>
            </div>
          </div>
          <div className=" border-l-2 p-4 border-black flex flex-col justify-between items-start gap-16 h-auto">
            <div>
              <p className="font-extrabold text-4xl leading-10">02</p>
              <p className="uppercase font-medium">attitude</p>
            </div>
            <div className="flex justify-start items-start gap-2 flex-col">
              <li className="text-xs font-semibold w-52 text-justify uppercase break-all">{`I embrace failure as a natural part of the process and use it as an opportunity to learn, adapt,  and evolve.`}</li>
              <li className="text-xs font-semibold w-52 text-justify uppercase break-all">{`I understand the value of perseverance and the ability to bounce back from setbacks.`}</li>
            </div>
          </div>
          <div className=" border-l-2 p-4 border-black flex flex-col justify-between items-start gap-16 h-auto">
            <div>
              <p className="font-extrabold text-4xl leading-10">03</p>
              <p className="uppercase font-medium">purpose</p>
            </div>
            <div className="flex justify-start items-start gap-2 flex-col">
              <li className="text-xs font-semibold w-52 text-justify uppercase break-all">{`I embrace the journey of continuous learning and, understanding of knowledge.`}</li>
              <li className="text-xs font-semibold w-52 text-justify uppercase break-all">{`I remain steadfast in my commitment to staying focused, adaptable, and perpetually in pursuit of knowledge.`}</li>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default MyLifestyle;
