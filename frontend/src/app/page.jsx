"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import "@/app/styles/styles.css";
import "@/app/scripts/scripts.js"; 

const HomePage = () => {
  const [typedWord, setTypedWord] = useState("");
  const words = ["Student", "Coder", "Weeboo", "Otaku", "Gamer"];
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Typewriter Effect
  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;
  
    if (!deleting) {
      if (charIndex < currentWord.length) {
        setTypedWord(currentWord.slice(0, charIndex + 1));
        timeout = setTimeout(() => setCharIndex((prev) => prev + 1), 150);
      } else {
        // Pause after full word is typed
        timeout = setTimeout(() => setDeleting(true), 1000);
      }
    } else {
      if (charIndex > 0) {
        setTypedWord(currentWord.slice(0, charIndex - 1));
        timeout = setTimeout(() => setCharIndex((prev) => prev - 1), 75);
      } else {
        setDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }
  
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex]);

  
  // Force scroll reset & disable scrolling
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="intro-wrapper">
      <div className="content">
        <h1 className="Headder">Hello, I'm Aaron</h1>
        <p>I build cool stuff with code and coffee ☕💻</p>

        <div className="word-container">
          <h1 className="label">
            I'm a <span className="cursor">{typedWord}</span>
          </h1>
        </div>

        <Link href="/about" id="startButton" className="animated-button">
          <span className="text">Start</span>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
