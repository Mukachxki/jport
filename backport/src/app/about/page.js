"use client";

import React, { useState } from "react";
import Link from "next/link";
import '@/app/public/styles/about.css';
import '@/app/public/scripts/scripts.js';

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* Navigation */}
      <nav className="nav-buttons" id="navButtons">
        <Link href="/" className="top-left-logo">AARON</Link>

        {/* Hamburger Button */}
        <button className="menu-toggle" id="menuToggle" onClick={() => setMenuOpen(!menuOpen)}>
          <i className="fas fa-bars"></i>
        </button>

        {/* Collapsible Menu */}
        <div className={`nav-links ${menuOpen ? "open" : ""}`} id="navMenu">
          <Link href="#home">Home</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#about">About</Link>
        </div>
      </nav>

      {/* Header */}
      <header className="header text-center" id="home">
        <h1>Sup! I'm Aaron</h1>
        <p>Computer Engineering student exploring web development and software projects. I enjoy learning by building—this portfolio tracks what I’ve made (and broken) so far.</p>
      </header>

      {/* Projects Section */}
      <section className="section container" id="projects">
        <h1 className="tracking-in-expand project-heading">PROJECTS</h1>
        <div className="card-container">
          <div className="card">
            <p className="subheading">Q-CEA (Queuing Management System)</p>
            <p><em>April 2025</em></p>
            <ul><li>A digital queuing system developed for PHINMA-UPang’s College of Engineering & Architecture.</li></ul>
          </div>
          <div className="card">
            <p className="subheading">Adjustable Light-Sensitive Alarm</p>
            <p><em>February 2024</em></p>
            <ul><li>Built a light-sensitive alarm with real-time monitoring using embedded systems techniques.</li></ul>
          </div>
          <div className="card">
            <p className="subheading">Tic Tac Toe (Hardware Version)</p>
            <p><em>November 2023</em></p>
            <ul><li>Created a physical Tic Tac Toe game using 555 timers and decade counters.</li></ul>
          </div>
        </div>
      </section>

      {/* Education & Skills Section */}
      <section className="section container">
        <h2>Education & Skills</h2>
        <div className="card-container">
          <div className="card">
            <p className="subheading">College</p>
            <p>2020–2026<br />PHINMA University of Pangasinan<br />BSCpE</p>
            <p className="subheading">Senior High School (With Honors)</p>
            <p>2017–2019<br />PHINMA University of Pangasinan</p>
            <p className="subheading">Junior High School</p>
            <p>2013–2017<br />BINMALEY CATHOLIC SCHOOL</p>
          </div>
          <div className="card">
            <ul className="skill-list">
              <li>HTML, CSS, JavaScript</li>
              <li>React.js & Firebase</li>
              <li>Python (Basics)</li>
              <li>Version Control (Git)</li>
              <li>Team Collaboration & Debugging</li>
            </ul>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section container" id="about">
        <h2>About Me</h2>
        <div className="card">
          <h4>
            I’m a Computer Engineering student passionate about real-world problem solving through code.
            <br />I focus on tools like React, Firebase, and Python, and I’m currently undergoing on-the-job training.
            <br />Outside coding, I love reading manga and playing games.
          </h4>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section container">
        <h2>Contact</h2>
        <div className="card contact-card icon-only-contacts">
          <Link href="https://www.facebook.com/aaron.039" target="_blank" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link href="https://instagram.com/Mukachxki" target="_blank" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </Link>
          <Link href="https://github.com/Mukachxki" target="_blank" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </Link>
        </div>
      </section>

      {/* Back to Top Button */}
      <button id="backToTopBtn" className="btn" title="Go to top">↑</button>
    </div>
  );
};

export default HomePage;
