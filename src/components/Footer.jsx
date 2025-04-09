import { useState } from 'react';
import { Mail, Linkedin, Instagram, Video } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  
  const contactItems = [
    { id: 'youtube', icon: <Video size={20} />, text: '@cswithandry', link: 'https://youtube.com/@cswithandry' },
    { id: 'linkedin', icon: <Linkedin size={20} />, text: '/andryart10', link: 'https://linkedin.com/in/andryart10' },
    { id: 'email', icon: <Mail size={20} />, text: 'andry1arthur@gmail.com', link: 'mailto:andry1arthur@gmail.com' },
    { id: 'instagram', icon: <Instagram size={20} />, text: '@andryarthur', link: 'https://instagram.com/andryarthur' }
  ];

  // LinkedIn message link - replace 'andryart10' with your actual LinkedIn username if different
  const linkedinMessageLink = 'https://www.linkedin.com/messaging/compose/?to=andryart10';

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <h2 className="footer-title">My Contacts</h2>
          <div className="footer-cta">
            <a 
              href={linkedinMessageLink}
              className="footer-subtitle-link"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredItem('hire')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <p className={`footer-subtitle ${hoveredItem === 'hire' ? 'footer-subtitle-hovered' : ''}`}>
                Hire me!
              </p>
            </a>
            <a 
              href={linkedinMessageLink}
              className="footer-subtitle-link"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredItem('contact')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <p className={`footer-subtitle ${hoveredItem === 'contact' ? 'footer-subtitle-hovered' : ''}`}>
                Contact me!
              </p>
            </a>
          </div>
        </div>
        
        <div className="footer-contacts">
          {contactItems.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className="contact-item"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <span className={`contact-icon ${hoveredItem === item.id ? 'contact-hovered' : ''}`}>
                {item.icon}
              </span>
              <span className={hoveredItem === item.id ? 'contact-hovered' : ''}>
                {item.text}
              </span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;