"use client";



import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="logo">
          <h1 className="logo-primary">Hina</h1>
          <span className="logo-secondary">Nisar</span>
        </div>

        {/* Hamburger Menu */}
        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </button>

        {/* Navigation */}
        <nav className={`menu ${isMenuOpen ? "active" : ""}`}>
          <ul className="menu-list">
            <li>
              <Link href="#home" className="menu-item">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="menu-item">
                About
              </Link>
            </li>
            <li>
              <Link href="#portfolio" className="menu-item">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="#contact" className="menu-item">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;


