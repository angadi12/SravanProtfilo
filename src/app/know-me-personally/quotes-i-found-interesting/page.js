"use client";
import React, { useLayoutEffect } from "react";
import Image from "next/image";
import arrow from "@/images/common/Arrow.png";
import { useRouter } from "next/navigation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import Quote1 from '../../../images/hero/QUOTE1.png'
import Quote2 from '../../../images/hero/QUOTE2.png'
import Quote3 from '../../../images/hero/QUOTE3.png'
import Quote4 from '../../../images/hero/QUOTE4.png'
import Quote5 from '../../../images/hero/QUOTE5.png'

function Page() {
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

  const quotes = [
    {
      quote:Quote1
    },
    {
      quote:Quote2

    },
    {
      quote: Quote3
    
    },
    {
      quote:Quote4
       
    },
    {
      quote: Quote1
     
    },
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

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
      className="md:pt-12 p-2 md:p-0  min-h-[100vh]"
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
        <p className="md:text-4xl uppercase font-bold">QUOTES I FOUND</p>
      </div>
      <div className="mt-20   w-full flex justify-center items-center mx-auto overflow-hidden">
        <Carousel
          setApi={setApi}
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            align: "center",
          }}
          className="w-full flex justify-center items-center text-center"
        >
          <CarouselContent className="-mt-1 w-full mx-auto">
            {quotes.map((value, index) => (
              <CarouselItem
                key={index}
                className="pt-1 md:basis-1/2  mx-auto"
              >
                <div className="flex  ">
                    <Image className="object-contain h-96 " src={value.quote} alt="quote"/>
                </div>
              </CarouselItem>
            ))}

            
          </CarouselContent>
          <div className="absolute bottom-12 right-28">
          <CarouselPrevious className='bg-black text-white' />
      <CarouselNext className='bg-black text-white'/>

          </div>
        </Carousel>
      </div>
    </motion.div>
  );
}

export default Page;
