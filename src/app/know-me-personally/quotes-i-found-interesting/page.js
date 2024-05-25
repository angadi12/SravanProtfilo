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
      quote:
        "The only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle.",
      author: "Steve Jobs",
    },
    {
      quote:
        "In the midst of winter, I found there was, within me, an invincible summer.",
      author: "Albert Camus",
    },
    {
      quote: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt",
    },
    {
      quote:
        "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: "Nelson Mandela",
    },
    {
      quote: "The best way to predict the future is to create it.",
      author: "Abraham Lincoln",
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
      className="md:pt-16 p-2 md:p-0  min-h-[100vh]"
    >
      <div className="flex items-center md:pb-8 border-b-2 border-b-[#858585] w-[90%] mx-auto py-5  ">
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
        <p className="md:text-5xl uppercase font-bold">QUOTES I FOUND</p>
      </div>
      <div className="mt-20   w-full flex justify-center items-center mx-auto">
        <Carousel
          setApi={setApi}
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            align: "center",
          }}
          orientation="vertical"
          className="w-full flex justify-center items-center text-center"
        >
          <CarouselContent className="-mt-1 md:h-[400px] h-96 w-full mx-auto">
            {quotes.map((value, index) => (
              <CarouselItem
                key={index}
                className="pt-1 md:basis-1/1 w-11/12 mx-auto"
              >
                <div className="flex flex-col mb-20 w-full">
                  <p
                    className="md:text-5xl text-2xl font-normal leading-relaxed text-center"
                    style={{ fontFamily: "Pacifico" }}
                  >
                    {value.quote}
                  </p>
                  <p className="text-center font-bold mt-5 md:text-3xl tracking-widest">
                    - {value.author}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious />
      <CarouselNext /> */}
        </Carousel>
      </div>
    </motion.div>
  );
}

export default Page;
