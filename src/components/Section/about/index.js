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
              <p className="text-sm text-justify">
                I'm a software engineer with a focus on Python, Django, Next.js,
                React.js, JavaScript, and the Django REST framework. I have been
                developing dynamic and responsive web applications since 2020,
                with an emphasis on user-friendly interface design and strong
                back-end functionality. I'm great at translating intricate
                specifications into clear, manageable code that ensures
                cross-browser compatibility and optimal performance. My constant
                objective is to provide consumers with software that is
                user-friendly and efficient.
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
              <img src={picture} alt="" className="w-full" />
            </div>{" "}
          </Zoom>
        </div>
      </div>
    </div>
  );
}
