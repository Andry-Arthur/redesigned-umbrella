const profile = {
  name: "Andry A. Rakotonjanabelo",
  role: "AI/ML Software Engineer",
  education: "Computer Science & Data Science at Gettysburg College",
  location: "San Francisco Bay Area, CA, USA",
  origin: "Antananarivo, Madagascar",
  linkedin: "https://www.linkedin.com/in/andryart10/",
  github: "https://github.com/Andry-Arthur",
  youtube: "https://www.youtube.com/@cswithandry",
  email: "mailto:andry1arthur@gmail.com",
};

const projects = [
  {
    title: "KeylessCampus",
    subtitle: "BitCamp 2025",
    description: "Smart RFID dorm door unlocking system.",
    link: "https://devpost.com/software/project-209",
  },
  {
    title: "SwiftApply",
    subtitle: "HenHacks 2025",
    description: "AI job application agent that automates repetitive application workflows.",
    link: "https://devpost.com/software/swiftapply",
  },
  {
    title: "Codecafé",
    subtitle: "Realtime collaboration",
    description: "Google Docs-style real-time collaboration for code.",
    link: "https://github.com/mrktsm/codecafe",
  },
  {
    title: "Dermafyr",
    subtitle: "YCPHacks 2024 Winner",
    description: "AI skincare assistant personalized to skin type and concerns.",
    link: "https://github.com/Andry-Arthur/dermafyr-ycp2024",
  },
  {
    title: "SubHunt",
    subtitle: "GFBG 4 Game Jam 2025",
    description: "Blind-accessible 3D game centered on spatial audio gameplay.",
    link: "https://github.com/Andry-Arthur/SubHunt",
  },
  {
    title: "CS with Andry",
    subtitle: "YouTube",
    description: "Coding journey videos, project walkthroughs, and problem-solving content.",
    link: "https://www.youtube.com/@cswithandry",
  },
];

export default function Home() {
  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">Next.js Portfolio Overhaul</p>
        <h1>{profile.name}</h1>
        <p className="role">{profile.role}</p>
        <p>{profile.education}</p>
        <p>
          {profile.location} · {profile.origin}
        </p>
        <div className="actions">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn primary">
            View LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="btn">
            GitHub
          </a>
          <a href={profile.email} className="btn">
            Email
          </a>
        </div>
      </section>

      <section className="section">
        <h2>About</h2>
        <p>
          I build practical AI/ML products, accessibility-first experiences, and hackathon-grade prototypes that ship fast.
          This site is now rebuilt with Next.js and centered around my latest public profile information.
        </p>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>Selected Projects</h2>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-link">
            See full updates on LinkedIn
          </a>
        </div>
        <div className="grid">
          {projects.map((project) => (
            <article key={project.title} className="card">
              <h3>{project.title}</h3>
              <p className="subtitle">{project.subtitle}</p>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noreferrer">
                Open project
              </a>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={profile.youtube} target="_blank" rel="noreferrer">
          YouTube
        </a>
      </footer>
    </main>
  );
}
