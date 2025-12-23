import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Calendar, ArrowRight, Shield, Award, Clock } from 'lucide-react';

const Hero = () => {
  const { t } = useLanguage();

  const features = [
    { icon: Shield, text: 'Bezpečné ošetrenia', textEn: 'Safe Treatments' },
    { icon: Award, text: '15+ rokov skúseností', textEn: '15+ Years Experience' },
    { icon: Clock, text: 'Flexibilné hodiny', textEn: 'Flexible Hours' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="hero-pattern"></div>
        <div className="hero-gradient"></div>
      </div>

      <div className="container">
        <div className="row align-items-center min-vh-100 py-5">
          <div className="col-lg-6 hero-content">
            <div className="hero-badge mb-4">
              <span className="badge-icon">
                <Award size={16} />
              </span>
              <span>Profesionálna starostlivosť</span>
            </div>

            <h1 className="hero-title display-4 fw-bold mb-4">
              {t('hero.title')}
            </h1>

            <p className="hero-subtitle lead mb-4">
              {t('hero.subtitle')}
            </p>

            <div className="hero-buttons d-flex flex-wrap gap-3 mb-5">
              <button
                className="btn btn-primary btn-lg btn-cta d-flex align-items-center gap-2"
                onClick={() => scrollToSection('#contact')}
              >
                <Calendar size={20} />
                {t('hero.cta')}
              </button>
              <button
                className="btn btn-outline-secondary btn-lg d-flex align-items-center gap-2"
                onClick={() => scrollToSection('#services')}
              >
                {t('hero.learnMore')}
                <ArrowRight size={20} />
              </button>
            </div>

            <div className="hero-features d-flex flex-wrap gap-4">
              {features.map((feature, index) => (
                <div key={index} className="hero-feature d-flex align-items-center gap-2">
                  <div className="feature-icon">
                    <feature.icon size={18} />
                  </div>
                  <span className="feature-text">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-6 hero-image-col d-none d-lg-block">
            <div className="hero-image-wrapper">
              <div className="hero-image">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=700&fit=crop&crop=center"
                  alt="Moderná zubná ambulancia"
                  className="hero-photo"
                />
              </div>

              {/* Floating Cards */}
              <div className="floating-card card-1">
                <div className="card-icon">
                  <Shield size={24} />
                </div>
                <div className="card-content">
                  <span className="card-number">100%</span>
                  <span className="card-label">Spokojnosť</span>
                </div>
              </div>

              <div className="floating-card card-2">
                <div className="card-icon">
                  <Award size={24} />
                </div>
                <div className="card-content">
                  <span className="card-number">5000+</span>
                  <span className="card-label">Pacientov</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
