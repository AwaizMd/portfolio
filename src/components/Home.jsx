import React from "react";
import { FaGithub, FaLinkedin, FaPhone , FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Home = () => {
  return (
    <div className="ml-[6%] mt-20">
      <div className="relative">
        <img
          src="https://svgsilh.com/svg/26432-9e9e9e.svg"
          className="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] opacity-15"
        />
        <p className="text-[#3CCF91] absolute top-5 left-5 sm:top-5 sm:left-10 font-bold text-xl sm:text-3xl section">
          Hey there!, I'm -
        </p>
        <p className="text-white absolute top-[40px] left-[40px] sm:top-[60px] sm:left-[60px] font-extrabold text-3xl sm:text-8xl ">
          MOHAMMAD AWAIZ.
        </p>
      </div>
      <div className="mt-5 md:mt-10 mr-10 sm:mr-40 ml-[45px] sm:ml-[60px]">
        <span className="text-white text-xl sm:text-3xl font-bold">
          Software Engineer.
        </span>
        <span className="text-[#8F9094] text-xl sm:text-3xl font-serif italic">
          {" "}
          A versatile developer with expertise in the MERN stack and SQL
          databases, creating scalable applications and robust APIs.
        </span>
        <p className="text-[#8F9094] text-md sm:text-xl mt-5 sm:mt-10">
          🚀 Currently specializing in FullStack.
        </p>
        <span className="text-white text-lg sm:text-xl mr-2 mt-2">❮❯ </span>
        <span className="text-[#8F9094] text-md sm:text-xl mt-2">
          Software Engineer at{" "}
        </span>
        <span className="text-lg sm:text-xl font-semibold text-[#3CCF91] mt-2">
          <a
            href="https://www.codetru.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Codetru
          </a>
        </span>
      </div>
      <div className="ml-4 sm:ml-[60px] mt-10 flex flex-wrap sm:flex-nowrap gap-4">
        <a
          href="https://github.com/AwaizMd" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#FFFFFF14] flex items-center space-x-2 px-4 py-2 text-white rounded-md"
        >
          <FaGithub style={{ color: '#3CCF91' }} />
          <span>GitHub</span>
        </a>

        <a
          href="https://in.linkedin.com/in/md-awaiz" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#FFFFFF14] flex items-center space-x-2 px-4 py-2 text-white rounded-md"
        >
          <FaLinkedin style={{ color: '#3CCF91' }} />
          <span>LinkedIn</span>
        </a>

        <a
          href="mailto:mdawaiz043@gmail.com" 
          className="bg-[#FFFFFF14] flex items-center space-x-2 px-4 py-2 text-white rounded-md"
        >
          <HiOutlineMail style={{ color: '#3CCF91' }} />
          <span>Email</span>
        </a>

        <a
          href="tel:+919989386197" 
          className="bg-[#FFFFFF14] flex items-center space-x-2 px-4 py-2 text-white rounded-md"
        >
          <FaPhone style={{ color: '#3CCF91' }} />
          <span>Phone</span>
        </a>

        <a
          href="https://wa.me/+919989386197" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#FFFFFF14] flex items-center space-x-2 px-4 py-2 text-white rounded-md"
        >
          <FaWhatsapp style={{ color: '#3CCF91' }} />
          <span>Whatsapp</span>
        </a>
      </div>
    </div>
  );
};

export default Home;
