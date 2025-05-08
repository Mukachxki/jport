"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);

  // Fetch data from your Django backend
  useEffect(() => {
    fetch("http://localhost:8000/api/data/")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <h1>Aaron's Portfolio</h1>
      
      {/* Display Portfolio Projects */}
      <div>
        <h2>My Projects</h2>
        {data?.portfolio?.map((project, idx) => (
          <div key={idx} style={{ marginBottom: "20px", padding: "10px", border: "1px solid #ddd", borderRadius: "8px" }}>
            <h3>{project.title}</h3>
            <a href={project.url} target="_blank" style={{ color: "blue", textDecoration: "underline" }}>
              View Project
            </a>
          </div>
        ))}
      </div>

      {/* Optionally display other data */}
      <div>
        <h2>Skills</h2>
        <ul>
          {data?.skills?.map((skill, idx) => (
            <li key={idx}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
