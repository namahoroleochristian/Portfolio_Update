import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-6 py-16">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">Contact</h2>
      <form className="w-full max-w-md space-y-4">
        <input 
          type="text" 
          placeholder="Your Name" 
          className="w-full p-3 border rounded-lg"
        />
        <input 
          type="email" 
          placeholder="Your Email" 
          className="w-full p-3 border rounded-lg"
        />
        <textarea 
          placeholder="Your Message" 
          className="w-full p-3 border rounded-lg h-32"
        />
        <button className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
