import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`bg-blue-800 text-white p-4 space-y-4 transition-all duration-300 ease-in-out
        ${isOpen ? 'w-64' : 'w-16'} overflow-hidden`}
      >
        <div className="flex items-center justify-between">
          <h1 className={`text-xl font-bold ${!isOpen && 'hidden'}`}>MyApp</h1>

          {/* Only show toggle on mobile inside sidebar */}
          <button
            className="text-white md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        <nav className="mt-6">
          <ul className="space-y-2">
            <li className="hover:bg-gray-700 p-2 rounded">
              <a href="#" className="flex items-center space-x-2">
                <span>🏠</span>
                {isOpen && <span>Home</span>}
              </a>
            </li>
            <li className="hover:bg-gray-700 p-2 rounded">
              <a href="#" className="flex items-center space-x-2">
                <span>📁</span>
                {isOpen && <span>Projects</span>}
              </a>
            </li>
            <li className="hover:bg-gray-700 p-2 rounded">
              <a href="#" className="flex items-center space-x-2">
                <span>⚙️</span>
                {isOpen && <span>Settings</span>}
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-blue-50 p-9">
       
        
        <h2 className="text-2xl font-semibold">Dashboard Content</h2>
        {/* <p className="mt-4 text-gray-600">This is your main content area.</p> */}
        <div className="flex gap-4">
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
        Edit Products
      </button>
      <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
        Add Products
      </button>
    </div>
      </div>
    </div>
  );
};

export default Sidebar;
