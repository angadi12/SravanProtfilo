"use client";
import React, { useState } from "react";
import Image from "next/image";
import arrow from "@/images/common/tiltedArrow.png";
import Accordiancustom from "../Accordiancustom";
function FoundersMission() {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const dummyItems = [
    {
      title: "ANGADI WORLD Technologies",
      content:
        "We offer website design and development services that are tailored to our client’s needs. Whether you’re looking for a simple, informative website or a complex e-commerce platform, we can help you create a website that meets your goals and exceeds your expectations along with digital marketing services.",
    },
    // {
    //   title: "IBETS",
    //   content:
    //     "The International Business Expedition Trailblazers. Starting a business requires planning and hard work, including meeting legal requirements like registering with the government and getting licenses. We understand this can be overwhelming, so we're here to help. Our mission is to make the process easy and stress-free by handling all necessary documentation accurately and efficiently for our clients.",
    // },
    {
      title: "QR ANGADI",
      content:
        "QR Angadi is a flagship product of Angadi World Technologies Pvt Ltd, a company founded with a commitment to innovation and excellence. Our team of dedicated professionals is driven to simplify and enhance the QR code experience for users across various industries.",
    },
  ];

  return (
    <div className="bg-white text-black py-20">
      <div className="mb-10">
        <p className="uppercase text-2xl font-bold leading-tight tracking-tighter text-center">{`a proud founder’s mission`}</p>
        <p className="max-w-[80%] mx-auto mt-5 text-justify break-all">
          {`To create a dynamic and informative digital solutions that  serves as
          a hub of knowledge and inspiration for aspiring  entrepreneurs looking
          to start, grow and scale their  businesses and to empower
          entrepreneurs with the  resources, tools and information they need to
          succeed in  their business ventures. Through our platform, we aim to
           provide actionable insights, expert guidance, and valuable  resources
          to help entrepreneurs achieve their goals.`}
        </p>
      </div>
      <hr className="text-black" />
      <Accordiancustom/>
      {/* <div className="accordion text-black md:mx-72 mx-2">
        {dummyItems.map((item, index) => (
          <div
            key={index}
            className={`accordion-item ${
              activeIndex === index ? "active" : ""
            }`}
          >
            <div
              className={`accordion-button py-8  block ${
                activeIndex !== index ? "border-b" : "border-b-0"
              } border-b-black`}
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-left uppercase text-3xl font-bold leading-none">
                {item.title}
              </span>
              <span className={`arrow ${activeIndex === index ? "open" : ""}`}>
                <Image
                  src={arrow}
                  height={20}
                  width={20}
                  style={{
                    width: "70px",
                  }}
                  unoptimized
                />
              </span>
            </div>
            <div
              className={`accordion-content text-black ${
                activeIndex === index ? "border-b border-b-black" : ""
              }`}
            >
              {activeIndex === index && (
                <>
                  <p className="text-base font-semibold leading-tight tracking-tighter mb-5">
                    {item.content}
                  </p>
                  <button className=" uppercase my-5 border border-black w-[250px] mx-auto p-[10px] rounded-bl-[30px] rounded-tr-[30px] hover:bg-black hover:text-white">
                    view site{" "}
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default FoundersMission;
