import React from 'react';
import { useTranslation } from 'react-i18next';
import toiture1_1 from '../assets/toiture1-1.jpg';
import toiture1_2 from '../assets/toiture1-2.jpg';
import toiture1_3 from '../assets/toiture1-3.jpg';
import toiture1_4 from '../assets/toiture1-4.jpg';
import toiture2_1 from '../assets/toiture2-1.jpg';
import toiture2_2 from '../assets/toiture2-2.jpg';
import toiture2_3 from '../assets/toiture2-3.jpg';
import toiture2_4 from '../assets/toiture2-4.jpg';
import toiture3_1 from '../assets/toiture3-1.jpg';
import toiture3_2 from '../assets/toiture3-2.jpg';
import toiture3_3 from '../assets/toiture3-3.jpg';
import toiture3_4 from '../assets/toiture3-4.jpg';
import toiture4_1 from '../assets/toiture4-1.jpg';
import toiture4_2 from '../assets/toiture4-2.jpg';
import toiture4_3 from '../assets/toiture4-3.jpg';
import toiture4_4 from '../assets/toiture4-4.jpg';
import toiture5_1 from '../assets/toiture5-1.jpg';
import toiture5_2 from '../assets/toiture5-2.jpg';
import toiture5_3 from '../assets/toiture5-3.jpg';
import toiture5_4 from '../assets/toiture5-4.jpg';
import './realisation.css';

const Toiture = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: t('toitureProject1Title'),
      photos: [
        { src: toiture1_1, alt: t('toitureProject1Photo1Alt') },
        { src: toiture1_2, alt: t('toitureProject1Photo2Alt') },
        { src: toiture1_3, alt: t('toitureProject1Photo3Alt') },
        { src: toiture1_4, alt: t('toitureProject1Photo4Alt') },
      ],
    },
    {
      title: t('toitureProject2Title'),
      photos: [
        { src: toiture2_1, alt: t('toitureProject2Photo1Alt') },
        { src: toiture2_2, alt: t('toitureProject2Photo2Alt') },
        { src: toiture2_3, alt: t('toitureProject2Photo3Alt') },
        { src: toiture2_4, alt: t('toitureProject2Photo4Alt') },
      ],
    },
    {
      title: t('toitureProject3Title'),
      photos: [
        { src: toiture3_1, alt: t('toitureProject3Photo1Alt') },
        { src: toiture3_2, alt: t('toitureProject3Photo2Alt') },
        { src: toiture3_3, alt: t('toitureProject3Photo3Alt') },
        { src: toiture3_4, alt: t('toitureProject3Photo4Alt') },
      ],
    },
    {
      title: t('toitureProject4Title'),
      photos: [
        { src: toiture4_1, alt: t('toitureProject4Photo1Alt') },
        { src: toiture4_2, alt: t('toitureProject4Photo2Alt') },
        { src: toiture4_3, alt: t('toitureProject4Photo3Alt') },
        { src: toiture4_4, alt: t('toitureProject4Photo4Alt') },
      ],
    },
    {
      title: t('toitureProject5Title'),
      photos: [
        { src: toiture5_1, alt: t('toitureProject5Photo1Alt') },
        { src: toiture5_2, alt: t('toitureProject5Photo2Alt') },
        { src: toiture5_3, alt: t('toitureProject5Photo3Alt') },
        { src: toiture5_4, alt: t('toitureProject5Photo4Alt') },
      ],
    },
  ];

  return (
    <div className="realisation-page">
      <section className="realisation-hero">
        <div className="realisation-hero-overlay">
          <h1 className="realisation-title">{t('rooftop')}</h1>
          <p className="realisation-description">{t('rooftopDescription')}</p>
        </div>
      </section>
      <section className="toiture-projects">
        <div className="toiture-projects-container">
          {projects.map((project, index) => (
            <div className="toiture-project" key={index}>
              <h2 className="toiture-project-title">{project.title}</h2>
              <div className="toiture-project-grid">
                {project.photos.map((photo, photoIndex) => (
                  <div className="toiture-project-photo-container" key={photoIndex}>
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="toiture-project-photo"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Toiture;