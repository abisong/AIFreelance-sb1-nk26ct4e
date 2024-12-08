import React from 'react';
import { Layers, Bell, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useStore } from '../../store/useStore';

export function Navbar() {
  const user = useStore(state => state.user);

  return (
    <nav className="bg-navy-900 text-white py-4 px-6 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Layers className="h-8 w-8 text-blue-400" />
          <span className="text-xl font-bold">AIFreelance</span>
        </Link>
        
        <div className="flex items-center space-x-8">
          <Link to="/browse" className="text-gray-300 hover:text-white transition">
            Browse
          </Link>
          <Link to="/projects" className="text-gray-300 hover:text-white transition">
            Projects
          </Link>
          <Link to="/dashboard" className="text-gray-300 hover:text-white transition">
            Dashboard
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link
              to="/subscribe"
              className="bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded-lg transition"
            >
              Subscribe
            </Link>
            {user ? (
              <div className="flex items-center space-x-4">
                <button className="text-gray-300 hover:text-white">
                  <Heart className="h-6 w-6" />
                </button>
                <button className="text-gray-300 hover:text-white">
                  <Bell className="h-6 w-6" />
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}