'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#" className="nav-logo">CUB</a>
        <button
          className="nav-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-links${menuOpen ? ' active' : ''}`}>
          <li><a href="#about" onClick={closeMenu}>about</a></li>
          <li><a href="#events" onClick={closeMenu}>events</a></li>
          <li><a href="#gallery" onClick={closeMenu}>media</a></li>
          <li><a href="#join" onClick={closeMenu}>join us</a></li>
          <li><a href="#want to perform?" onClick={closeMenu}>want to perform?</a></li>
        </ul>
      </div>
    </nav>
  );
}
