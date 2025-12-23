import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  Sparkles,
  Sun,
  CircleDot,
  Scissors,
  Star,
  Baby,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const { translations } = useLanguage();
  const { services } = translations;

  const serviceIcons = [
    Sparkles,
    Sun,
    CircleDot,
    Scissors,
    Star,
    Baby,
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="services" className="services-section py-5">
      <div className="container py-5">
        {/* Section Header */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <span className="section-badge mb-3">{translations.nav.services}</span>
            <h2 className="section-title display-5 fw-bold mb-3">
              {services.title}
            </h2>
            <p className="section-subtitle lead text-muted">
              {services.subtitle}
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="row g-4">
          {services.items.map((service, index) => {
            const IconComponent = serviceIcons[index];
            return (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="service-card h-100">
                  <div className="service-icon-wrapper">
                    <div className="service-icon">
                      <IconComponent size={32} />
                    </div>
                    <div className="service-icon-bg"></div>
                  </div>

                  <h3 className="service-title h5 fw-bold mb-3">
                    {service.title}
                  </h3>

                  <p className="service-description text-muted">
                    {service.description}
                  </p>

                  <button
                    className="service-link btn btn-link p-0 d-flex align-items-center gap-2"
                    onClick={scrollToContact}
                  >
                    <span>{services.learnMore}</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="services-cta mt-5 pt-4">
          <div className="cta-card">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <h3 className="cta-title h4 fw-bold mb-2">
                  {services.ctaTitle}
                </h3>
                <p className="cta-text text-muted mb-lg-0">
                  {services.ctaText}
                </p>
              </div>
              <div className="col-lg-4 text-lg-end">
                <button
                  className="btn btn-primary btn-lg"
                  onClick={scrollToContact}
                >
                  {services.ctaButton}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
