import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const { translations } = useLanguage();
  const { footer, nav, contact, services } = translations;

  const currentYear = new Date().getFullYear();

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.querySelector(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const quickLinks = [
    { href: '#home', label: nav.home },
    { href: '#services', label: nav.services },
    { href: '#about', label: nav.about },
    { href: '#contact', label: nav.contact },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-main py-5">
          <div className="row g-4">
            {/* Brand Column */}
            <div className="col-lg-4 col-md-6">
              <div className="footer-brand mb-4">
                <a className="d-flex align-items-center text-decoration-none" href="#home">
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
                  <span className="brand-text fw-bold h5 mb-0">DentalCare</span>
                </a>
              </div>
              <p className="footer-description text-muted mb-4">
                {footer.description}
              </p>
              <div className="social-links d-flex gap-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="social-link"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-2 col-md-6">
              <h5 className="footer-title fw-bold mb-4">
                {footer.quickLinks}
              </h5>
              <ul className="footer-links list-unstyled">
                {quickLinks.map((link, index) => (
                  <li key={index} className="mb-2">
                    <a
                      href={link.href}
                      className="footer-link"
                      onClick={(e) => scrollToSection(e, link.href)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="col-lg-3 col-md-6">
              <h5 className="footer-title fw-bold mb-4">
                {footer.services}
              </h5>
              <ul className="footer-links list-unstyled">
                {services.items.slice(0, 4).map((service, index) => (
                  <li key={index} className="mb-2">
                    <a href="#services" className="footer-link" onClick={(e) => scrollToSection(e, '#services')}>
                      {service.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="col-lg-3 col-md-6">
              <h5 className="footer-title fw-bold mb-4">
                {footer.contact}
              </h5>
              <ul className="footer-contact list-unstyled">
                <li className="d-flex gap-2 mb-3">
                  <MapPin size={18} className="text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted">{contact.addressValue}</span>
                </li>
                <li className="d-flex gap-2 mb-3">
                  <Phone size={18} className="text-primary flex-shrink-0" />
                  <a href={`tel:${contact.phoneValue.replace(/\s/g, '')}`} className="footer-link">
                    {contact.phoneValue}
                  </a>
                </li>
                <li className="d-flex gap-2 mb-3">
                  <Mail size={18} className="text-primary flex-shrink-0" />
                  <a href={`mailto:${contact.emailValue}`} className="footer-link">
                    {contact.emailValue}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom py-4">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-0 text-muted small">
                &copy; {currentYear} DentalCare. {footer.rights}
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-legal d-flex gap-3 justify-content-center justify-content-md-end">
                <a href="#privacy" className="text-muted small">
                  {footer.privacy}
                </a>
                <a href="#terms" className="text-muted small">
                  {footer.terms}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
