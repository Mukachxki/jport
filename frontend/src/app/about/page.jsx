"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "@/app/styles/about.css"; // Make sure this file exists and is accessible

const AboutPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [skills, setSkills] = useState({});
  const [projects, setProjects] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const goLeft = () =>
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );

  const goRight = () =>
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );

  useEffect(() => {
    setIsLoading(true);
    // Fetch skills
    fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/api/skills/`)
      .then(response => response.json())
      .then(data => setSkills(data))
      .catch(error => console.error('Error fetching skills:', error));

    // Fetch projects
    fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/api/projects/`)
      .then(response => response.json())
      .then(data => {
        setProjects(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
        setIsLoading(false);
      });

    const btn = document.getElementById("backToTopBtn");
    const handleScroll = () => {
      if (btn) {
        btn.style.display = window.scrollY > 300 ? "block" : "none";
      }
    };
  
    // Handle showing/hiding the back to top button
    window.addEventListener("scroll", handleScroll);
  
    if (btn) {
      btn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  
    // Smooth scroll for internal anchor links
    const anchors = document.querySelectorAll('a[href^="#"]');
    const handleAnchorClick = function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    };
  
    anchors.forEach(anchor => {
      anchor.addEventListener("click", handleAnchorClick);
    });
  
    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      anchors.forEach(anchor => {
        anchor.removeEventListener("click", handleAnchorClick);
      });
    };
  }, []);

  return (
    <div>
      {/* Navigation */}
      <nav className="nav-buttons" id="navButtons">
        <Link
          href="/"
          className="top-left-logo"
          onClick={(e) => {
            e.preventDefault();
           window.scrollTo({ top: 0, behavior: "smooth" });
          setTimeout(() => {
            window.location.href = "/";
          }, 100);
            }}
          >
            Hide_.
          </Link>

          {/* Hamburger Button */}
          <button
          className="menu-toggle"
          id="menuToggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          >
          <i className="fas fa-bars"></i>
          </button>

          
          <div className={`nav-links ${menuOpen ? "show" : ""}`} id="navMenu">
            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
          </div>
        </nav>

      {/* Header */}
      <header className="header text-center" id="home">
        <h1>Sup! I'm Aaron</h1>
        <p>
          Computer Engineering student exploring web development and software
          projects. I enjoy learning by building—this portfolio tracks what
          I've made (and broken) so far.
        </p>
      </header>

      {/* Skills */}
      <section className="section container">
        <h2>SKILLS</h2>
        <div className="skill-columns">
          {Object.entries(skills).map(([category, categorySkills]) => (
            <div key={category} className="skill-container">
              <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
              {categorySkills.map((skill, index) => (
                <div key={index} className="skill">
                  <p>{skill.name}</p>
                  <div className={`skill-level ${skill.level.toLowerCase()}`}>
                    {skill.level}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Projects Carousel */}
      <section className="section container" id="projects">
        <h2>PROJECTS</h2>
        {isLoading ? (
          <div className="loading">Loading projects...</div>
        ) : projects.length > 0 ? (
          <div className="project-carousel">
            {/* Desktop arrows */}
            <button className="arrow left desktop-only" onClick={goLeft}>❮</button>

            <div className="project-card">
              {projects[currentIndex]?.image && (
                <div style={{ position: 'relative', width: '100%', height: '300px' }}>
                  <Image
                    src={projects[currentIndex].image}
                    alt={projects[currentIndex].title || 'Project image'}
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              )}
              <h3>{projects[currentIndex]?.title || 'Untitled Project'}</h3>
              <p>{projects[currentIndex]?.description || 'No description available'}</p>
              <div className="tech-stack"><br/>
                <h3>Stack:</h3> {projects[currentIndex]?.stack?.join(", ") || 'No stack information available'}
              </div>

              {/* Mobile arrows inside project-card */}
              <div className="arrow-container mobile-only">
                <button className="arrow left" onClick={goLeft}>❮</button>
                <button className="arrow right" onClick={goRight}>❯</button>
              </div>
            </div>
            <button className="arrow right desktop-only" onClick={goRight}>❯</button>
          </div>
        ) : (
          <div className="no-projects">No projects available</div>
        )}
      </section>

      {/* Education */}
      <section className="section container">
        <h2>EDUCATION</h2>
        <div className="card-container">
          <div className="card">
            <p className="subheading">College</p>
            <p>2020–2026<br />PHINMA University of Pangasinan<br />BSCpE</p>
            <p className="subheading">Senior High School (With Honors)</p>
            <p>2017–2019<br />PHINMA University of Pangasinan</p>
            <p className="subheading">Junior High School</p>
            <p>2013–2017<br />BINMALEY CATHOLIC SCHOOL</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section container" id="about">
        <h2>ABOUT ME</h2>
        <div className="card-container">
          <div className="card">
            <h4>
              I'm a Computer Engineering student passionate about real-world problem solving through code.<br />
              I focus on tools like React, Firebase, and Python, and I'm currently undergoing on-the-job training.<br />
              Outside coding, I love reading manga and playing games.
            </h4>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-social">
            <a href="https://www.facebook.com/aaron.039" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com/Mukachxki" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://github.com/Mukachxki" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
          </div>
          <div className="footer-copyright">
            © {new Date().getFullYear()} Aaron. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button id="backToTopBtn" className="btn" title="Go to top">↑</button>
    </div>
  );
};

export default AboutPage;
