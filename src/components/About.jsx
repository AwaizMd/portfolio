import React from "react";
import image1 from "../assets/1726463339364.jpg";
import { HiOutlineDownload } from "react-icons/hi"; // Importing the download icon
import resumePDF from "../assets/AwaizResume.pdf";

const About = () => {
  const handleDownload = () => {
    // Optional: Show the PDF in a new tab
    window.open(resumePDF, "_blank");
  };
  return (
    <div className="md:mt-40 mt-20 mb-20 ml-[9%] flex flex-row justify-between section">
      <div className="md:w-[60%] w-[90%]">
        <h2 className="text-white text-2xl font-semibold">⚡ About Me</h2>
        <p className="text-[#8F9094] test-xl mt-2">
          Hey! I'm Mohammad Awaiz, and I've been passionate about technology
          since an early age.
        </p>
        <p className="text-[#8F9094] test-xl mt-8">
          Back in the day, I enjoyed creating things using no-code tools, which
          sparked my journey into coding. Fast-forward to today, I work with a
          diverse stack, including Node.js, Express.js, Serverless architecture,
          Redis, MongoDB, Sequelize, Sockets, and WebRTC. My expertise in
          Node.js allows me to build robust APIs, manage
          authentication/authorization, and develop efficient e-commerce
          systems. With Express.js, I create scalable web applications and
          RESTful APIs, while my understanding of Serverless, microservices, and
          monolithic architectures helps me design versatile applications.
        </p>
        <p className="text-[#8F9094] test-xl mt-6">
          I also leverage Redis for caching to boost performance and MongoDB for
          optimizing complex data structures. Using Sequelize, I integrate
          databases like MySQL with ease. My experience with Sockets enables me
          to develop real-time features, such as chat apps and notifications,
          while WebRTC allows me to build cutting-edge audio and video
          communication tools.
        </p>
        <p className="text-[#8F9094] test-xl mt-6">
          When I'm not coding, you'll find me either out and about, gaming with
          friends, learning something new, or enjoying a good book!
        </p>

        <a
          href={resumePDF} // Link to the PDF file
          download // This attribute makes the link download the file
          onClick={handleDownload} // Optional: to handle the download action
          className="bg-[#FFFFFF14] flex items-center w-[200px] space-x-2 px-4 py-2 text-white rounded-md mt-5"
        >
          <HiOutlineDownload style={{ color: "#3CCF91" }} />
          <span>Download Resume</span>
        </a>
      </div>

      <div className="mt-10 md:mr-[10%] hidden md:block">
        <img src={image1} className="w-[350px] h-[350px] rounded-full" />
      </div>
    </div>
  );
};

export default About;
