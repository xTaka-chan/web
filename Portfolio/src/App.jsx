import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header */}
      <header className="text-center py-8">
        <img src={reactLogo} alt="React Logo" className="w-16 h-16 mx-auto mb-4" />
        <h1 className="text-4xl font-bold">Your Name</h1>
        <p className="text-lg">Frontend Developer</p>
      </header>

      {/* About Me */}
      <section className="px-8 py-6">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-lg">
          Add a brief introduction about yourself, your skills, and your passion for frontend development.
        </p>
      </section>

      {/* Projects */}
      <section className="px-8 py-6">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        {/* Add your projects here */}
        <div className="grid gap-4">
          <div className="p-4 border rounded-md">
            <h3 className="text-lg font-semibold mb-2">Project 1</h3>
            <p>Description of Project 1</p>
          </div>
          <div className="p-4 border rounded-md">
            <h3 className="text-lg font-semibold mb-2">Project 2</h3>
            <p>Description of Project 2</p>
          </div>
          {/* Add more projects as needed */}
        </div>
      </section>

      {/* Contact */}
      <section className="px-8 py-6">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <p className="text-lg">
          Provide your contact information here, such as your email address and links to your social media profiles.
        </p>
      </section>
    </div>
  );
}

export default App;
