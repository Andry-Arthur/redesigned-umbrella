import Image from "next/image";
import { ChevronDown, Globe, Link, Mail, MapPin, MessageCircle, Play } from "lucide-react";

import HeroCarousel from "./components/HeroCarousel";
import TimelinePlayer from "./components/TimelinePlayer";
import { assetPath } from "./lib/asset-path";

const profile = {
  name: "Andry A. Rakotonjanabelo",
  role: "AI/ML Software Engineer",
  education: "Computer Science & Data Science at Gettysburg College",
  location: "San Francisco Bay Area, CA, USA",
  origin: "Antananarivo, Madagascar",
  linkedin: "https://www.linkedin.com/in/andryart10/",
  github: "https://github.com/Andry-Arthur",
  youtube: "https://www.youtube.com/@cswithandry",
  instagram: "https://www.instagram.com/andryarthur",
  email: "mailto:andry1arthur@gmail.com",
};

const landingImages = [
  { src: "/vite-assets/Andry1.jpg", alt: "Andry in a suit, outdoors" },
  { src: "/vite-assets/Andry2.jpg", alt: "Andry smiling at an event" },
  { src: "/vite-assets/GoChangeTheWorld.jpg", alt: "Andry at the Go Change the World event" },
  { src: "/vite-assets/Andry4.jpeg", alt: "Andry portrait in a dark jacket" },
];

const projects = [
  {
    title: "KeylessCampus | BitCamp 2025",
    description: "Smart RFID door unlocking system for college dorms. No more keys.",
    image: "/vite-assets/KeylessCampus.png",
    alt: "KeylessCampus project thumbnail",
    techs: ["React", "Java", "Postgres", "ESP32", "C"],
    link: "https://devpost.com/software/project-209",
  },
  {
    title: "SwiftApply | HenHacks 2025",
    description: "Your job application AI agent freeing you from the job application grind.",
    image: "/vite-assets/SwiftApply.png",
    alt: "SwiftApply project thumbnail",
    techs: ["React", "Browser", "Python", "TS", "Spring", "MySQL"],
    link: "https://devpost.com/software/swiftapply",
  },
  {
    title: "Codecafé",
    description: "Google Docs for code. Collaborate on code in real-time within one click of a button.",
    image: "/vite-assets/CodeCafe.png",
    alt: "Codecafé project thumbnail",
    techs: ["React", "TS", "Spring", "Redis"],
    link: "https://github.com/mrktsm/codecafe",
  },
  {
    title: "Kaleedo | Senior CS Capstone",
    description: "A contructivist digital humanities platform designed for leveraging AI and NLP.",
    image: "/vite-assets/Kaleedo.png",
    alt: "Kaleedo project thumbnail",
    techs: [".NET", "C#", "JS", "jQuery", "MySQL", "Bootstrap"],
    link: "https://kaleedo.net/",
  },
  {
    title: "Dermafyr | YCPHacks 2024 Winner 🏆",
    description: "Your unique skincare AI companion taylored to your skin type and concerns.",
    image: "/vite-assets/Dermafyr.png",
    alt: "Dermafyr project thumbnail",
    techs: ["React", "TF", "FastAPI", "Gemini", "Raspberry Pi"],
    link: "https://github.com/Andry-Arthur/dermafyr-ycp2024",
  },
  {
    title: "Climately | HackHarvard 2024",
    description: "Chrome extension for smart, weather-aware scheduling for Google Calendar.",
    image: "/vite-assets/climatelyLogoCopy.png",
    alt: "Climately project thumbnail",
    techs: ["React", "GCal", "Spring", "OpenAI", "JS", "Weather"],
    link: "https://github.com/Andry-Arthur/Climately-HackHarvard2024",
  },
  {
    title: "Smart Meal",
    description: "Your all-in-one recipe hub to search, rate, and manage meals tailored to your pantry and preferences!",
    image: "/vite-assets/SmartMeal.png",
    alt: "Smart Meal project thumbnail",
    techs: ["PHP", "JS", "MySQL"],
    link: "https://github.com/Andry-Arthur/Smart-Meal-Site",
  },
  {
    title: "SubHunt | GFBG 4 Game Jam 2025",
    description: "Blind-accessible 3D submarine hunting game that turns spatial audio into your primary weapon.",
    image: "/vite-assets/SubHunt.png",
    alt: "SubHunt project thumbnail",
    techs: ["Godot", "Audio", "Blind", "Game"],
    link: "https://github.com/Andry-Arthur/SubHunt",
  },
  {
    title: "Graph Theory : Book and Web Graph",
    description: "Turning Pages, Spinning Webs: Unfolding the Book and Web of Graphs.",
    image: "/vite-assets/GraphTheory.png",
    alt: "Graph Theory project thumbnail",
    techs: ["Overleaf", "Math"],
    link: assetPath("/vite-assets/Graph_Theory_Paper.pdf"),
  },
  {
    title: "Anki Cozmo Montecarlo Localization",
    description: "Solving Cozmo's kidnapping problem with Monte Carlo Localization.",
    image: "/vite-assets/AnkiLogo.png",
    alt: "Anki Cozmo project thumbnail",
    techs: ["Python", "NumPy", "Pandas", "OpenCV"],
    link: "http://cs.gettysburg.edu/~tneller/archive/cs371/cozmo/22sp/rakotonjanabelo/ankimontecarlo.wordpress.com/index.html",
  },
  {
    title: "Optimus Time | HackHarvard 2023",
    description: "Health data-driven smart scheduling boosting productivity while preventing burnout.",
    image: "/vite-assets/OptimusTime.jpg",
    alt: "Optimus Time project thumbnail",
    techs: ["Java", "Postgres", "Terra"],
    link: "https://devpost.com/software/optimustime",
  },
  {
    title: "CS with Andry | Youtube Channel",
    description: "My coding journey, uncensored. YouTube videos of problem-solving, projects, and everything in between.",
    image: "/vite-assets/Youtube.png",
    alt: "CS with Andry project thumbnail",
    techs: ["Java", "Python", "Video"],
    link: "https://www.youtube.com/@cswithandry",
  },
  {
    title: "Project Title: short desc",
    description: "Coming Soon... Coding magic in progress!",
    image: "/vite-assets/Placeholder.png",
    alt: "Placeholder project thumbnail",
    techs: [],
    link: "#",
  },
];

const awards = [
  {
    title: "MLH Top 50 2025",
    subtitle: "Major League Hacking",
    description: "Recognized among MLH's Top 50 hackers for 2025.",
    link: "https://top.mlh.com/2025/profiles/andry-rakotonjanabelo",
  },
];

const contactItems = [
  { id: "github", icon: MessageCircle, text: "Andry-Arthur", link: profile.github },
  { id: "youtube", icon: Play, text: "@cswithandry", link: profile.youtube },
  { id: "linkedin", icon: Link, text: "/andryart10", link: profile.linkedin },
  { id: "email", icon: Mail, text: "andry1arthur@gmail.com", link: profile.email },
  { id: "instagram", icon: Globe, text: "@andryarthur", link: profile.instagram },
];

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  email: profile.email.replace("mailto:", ""),
  url: "https://andry-arthur.github.io/redesigned-umbrella/",
  sameAs: [profile.linkedin, profile.github, profile.youtube, profile.instagram],
};

function ProjectCard({ project }) {
  return (
    <a className="project-card" href={project.link} target={project.link.startsWith("/") ? "_self" : "_blank"} rel={project.link.startsWith("/") ? undefined : "noreferrer noopener"}>
      <div className="project-image">
        <Image src={project.image} alt={project.alt} fill sizes="(max-width: 768px) 100vw, 400px" />
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-technologies">
          {project.techs.map((tech) => (
            <span key={tech} className="tech-tag" title={tech}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

function ContactIcon({ icon: Icon }) {
  return <Icon size={18} strokeWidth={1.9} />;
}

export default function Home() {
  return (
    <main className="app-shell" id="home">
      <header className="navbar-shell" aria-label="Primary navigation">
        <nav className="navbar-nav-shell">
          <a href="#home">HOME</a>
          <a href="#projects">PROJECTS</a>
          <a href="#timeline">TIMELINE</a>
          <a href="#contact-section">CONTACT</a>
        </nav>
      </header>

      <section className="landing-page min-vh-100 position-relative">
        <div className="container mt-4 landing-grid-shell">
          <h1 className="text-white display-3 fw-bold mb-5 chela-one-regular landing-title">Welcome</h1>

          <div className="landing-grid">
            <div className="carousel-column">
              <HeroCarousel images={landingImages} />
            </div>

            <div className="hero-copy text-white text-end text-md-end">
              <h2 className="display-2 fw-bold mb-3 chela-one-regular hero-name">
                Andry A.
                <br />
                Rakotonjanabelo
              </h2>
              <h3 className="h1 mb-2 hero-role">AI/ML Software Engineer</h3>
              <p className="h3 mb-4 hero-education">
                Computer Science &amp; Data Science
                <br />
                at <a href="https://www.gettysburg.edu" target="_blank" rel="noreferrer">Gettysburg College</a>
              </p>
              <div className="hero-location-stack">
                <div className="hero-location-row">
                  <MapPin className="hero-location-icon" size={18} />
                  <span>San Francisco Bay Area, CA, USA</span>
                </div>
                <div className="hero-location-row">
                  <Globe className="hero-location-icon" size={18} />
                  <span>Antananarivo, Madagascar</span>
                </div>
              </div>
            </div>
          </div>

          <div className="palm-container" aria-hidden="true">
            <Image src={assetPath("/vite-assets/palm.gif")} alt="" width={170} height={170} unoptimized priority={false} className="palm-img" />
          </div>

          <div className="text-center mt-4 scroll-indicator-shell">
            <a className="chevron-btn" href="#projects" aria-label="Scroll to projects">
              <ChevronDown size={50} strokeWidth={2.5} />
              <ChevronDown size={50} strokeWidth={2.5} className="chevron-second" />
            </a>
          </div>
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="container py-5">
          <h1 className="projects-title text-center mb-5 chela-one-regular">Projects</h1>
          <div className="projects-container">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="awards-section" id="awards">
        <div className="container py-5">
          <h1 className="projects-title text-center mb-5 chela-one-regular">Awards</h1>
          <div className="awards-container">
            {awards.map((award) => (
              <a key={award.title} className="award-card" href={award.link} target="_blank" rel="noreferrer noopener">
                <div className="award-badge">Featured Award</div>
                <h3 className="award-title">{award.title}</h3>
                <p className="award-subtitle">{award.subtitle}</p>
                <p className="award-description">{award.description}</p>
                <span className="award-link">Open award profile</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="timeline-section min-vh-100" id="timeline">
        <div className="container py-5">
          <h1 className="projects-title text-center mb-5 chela-one-regular">My Journey</h1>

          <TimelinePlayer src={assetPath("/vite-assets/music/Silver-Gold-LODE.mp3")} />

          <div className="music-suggestion text-center mb-4">
            <em>💡 Enhance your journey through time with some background music</em>
          </div>

          <div className="timeline-container">
            <iframe
              src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=v2:2PACX-1vQ3Nfu30je_k7iZeS_XvjxURi_B3WbVnWtdRDZFMUDTUGJEuifeQrjPUXt93xvJ7XdN6HDz7_DW394K&font=Default&lang=en&initial_zoom=2&height=650"
              width="100%"
              height="650"
              title="My Timeline Journey"
              allowFullScreen
              frameBorder="0"
            />
          </div>
        </div>
      </section>

      <footer className="footer" id="contact-section">
        <div className="footer-container">
          <div className="footer-info">
            <h2 className="footer-title">My Contacts</h2>
            <div className="footer-cta">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="footer-subtitle-link">
                <p className="footer-subtitle">Hire me!</p>
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="footer-subtitle-link">
                <p className="footer-subtitle">Contact me!</p>
              </a>
            </div>
          </div>

          <div className="footer-contacts">
            {contactItems.map((item) => (
              <a key={item.id} href={item.link} className="contact-item" target="_blank" rel="noopener noreferrer">
                <span className="contact-icon">
                  <ContactIcon icon={item.icon} />
                </span>
                <span>{item.text}</span>
              </a>
            ))}
          </div>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    </main>
  );
}
