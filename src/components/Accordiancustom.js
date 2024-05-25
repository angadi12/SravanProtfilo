"use  client";
import React from "react";
import { Accordion, AccordionItem, Button } from "@nextui-org/react";
import Image from "next/image";
import arrow from "@/images/common/tiltedArrow.png";
import { MdArrowOutward } from "react-icons/md";
import { MdArrowDownward } from "react-icons/md";
import { MdOutlineArrowBack } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";

const Accordiancustom = () => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <div className="flex justify-center items-center md:w-3/4 mx-auto mt-12">
      {" "}
      <Accordion
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              height: "auto",
              transition: {
                height: {
                  type: "spring",
                  stiffness: 500,
                  damping: 80,
                  duration: 2,
                },
                opacity: {
                  easings: "ease",
                  duration: 2,
                },
              },
            },
            exit: {
              y: -10,
              opacity: 0,
              height: 0,
              transition: {
                height: {
                  easings: "ease",
                  duration: 0.5,
                },
                opacity: {
                  easings: "ease",
                  duration: 0.5,
                },
              },
            },
          },
        }}
        variant="light"
      >
        <AccordionItem
          className="text-6xl font-bold"
          key="1"
          aria-label="Accordion 1"
          title="ANGADI WORLD TECHNOLOGIES"
          indicator={({ isOpen }) =>
            isOpen ? (
              <MdOutlineArrowBack className="text-black" />
            ) : (
              <MdArrowOutward className="text-black" />
            )
          }
        >
          <div className="flex justify-start items-start gap-4 flex-col py-4">
            <p className="text-sm font-medium ">{`We offer website design and development services that are  tailored to our client’s needs. Whether you’re looking for a  simple, informative website or a complex e-commerce platform,  we can help you create a website that meets your goals and  exceeds your expectations along with digital marketing  services.`}</p>
            <Button className="w-60 rounded-bl-xl rounded-tr-xl rounded-tl-none rounded-br-none flex items-center gap-4 ring-1 ring-black ml-2 bg-white text-black hover:bg-black hover:text-white">
              View Site
              <IoIosArrowRoundForward />
            </Button>
          </div>
        </AccordionItem>
        <AccordionItem
          className="text-6xl font-bold"
          key="2"
          aria-label="Accordion 2"
          title="QR ANGADI"
          indicator={({ isOpen }) =>
            isOpen ? (
              <MdOutlineArrowBack className="text-black" />
            ) : (
              <MdArrowOutward className="text-black" />
            )
          }
        >
          <div className="flex justify-start items-start gap-4 flex-col py-4">
            <p className="text-sm font-medium ">{`QR Angadi is a flagship product of Angadi World Technologies Pvt Ltd, a company founded with a commitment to innovation and excellence. Our team of dedicated professionals is driven to simplify and enhance the QR code experience for users across various industries.`}</p>
            <Button className="w-60 rounded-bl-xl rounded-tr-xl rounded-tl-none rounded-br-none flex items-center gap-4 ring-1 ring-black ml-2 bg-white text-black hover:bg-black hover:text-white">
              <Link href={'https://www.qrangadi.com'}>
              View Site
              </Link>
              <IoIosArrowRoundForward />
            </Button>
          </div>
        </AccordionItem>
        {/* <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
          {defaultContent}
        </AccordionItem> */}
      </Accordion>
    </div>
  );
};

export default Accordiancustom;
