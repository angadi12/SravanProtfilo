"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import arrow from "@/images/common/Arrow.png";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { Spinner } from "@nextui-org/react";

// social icons
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareTwitter } from "react-icons/fa6";
import { TbBrandYoutubeFilled } from "react-icons/tb";
function ContactMe() {
  const [name, setName] = useState("");
  const [lastname, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const YOUR_SERVICE_ID = "service_222112i";

  const YOUR_TEMPLATE_ID = "template_mhfh7gs";
  const YOUR_USER_ID = "MHhXtz7K-smu0u5Gp";

  const sendEmail = (e) => {
    setLoading(true);
    e.preventDefault();

    if (!name || !lastname || !email || !subject || !message) {
      toast.error("Please fill the field details!", {
        style: {
          border: "1px solid white",
          padding: "16px",
          color: "white",
          backgroundColor: "black",
        },
        iconTheme: {
          primary: "red",
          secondary: "#FFFAEE",
        },
      });
      setLoading(false);
      return;
    }
    const templateParams = {
      from_name: name + " " + lastname,
      reply_to: email,
      subject: subject,
      message: message,
    };

    emailjs
      .send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, templateParams, YOUR_USER_ID)
      .then(
        (result) => {
          if (result.text == "OK") {
            toast.success("Message sent succeefully!", {
              style: {
                border: "1px solid white",
                padding: "16px",
                color: "white",
                backgroundColor: "black",
              },
              iconTheme: {
                primary: "green",
                secondary: "#FFFAEE",
              },
            });
            setLoading(false);
            setName("");
            setEmail("");
            setSubject("");
            setMessage("");
            setlastName("");
          }
        },
        (error) => {
          console.log(error.text);
          toast.error("Message Failed!", {
            style: {
              border: "1px solid white",
              padding: "16px",
              color: "white",
              backgroundColor: "black",
            },
            iconTheme: {
              primary: "red",
              secondary: "#FFFAEE",
            },
          });
          setLoading(true);
        }
      );

    // setName("");
    // setEmail("");
    // setSubject("");
    // setMessage("");
    // setlastName("");
  };

  return (
    <div className="bg-white px-5 py-10 sm:px-40 text-black" id="contact-us">
      <div className="flex sm:gap-5 max-w-[800px] mx-auto">
        <motion.div
          // reveals content from left to right
          initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
          whileInView={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
          viewport={{ once: false }}
          transition={{ duration: 2 }}
          className=" text-4xl md:text-6xl font-bold text-black "
        >
          ALL YOU HAVE TO DO IS SAY{" "}
          <span className="text-[--color-theme]">'HELLO'</span>
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
            className="text-black flex items-end min-h-[60px] min-w-[60px] md:min-h-[120px] md:min-w-[120px]"
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
      <p className="uppercase font-semibold mt-10">
        fill out the necessary details, i will contact you!
      </p>
      <div className="flex justify-between items-start gap-10 h-auto md:flex-row flex-col">
        <form className="md:flex-[0.7] flex-1 gap-12 text-black font-bold">
          <div className="flex gap-5 my-5 py-4 flex-wrap">
            <input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="FIRST NAME"
              className="placeholder:text-black pb-2 placeholder:font-bold border-b border-b-[black] placeholder:text-[14px] flex-1 focus-visible:outline-none"
            />
            <input
              id="lastname"
              value={lastname}
              onChange={(e) => setlastName(e.target.value)}
              type="text"
              placeholder="LAST NAME"
              className="placeholder:text-black pb-2 placeholder:font-bold border-b border-b-[black] placeholder:text-[14px] flex-1 focus-visible:outline-none"
            />
          </div>

          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="EMAIL ID"
            className="placeholder:text-black pb-4 placeholder:font-bold border-b border-b-[black] placeholder:text-[14px] flex-1 w-full  focus-visible:outline-none"
          />
          <input
            id="subject"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="SUBJECT"
            className="placeholder:text-black placeholder:font-bold border-b py-8 border-b-[black] placeholder:text-[14px] flex-1 w-full  focus-visible:outline-none"
          />

          {/* <select className="text-black font-bold border-b border-b-[black] text-[14px] flex-1 w-full my-5 py-4 uppercase focus-visible:outline-none">
            <option value="" className="text-black font-bold text-[14px]">
              Service
            </option>
            <option value="1" className="text-black font-bold text-[14px] ">
              Option 1
            </option>{" "}
            <option value="2" className="text-black font-bold text-[14px]">
              Option 2
            </option>
          </select> */}
          <textarea
            type="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="MESSAGE"
            className="placeholder:text-black py-4 placeholder:font-bold border-b border-b-[black] placeholder:text-[14px] flex-1 w-full focus-visible:outline-none"
          />
          <button
            onClick={sendEmail}
            className=" uppercase my-5 py-4 border border-black w-[80%] mx-auto p-[10px] rounded-bl-[30px] rounded-tr-[30px] hover:bg-black hover:text-white"
          >
            {loading ? <Spinner color="white" /> : "contact me"}
          </button>
        </form>
        <div className="flex-[0.3]  h-auto gap-8 bg-black p-8 text-white rounded-bl-[30px] rounded-tr-[30px]  flex-col hidden md:flex relative">
          <p className="uppercase my-2 font-bold">Contact me :</p>
          <hr></hr>
          <div>
            <div className="flex gap-5 py-2 items-center">
              <MdEmail />
              <p>sravan@angadiworldtech.com</p>
            </div>
            <div className=" flex gap-5 py-2">
              <FaPhoneAlt />
              <p>+91 9110314465</p>
            </div>
          </div>
          <hr className="mb-5"></hr>
          <div className=" flex gap-5">
            <FaLocationDot className="text-white mt-[5px]" />
            <p>
              # 93/1,5, First Floor MRS Complex, Ramamurthy Nagar Main Rd,
              Ramamurthy Nagar, Bengaluru, Karnataka 560016
            </p>
          </div>
          <div className="text-xl text-white cursor-pointer flex gap-2 relative max-w-fit ml-auto bottom-[-15px] right-[-20px]">
            <AiFillInstagram />
            <FaFacebookSquare />
            <IoLogoLinkedin />
            <FaSquareTwitter />
            <TbBrandYoutubeFilled />
          </div>
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={true} />
    </div>
  );
}

export default ContactMe;
