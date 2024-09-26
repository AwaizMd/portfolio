import React from "react";
import { Card } from "antd";

const Projects = () => {
  const projectsData = [
    {
      name: "Japfu",
      company: "Codetru",
      description:
        "Its a A saas based HRMS application with AI chat bot and AI timesheets, with zoho book integration for invoices generation.",
      technologies: "Node.js, Express.js, Postgres, Socket.io, and Redis.",
    },
    {
      name: "RUTO",
      company: "Codetru",
      description:
        "Its a email marketing automation tool with AI based email campaign management.",
      technologies: "React.js, Ant design, Zustand, tailwind css etc.",
    },
    {
      name: "O-connect",
      company: "Onpassive Technologies",
      description:
        "It is a video conferencing platform and online meeting tool. With it, users can seamlessly connect, collaborate, and communicate.",
      technologies:
        "Node.js, Express.js, MongoDB, Mongoose, AWS lambda, Socket.io, and Redis.",
    },
    {
      name: "O-pal",
      company: "Onpassive Technologies",
      description:
        "Its a messaging platform with audio and video call features.",
      technologies:
        "Node.js, Express.js, MongoDB, Mongoose, AWS lambda, Socket.io, and Redis.",
    },
    {
      name: "Fortune Online",
      company: "Infoware India",
      description:
        "It’s a B2B ecommerce project for selling fortune products to business customers and B2C ecommerce project for selling fortune products to any customers.",
      technologies:
        " Node.js, Express.js, Mysql, Sequelize, 3rd party Api Integration.",
    },
    {
      name: "Qmall",
      company: "Infoware India",
      description:
        "It's an electronic online Q-Mall App is a new and unique application that contains the most important stores that provide products in a new way, facilitating the purchase process and avoiding waiting queues in malls",
      technologies:
        "Node.js, Express.js, Mysql, Sequelize, 3rd party Api Integration.",
    },
    {
      name: "Hitfit",
      company: "Infoware India",
      description:
        "Its a messaging platform with audio and video call features.",
      technologies:
        "Node.js, Express.js, Mysql, Sequelize, 3rd party Api Integration.",
    },
  ];
  return (
    <div className="mt-20 mb-20 ml-[9%] mr-[5%] section">
      <h2 className="text-white text-2xl font-semibold mb-4 ">⚡ Projects</h2>
      <div className="flex flex-wrap">
      {projectsData?.map((project) => (
        <Card
          title={<span style={{ color: "white" }}>{project?.name}</span>}
          bordered={true}
          style={{
            width: 300,
            margin: 10,
            background: "black",
            color: "white"
          }}
        >
          <p><span className="font-semibold text-[#3CCF91]">Company: </span>{project?.company}</p>
          <p className="mt-2 text-[#8F9094]">{project?.description}</p>
          <p className="mt-2 "><span  className="font-semibold text-[#3CCF91]">Technologies: </span>{project?.technologies}</p>
        </Card>
      ))}
      </div>
    </div>
  );
};

export default Projects;
