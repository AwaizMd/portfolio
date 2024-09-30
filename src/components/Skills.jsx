import React, { useState } from "react";
import { Modal } from "antd";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaServer,
  FaCubes,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiMysql,
  SiRedis,
  SiWebrtc,
  SiSocketdotio,
  SiPostgresql,
  SiJavascript,
} from "react-icons/si";
import Marquee from "react-fast-marquee";

const Skills = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  let skillsData = [
    { id: 1, name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
    { id: 2, name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    {
      id: 16,
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-500" />,
    },
    { id: 4, name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    {
      id: 6,
      name: "Express.js",
      icon: <SiExpress className="text-gray-500" />,
    },
    { id: 3, name: "React.js", icon: <FaReact className="text-blue-400" /> },
    { id: 5, name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { id: 7, name: "Mysql", icon: <SiMysql className="text-blue-700" /> },
    {
      id: 15,
      name: "PostgreSQL",
      icon: <SiPostgresql className="text-blue-600" />,
    },
    { id: 10, name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
    { id: 11, name: "Github", icon: <FaGithub className="text-gray-400" /> },
    {
      id: 14,
      name: "Socket.io",
      icon: <SiSocketdotio className="text-gray-400" />,
    },
    { id: 8, name: "Redis", icon: <SiRedis className="text-red-600" /> },
    { id: 9, name: "WEBRTC", icon: <SiWebrtc className="text-teal-400" /> },
    {
      id: 12,
      name: "Microservices",
      icon: <FaCubes className="text-purple-500" />,
    },
    {
      id: 13,
      name: "Serverless",
      icon: <FaServer className="text-gray-600" />,
    },
  ];

  return (
    <div className="mt-20 sm:mt-40 mb-20 ml-[9%] mr-[10%] section">
      <div className="flex justify-between">
        <h2 className="text-white text-2xl font-semibold mb-4 ">
          🧩 Skills <span></span>
        </h2>
        <a className="text-[#3CCF91] cursor-pointer" onClick={showModal}>
          View All
        </a>
      </div>
      <Modal
        title="Skills"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="flex flex-wrap justify-center">
        {skillsData.map((skill) => (
          <div
            key={skill.id}
            className="flex flex-col items-center justify-center space-x-2 p-4 border m-2 rounded-md w-[80px] h-[60px]"
          >
            <span className="text-2xl">{skill.icon}</span>
            <p className="text-black  text-[8px] mt-2">{skill.name}</p>
          </div>
        ))}
          </div>
      </Modal>
      <div className="mt-10">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill) => (
            <div
              key={skill.id}
              className="flex flex-col items-center justify-center space-x-2 p-4 border m-2 rounded-md w-[125px] h-[100px]"
            >
              <span className="text-4xl">{skill.icon}</span>
              <p className="text-white  text-sm mt-2">{skill.name}</p>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;
