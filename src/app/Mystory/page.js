"use client";
import MyStory from "@/components/MyStory";
import React from "react";
import { motion } from "framer-motion";
import Nav from "@/components/Navbar";

const page = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className=""
    >
      <div className="flex justify-center items-center mx-auto  fixed z-10 p-1 w-full">
        <Nav />
      </div>
      <div
          style={{
            minHeight: "200vh",
            position: "relative",
            maxWidth: "100vw",
            overflow: "hidden",
          }}
        >

      <MyStory />
        </div>
    </motion.div>
  );
};

export default page;
