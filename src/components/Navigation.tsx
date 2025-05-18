import { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDrawer = () => setIsOpen(true);
  const closeDrawer = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-csDark/90 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/images/logo,png"
          className="text-2xl font-bold text-csAccent"
        ></Link>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={openDrawer}
          className="lg:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navigation Links (Desktop) */}
        <div className="hidden lg:flex flex-1 justify-center space-x-6 text-sm uppercase text-gray-300 font-medium">
          <Link to="/" className="hover:text-csAccent transition-colors">
            Main
          </Link>
          <Link to="/info" className="hover:text-csAccent transition-colors">
            About Game
          </Link>
          <Link to="/chat" className="hover:text-csAccent transition-colors">
            Chat with Characters
          </Link>
        </div>

        {/* Removed theme toggle */}
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/50 z-50">
          <div className="bg-csDark w-64 h-full p-4">
            <button
              onClick={closeDrawer}
              className="text-gray-300 mb-4 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="flex flex-col space-y-4 text-gray-300 uppercase">
              <Link
                to="/"
                onClick={closeDrawer}
                className="hover:text-csAccent"
              >
                Main
              </Link>
              <Link
                to="/info"
                onClick={closeDrawer}
                className="hover:text-csAccent"
              >
                About Game
              </Link>
              <Link
                to="/chat"
                onClick={closeDrawer}
                className="hover:text-csAccent"
              >
                Chat with Characters
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
