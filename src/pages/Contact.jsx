import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import './contact.css';

const Contact = () => {
  const { t } = useTranslation();

  const contactCards = [
    {
      icon: faPhone,
      title: t('callUs'),
      text: '06 66 08 59 65',
      alt: t('callUsPhotoAlt'),
    },
    {
      icon: faEnvelope,
      title: t('writeUs'),
      text: 'contact@tsb-enr.fr',
      alt: t('writeUsPhotoAlt'),
    },
    {
      icon: faLocationDot,
      title: t('officeLocation'),
      text: '9 chemin du chapitre, 31100 Toulouse',
      alt: t('officeLocationPhotoAlt'),
    },
  ];

  const faqItems = [
    {
      question: t('faq1Question'),
      answer: t('faq1Answer'),
    },
    {
      question: t('faq2Question'),
      answer: t('faq2Answer'),
    },
    {
      question: t('faq3Question'),
      answer: t('faq3Answer'),
    },
    {
      question: t('faq4Question'),
      answer: t('faq4Answer'),
    },
    {
      question: t('faq5Question'),
      answer: t('faq5Answer'),
    },
    {
      question: t('faq6Question'),
      answer: t('faq6Answer'),
    },
  ];

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-container">
          <h1 className="contact-title">{t('contactTitle')}</h1>
          <div className="contact-content">
            <div className="contact-form-container">
              <h2 className="contact-form-title">{t('yourInformation')}</h2>
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="firstName">{t('firstName')} *</label>
                  <input type="text" id="firstName" placeholder="Dupont" required />
                  <span className="form-error">{t('fieldRequired')}</span>
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">{t('lastName')} *</label>
                  <input type="text" id="lastName" placeholder="Jean" required />
                  <span className="form-error">{t('fieldRequired')}</span>
                </div>
                <div className="form-group">
                  <label htmlFor="email">{t('email')} *</label>
                  <input type="email" id="email" placeholder="example@example.com" required />
                  <span className="form-error">{t('fieldRequired')}</span>
                </div>
                <div className="form-group">
                  <label htmlFor="subject">{t('subject')} *</label>
                  <input type="text" id="subject" required />
                  <span className="form-error">{t('fieldRequired')}</span>
                </div>
                <div className="form-group">
                  <label htmlFor="questions">{t('questions')} *</label>
                  <textarea id="questions" rows="5" required></textarea>
                  <span className="form-error">{t('fieldRequired')}</span>
                </div>
                <button type="submit" className="contact-submit">{t('send')}</button>
              </form>
            </div>
            <div className="contact-cards">
              {contactCards.map((card, index) => (
                <div className="contact-card" key={index}>
                  <FontAwesomeIcon icon={card.icon} className="contact-card-icon" aria-label={card.title} />
                  <h3 className="contact-card-title">{card.title}</h3>
                  <p className="contact-card-text">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="contact-map">
        <div className="contact-map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.672374973594!2d1.403295315495224!3d43.58532097912324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aeba3f6b8f7b1b%3A0x2c4e4b6f7a8c7b1b!2s9%20Chemin%20du%20Chapitre%2C%2031100%20Toulouse%2C%20France!5e0!3m2!1sen!2sfr!4v1698765432109!5m2!1sen!2sfr"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="TSB Énergie Toulouse Location"
          ></iframe>
        </div>
      </section>
      <section className="contact-faq">
        <div className="contact-faq-container">
          <h2 className="contact-faq-title">{t('faqTitle')}</h2>
          <div className="faq-items">
            {faqItems.map((item, index) => (
              <div className="faq-item" key={index}>
                <input type="checkbox" id={`faq-${index}`} className="faq-toggle" />
                <label htmlFor={`faq-${index}`} className="faq-question">{item.question}</label>
                <div className="faq-answer">{item.answer}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;