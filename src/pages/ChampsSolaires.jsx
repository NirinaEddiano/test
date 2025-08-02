import React from 'react';
import { useTranslation } from 'react-i18next';
import champs1_1 from '../assets/champs1-1.jpg';
import champs1_2 from '../assets/champs1-2.jpg';
import champs1_3 from '../assets/champs1-3.jpg';
import champs1_4 from '../assets/champs1-4.jpg';
import './realisation.css';

const ChampsSolaires = () => {
  const { t } = useTranslation();

  const project = {
    title: t('champsProject1Title'),
    photos: [
      { src: champs1_1, alt: t('champsProject1Photo1Alt') },
      { src: champs1_2, alt: t('champsProject1Photo2Alt') },
      { src: champs1_3, alt: t('champsProject1Photo3Alt') },
      { src: champs1_4, alt: t('champsProject1Photo4Alt') },
    ],
  };

  return (
    <div className="realisation-page">
      <section className="realisation-hero">
        <div className="realisation-hero-overlay">
          <h1 className="realisation-title">{t('solarFields')}</h1>
          <p className="realisation-description">{t('solarFieldsDescription')}</p>
        </div>
      </section>
      <section className="toiture-projects">
        <div className="toiture-projects-container">
          <div className="toiture-project">
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
        </div>
      </section>
    </div>
  );
};

export default ChampsSolaires;