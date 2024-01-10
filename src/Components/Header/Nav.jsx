import React from 'react';
import '../../../Styling/Nav.css';

export default function Nav() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav>
      <li>
        <a href="#about" onClick={() => scrollToSection('about')}>
          ABOUT
        </a>
      </li>
      <li>
        <a href="#projects" onClick={() => scrollToSection('projects')}>
          PROJECTS
        </a>
      </li>
      <li>
        <a href="#blog" onClick={() => scrollToSection('blog')}>
          BLOG
        </a>
      </li>
      <li>
        <a href="#contact" onClick={() => scrollToSection('contact')}>
          CONTACT ME
        </a>
      </li>
    </nav>
  );
}