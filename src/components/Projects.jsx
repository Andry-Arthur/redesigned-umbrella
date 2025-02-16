// ProjectsSection.jsx
import React from 'react';
import './Projects.css';
import OverflowCard from './OverflowCard';
import ClimatelyLogo from '../assets/climatelyLogoCopy.png';
import Dermafyr from '../assets/Dermafyr.png';
import Kaleedo from '../assets/Kaleedo.png';
import Codecafe from '../assets/CodeCafe.png';

import { GrMysql as MySQL} from "react-icons/gr";
import { AiOutlineDotNet as DotNet } from "react-icons/ai";
import { TbBrandCSharp as CSharp} from "react-icons/tb";
import { FaJs as JS} from "react-icons/fa";
import { DiJqueryLogo as JQuery} from "react-icons/di";
import { FaReact as ReactLogo} from "react-icons/fa";
import { SiTypescript as Typescript } from "react-icons/si";
import { SiSpringboot as SpringBoot} from "react-icons/si";
import { SiSpring as Spring} from "react-icons/si";
import { FaBootstrap as Bootstrap} from "react-icons/fa";
import { SiGooglegemini as GoogleGemini} from "react-icons/si";
import { SiTensorflow as TF} from "react-icons/si";
import { SiFastapi as FastAPI} from "react-icons/si";
import { FaRaspberryPi as RaspPi} from "react-icons/fa";
import { SiGooglecalendar as GCal} from "react-icons/si";
import { TiWeatherPartlySunny as WeatherAPI} from "react-icons/ti";
import { AiOutlineOpenAI as OpenAI} from "react-icons/ai";

const Projects = () => {
  
  ReactLogo.displayName = "FaReact";

  const projects = [
    {
      title: "Codecafé",
      description: "Google Docs for code. Collaborate on code in real-time.",
      image: Codecafe,
      icons: [ReactLogo,Typescript,SpringBoot, Spring],
      link: "https://github.com/mrktsm/codecafe"  // default link (or update with an actual URL)
    },
    {
      title: "Kaleedo | Senior CS Capstone",
      description: "A contructivist digital humanties platform designed leveraging AI and NLP.",
      image: Kaleedo, // Replace with your actual image path
      icons: [DotNet, CSharp, JS, JQuery, MySQL, Bootstrap], // Add icons if needed
      link: "https://kaleedo.net/"
    },
    {
      title: "Dermafyr | YCPHacks 2024 Winner 🏆",
      description:
        "Your unique skincare AI companion taylored to your skin type and concerns.",
      image: Dermafyr, // Replace with your actual image path
      icons: [ReactLogo, TF, FastAPI, GoogleGemini, RaspPi], // Add icons if needed
      link: "https://github.com/Andry-Arthur/dermafyr-ycp2024"
    },
    {
      title: "Climately | HackHarvard 2024",
      description:
        "Chrome extension for smart, weather-aware scheduling for Google Calendar.",
      image: ClimatelyLogo,
      icons: [ReactLogo, GCal, SpringBoot, OpenAI, JS, WeatherAPI], // Add icons if needed
      link: "https://github.com/Andry-Arthur/Climately-HackHarvard2024"
    },
    {
      title: "Project Title: short desc",
      description:
        "Chrome extension providing dynamic weather updates and scheduling suggestions into your Google Calendar.",
      image: "",
      icons: [],
      link: "#"
    }
  ];

  return (
    <section id="projects">
      <div className="projects-section">
        <div className="container py-5">
          <h1 className="projects-title text-center mb-5">Projects</h1>
          <div className="projects-container">
            {projects.map((project, index) => (
              <OverflowCard
                key={index}
                mainImage={project.image}
                mainImageSrcSet={project.mainImageSrcSet || project.image}
                mainImageAlt={project.mainImageAlt || project.title}
                title={project.title}
                description={project.description}
                icons={project.icons || []}
                link={project.link || "#"}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;