"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import ring from "../images/Crouselimage/ring.png";
import ring2 from "../images/Crouselimage/ring2.png";
import logo1 from "../images/Crouselimage/logo1.png";
import logo2 from "../images/Crouselimage/logo2.png";
import logo3 from "../images/Crouselimage/logo3.png";
import Image from "next/image";
import Link from "next/link";


const Navigatebutton = () => {
  const [showLogos, setShowLogos] = useState(false);
  const [rotated, setRotated] = useState(false);

  const toggleLogos = () => {
    setShowLogos(!showLogos);
    setRotated(!rotated);
  };

  return (
    <div className="fixed bottom-4 md:right-12 right-4 flex md:flex-row flex-col justify-evenly items-center gap-2 z-20">
    <div className=" hidden md:flex ">

      <motion.div
        initial={{ scale: 0, x: 30, opacity: 0 }}
        exit={{ x: 70,scale: 0,  opacity: 0 }}
        transition={{ duration: 0.8 }}
        whileInView={showLogos ? { scale: 1, x: -70, opacity: 1 } : {}}
      >
        <Image className="w-24 h-24 hover:ring-1 hover:ring-[#FF7143] rounded-full" src={logo1} />
      </motion.div>
      <motion.div
        initial={{ scale: 0, x: 30, opacity: 0 }}
        whileInView={showLogos ?{ scale: 1, x: -50, opacity: 1 }:{}}
        exit={{ x: 50,scale: 0, opacity: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Image className="w-24 h-24 hover:ring-1 hover:ring-[#FF7143] rounded-full" src={logo2} />
      </motion.div>
      <motion.div
        initial={{ scale: 0, x: 30, opacity: 0 }}
        whileInView={showLogos ?{ scale: 1, x: -30, opacity: 1 }:{}}
        exit={{ x: 30, scale: 0, opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
      <Link href={'https://www.qrangadi.com/'}>
        <Image className="md:w-24 md:h-24 h-12 w-12 hover:ring-1 hover:ring-[#FF7143] rounded-full" src={logo3} />

      </Link>
      </motion.div>
    </div>
    <div className="  md:hidden ">

      <motion.div
        initial={{ scale: 0, y: 30, opacity: 0 }}
        exit={{ y: 70,scale: 0,  opacity: 0 }}
        transition={{ duration: 0.8 }}
        whileInView={showLogos ? { scale: 1, y: -70, opacity: 1 } : {}}
      >
        <Image className="md:w-24 md:h-24 h-12 w-12 hover:ring-1 hover:ring-[#FF7143] rounded-full" src={logo1} />
      </motion.div>
      <motion.div
        initial={{ scale: 0, y: 30, opacity: 0 }}
        whileInView={showLogos ?{ scale: 1, y: -50, opacity: 1 }:{}}
        exit={{ y: 50,scale: 0, opacity: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Image className="md:w-24 md:h-24 h-12 w-12 hover:ring-1 hover:ring-[#FF7143] rounded-full" src={logo2} />
      </motion.div>
      <motion.div
        initial={{ scale: 0, y: 30, opacity: 0 }}
        whileInView={showLogos ?{ scale: 1, y: -30, opacity: 1 }:{}}
        exit={{ y: 30, scale: 0, opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
      <Link href={'https://www.qrangadi.com'}>

        <Image className="md:w-24 md:h-24 h-12 w-12 hover:ring-1 hover:ring-[#FF7143] rounded-full" src={logo3} />
      </Link>
      </motion.div>
    </div>
      <div className="flex justify-center items-center">
        <motion.div
          id="orbitOne"
          whileTap={{ scale: 0.9 }}
          onClick={toggleLogos}
          className="flex justify-center items-center   "
        >
          <Image className="md:w-32 md:h-32 w-16 h-16 rounded-full " src={ring} />
        </motion.div>
        <motion.div
          whileTap={{ scale: 0.9 }}
          animate={{ rotate: rotated ? 180 : 0 }}
          transition={{ duration: 0.5 }}
          onClick={toggleLogos}
          className="absolute"
        >
          <Image className=" md:w-28 md:h-28 h-12 w-12 rounded-full" src={ring2} />
        </motion.div>
      </div>
    </div>
  );
};

export default Navigatebutton;
