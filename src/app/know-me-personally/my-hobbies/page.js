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
import photography from "@/images/lifestyle/my-hobbies/Treveling.png";
import reading from "@/images/lifestyle/my-hobbies/Cycling.png";
import tennis from "@/images/lifestyle/my-hobbies/Foodie.png";
import travelling from "@/images/lifestyle/my-hobbies/Cricket.png";
import Autoplay from "embla-carousel-autoplay";
import { motion, AnimatePresence } from "framer-motion";

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

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const hobbies = [
    {
      image: travelling,
      title: "cricket",
      text: "I find the strategy and teamwork on the cricket field invigorating. It parallels the collaborative spirit needed in business and offers a great way to stay active and engaged with my community.",
    },
    {
      image: photography,
      title: "solo trips",
      text: "Traveling alone is my way of stepping back from the daily rush. These journeys allow me to immerse myself in new cultures and environments, fostering independence and creative insights.",
    },
    {
      image: tennis,
      title: "Foodie",
      text: "My love for food extends beyond dining; it's about exploring diverse cuisines and culinary innovations. Each meal is a new adventure, offering flavors that tell the story of their origin.",
    },
    {
      image: reading,
      title: "Cycling",
      text: "Hitting the trails on my bike is not just exercise; it's a time for reflection and inspiration, often providing the break needed to solve complex problems with fresh perspectives.",
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
      className="md:pt-16 min-h-[100vh]"
    >
      <div className="flex items-center gap-2 md:pb-8 border-b-2 border-b-[#858585] max-w-[80%] mx-auto py-5  ">
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
        <p className="md:text-5xl uppercase font-bold"> my hobbies</p>
      </div>
      <div className="mt-12 flex-col md:flex-row flex justify-between items-center  max-w-[800px] mx-auto">
        <Carousel
          setApi={setApi}
          plugins={[plugin.current]}
          // onMouseEnter={plugin.current.stop}
          // onMouseLeave={plugin.current.reset}
          opts={{
            align: "start",
          }}
          orientation="vertical"
          className="w-full max-w-xs"
        >
          <CarouselContent className="-mt-1 md:h-[350px] h-80">
            {hobbies.map((value, index) => (
              <CarouselItem key={index} className="pt-1 md:basis-1/1">
                <div className="p-1 h-auto">
                  <Image src={value.image} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious />
      <CarouselNext /> */}
        </Carousel>
        <div className="md:w-2/4 px-4 md:px-0">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="p-1 flex justify-start items-start gap-4 flex-col h-auto"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="uppercase text-lg font-bold"
            >
              {hobbies[current - 1]?.title}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="md:text-base font-medium text-justify text-xs"
            >
              {hobbies[current - 1]?.text}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Page;
