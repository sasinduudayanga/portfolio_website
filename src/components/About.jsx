import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            About
          </p>
        </div>
        <p className="text-xl mt-20 ">
          I'm Sasindu Udayanga, a Software Engineer with over 2 years of
          experience in developing scalable web applications and enterprise
          software solutions. I graduated with a BSc in Computer Science from
          the University of Colombo School of Computing. Currently, I work as a
          Full Stack Software Engineer at Altura X, where I contribute to both
          frontend and backend development, building reliable applications and
          implementing new features using modern technologies.
        </p>
        <br />
        <p className="text-xl">
          My technical expertise includes React.js, TypeScript, JavaScript,
          Golang, Java, and Spring Boot. I have hands-on experience with
          REST APIs, GraphQL, database management using MySQL and PostgreSQL,
          and database schema versioning with Liquibase. I also work with AWS
          services and Docker, and I value writing clean, maintainable code
          supported by unit and integration tests.
        </p>
      </div>
    </div>
  );
};

export default About;
