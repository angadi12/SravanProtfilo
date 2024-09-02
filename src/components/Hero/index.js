"use client";
import React, { useState } from "react";
import Image from "next/image";
import sravan from "@/images/hero/sravan.png";
import orangeBlob from "@/images/common/orange-blob.png";
import { FaPhoneAlt } from "react-icons/fa";
import { useTypewriter } from "react-simple-typewriter";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import birthicon from "../../images/hero/Birthicon.png";
import Frame from "../../images/hero/Frame.png";
import Birthslide from "../../images/hero/Birthslide.png";
import Signslide from "../../images/hero/Signslide.png";
import Locationslide from "../../images/hero/Locationslide.png";
import Sign from "../../images/hero/Sign.png";
import Location from "../../images/hero/Location.png";
import Social from "../../images/hero/Social.png";
import Insta from "../../images/hero/Insta.png";
import Linkdin from "../../images/hero/Linkdin.png";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

function Hero() {
  const router = useRouter();
  const [currentindex, setindex] = useState(null);
  const [text] = useTypewriter({
    words: ["a Innovator", "Technology Leader", "AN ENTREPRENEUR."],
    loop: false,
  });

  gsap.registerPlugin(useGSAP, ScrollToPlugin);

 

  const scrollto = () => {
  
    gsap.to(window, {
      duration: 5,
      scrollTo: { y: "#section5", offsetY: 70 }, // Replace '#section5' with the actual ID of the section you want to scroll to
      ease: "back.out",
    });
  };

  return (
    <div className="pt-20 flex flex-wrap md:px-0 px-5 relative z-[1] cursor-pointer" >
      <div className="flex-1 w-full flex-col md:flex-row flex justify-center items-center md:justify-end md:items-end">
        <div className="w-full  overflow-visible md:pl-24 flex items-start justify-start  flex-col gap-y-3 pb-8">
          <div className="md:text-3xl font-bold uppercase leading-22 tracking-tighter text-[--color-theme]">
            Sravan kumar angadi
          </div>
          <div  className="md:text-4xl text-xl uppercase font-bold leading-tight tracking-tighter text-left  ">
            I'm {text}
          </div>
          <div  className="md:text-[18px]  leading-7 tracking-tight text-left max-w-[330px] max-md:mx-auto">
            {`Let's`} unite our efforts to achieve your goals and bring your
            dreams to life.
          </div>
          <div  className="cursor-pointer relative z-[10]">
            <button className="flex items-center gap-3 mt-5 bg-[#FF71431A] cursor-pointer p-[6.5px] text-sm font-[600] rounded-[50px] uppercase max-md:mx-auto">
              <span className="bg-[--color-theme] p-[12px] rounded-[50%]">
                <FaPhoneAlt />
              </span>
              <span onClick={scrollto}  className="cursor-pointer">{`got a project? let’s talk!`}</span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex-[1.2] min-w-[280px]">
        <Image src={sravan} width={700} height={500} />
      </div>

      <div className="h-auto z-20 absolute top-0 left-60 md:right-0 lg:right-0 md:top-32 lg:top-32 flex  justify-end items-start gap-2">
        <div className="flex flex-col justify-center items-end">
          <div className="flex items-start w-[48rem] h-32   relative top-8">
            {/* <AnimatePresence>
              {currentindex === 0 && (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  <Image
                    className=" w-[48rem] h-32 relative"
                    src={Birthslide}
                    alt="frame"
                  />
                </motion.div>
              )}
            </AnimatePresence> */}
          </div>
          <div className="flex items-start  w-[48rem] h-32 relative -top-8 ">
            {/* <AnimatePresence>
              {currentindex === 1 && (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  <Image
                    className=" w-[48rem] h-32 relative"
                    src={Signslide}
                    alt="frame"
                  />
                </motion.div>
              )}
            </AnimatePresence> */}
          </div>
          <div className="flex items-start   w-[48rem] h-32 relative -top-24 ">
            <AnimatePresence>
              {currentindex === 2 && (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  <Image
                    className=" w-[48rem] h-32 relative"
                    src={Locationslide}
                    alt="frame"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div
            onMouseOver={() => setindex(3)}
            onMouseLeave={() => setindex(null)}
            className="flex items-end gap-8 flex-col  h-32 relative -top-40 -right-8"
          >
            <AnimatePresence>
              {currentindex === 3 && (
                <>
                  <motion.div
                    initial={{
                      position: "relative",
                      top: -8,
                      right: -20,
                      opacity: 0,
                    }}
                    whileInView={{
                      position: "relative",
                      top: 16,
                      right: 20,
                      opacity: 1,
                    }}
                    transition={{ duration: 0.5 }}
                    exit={{
                      position: "relative",
                      top: 0,
                      right: 0,
                      opacity: 0,
                    }}
                  >
                    <Image
                      onClick={() =>
                        router.push(
                          "https://www.instagram.com/angadiworldtech/"
                        )
                      }
                      className="object-contain h-14 w-14 -top-2 right-4 relative cursor-pointer"
                      src={Insta}
                      alt="frame"
                    />
                  </motion.div>
                  <motion.div
                    initial={{
                      position: "relative",
                      top: -40,
                      right: -40,
                      opacity: 0,
                    }}
                    whileInView={{
                      position: "relative",
                      top: -8,
                      right: -30,
                      opacity: 1,
                    }}
                    transition={{ duration: 0.5 }}
                    exit={{
                      position: "relative",
                      top: -40,
                      right: -40,
                      opacity: 0,
                    }}
                  >
                    <Image
                      onClick={() =>
                        router.push(
                          "https://www.linkedin.com/in/sravan-kumar-angadi-72049b60/"
                          
                        )
                      }
                      className="object-contain  h-14 w-14 -top-2 right-4 relative cursor-pointer"
                      src={Linkdin}
                      alt="frame"
                    />
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div>
          <div className="flex items-start w-full relative h-16 ">
            {/* <div
              onMouseOver={() => setindex(0)}
              onMouseLeave={() => setindex(null)}
            >
              <Image
                className="object-contain cursor-pointer h-16 w-16"
                src={birthicon}
                alt="birthicon"
              />
            </div> */}
          </div>
          <div className="flex items-start w-full relative h-16 ">
            {/* <div
              onMouseOver={() => setindex(1)}
              onMouseLeave={() => setindex(null)}
            >
              <Image
                className="object-contain cursor-pointer h-16 w-16"
                src={Sign}
                alt="birthicon"
              />
            </div> */}
          </div>
          <div className="flex items-start w-full relative ">
            <div
              onMouseOver={() => setindex(2)}
              onMouseLeave={() => setindex(null)}
            >
              <Image
                className="object-contain cursor-pointer h-16 w-16 rounded-tl-xl"
                src={Location}
                alt="birthicon"
              />
            </div>
          </div>
          <div className="flex items-start w-full relative ">
            <div
              onMouseOver={() => setindex(3)}
              onMouseLeave={() => setindex(null)}
            >
              <Image
                className="object-contain cursor-pointer h-16 w-16"
                src={Social}
                alt="birthicon"
              />
            </div>
          </div>
        </div>
      </div>

      <Image
        src={orangeBlob}
        height={500}
        width={700}
        className="absolute left-[-440px] top-[50px] max-md:left-[-450px] min-h-[500px] min-w-[700px]"
      />
    </div>
  );
}

export default Hero;
