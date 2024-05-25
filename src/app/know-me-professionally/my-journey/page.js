"use client";
import React,{ useLayoutEffect } from "react";
import Image from "next/image";
import arrow from "@/images/common/Arrow.png";
import { useRouter } from "next/navigation";
import Crouselslider from "@/components/Crouselslider";
import { motion } from "framer-motion";


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
    <motion.div    initial={{ opacity: 0 }}
    whileInView={{
      opacity: 1,
    }}
    transition={{ duration: 2 }} className="md:pt-16 min-h-[100vh]">
    <div className="flex items-center gap-2  border-b-2 border-b-[#858585] max-w-[90%] mx-auto py-5  ">
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
      <p className="md:text-5xl uppercase font-bold"> my journey</p>
    </div>

     <div className="pb-8 md:pb-0">
     <Crouselslider/>
     </div>

    </motion.div>
  )
}

export default Page;
