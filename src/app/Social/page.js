"use client";
import MyStory from "@/components/MyStory";
import React from "react";
import { motion } from "framer-motion";
import SocialFeeds from "@/components/SocialFeeds";
import Nav from "@/components/Navbar";
const page = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <div className=" w-full fixed z-10 p-1">
          <Nav/>
        </div>
        <div
          style={{
            minHeight: "200vh",
            position: "relative",
            maxWidth: "100vw",
            overflow: "hidden",
          }}
        >

      <SocialFeeds />
        </div>
    </motion.div>
  );
};

export default page;
