import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const { translations } = useLanguage();
  const { contact } = translations;

  const contactInfo = [
    {
      icon: MapPin,
      label: contact.address,
      value: contact.addressValue,
      link: null,
    },
    {
      icon: Phone,
      label: contact.phone,
      value: contact.phoneValue,
      link: `tel:${contact.phoneValue.replace(/\s/g, '')}`,
    },
    {
      icon: Mail,
      label: contact.email,
      value: contact.emailValue,
      link: `mailto:${contact.emailValue}`,
    },
  ];

  return (
    <section id="contact" className="contact-section py-5">
      <div className="container py-5">
        {/* Section Header */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <span className="section-badge mb-3">Kontakt</span>
            <h2 className="section-title display-5 fw-bold mb-3">
              {contact.title}
            </h2>
            <p className="section-subtitle lead text-muted">
              {contact.subtitle}
            </p>
          </div>
        </div>

        <div className="row g-5">
          {/* Contact Info - Left */}
          <div className="col-lg-5">
            {/* Contact Cards */}
            {contactInfo.map((item, index) => (
              <div key={index} className="contact-info-card d-flex gap-3 mb-4">
                <div className="contact-icon">
                  <item.icon size={24} />
                </div>
                <div className="contact-details">
                  <span className="contact-label text-muted small">
                    {item.label}
                  </span>
                  {item.link ? (
                    <a href={item.link} className="contact-value d-block fw-medium">
                      {item.value}
                    </a>
                  ) : (
                    <span className="contact-value d-block fw-medium">
                      {item.value}
                    </span>
                  )}
                </div>
              </div>
            ))}

            {/* Opening Hours */}
            <div className="contact-info-card d-flex gap-3">
              <div className="contact-icon">
                <Clock size={24} />
              </div>
              <div className="contact-details flex-grow-1">
                <span className="contact-label text-muted small">
                  {contact.hours}
                </span>
                <div className="hours-list mt-2">
                  {contact.hoursValue.map((item, index) => (
                    <div key={index} className="hours-item d-flex justify-content-between mb-1">
                      <span className="hours-day">{item.day}</span>
                      <span className="hours-time fw-medium">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Map - Right */}
          <div className="col-lg-7">
            <div className="map-wrapper h-100">
              <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2661.8447851841847!2d17.10672!3d48.14496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c8943be67b4d3%3A0xc0e70d55c1060dc0!2sBratislava%2C%20Slovakia!5e0!3m2!1sen!2sus!4v1640000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '12px', minHeight: '350px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
