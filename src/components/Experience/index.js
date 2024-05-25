import React from "react";

const Text = ({ text, classes }) => {
  return (
    <p
      className={`px-[10px] py-[5px] ${classes} uppercase absolute text-[10px] backdrop-blur-sm bg-[#ff71431a] rounded-[20px] `}
    >
      {text}
    </p>
  );
};
function Experience() {
  return (
    <div className="flex w-full md:my-32 py-28 md:py-12 experience">
      <div
      className="border-2 border-dashed h-[24rem] w-[24rem] md:h-[28rem] md:w-[28rem] border-[#ffffff30] rounded-[50%] flex justify-center items-center relative"
        style={{
          // minHeight: "400px",
          // minWidth: "400px",
          // border: "2px dashed #ffffff30",
          // borderRadius: "50%",
          marginInline: "auto",
          // display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
          // position: "relative",
        }}
      >
        <p className="absolute md:text-3xl text-xl w-[30rem]  md:min-w-[700px] flex justify-center items-center font-semibold">
          10 + Years of
          <span className="text-[--color-theme]">
            &nbsp;Entrepreneurial Experience.
          </span>
        </p>
        <div
          id="orbitOne"
          className="md:h-[28rem] md:w-[28rem] h-96 w-96"
          style={{
            // minHeight: "450px",
            // minWidth: "450px",
            // border: "2px dashed #ffffff30",
            borderRadius: "50%",
            marginInline: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <div
            className="absolute"
            style={{
              background: "linear-gradient(135deg, #FF7143 0%, #FFC700 100%)",
              minHeight: "22px",
              minWidth: "22px",
              maxHeight: "22px",
              maxWidth: "22px",
              borderRadius: "50%",
              top: "-12px",
            }}
          ></div>
        </div>
        <div
          style={{
            position: "absolute",
            minHeight: "180px",
            minWidth: "180px",
            border: "2px dashed #ffffff30",
            borderRadius: "50%",
            marginInline: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          <div
            id="orbitTwo"
            style={{
              position: "absolute",
              minHeight: "180px",
              minWidth: "180px",
              // border: "2px dashed #ffffff30",
              borderRadius: "50%",
              marginInline: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                background: "linear-gradient(135deg, #FF3E00 0%, #FFA88C 100%)",
                minHeight: "22px",
                minWidth: "22px",
                maxHeight: "22px",
                maxWidth: "22px",
                borderRadius: "50%",
                right: "-5px",
                top: "60%",
              }}
            ></div>
          </div>
        </div>
        <Text
          text={"Business Digitalization"}
          classes={"top-[0px] left-[-20px] text-sm"}
        />
        <Text text={"Brand Mastery"} classes={"top-[20px] right-[-10px] text-sm"} />
        <Text text={"Tech Consulting"} classes={"top-[100px] md:left-[-110px] left-[-60px] text-sm"} />
        <Text text={"Product Branding"} classes={"top-[140px] left-[60px] text-sm"} />
        <Text text={"Value Creation"} classes={"top-[100px] right-[-50px] text-sm"} />
        <Text text={"Team Building"} classes={"bottom-[100px] left-[-70px] text-sm"} />
        <Text
          text={"Product Design"}
          classes={"bottom-[100px] md:right-[-100px] right-[-50px] text-sm"}
        />
        <Text text={"Growth Strategy"} classes={"bottom-[20px] right-[0px] text-sm"} />
        <Text
          text={"Cross-Collaboration"}
          classes={"bottom-[20px] left-[-40px] text-sm"}
        />
        <Text
          text={"Innovation Drive"}
          classes={"bottom-[-20px] md:left-[140px] text-sm"}
        />
      </div>
    </div>
  );
}

export default Experience;
