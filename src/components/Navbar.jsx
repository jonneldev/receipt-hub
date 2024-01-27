import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoBarcodeSharp } from 'react-icons/io5';
import { Menu, X } from 'react-feather';
import gsap from 'gsap';

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const dropdown = dropdownRef.current;

    gsap.to(dropdown, {
      duration: 0.3,
      height: isMenuOpen ? 'auto' : 0,
      opacity: isMenuOpen ? 1 : 0,
      ease: 'power3.inOut',
    });

    gsap.set(dropdown, { pointerEvents: isMenuOpen ? 'auto' : 'none' });
  }, [isMenuOpen]);

  const isLinkActive = (pathname) => location.pathname === pathname;

  return (
    <nav className='bg-gradient-to-br from-indigo-600 to-purple-700'>
      <div className="flex items-center justify-between py-2 px-2 relative">
        {/* Logo */}
        <Link to="/" className="flex items-center font-bold">
          <IoBarcodeSharp className="w-8 h-8 text-indigo-500 mr-2 bg-yellow-500 p-2 rounded-full" />
          <h2 className="font-bold text-2xl text-gray-100">
            <span className="text-white">Receipt </span>
            <span className="text-yellow-400">Hub</span>
          </h2>
        </Link>

        {/* Hamburger Menu Icon (visible on small screens) */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none" onClick={toggleMenu}>
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Navigation Links Dropdown (Hidden on Medium and Larger Screens) */}
        <div
          ref={dropdownRef}
          className="md:hidden absolute top-full right-0 overflow-hidden bg-gradient-to-br from-white to-white p-4 rounded-md shadow-md mt-0 w-full md:w-auto"
        >
          <ul className="md:text-left space-y-4">
            <li>
              <Link to="/" onClick={closeMenu} className={`block text-dark hover:text-yellow-500 ${isLinkActive('/') ? 'font-bold' : ''}`}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/login" onClick={closeMenu} className={`block text-dark hover:text-yellow-500 ${isLinkActive('/login') ? 'font-bold' : ''}`}>
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" onClick={closeMenu} className={`block text-dark hover:text-yellow-500 ${isLinkActive('/register') ? 'font-bold' : ''}`}>
                Register
              </Link>
            </li>
            <li>
              <Link to="/logout" onClick={closeMenu} className={`block text-dark hover:text-yellow-500 ${isLinkActive('/logout') ? 'font-bold' : ''}`}>
                Logout
              </Link>
            </li>
          </ul>
        </div>

        {/* Navigation Links (Visible on Medium and Larger Screens) */}
        <ul className={`hidden md:flex md:space-x-4 text-white`}>
          <li className={`hover:text-yellow-300 ${isLinkActive('/') ? 'font-bold' : ''}`}>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className={`hover:text-yellow-300 ${isLinkActive('/login') ? 'font-bold' : ''}`}>
            <Link to="/login" onClick={closeMenu}>
              Login
            </Link>
          </li>
          <li className={`hover:text-yellow-300 ${isLinkActive('/register') ? 'font-bold' : ''}`}>
            <Link to="/register" onClick={closeMenu}>
              Register
            </Link>
          </li>
          <li className={`hover:text-yellow-300 ${isLinkActive('/logout') ? 'font-bold' : ''}`}>
            <Link to="/logout" onClick={closeMenu}>
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
