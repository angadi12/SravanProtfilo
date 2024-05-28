"use client";
import React, { useLayoutEffect } from "react";
import { motion } from "framer-motion";
import arrow from "@/images/common/Arrow.png";
import { useRouter } from "next/navigation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Expert1 from '../../../images/lifestyle/Expert1.png'
import Expert2 from '../../../images/lifestyle/Expert2.png'
import Expert3 from '../../../images/lifestyle/Expert3.png'
import Expert4 from '../../../images/lifestyle/Expert4.png'
import Expert5 from '../../../images/lifestyle/Expert5.png'
import Expert6 from '../../../images/lifestyle/Expert6.png'
import Expert7 from '../../../images/lifestyle/Expert7.png'
import Expert8 from '../../../images/lifestyle/Expert8.png'
import Expert9 from '../../../images/lifestyle/Expert9.png'
import Expert10 from '../../../images/lifestyle/Expert10.png'


import Image from "next/image";



function page() {
  const router = useRouter();
  const [api, setApi] = React.useState();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);


 const Buissnessdigi=()=>{
  return <div className="w-11/12 md:mt-12 mt-4 mx-auto grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 place-content-center justify-between items-start">
       <div className="md:w-3/4 flex flex-col justify-center items-start md:gap-8 ">
          <h6 className="md:text-3xl lg:text-3xl font-bold">Business Digitalization</h6>
          <p className="md:text-lg lg:text-lg w-full  font-medium text-gray-600 text-start">{`Transforming traditional business landscapes into digital powerhouses is my fort.`}</p>
       </div>
       <div className=" flex md:mt-12 mt-4  flex-col justify-center items-start gap-4">
           <li className="text-sm text-start">Implementing revolutionary digital solutions that turn challenges into opportunities.</li>
           <li  className="text-sm text-start">Crafting unforgettable customer experiences with the latest technologies.</li>
           <li  className="text-sm text-start">Streamlining operations to boost efficiency and productivity like never before.</li>
       </div>
  </div>
 }
 const Techconsoulting=()=>{
  return <div className="w-11/12 md:mt-12 mt-4 mx-auto grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 place-content-center justify-between items-start">
       <div className="md:w-3/4 flex flex-col justify-center items-start md:gap-8 ">
          <h6 className="md:text-3xl font-bold">Tech Consulting</h6>
          <p className="md:text-lg lg:text-lg font-medium text-gray-600 text-start">{`Navigating the technology world requires a trusted guide for success.`}</p>
       </div>
       <div className=" flex  md:mt-12 mt-4  flex-col justify-center items-start gap-4">
           <li className="text-sm text-start">{`Insightful tech integration advice, ensuring seamless adoption.`}</li>
           <li  className="text-sm text-start">{`Customized solutions that address specific challenges with precision.`}</li>
           <li  className="text-sm text-start">{`Staying ahead of tech trends to keep your business future-ready.`}</li>
       </div>
  </div>
 }
 const Brandmast=()=>{
  return <div className="w-11/12 md:mt-12 mt-4 mx-auto grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 place-content-center justify-between items-start">
       <div className="md:w-3/4 flex flex-col justify-center items-start md:gap-8">
          <h6 className="md:text-3xl font-bold">Brand Mastery</h6>
          <p className="text-lg font-medium text-gray-600 text-start">{`In the realm of branding, I am the alchemist turning vision into reality.`}</p>
       </div>
       <div className=" flex md:mt-12 mt-4  flex-col justify-center items-start gap-4">
           <li className="text-sm text-start">{`Weaving compelling brand stories that captivate and connect with audiences.`}</li>
           <li  className="text-sm text-start">{`Strategizing cohesive brand blueprints that align with the heart and soul of the business.`}</li>
           <li  className="text-sm text-start">{`Utilizing innovative marketing techniques to create a brand presence that resonates.`}</li>
       </div>
  </div>
 }
 const Productbrand=()=>{
  return <div className="w-11/12 md:mt-12 mt-4 mx-auto grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 place-content-center justify-between items-start">
       <div className="md:w-3/4 flex flex-col justify-center items-start md:gap-8">
          <h6 className="md:text-3xl font-bold">Product Branding</h6>
          <p className="md:text-lg font-medium text-gray-600 text-start">{`Creating iconic product identities is an art and science I excel in.`}</p>
       </div>
       <div className=" flex md:mt-12 mt-4  flex-col justify-center items-start gap-4">
           <li className="text-sm text-start">{`Strategic branding initiatives that highlight what makes your product unique.`}</li>
           <li  className="text-sm text-start">{`In-depth market analysis to position your product perfectly.`}</li>
           <li  className="text-sm text-start">{`Designing impactful marketing campaigns that drive product adoption and loyalty.`}</li>
       </div>
  </div>
 }
 const Valuecreation=()=>{
  return <div className="w-11/12 md:mt-12 mt-4 mx-auto grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 place-content-center justify-between items-start">
       <div className="md:w-3/4 flex flex-col justify-center items-start gap-8">
          <h6 className="md:text-3xl font-bold">Value Creation</h6>
          <p className="md:text-lg font-medium text-gray-600 text-start">{`Every action in business should drive value and a purpose to this world.`}</p>
       </div>
       <div className=" flex md:mt-12 mt-4  flex-col justify-center items-start gap-4">
           <li className="text-sm text-start">{`Identifying and maximizing value drivers within your operations.`}</li>
           <li  className="text-sm text-start">{`Streamlining processes to enhance efficiency and profitability.`}</li>
           <li  className="text-sm text-start">{`Ensuring sustainable growth that benefits all stakeholders, from employees to customers.`}</li>
       </div>
  </div>
 }
 const Productiondesign=()=>{
  return <div className="w-11/12 md:mt-12 mt-4 mx-auto grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 place-content-center justify-between items-start">
       <div className="md:w-3/4 flex flex-col justify-center items-start md:gap-8">
          <h6 className="md:text-3xl font-bold">Product Design</h6>
          <p className="md:text-lg font-medium text-gray-600 text-start">{`Innovation meets functionality in my approach to product design.`}</p>
       </div>
       <div className=" flex md:mt-12 mt-4  flex-col justify-center items-start gap-4">
           <li className="text-sm text-start">{`Crafting user-friendly products that delight and deliver.`}</li>
           <li  className="text-sm text-start">{`Collaborating with diverse teams to bring groundbreaking ideas to life.`}</li>
           <li  className="text-sm text-start">{`Focusing on designs that meet and exceed market expectations.`}</li>
       </div>
  </div>
 }
 const Growthstrategy=()=>{
  return <div className="w-11/12 md:mt-12 mt-4 mx-auto grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 place-content-center justify-between items-start">
       <div className="md:w-3/4 flex flex-col justify-center items-start md:gap-8">
          <h6 className="md:text-3xl font-bold">Growth Strategy</h6>
          <p className="md:text-lg font-medium text-gray-600 text-start">{`Innovation meets functionality in my approach to product design.`}</p>
       </div>
       <div className=" flex md:mt-12 mt-4  flex-col justify-center items-start gap-4">
           <li className="text-sm text-start">{`Spotting new market opportunities and unlocking potential revenue streams.`}</li>
           <li  className="text-sm text-start">{`Developing scalable business models that support exponential growth.`}</li>
           <li  className="text-sm text-start">{`Executing go-to-market strategies that secure a strong market presence.`}</li>
       </div>
  </div>
 }
 const Teambuilding=()=>{
  return <div className="w-11/12 md:mt-12 mt-4 mx-auto grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 place-content-center justify-between items-start">
       <div className="md:w-3/4 flex flex-col justify-center items-start md:gap-8">
          <h6 className="md:text-3xl font-bold">Team Building</h6>
          <p className="text-lg font-medium text-gray-600 text-start">{`Behind every great achievement is a strong team.`}</p>
       </div>
       <div className=" flex md:mt-12 mt-4 flex-col justify-center items-start gap-4">
           <li className="text-sm text-start">{`Assembling high-performing teams with diverse talents and perspectives.`}</li>
           <li  className="text-sm text-start">{`Fostering a culture of collaboration and inclusivity.`}</li>
           <li  className="text-sm text-start">{`Empowering team members to innovate and excel.`}</li>
       </div>
  </div>
 }

 const Collaboration=()=>{
  return <div className="w-11/12 md:mt-12 mt-4 mx-auto grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 place-content-center justify-between items-start">
       <div className="md:w-3/4 flex flex-col justify-center items-start md:gap-8">
          <h6 className="md:text-3xl font-bold">Cross-Collaboration</h6>
          <p className="md:text-lg font-medium text-gray-600 text-start">{`Innovation thrives in collaborative environments.`}</p>
       </div>
       <div className=" flex md:mt-12 mt-4  flex-col justify-center items-start gap-4">
           <li className="text-sm text-start">{`Facilitating synergy across teams to drive project success.`}</li>
           <li  className="text-sm text-start">{`Encouraging the exchange of ideas and best practices.`}</li>
           <li  className="text-sm text-start">{`Building strategic partnerships that amplify business capabilities.`}</li>
       </div>
  </div>
 }
 const Innovation=()=>{
  return <div className="w-11/12 md:mt-12 mt-4 mx-auto grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 place-content-center justify-between items-start">
       <div className="md:w-3/4 flex flex-col justify-center items-start md:gap-8">
          <h6 className="md:text-3xl font-bold">Innovation Drive</h6>
          <p className="md:text-lg font-medium text-gray-600 text-start">{`Innovation is the heartbeat of my entrepreneurial journey.`}</p>
       </div>
       <div className=" flex md:mt-12 mt-4 flex-col justify-center items-start gap-4">
           <li className="text-sm text-start">{`Exploring uncharted territories in technology to stay ahead of the curve.`}</li>
           <li  className="text-sm text-start">{`Implementing disruptive solutions that redefine industries.`}</li>
           <li  className="text-sm text-start">{`Creating a culture of continuous innovation and improvement.`}</li>
       </div>
  </div>
 }






  const quotes = [
    {
      quote:Expert1,
      component:<Buissnessdigi/>,
    },
    {
      quote:Expert2,
      component:<Brandmast/>

    },
    {
      quote: Expert3,
      component:<Techconsoulting/>
    
    },
    {
      quote:Expert4,
      component:<Productbrand/>
       
    },
    {
      quote: Expert5,
      component:<Valuecreation/>
     
    },
    {
      quote: Expert6,
      component:<Productiondesign/>
     
    },
    {
      quote: Expert7,
      component:<Growthstrategy/>
     
    },
    {
      quote: Expert8,
      component:<Teambuilding/>
     
    },
    {
      quote: Expert9,
      component:<Collaboration/>
     
    },
    {
      quote: Expert10,
      component:<Innovation/>
     
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
    className="md:pt-2 p-2 md:p-0  md:min-h-[130vh]"
  >
    <div className="flex items-center md:pb-8 border-b-2 border-b-[#858585] w-[90%] mx-auto py-2 ">
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
      <p className="md:text-4xl uppercase font-bold">My expertise</p>
    </div>
    <div className="mt-4   w-full flex justify-center items-center mx-auto md:overflow-hidden">
      <Carousel
        setApi={setApi}
        opts={{
          align: "center",
        }}
        className="w-full h-auto flex justify-center items-center text-center"
      >
        <CarouselContent className="-mt-1 w-full mx-auto">
          {quotes.map((value, index) => (
            <CarouselItem
              key={index}
              className="pt-1 md:basis-1/1  mx-auto"
            >
              <div className="flex flex-col w-full  ">
                  <Image className="object-contain w-11/12  mx-auto " src={value.quote} alt="quote"/>

                  <div>
                    {value.component}
                  </div>
              </div>
            </CarouselItem>
          ))}

          
        </CarouselContent>
        <div className="absolute md:bottom-40 md:right-28 lg:bottom-40 lg:right-28 -bottom-12 ">
        <CarouselPrevious className='bg-black text-white' />
    <CarouselNext className='bg-black text-white'/>

        </div>
      </Carousel>
    </div>
  </motion.div>
  )
}

export default page