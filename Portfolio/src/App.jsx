import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gray-900 text-white ">
      {/* Navigation Bar */}

        {/*Keme lang to be ikaw na mag iba HSHASHAHHA */}
      <nav className="flex sm:justify-center bg-gray-800 py-4">
        <div className="container mx-auto px-8">
          <ul className="flex justify-end space-x-7">
            <li>
              <a href="#about" className="rounded-lg px-3 py-2 text-white-700 font-medium hover:bg-slate-100 hover:text-slate-900">About</a>
            </li>
            <li>
              <a href="#projects" className="rounded-lg px-3 py-2 text-white-700 font-medium hover:bg-slate-100 hover:text-slate-900">Projects</a>
            </li>
            <li>
              <a href="#contact" className="rounded-lg px-3 py-2 text-white-700 font-medium hover:bg-slate-100 hover:text-slate-900">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Header */}
      <header className="text-center py-8">
        <img src={reactLogo} alt="React Logo" className="w-16 h-16 mx-auto mb-4" />
        <h1 className="text-4xl font-bold">Jerry T. Gecto</h1>
        <p className="text-lg">Frontend Developer</p>
      </header>

      {/* About Me */}
      <section id="about" className="px-8 py-6">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-lg">
          Ikaw bahala be
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="px-8 py-6">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        {/* Add your projects here */}
        <div className="grid gap-4">
          <div className="p-4 border rounded-md">
            <h3 className="text-lg font-semibold mb-2">BMS</h3>
            <p>Description</p>
          </div>
          <div className="p-4 border rounded-md">
            <h3 className="text-lg font-semibold mb-2">Movie Ticket Reservation</h3>
            <p>Description</p>
          </div>
          {/* Add more projects as needed */}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-8 py-6">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <p className="text-lg">
         Info
        </p>
      </section>
    </div>
  );
}

export default App;
