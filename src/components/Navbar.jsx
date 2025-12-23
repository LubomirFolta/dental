import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { Menu, X, MessageCircle, Sun, Moon, Globe } from 'lucide-react';

const Navbar = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const { isDark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: t('nav.home') },
    { href: '#services', label: t('nav.services') },
    { href: '#about', label: t('nav.about') },
    { href: '#contact', label: t('nav.contact') },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top transition-all ${
        scrolled ? 'navbar-scrolled shadow-sm' : ''
      }`}
    >
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center" href="#home">
          <div className="logo-icon me-2">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="20" cy="20" r="20" fill="var(--primary-color)" />
              <path
                d="M20 8C15.5 8 12 11 12 15C12 18 13 20 14 23C15 26 16 30 20 32C24 30 25 26 26 23C27 20 28 18 28 15C28 11 24.5 8 20 8Z"
                fill="white"
              />
            </svg>
          </div>
          <span className="brand-text fw-bold">DentalCare</span>
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation Links */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.href}>
                <a
                  className="nav-link px-3"
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Side Actions */}
          <div className="d-flex align-items-center gap-2">
            {/* Theme Toggle */}
            <button
              className="btn btn-icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Language Toggle */}
            <button
              className="btn btn-language d-flex align-items-center gap-1"
              onClick={toggleLanguage}
              aria-label="Toggle language"
            >
              <Globe size={18} />
              <span className="fw-medium">{language.toUpperCase()}</span>
            </button>

            {/* Contact Us Button */}
            <button
              className="btn btn-primary btn-call d-flex align-items-center gap-2"
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              <MessageCircle size={18} />
              <span className="d-none d-sm-inline">{t('nav.contactUs')}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
