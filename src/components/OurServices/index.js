import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import web from "../../images/Crouselimage/web.png";
import app from "../../images/Crouselimage/app.png";
import soft from "../../images/Crouselimage/soft.png";
import email from "../../images/Crouselimage/email.png";
import search from "../../images/Crouselimage/search.png";
import market from "../../images/Crouselimage/market.png";
import QR from "../../images/Crouselimage/QR.png";
import project from "../../images/Crouselimage/project.png";
import pen from "../../images/Crouselimage/pen.png";

import franchise from "../../images/Crouselimage/franchise.png";
import expanstion from "../../images/Crouselimage/expanstion.png";
import bussiness from "../../images/Crouselimage/bussiness.png";
import Image from "next/image";
import { motion } from "framer-motion";
import arrow from "@/images/common/ArrowWhite.png";


function OurServices() {
  const data = [
    {
      icon: web,
      title: "web development",
      desc: "Elevate your online experience with our expert web development services",
    },
    {
      icon: app,
      title: "app development",
      desc: "Trust our expertise for seamless and impactful app development.",
    },
    {
      icon: soft,
      title: "software development",
      desc: "Empowering your digital journey through expert software development.",
    },
    {
      icon: email,
      title: "email marketing",
      desc: "Elevate your outreach and engagement with our tailored email marketing solutions.",
    },
    {
      icon: search,
      title: "seo",
      desc: "Let us optimize your digital presence for top search engine rankings and increased traffic.",
    },
    {
      icon: market,
      title: "social media marketing",
      desc: "Elevate your brand awareness and engagement with our tailored social media solutions.",
    },
    {
      icon: pen,
      title: "ui ux design",
      desc: "Let us shape your digital journey with our UI/UX expertise",
    },
    {
      icon: QR,
      title: "QR TECHNOLOGY",
      desc: "Explore the future of seamless interactions with our cutting-edge QR solutions.",
    },
    {
      icon: project,
      title: "project management",
      desc: "Efficiently guiding your projects to success with our expert project management solutions.",
    },
  ];

  const data2 = [
    {
      icon: franchise,
      title: "franchises",
      desc: "Unlocking growth opportunities with franchising solutions. Explore new horizons and expand your business with our expert franchising guidance.",
    },
    {
      icon: expanstion,
      title: "international expansion",
      desc: "Accelerating global growth through franchising expansion. Seamlessly scale your business internationally with our expert franchising solutions.",
    },
    {
      icon: bussiness,
      title: "business consultation",
      desc: "Elevating your business strategy with expert consultation. Gain invaluable insights and guidance to navigate challenges and achieve success.",
    },
  ];

  return (
    <div className="flex w-full flex-col justify-center items-center md:gap-8 gap-12  mx-auto px-8 py-8 ">
      <div>
      <div className="flex py-12 mb-8 gap-12  justify-center text-right">
        <motion.div
          // reveals content from left to right
          initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
          whileInView={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
          viewport={{ once: false }}
          transition={{ duration: 2 }}
          className=" text-3xl md:text-8xl leading-10 font-semibold uppercase "
        >
          <p className="text-[--color-theme] ">Our</p>
          Service.
        </motion.div>
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
      </div>
      <div className="flex justify-start items-center  gap-4 flex-col w-full mx-auto  ">
        <Carousel
          opts={{
            align: "start",
          }}
          className="md:w-3/4 w-full"
        >
          <h6 className="font-bold uppercase text-white text-sm leading-7 py-4">
          Angadi World Technologies
          </h6>
          <CarouselContent>
            {data.map((value, index) => (
              <CarouselItem key={index} className=" md:basis-1/3 lg:basis-1/4">
                <div className="p-1">
                  <Card className="rounded-none bg-[#FFFFFF1A] border-none">
                    <CardContent className="flex flex-col items-start justify-center aspect-square w-full p-3 gap-8 md:gap-4">
                      <Image className="h-12 w-12" src={value.icon} />
                      <h6 className="text-white uppercase font-semibold text-sm">
                        {value.title}
                      </h6>
                      <p className="text-white text-xs font-extralight w-auto">
                        {value.desc}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute md:top-8 md:right-32 hidden md:block">
            <CarouselPrevious className="bg-[rgb(0,0,0,0.6)] text-sm" />
            <CarouselNext className="bg-[rgb(0,0,0,0.6)] text-sm" />
          </div>
          <div className="absolute md:hidden -bottom-8 left-12">
            <CarouselPrevious className="bg-[rgb(0,0,0,0.6)] text-sm" />
            <CarouselNext className="bg-[rgb(0,0,0,0.6)] text-sm" />
          </div>
        </Carousel>
      </div>
      <div className="flex justify-start items-center  gap-4 flex-col w-full mx-auto pb-8 ">
        <Carousel
          opts={{
            align: "start",
          }}
          className="md:w-3/4 w-full"
        >
          <h6 className="font-bold uppercase text-white text-sm leading-7 py-4">
            ibets
          </h6>
          <CarouselContent>
            {data2.map((value, index) => (
              <CarouselItem key={index} className=" md:basis-1/2 lg:basis-1/2">
                <div className="p-1">
                  <Card className="rounded-none bg-[#FFFFFF1A] border-none">
                    <CardContent className="flex flex-col items-start justify-center aspect-video w-full p-4 px-4 gap-4">
                      <div className="flex justify-end items-end w-full px-4">

                      <Image className="h-12 w-12 mb-4" src={value.icon} />
                      </div>
                      <h6 className="text-white uppercase font-semibold text-sm">
                        {value.title}
                      </h6>
                      <p className="text-white text-xs font-extralight w-auto">
                        {value.desc}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute md:top-8 md:right-32 hidden md:block">
            <CarouselPrevious className="bg-[rgb(0,0,0,0.6)] text-sm" />
            <CarouselNext className="bg-[rgb(0,0,0,0.6)] text-sm" />
          </div>
          <div className="absolute md:hidden -bottom-8 left-12">
            <CarouselPrevious className="bg-[rgb(0,0,0,0.6)] text-sm" />
            <CarouselNext className="bg-[rgb(0,0,0,0.6)] text-sm" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default OurServices;
