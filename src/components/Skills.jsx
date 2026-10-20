import React, { useState } from "react";

import html from "../assets/logos/html.png";
import css from "../assets/logos/css.png";
import js from "../assets/logos/js.png";
import react from "../assets/logos/react.png";
import node from "../assets/logos/Node JS.png";
import tailwind from "../assets/logos/Tailwind CSS.png";
import mysql from "../assets/logos/mysql.png";
import postgres from "../assets/logos/postgres.png";
import java from "../assets/logos/java.png";
import postman from "../assets/logos/postman.png";
import github from "../assets/logos/github.png";
import jira from "../assets/logos/Jira.png";

// Use text-based icons for technologies without existing image assets.
const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const techs = [
    // Frontend
    { id: 1, title: "React.js", src: react, category: "frontend", style: "shadow-cyan-500" },
    { id: 2, title: "TypeScript", category: "frontend", icon: "TS", style: "shadow-blue-500" },
    { id: 3, title: "JavaScript", src: js, category: "frontend", style: "shadow-yellow-500" },
    { id: 4, title: "HTML5", src: html, category: "frontend", style: "shadow-orange-500" },
    { id: 5, title: "CSS3", src: css, category: "frontend", style: "shadow-blue-400" },
    { id: 6, title: "Tailwind CSS", src: tailwind, category: "frontend", style: "shadow-cyan-400" },

    // Backend
    { id: 7, title: "Golang", category: "backend", icon: "Go", style: "shadow-cyan-500" },
    { id: 8, title: "Java", src: java, category: "backend", style: "shadow-red-500" },
    { id: 9, title: "Spring Boot", category: "backend", icon: "SB", style: "shadow-green-500" },
    { id: 10, title: "Node.js", src: node, category: "backend", style: "shadow-green-500" },
    { id: 11, title: "GraphQL", category: "backend", icon: "GQL", style: "shadow-pink-500" },
    { id: 12, title: "REST APIs", category: "backend", icon: "API", style: "shadow-purple-500" },

    // Databases
    { id: 13, title: "MySQL", src: mysql, category: "database", style: "shadow-blue-500" },
    { id: 14, title: "PostgreSQL", src: postgres, category: "database", style: "shadow-sky-500" },
    { id: 15, title: "H2 Database", category: "database", icon: "H2", style: "shadow-orange-500" },
    { id: 16, title: "JPA", category: "database", icon: "JPA", style: "shadow-red-400" },
    { id: 17, title: "Liquibase", category: "database", icon: "LB", style: "shadow-green-400" },

    // Cloud and DevOps
    { id: 18, title: "AWS", category: "cloud", icon: "AWS", style: "shadow-orange-500" },
    { id: 19, title: "Docker", category: "cloud", icon: "DK", style: "shadow-blue-500" },

    // Development tools
    { id: 20, title: "GitHub", src: github, category: "tools", style: "shadow-gray-400" },
    { id: 21, title: "Postman", src: postman, category: "tools", style: "shadow-orange-500" },
    { id: 22, title: "Jira", src: jira, category: "tools", style: "shadow-blue-500" },
  ];

  const categories = [
    { label: "All", value: "all" },
    { label: "Frontend", value: "frontend" },
    { label: "Backend", value: "backend" },
    { label: "Database", value: "database" },
    { label: "Cloud & DevOps", value: "cloud" },
    { label: "Tools", value: "tools" },
  ];

  const filteredTechs =
    selectedCategory === "all"
      ? techs
      : techs.filter((tech) => tech.category === selectedCategory);

  return (
    <div
      name="skills"
      className="min-h-screen w-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg mx-auto p-4 py-20 flex flex-col justify-center">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Technical Skills
          </p>
          <p className="py-6 text-gray-300">
            Technologies and tools I use to build reliable, scalable
            applications.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mt-6 mb-8">
          {categories.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setSelectedCategory(value)}
              className={`px-4 py-2 text-sm rounded-lg transition-colors duration-300 ${
                selectedCategory === value
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                  : "bg-gray-700 hover:bg-gray-600 text-gray-200"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
          {filteredTechs.map(({ id, src, title, icon, style }) => (
            <div
              key={id}
              className={`flex flex-col items-center justify-center min-h-[8rem] p-4 rounded-lg bg-gray-900 shadow-md ${style} hover:scale-105 transition-transform duration-300`}
            >
              {src ? (
                <img
                  src={src}
                  alt={title}
                  loading="lazy"
                  className="w-16 h-16 object-contain"
                />
              ) : (
                <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gray-800 border border-gray-700 text-cyan-400 font-bold text-lg">
                  {icon}
                </div>
              )}

              <p className="mt-3 font-medium">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;