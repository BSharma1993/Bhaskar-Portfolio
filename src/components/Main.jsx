import React from "react";
import logoPic from "../../public/photo.avif";
import resume from "../../public/Bhaskar Sharma1.pdf";
import { ReactTyped } from "react-typed";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

const Main = () => {
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto px-4 md:px-20 my-28">
        <div className=" flex flex-col md:flex-row">
          <div className=" md:w-1/2 mt-12 md:mt-15 space-y-2 order-2 md:order-1">
            <span className=" font-semibold md:text-xl">
              Welcome In My Feed
            </span>
            <div className="flex space-x-1 text-xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              {/* <span>Developer</span> */}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={60}
                loop={true}
              />
            </div>
            <br />
            <p className=" text-sm md:text-md text-justify">
              Highly motivated and detail-oriented IT professional seeking a
              challenging position in IT Asset Management. Offering a strong
              background in managing and optimizing IT assets, combined with
              excellent analytical skills and a passion for improving
              operational efficiency. Committed to ensuring accurate inventory
              control, cost optimization, and compliance with industry
              standards.
            </p>
            <br />
            <div className=" flex items-center justify-between">
              <div className=" hover:scale-110 duration-200  rounded-xl bg-red-600 w-fit p-2 md:py-2 md:px-8 text-xl md:text-2xl text-white">
                <a href={resume} target="_blank">
                  My Resume
                </a>
              </div>
              <div className=" hover:scale-110 duration-200  rounded-xl bg-red-600 w-fit py-2 px-4 md:py-2 md:px-12 text-xl md:text-2xl text-white">
                <a href="" target="_blank">
                  Hire Me
                </a>
              </div>
            </div>
            <br />
            <div className=" flex flex-col items-center justify-between md:flex-row space-y-6 md:space-y-0">
              <div className=" space-y-2">
                <h1 className=" text-2xl font-semibold">Available on</h1>
                <ul className=" flex items-center space-x-4">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <FaSquareFacebook className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/" target="_blank">
                      <IoLogoYoutube className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/" target="_blank">
                      <FaTelegram className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>

              <div className=" space-y-2">
                <h1 className=" text-xl font-semibold">Currently working on</h1>
                <div className=" flex items-center justify-center space-x-4">
                  <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2  md:mt-5 md:ml-48 order-1">
            <img
              src={logoPic}
              className="rounded-full md:w-[450px] md:h-[450px]"
              alt=""
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Main;
