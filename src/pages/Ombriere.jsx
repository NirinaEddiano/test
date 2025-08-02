import React from 'react';
import { useTranslation } from 'react-i18next';
import ombriere1_1 from '../assets/ombriere1-1.jpg';
import ombriere1_2 from '../assets/ombriere1-2.jpg';
import ombriere1_3 from '../assets/ombriere1-3.jpg';
import ombriere1_4 from '../assets/ombriere1-4.jpg';
import './realisation.css';

const Ombriere = () => {
  const { t } = useTranslation();

  const project = {
    title: t('ombriereProject1Title'),
    photos: [
      { src: ombriere1_1, alt: t('ombriereProject1Photo1Alt') },
      { src: ombriere1_2, alt: t('ombriereProject1Photo2Alt') },
      { src: ombriere1_3, alt: t('ombriereProject1Photo3Alt') },
      { src: ombriere1_4, alt: t('ombriereProject1Photo4Alt') },
    ],
  };

  return (
    <div className="realisation-page">
      <section className="realisation-hero">
        <div className="realisation-hero-overlay">
          <h1 className="realisation-title">{t('shadeStructure')}</h1>
          <p className="realisation-description">{t('shadeStructureDescription')}</p>
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

export default Ombriere;