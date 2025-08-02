import React, { useState, useEffect } from 'react';
import './accueil.css';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faSolarPanel, faLeaf, faHandshake, faMoneyBillWave, faPlugCircleBolt, faRecycle } from '@fortawesome/free-solid-svg-icons';
import homeImage from '../assets/home.jpg';
import professionalImage from '../assets/professional.jpg';
import individualImage from '../assets/individual.jpg';
import realizationsImage from '../assets/realizations.jpg';
import recruitmentImage from '../assets/recruitment.jpg';
import contactImage from '../assets/contact.jpg';
import blogImage from '../assets/blog.jpg';
import aboutImage from '../assets/about.jpg';
import experienceImage from '../assets/experience.jpg';
import projectsImage from '../assets/projects.jpg';
import partnersImage from '../assets/partners.jpg';
import professionalSolutionImage from '../assets/professionalSolution.jpg';
import individualSolutionImage from '../assets/individualSolution.jpg';
import partner1Image from '../assets/partner1.png';
import partner2Image from '../assets/partner2.png';
import partner3Image from '../assets/partner3.png';
import partner4Image from '../assets/partner4.png';
import partner5Image from '../assets/partner5.png';
import partner6Image from '../assets/partner6.png';

const Accueil = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);

  
  useEffect(() => {
    const checkDevice = () => {
      const isMobile = /Mobi|Android|iPhone|iPad|iPod/.test(navigator.userAgent);
      const isSmallScreen = window.innerWidth <= 1024;
      setIsDesktop(!(isMobile || isSmallScreen));
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const carouselItems = [
    { title: t('home'), description: t('homeDesc'), image: homeImage, path: '/' },
    { title: t('professional'), description: t('professionalDesc'), image: professionalImage, path: '/professionnel' },
    { title: t('individual'), description: t('individualDesc'), image: individualImage, path: '/particulier' },
    { title: t('realizations'), description: t('realizationsDesc'), image: realizationsImage, path: '/realisation' },
    { title: t('recruitment'), description: t('recruitmentDesc'), image: recruitmentImage, path: '/recrutement' },
    { title: t('contact'), description: t('contactDesc'), image: contactImage, path: '/contact' },
    { title: t('blog'), description: t('blogDesc'), image: blogImage, path: '/blog' },
  ];

  const dataItems = [
    { number: '+11', text: t('dataExperience'), image: experienceImage, alt: t('dataExperienceAlt') },
    { number: '+60', text: t('dataProjects'), image: projectsImage, alt: t('dataProjectsAlt') },
    { number: '+20', text: t('dataPartners'), image: partnersImage, alt: t('dataPartnersAlt') },
  ];

  const reasons = [
    {
      icon: faSolarPanel,
      title: t('whyChooseUsQualityTitle'),
      description: t('whyChooseUsQualityDesc'),
    },
    {
      icon: faLeaf,
      title: t('whyChooseUsGreenTitle'),
      description: t('whyChooseUsGreenDesc'),
    },
    {
      icon: faHandshake,
      title: t('whyChooseUsSupportTitle'),
      description: t('whyChooseUsSupportDesc'),
    },
    {
      icon: faMoneyBillWave,
      title: t('whyChooseUsSavingsTitle'),
      description: t('whyChooseUsSavingsDesc'),
    },
    {
      icon: faPlugCircleBolt,
      title: t('whyChooseUsSelfConsumptionTitle'),
      description: t('whyChooseUsSelfConsumptionDesc'),
    },
    {
      icon: faRecycle,
      title: t('whyChooseUsRenewableTitle'),
      description: t('whyChooseUsRenewableDesc'),
    },
  ];

  const partners = [
    { image: partner1Image, alt: t('partner1Alt') },
    { image: partner2Image, alt: t('partner2Alt') },
    { image: partner3Image, alt: t('partner3Alt') },
    { image: partner4Image, alt: t('partner4Alt') },
    { image: partner5Image, alt: t('partner5Alt') },
    { image: partner6Image, alt: t('partner6Alt') },
  ];

  const itemsPerView = 2;
  const totalSlides = Math.ceil(carouselItems.length / itemsPerView);

  useEffect(() => {
    if (isDesktop) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [totalSlides, isDesktop]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const goNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  if (!isDesktop) {
    return (
      <div className="non-desktop-message">
        <h1>{t('nonDesktopTitle')}</h1>
        <p>{t('nonDesktopMessage')}</p>
      </div>
    );
  }

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">{t('heroTitle')}</h1>
          <a href="/contact" className="hero-button">{t('contactUs')}</a>
        </div>
        <div className="carousel-container">
          <button className="carousel-arrow carousel-arrow-left" onClick={goPrev} aria-label="Previous slide">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <div className="carousel">
            <div className="carousel-inner" style={{ transform: `translateX(-${(currentIndex * 100) / itemsPerView}%)` }}>
              {carouselItems.map((item, index) => (
                <div className="carousel-item" key={index}>
                  <img src={item.image} alt={item.title} className="carousel-image" />
                  <div className="carousel-content">
                    <h3 className="carousel-title">{item.title}</h3>
                    <p className="carousel-description">{item.description}</p>
                    <a href={item.path} className="carousel-button">{t('seeMore')}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="carousel-arrow carousel-arrow-right" onClick={goNext} aria-label="Next slide">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
          <div className="carousel-dots">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <span
                key={index}
                className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              ></span>
            ))}
          </div>
        </div>
      </section>
      <section className="about">
        <div className="about-container">
          <div className="about-text">
            <h2 className="about-title">{t('aboutTitle')}</h2>
            <h3>{t('aboutSubtitle')}</h3>
            <p className="about-quote">{t('aboutQuote')}</p>
            <p>{t('aboutDescription1')}</p>
            <p>{t('aboutDescription2')}</p>
            <p>{t('aboutDescription3')}</p>
          </div>
          <div className="about-image-container">
            <img src={aboutImage} alt={t('aboutImageAlt')} className="about-image" />
            <div className="about-overlay-box mission-box">
              <h3>{t('missionTitle')}</h3>
              <p>{t('missionText')}</p>
            </div>
            <div className="about-overlay-box vision-box">
              <h3>{t('visionTitle')}</h3>
              <p>{t('visionText')}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="data">
        <div className="data-container">
          <h2 className="data-title">{t('dataTitle')}</h2>
          <div className="data-items">
            {dataItems.map((item, index) => (
              <div className="data-item" key={index}>
                <div className="data-image-container">
                  <img src={item.image} alt={item.alt} className="data-image" />
                  <div className="data-text-overlay">{item.text}</div>
                  <div className="data-number-overlay">
                    <span className="data-number">{item.number}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="solutions">
        <div className="solutions-container">
          <h2 className="solutions-title">{t('solutionsTitle')}</h2>
          <div className="solutions-items">
            <div className="solutions-item">
              <div className="solutions-image-container professional">
                <img src={professionalSolutionImage} alt={t('professionalSolutionAlt')} className="solutions-image" />
              </div>
              <div className="solutions-text-container">
                <h3 className="solutions-subtitle">{t('professionalSolutionTitle')}</h3>
                <p className="solutions-description">{t('professionalSolutionDesc')}</p>
                <a href="/professionnel" className="solutions-button">{t('seeMore')}</a>
              </div>
            </div>
            <div className="solutions-item reverse">
              <div className="solutions-text-container">
                <h3 className="solutions-subtitle">{t('individualSolutionTitle')}</h3>
                <p className="solutions-description">{t('individualSolutionDesc')}</p>
                <a href="/particulier" className="solutions-button">{t('seeMore')}</a>
              </div>
              <div className="solutions-image-container individual">
                <img src={individualSolutionImage} alt={t('individualSolutionAlt')} className="solutions-image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="why-choose-us">
        <div className="why-choose-us-container">
          <h2 className="why-choose-us-title">{t('whyChooseUsTitle')}</h2>
          <div className="why-choose-us-items">
            {reasons.slice(0, 3).map((reason, index) => (
              <div className="why-choose-us-item" key={index}>
                <FontAwesomeIcon icon={reason.icon} className="why-choose-us-icon" />
                <h3 className="why-choose-us-subtitle">{reason.title}</h3>
                <p className="why-choose-us-description">{reason.description}</p>
              </div>
            ))}
          </div>
          <div className="why-choose-us-items">
            {reasons.slice(3, 6).map((reason, index) => (
              <div className="why-choose-us-item" key={index + 3}>
                <FontAwesomeIcon icon={reason.icon} className="why-choose-us-icon" />
                <h3 className="why-choose-us-subtitle">{reason.title}</h3>
                <p className="why-choose-us-description">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="partners">
        <div className="partners-container">
          <h2 className="partners-title">{t('partnersTitle')}</h2>
          <div className="partners-grid">
            {partners.map((partner, index) => (
              <div className="partners-item" key={index}>
                <img src={partner.image} alt={partner.alt} className="partners-image" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Accueil;