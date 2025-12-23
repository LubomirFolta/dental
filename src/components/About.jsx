import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Check } from 'lucide-react';

const About = () => {
  const { translations } = useLanguage();
  const { about } = translations;

  const teamImages = [
    'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&h=300&fit=crop&crop=face',
  ];

  return (
    <section id="about" className="about-section py-5">
      <div className="container py-5">
        <div className="row align-items-center g-5">
          {/* Image Column */}
          <div className="col-lg-6">
            <div className="about-image-wrapper">
              <div className="about-image-main">
                <img
                  src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=600&h=500&fit=crop"
                  alt="Interiér zubnej kliniky"
                  className="about-photo"
                />
              </div>

              {/* Experience Badge */}
              <div className="experience-badge">
                <span className="badge-number">15+</span>
                <span className="badge-text">rokov skúseností</span>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="col-lg-6">
            <span className="section-badge mb-3">O nás</span>
            <h2 className="section-title display-5 fw-bold mb-3">
              {about.title}
            </h2>
            <p className="section-subtitle lead text-muted mb-4">
              {about.subtitle}
            </p>
            <p className="about-description mb-4">
              {about.description}
            </p>

            {/* Features List */}
            <ul className="about-features list-unstyled mb-4">
              {about.features.map((feature, index) => (
                <li key={index} className="about-feature d-flex align-items-center gap-3 mb-3">
                  <div className="feature-check">
                    <Check size={16} />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Team Section */}
        <div className="team-section mt-5 pt-5">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h3 className="team-title h2 fw-bold mb-3">
                {about.teamTitle}
              </h3>
            </div>
          </div>

          <div className="row g-4">
            {about.team.map((member, index) => (
              <div key={index} className="col-md-4">
                <div className="team-card text-center h-100">
                  <div className="team-avatar">
                    <img
                      src={teamImages[index]}
                      alt={member.name}
                      className="team-photo"
                    />
                  </div>
                  <h4 className="team-name h5 fw-bold mb-1">
                    {member.name}
                  </h4>
                  <p className="team-role text-primary mb-2">
                    {member.role}
                  </p>
                  <p className="team-description text-muted small mb-0">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
