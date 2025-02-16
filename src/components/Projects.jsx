// ProjectsSection.jsx
import React from 'react';
import './Projects.css';
import OverflowCard from './OverflowCard';
import { GrMysql } from "react-icons/gr";
import ClimatelyLogo from '../assets/climatelyLogoCopy.png';
import Dermafyr from '../assets/Dermafyr.png';
import Kaleedo from '../assets/Kaleedo.png';

const Projects = () => {
  // Include the Yosemite project within your projects list data
  const projects = [
    {
      title: "Codecafé",
      description: "Google Docs for code. Collaborate on code in real-time.",
      image: "",
      mainImageSrcSet:
        "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x",
      mainImageAlt: "Scenic view",
      icons: [GrMysql],
      link: "#"  // default link (or update with an actual URL)
    },
    {
      title: "Kaleedo | Senior CS Capstone",
      description: "A contructivist digital humanties platform designed leveraging AI and NLP.",
      image: Kaleedo, // Replace with your actual image path
      icons: [], // Add icons if needed
      link: "#"
    },
    {
      title: "Dermafyr",
      description:
        "Your unique skincare AI companion taylored to your skin type and concerns.",
      image: Dermafyr, // Replace with your actual image path
      icons: [], // Add icons if needed
      link: "#"
    },
    {
      title: "Climately | HackHarvard 2024",
      description:
        "Chrome extension providing dynamic weather updates and scheduling suggestions into your Google Calendar.",
      image: ClimatelyLogo,
      icons: [],
      link: "#"
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