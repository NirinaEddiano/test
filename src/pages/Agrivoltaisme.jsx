import React from 'react';
import { useTranslation } from 'react-i18next';
import agro1_1 from '../assets/agro1-1.jpg';
import agro1_2 from '../assets/agro1-2.jpg';
import agro1_3 from '../assets/agro1-3.jpg';
import './realisation.css';

const Agrivoltaisme = () => {
  const { t } = useTranslation();

  const project = {
    title: t('agroProject1Title'),
    photos: [
      { src: agro1_1, alt: t('agroProject1Photo1Alt') },
      { src: agro1_2, alt: t('agroProject1Photo2Alt') },
      { src: agro1_3, alt: t('agroProject1Photo3Alt') },
    ],
  };

  return (
    <div className="realisation-page">
      <section className="realisation-hero">
        <div className="realisation-hero-overlay">
          <h1 className="realisation-title">{t('agrivoltaism')}</h1>
          <p className="realisation-description">{t('agrivoltaismDescription')}</p>
        </div>
      </section>
      <section className="toiture-projects">
        <div className="toiture-projects-container">
          <div className="toiture-project">
            <h2 className="toiture-project-title">{project.title}</h2>
            <div className="toiture-project-grid toiture-project-grid--agro">
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

export default Agrivoltaisme;