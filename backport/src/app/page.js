"use client"; 
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import '@/app/public/styles/styles.css';

const HomePage = () => {
  const [typedWord, setTypedWord] = useState('');
  const words = ['Student', 'Coder', 'Weeboo', 'Otaku', 'Gamer'];
  const [wordIndex, setWordIndex] = useState(0);

  const router = useRouter();

  // Typewriter Effect Logic
  useEffect(() => {
    let i = 0;
    let deleting = false;
    let typingSpeed = 150;
    let deleteSpeed = 75;

    const typeInterval = setInterval(() => {
      if (!deleting) {
        if (i <= words[wordIndex].length) {
          setTypedWord(words[wordIndex].slice(0, i) + "|"); // Adds cursor at the end
          i++;
        } else {
          deleting = true;
          setTimeout(() => {
            typingSpeed = deleteSpeed; // Speeds up deletion animation
          }, 1500);
        }
      } else {
        if (i >= 0) {
          setTypedWord(words[wordIndex].slice(0, i) + "|");
          i--;
        } else {
          deleting = false;
          typingSpeed = 150;
          setWordIndex((prev) => (prev + 1) % words.length);
          i = 0;
        }
      }
    }, typingSpeed);

    return () => clearInterval(typeInterval);
  }, [wordIndex]);

  // Disable scrolling
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto"; // Restore scrolling when unmounting
    };
  }, []);

  // Handle button click to navigate to "about" page
  const handleClick = (e) => {
    e.preventDefault();
    router.push('/about');  // Next.js way of routing
  };

  return (
    <div className="intro-wrapper">
      <div className="content">
        <h1 className="header">Hello, I'm Aaron</h1>
        <p>I build cool stuff with code and coffee ☕💻</p>

        <div className="word-container">
          <h1 className="label">
            I'm a <span className="cursor">{typedWord}</span>
          </h1>
        </div>

        <a href="#" id="startButton" className="animated-button" onClick={handleClick}>
          <span className="text">Start</span>
        </a>
      </div>
    </div>
  );
};

export default HomePage;
