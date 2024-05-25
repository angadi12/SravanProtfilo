"use client";
import React, { useLayoutEffect } from "react";
import Image from "next/image";
import arrow from "@/images/common/Arrow.png";
import { useRouter } from "next/navigation";

import bryant from "@/images/lifestyle/inspiration/bryant.png";
import grant from "@/images/lifestyle/inspiration/grant.png";
import jenni from "@/images/lifestyle/inspiration/jenni.png";
import { motion } from "framer-motion";

function Page() {
  const router = useRouter();
  const inspiration = [
    {
      image: bryant,
      name: "Bryant Mcgill",
      about: `Bryant McGill is a human potential thought leader, international bestselling author, activist, and social entrepreneur. He is one of the world's top social media influencers reaching a billion people a year. McGill is a United Nations appointed Global Champion and a Nobel Peace Prize nominee, who received a Congressional commendation applauding his, "highly commendable life's work,"​ as an Ambassador of Goodwill.`,
    },
    {
      image: jenni,
      name: "Jenni Young Mcgill",
      about: `Jenni Young is a graduate of University of Georgia, with a degree in Business, and possesses over 15 years experience in successful business leadership and creative media productions. As an award-winning film producer, and woman entrepreneur, Jenni lives her dream daily, serving those seeking health, freedom and truth around the world.`,
    },
    {
      image: grant,
      name: "Grant Cardone",
      about: `Grant Cardone is a world-renowned entrepreneur, author, speaker, investor, and coach. He owns and operates seven privately held companies, and a private equity real estate firm, Cardone Capital, with a multifamily portfolio of assets worth over $4 Billion. He is featured on Season 2 of Discovery Channel's Undercover Billionaire, where he takes on the challenge of building a million-dollar business in 90 days. Grant is also a New York Times bestselling author of 11 business books, including The 10X Rule.`,
    },
  ];

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
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 2 }}
      className="md:pt-14 p-2 md:p-0 min-h-[100vh]"
    >
      <div className="flex items-center border-b-2 border-b-[#858585] w-[90%] mx-auto py-5  ">
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
        <p className="md:text-5xl uppercase font-bold">What ispires me</p>
      </div>
      <div className="mt-8  md:px-20 mx-auto">
        {inspiration.map((person, index) => {
          return (
            <div
              className={`flex ${
                index % 2 != 0 ? "flex-wrap-reverse" : "flex-wrap"
              } items-center p-5 ${
                index % 2 != 0 ? "flex-row" : "flex-col"
              } md:flex-row gap-24 md:w-[80%] mx-auto`}
            >
              {index % 2 == 0 && (
                <div className="">
                  <Image src={person.image} className="h-80 w-96" />
                </div>
              )}
              <div className="flex-1">
                <p className="uppercase font-bold text-3xl mb-4">{person.name}</p>
                <p className="text-justify leading-7 text-pretty break-all">{person.about}</p>
              </div>
              {index % 2 != 0 && (
                <div className="">
                  <Image src={person.image} className="h-80 w-96" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default Page;
