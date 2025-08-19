import React from "react";

const Experience = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-6 py-16">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">Experiences</h2>
      <ul className="space-y-6 max-w-xl">
        <li className="p-6 bg-white shadow rounded-lg">
          <h3 className="font-semibold text-xl">Frontend Developer</h3>
          <p className="text-gray-600">Built responsive web apps with React and TailwindCSS.</p>
        </li>
        <li className="p-6 bg-white shadow rounded-lg">
          <h3 className="font-semibold text-xl">Backend Developer</h3>
          <p className="text-gray-600">Developed APIs with Node.js and Express.</p>
        </li>
      </ul>
    </div>
  );
};

export default Experience;
