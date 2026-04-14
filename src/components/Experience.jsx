import React from "react";
import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
    <section id="experience" className="py-16 px-4">

      {/* Heading */}
      <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-12">
        Work Experience
      </h2>

      {/* Experience List */}
      <div className="max-w-6xl mx-auto space-y-10 text-center">
        {EXPERIENCES.map((exp, index) => (
          <div
            key={index}
            className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition duration-300 text-center"
          >

            {/* Company Name */}
            <h3 className="text-2xl font-semibold">
              {exp.company}
            </h3>

            {/* Role + Year */}
            <p className="text-sm text-white mt-1">
              {exp.role} : {exp.yearRange}
            </p>

            {/* Tech Stack */}
            <div className="mt-3 flex flex-wrap gap-2 justify-center">
              {exp.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 bg-gray-200 text-black rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="mt-4 text-white leading-relaxed">
              {exp.description}
            </p>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;