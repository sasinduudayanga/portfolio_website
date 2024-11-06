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
          I am Sasindu Udayanga, a graduate from the University of
          Colombo School of Computing with a BSc in Computer Science. I’m a
          motivated and innovative individual who embraces challenges and
          constantly seeks to learn and improve. I am passionate about
          problem-solving, designing, and programming, with a strong sense of
          empathy and a commitment to collaboration.
        </p>
        <br />
        <p className="text-xl">
          I’m a passionate software developer with a relentless drive to learn,
          evolve, and embrace new challenges. Every day is an opportunity to
          grow and contribute, and I thrive in collaborative settings where I
          can leverage my skills to create impactful, robust software solutions.
          I’m dedicated to delivering excellence in every project I’m part of,
          with a focus on building solutions that truly make a difference.
        </p>
      </div>
    </div>
  );
};

export default About;
