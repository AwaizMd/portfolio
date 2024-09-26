import React from "react";
import Lottie from "lottie-react";
import myAnimation from "../assets/experienceAnimation.json";
import { ClockCircleOutlined } from "@ant-design/icons";
import { Timeline } from "antd";

const Experience = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: myAnimation,
    style: {
      width: "200%",
      background: "transparent",
    },
  };
  
  const workExperiences = [
    {
      position: "Software Engineer",
      company: "Codetru",
      dateFrom: "June 2024",
      dateTo: "Present",
      responsibilities: "Design and maintain backend services using Node.js, PostgreSQL, and Redis, while implementing real-time communication with Socket.io. Develop responsive user interfaces and dynamic components with React, utilizing Ant Design and Tailwind CSS for a modern and visually appealing frontend. Optimize code for performance and scalability, ensuring reliable services.",
    },
    {
      position: "Software Engineer",
      company: "Onpassive Technologies",
      dateFrom: "July 2023",
      dateTo: "June 2024",
      responsibilities:
        "Develop and maintain backend services using Node.js, MongoDB, Redis, and serverless architecture, with real-time communication via Socket.io. Optimize code for performance, scalability, and mentor junior team members, ensuring reliable and efficient services.",
    },
    {
      position: "Node.js Developer",
      company: "Infoware Inida",
      dateFrom: "December 2021",
      dateTo: "July 2023",
      responsibilities:
        "Develop REST APIs using Node.js, MySQL, and Express.js with Sequelize ORM, focusing on B2C and B2B projects in a collaborative team environment. Work on e-commerce projects following Agile methodology and MVC architecture, ensuring code is reusable, maintainable, and well-documented with clear comments for readability.",
    },
    {
      position: "Android Developer Intern",
      company: "Innowrap Technologies",
      dateFrom: "December 2020",
      dateTo: "April 2021",
      responsibilities:
        "Design and develop Android apps for mobile devices, integrating APIs using Retrofit. Collaborate with team members to implement features, while learning and documenting new libraries and functionalities.",
    }
  ];

  return (
    <div className="mt-20 mb-20 mx-[5%] sm:mx-[9%] section">
      <h2 className="text-white text-2xl sm:text-3xl font-semibold mb-4">
        💼 Experiences
      </h2>
      
      <div className="flex flex-col sm:flex-row justify-between">
        {/* Lottie animation only visible on larger screens */}
        <div className="hidden sm:block w-[20%]">
          <Lottie {...defaultOptions} />
        </div>

        {/* Timeline for experiences */}
        <div className="sm:ml-10 mt-10 sm:mt-0 w-full sm:w-[60%]">
          <Timeline>
            {workExperiences.map((experience, index) => (
              <Timeline.Item
                key={index}
                dot={
                  experience.isHighlighted ? (
                    <ClockCircleOutlined
                      className="timeline-clock-icon"
                      style={{ color: "red" }}
                    />
                  ) : null
                }
              >
                <h4 className="text-white text-lg sm:text-xl">
                  {experience.position} at{" "}
                  <span className="text-[#3CCF91] font-semibold">
                    {experience.company}
                  </span>
                </h4>
                <p className="text-white text-sm sm:text-base">
                  {experience.dateFrom} - {experience.dateTo}
                </p>
                <p className="text-[10px] sm:text-xs text-purple-400">
                  Responsibilities:{" "}
                  <span className="text-white text-[10px] sm:text-xs italic">
                    {experience.responsibilities}
                  </span>
                </p>
              </Timeline.Item>
            ))}
          </Timeline>
        </div>
      </div>
    </div>
  );
};

export default Experience;
