"use client";
import { motion } from "framer-motion";
import OurServices from "@/components/OurServices";
import React from "react";
import Nav from "@/components/Navbar";

const page = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <div className=" w-full fixed z-10 p-1">
        <Nav />
      </div>
      <div
          style={{
            minHeight: "100vh",
            position: "relative",
            maxWidth: "100vw",
            overflow: "hidden",
          }}
        >

      <OurServices />
        </div>
    </motion.div>
  );
};

export default page;
