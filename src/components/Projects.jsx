// ProjectsSection.jsx
import React from 'react';
import './Projects.css';

const Projects = () => {
  // Sample project data - replace with your actual projects
  const projects = [
    {
      title: "Project Title: short desc",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut sodales orci. Morbi volutpat gravida dui, non facilisis risus. Sed vel porta turpis. Praesent quis arcu ut nisl bibendum commodo. Donec et porttitor enim.",
      technologies: ["Tech 1", "Tech 1", "Tech 1", "Tech 1"],
      image: "/api/placeholder/400/200" // Replace with your actual image path
    },
    {
      title: "Project Title: short desc",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut sodales orci. Morbi volutpat gravida dui, non facilisis risus. Sed vel porta turpis. Praesent quis arcu ut nisl bibendum commodo. Donec et porttitor enim.",
      technologies: ["Tech 1", "Tech 1", "Tech 1", "Tech 1"],
      image: "/api/placeholder/400/200"
    },
    {
      title: "Project Title: short desc",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut sodales orci. Morbi volutpat gravida dui, non facilisis risus. Sed vel porta turpis. Praesent quis arcu ut nisl bibendum commodo. Donec et porttitor enim.",
      technologies: ["Tech 1", "Tech 1", "Tech 1", "Tech 1"],
      image: "/api/placeholder/400/200"
    }
  ];

  return (
    <section id="projects">
      <div className="projects-section">
        <div className="container py-5">
          <h1 className="projects-title text-center mb-5">Projects</h1>
          <div className="projects-container">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-content">
                  <h2 className="project-title">{project.title}</h2>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;