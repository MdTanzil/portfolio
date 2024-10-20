import React from "react";
import { Fade, Zoom } from "react-reveal";
import picture from "../../.../../../assets/images/myPic.jpg";
import Title from "../title";
import Info from "./info";

export default function About() {
  return (
    <div className=" flex items-center flex-wrap relative">
      {/* <div className="w-full lg:w-1/2 ">
        <Zoom>
          <img src={picture} alt="" className="w-full" />
        </Zoom>
      </div> */}
      <div className="containerCustom gap overflow-hidden">
        {/* <h4 className="  mt-7 md:mt-0 text-3xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
          About Me
        </h4> */}

        <Title title="about me" />

        <div className="md:grid items-center md:gap-3 lg:gap-4 grid-cols-9 md:col-start-9">
          <div className="md:col-span-5 lg:col-span-5 lg:pr-28">
            <Fade up cascade>
              <h3>Hello! I Am Md Tanzil.</h3>{" "}
              <p className="text-sm">
                As an software engineer, I specialize in JavaScript, React.js,
                Next.js, Python, Django, and Django REST framework. Since 2020,
                I’ve built dynamic and responsive web applications, focusing on
                creating user-friendly interfaces and robust back-end
                functionality. I excel at converting complex requirements into
                clean, maintainable code, ensuring cross-browser compatibility
                and optimized performance. My goal is always to deliver software
                that is both efficient and meets the needs of users.
              </p>
              <div className="mt-5">
                <Fade up>
                  <Info name="email" details="mtanzil1999@gamil.com" />
                  <Info name="phone" details="+8801645100787" />
                  <Info name="address" details="Dhaka, Bangladesh" />
                  <Info name="status" details="Available" />
                </Fade>
              </div>
            </Fade>
          </div>
          <Zoom>
            <div className="h-auto w-full mt-5 md:mt-0 overflow-hidden rounded-xl md:col-span-4 lg:col-span-4 aspect-[4/4]">
              {/* TODO: Change the Picture */}
              <img src={picture} alt="" className="w-full" />
            </div>{" "}
          </Zoom>
        </div>
      </div>
    </div>
  );
}
