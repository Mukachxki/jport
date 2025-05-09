"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import "@/app/styles/about.css"; // Make sure this file exists and is accessible

const AboutPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
      {
        title: "Q-CEA (Queuing Management System)",
        image: "/qcea.png",
        description: "Digital queuing system for PHINMA-UPang’s College of Engineering & Architecture."
      },
      {
        title: "Smart Environmental Monitoring Comfort and Security System",
        image: "/sem.png",
        description: "Built a light-sensitive alarm with real-time monitoring using embedded systems techniques."
      },
      {
        title: "Tic Tac Toe (Hardware Version)",
        image: "/tic.png",
        description: "Created a physical Tic Tac Toe game using 555 timers and decade counters."
      },
      {},
    ];

    const goLeft = () =>
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? projects.length - 1 : prevIndex - 1
      );

    const goRight = () =>
      setCurrentIndex((prevIndex) =>
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );

  useEffect(() => {
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
            AARON
          </Link>

          {/* Hamburger Button */}
          <button
            className="menu-toggle"
            id="menuToggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            
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
          I’ve made (and broken) so far.
        </p>
      </header>

      {/* Skills */}
      <section className="section container">
        <h2>SKILLS</h2>
        <div className="skill-columns">
          <div className="skill-container frontend">
            <h3>Frontend</h3>
            <div className="skill"><p>CSS</p><div className="skill-level advanced">Advanced</div></div>
            <div className="skill"><p>HTML</p><div className="skill-level intermediate">Intermediate</div></div>
            <div className="skill"><p>JavaScript</p><div className="skill-level advanced">Advanced</div></div>
            <div className="skill"><p>Next.js</p><div className="skill-level advanced">Advanced</div></div>
            <div className="skill"><p>React</p><div className="skill-level advanced">Advanced</div></div>
          </div>

          <div className="skill-container backend">
            <h3>Backend</h3>
            <div className="skill"><p>Firebase</p><div className="skill-level advanced">Advanced</div></div>
            <div className="skill"><p>NodeJS</p><div className="skill-level intermediate">Intermediate</div></div>
            <div className="skill"><p>Python</p><div className="skill-level advanced">Advanced</div></div>
            <div className="skill"><p>REST API Development</p><div className="skill-level advanced">Advanced</div></div>
          </div>

          <div className="skill-container database">
            <h3>Database</h3>
            <div className="skill"><p>MySQL</p><div className="skill-level beginner">Beginner</div></div>
            <div className="skill"><p>PostgreSQL</p><div className="skill-level intermediate">Intermediate</div></div>
          </div>
        </div>
      </section>

      {/* Projects Carousel */}
      <section className="section container" id="projects">
        <h2>PROJECTS</h2>
        <div className="project-carousel">
          <button className="arrow left" onClick={goLeft}>
            ❮
          </button>
          <div className="project-card">
            <img
              src={projects[currentIndex].image}
              alt={projects[currentIndex].title}
            />
            <h3>{projects[currentIndex].title}</h3>
            <p>{projects[currentIndex].description}</p>
          </div>
          <button className="arrow right" onClick={goRight}>
            ❯
          </button>
        </div>
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
              I’m a Computer Engineering student passionate about real-world problem solving through code.<br />
              I focus on tools like React, Firebase, and Python, and I’m currently undergoing on-the-job training.<br />
              Outside coding, I love reading manga and playing games.
            </h4>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section container">
        <h2>Contact</h2>
        <div className="card contact-card icon-only-contacts">
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
      </section>

      {/* Back to Top Button */}
      <button id="backToTopBtn" className="btn" title="Go to top">↑</button>
    </div>
  );
};

export default AboutPage;
