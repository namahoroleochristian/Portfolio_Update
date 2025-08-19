import React from "react";

const Projects = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-6 py-16">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
        <div className="p-6 bg-gray-100 rounded-lg shadow">
          <h3 className="font-semibold text-xl">Portfolio Website</h3>
          <p className="text-gray-600">A personal website built with React and TailwindCSS.</p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg shadow">
          <h3 className="font-semibold text-xl">Smart Park App</h3>
          <p className="text-gray-600">Parking management system with Node.js and MongoDB.</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
