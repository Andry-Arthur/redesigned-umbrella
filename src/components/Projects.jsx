// ProjectsSection.jsx
import React from 'react';
import './Projects.css';
import OverflowCard from './OverflowCard';

// Import project images
import ClimatelyLogo from '../assets/climatelyLogoCopy.png';
import Dermafyr from '../assets/Dermafyr.png';
import Kaleedo from '../assets/Kaleedo.png';
import Codecafe from '../assets/CodeCafe.png';
import SmartMeal from '../assets/SmartMeal.png';
import Ankicozmo from '../assets/AnkiLogo.png';
import OptimusTime from '../assets/OptimusTime.jpg';
import Youtube from '../assets/Youtube.png';
import SwiftApply from '../assets/SwiftApply.png';
import GraphTheory from '../assets/GraphTheory.png';
import GraphPaper from '../assets/Graph_Theory_Paper.pdf';
import KeylessCampus from '../assets/KeylessCampus.png';


// Import icons
import { GrMysql as MySQL } from "react-icons/gr";
import { AiOutlineDotNet as DotNet } from "react-icons/ai";
import { TbBrandCSharp as CSharp } from "react-icons/tb";
import { FaJs as JS } from "react-icons/fa";
import { DiJqueryLogo as JQuery } from "react-icons/di";
import { FaReact as ReactLogo } from "react-icons/fa";
import { SiTypescript as Typescript } from "react-icons/si";
import { SiSpringboot as SpringBoot } from "react-icons/si";
import { SiSpring as Spring } from "react-icons/si";
import { FaBootstrap as Bootstrap } from "react-icons/fa";
import { SiGooglegemini as GoogleGemini } from "react-icons/si";
import { SiTensorflow as TF } from "react-icons/si";
import { SiFastapi as FastAPI } from "react-icons/si";
import { FaRaspberryPi as RaspPi } from "react-icons/fa";
import { SiGooglecalendar as GCal } from "react-icons/si";
import { TiWeatherPartlySunny as WeatherAPI } from "react-icons/ti";
import { AiOutlineOpenAI as OpenAI } from "react-icons/ai";
import { DiRedis as Redis} from "react-icons/di";
import { FaPhp as Php} from "react-icons/fa";
import { SiNumpy as Numpy} from "react-icons/si";
import { FaPython as Python} from "react-icons/fa";
import { SiPandas as Pandas} from "react-icons/si";
import { SiOpencv as OpenCV} from "react-icons/si";
import { BiLogoPostgresql as Postgres} from "react-icons/bi";
import { FaJava as Java } from "react-icons/fa";
import { TbCircleLetterTFilled as TerraAPI} from "react-icons/tb";
import { FaVideo as Video} from "react-icons/fa";
import { BsBrowserChrome as BrowserUse} from "react-icons/bs";
import { SiOverleaf as Overleaf } from "react-icons/si";
import { TbMath as Math } from "react-icons/tb";
import { HiMiniCpuChip as ESP32Chip} from "react-icons/hi2";
import { SiC as CIcon} from 'react-icons/si';



// Assign display names to icons
ReactLogo.displayName = "React";
DotNet.displayName = "ASP.NET";
CSharp.displayName = "C#";
JS.displayName = "JavaScript";
JQuery.displayName = "jQuery";
Typescript.displayName = "TypeScript";
SpringBoot.displayName = "Spring Boot";
Spring.displayName = "Spring";
Bootstrap.displayName = "Bootstrap";
GoogleGemini.displayName = "Google Gemini API";
TF.displayName = "TensorFlow";
FastAPI.displayName = "FastAPI";
RaspPi.displayName = "Raspberry Pi";
GCal.displayName = "Google Calendar API";
WeatherAPI.displayName = "OpenWeather API";
OpenAI.displayName = "OpenAI API";
MySQL.displayName = "MySQL";
Redis.displayName = "Redis";
Php.displayName = "PHP";
Numpy.displayName = "NumPy";
Python.displayName = "Python";
Pandas.displayName = "Pandas";
OpenCV.displayName = "OpenCV";
Postgres.displayName = "PostgreSQL";
Java.displayName = "Java";
TerraAPI.displayName = "TerraAPI";
Video.displayName = "Video Editing";
BrowserUse.displayName = "browser-use agent";
Overleaf.displayName = "Overleaf + Latex";
Math.displayName = "Math Writing";
ESP32Chip.displayName = "ESP32 Chip";
CIcon.displayName = "C";

const Projects = () => {
  

  const projects = [
    {
      title: "KeylessCampus | BitCamp 2025",
      description: "Smart RFID door unlocking system for college dorms dorms. No more keys.",
      image: KeylessCampus,
      icons: [ReactLogo, Java, Postgres, ESP32Chip, CIcon],
      link: "https://devpost.com/software/project-209"
    },
    {
      title: "SwiftApply | HenHacks 2025",
      description: "Your job application AI agent freeing you from the job application grind.",
      image: SwiftApply,
      icons: [ReactLogo, BrowserUse, Python, Typescript, Spring, MySQL],
      link: "https://devpost.com/software/swiftapply"
    },
    {
      title: "Codecafé",
      description: "Google Docs for code. Collaborate on code in real-time within one click of a button.",
      image: Codecafe,
      icons: [ReactLogo, Typescript, SpringBoot, Spring, Redis],
      link: "https://github.com/mrktsm/codecafe"
    },
    {
      title: "Kaleedo | Senior CS Capstone",
      description: "A contructivist digital humanties platform designed for leveraging AI and NLP.",
      image: Kaleedo,
      icons: [DotNet, CSharp, JS, JQuery, MySQL, Bootstrap],
      link: "https://kaleedo.net/"
    },
    {
      title: "Dermafyr | YCPHacks 2024 Winner 🏆",
      description: "Your unique skincare AI companion taylored to your skin type and concerns.",
      image: Dermafyr,
      icons: [ReactLogo, TF, FastAPI, GoogleGemini, RaspPi],
      link: "https://github.com/Andry-Arthur/dermafyr-ycp2024"
    },
    {
      title: "Climately | HackHarvard 2024",
      description: "Chrome extension for smart, weather-aware scheduling for Google Calendar.",
      image: ClimatelyLogo,
      icons: [ReactLogo, GCal, SpringBoot, OpenAI, JS, WeatherAPI],
      link: "https://github.com/Andry-Arthur/Climately-HackHarvard2024"
    },
    {
      title: "Smart Meal",
      description: "Your all-in-one recipe hub to search, rate, and manage meals tailored to your pantry and preferences!",
      image: SmartMeal,
      icons: [Php, JS, MySQL],
      link: "https://github.com/Andry-Arthur/Smart-Meal-Site"
    },
    {
      title: "Graph Theory : Book and Web Graph",
      description: "Turning Pages, Spinning Webs: Unfolding the Book and Web of Graphs.",
      image: GraphTheory,
      icons: [Overleaf, Math],
      link: GraphPaper
    },
    {
      title: "Anki Cozmo Montecarlo Localization",
      description: "Solving Cozmo's kidnapping problem with Monte Carlo Localization.",
      image: Ankicozmo,
      icons: [Python, Numpy, Pandas, OpenCV],
      link: "http://cs.gettysburg.edu/~tneller/archive/cs371/cozmo/22sp/rakotonjanabelo/ankimontecarlo.wordpress.com/index.html"
    },
    {
      title: "Optimus Time | HackHarvard 2023",
      description: "Health data-driven smart scheduling boosting productivity while preventing burnout.",
      image: OptimusTime,
      icons: [Java, Postgres, TerraAPI],
      link: "https://devpost.com/software/optimustime"
    },
    {
      title: "CS with Andry | Youtube Channel",
      description: "My coding journey, uncensored. YouTube videos of problem-solving, projects, and everything in between.",
      image: Youtube,
      icons: [Java, Python, Video],
      link: "https://www.youtube.com/@cswithandry"
    },
    {
      title: "Project Title: short desc",
      description: "Coming Soon... Coding magic in progress!",
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