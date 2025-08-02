import React from 'react';
import { useTranslation } from 'react-i18next';
import professionalSolutionImage from '../assets/professionalSolution.jpg';
import professionalSolutionImage2 from '../assets/professionalSolution2.jpg';
import './professionel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faSolarPanel, faShieldAlt, faTachometerAlt, faLeaf } from '@fortawesome/free-solid-svg-icons';
import toituresImage from '../assets/toitures.jpg';
import ombrieresImage from '../assets/ombrieres.jpg';
import champsSolairesImage from '../assets/champsSolaires.jpg';
import agrivoltaismeImage from '../assets/agrivoltaisme.jpg';
import bornesElectriquesImage from '../assets/bornesElectriques.png';

const Professionel = () => {
  const { t } = useTranslation();

  const photovoltaicSolutions = [
    {
      title: t('toituresTitle'),
      description: t('toituresDescription'),
      image: toituresImage,
      alt: t('toituresAlt'),
      features: [
        t('toituresFeature1'),
        t('toituresFeature2'),
        t('toituresFeature3'),
        t('toituresFeature4'),
      ],
      icon: faSolarPanel,
    },
    {
      title: t('ombrieresTitle'),
      description: t('ombrieresDescription'),
      image: ombrieresImage,
      alt: t('ombrieresAlt'),
      features: [
        t('ombrieresFeature1'),
        t('ombrieresFeature2'),
        t('ombrieresFeature3'),
        t('ombrieresFeature4'),
      ],
      icon: faShieldAlt,
    },
    {
      title: t('champsSolairesTitle'),
      description: t('champsSolairesDescription'),
      image: champsSolairesImage,
      alt: t('champsSolairesAlt'),
      features: [
        t('champsSolairesFeature1'),
        t('champsSolairesFeature2'),
        t('champsSolairesFeature3'),
        t('champsSolairesFeature4'),
      ],
      icon: faTachometerAlt,
    },
    {
      title: t('agrivoltaismeTitle'),
      description: t('agrivoltaismeDescription'),
      image: agrivoltaismeImage,
      alt: t('agrivoltaismeAlt'),
      features: [
        t('agrivoltaismeFeature1'),
        t('agrivoltaismeFeature2'),
        t('agrivoltaismeFeature3'),
        t('agrivoltaismeFeature4'),
      ],
      icon: faLeaf,
    },
  ];

  return (
    <div className="professionel-page">
      <section className="professionel-header">
        <div className="professionel-content">
          <h1 className="professionel-title">{t('professionalPageTitle')}</h1>
          <p className="professionel-description">
            {t('professionalDescription')}
          </p>
        </div>
        <div className="professionel-images">
          <div className="professionel-image-overlay">
            <img src={professionalSolutionImage} alt={t('professionalSolutionAlt')} className="professionel-image" />
            <img src={professionalSolutionImage2} alt={t('professionalSolutionAlt2')} className="professionel-image overlay-image" />
          </div>
        </div>
      </section>
      <section className="photovoltaic-solutions">
        <div className="photovoltaic-container">
          <h2 className="photovoltaic-title">{t('solutionsTitle')}</h2>
          <div className="photovoltaic-grid">
            {photovoltaicSolutions.map((solution, index) => (
              <div className="photovoltaic-card" key={index}>
                <div className="photovoltaic-image-container">
                  <img src={solution.image} alt={solution.alt} className="photovoltaic-image" />
                  <div className="photovoltaic-icon-overlay">
                    <FontAwesomeIcon icon={solution.icon} className="photovoltaic-icon" />
                  </div>
                </div>
                <div className="photovoltaic-content">
                  <h3 className="photovoltaic-subtitle">{solution.title}</h3>
                  <p className="photovoltaic-description">{solution.description}</p>
                  <ul className="photovoltaic-features">
                    {solution.features.map((feature, idx) => (
                      <li key={idx}>
                        <FontAwesomeIcon icon={faCheckCircle} className="feature-icon" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="photovoltaic-actions">
            <a href="/contact" className="photovoltaic-button">{t('getQuote')}</a>
          </div>
        </div>
      </section>
      <section className="electric-charging">
        <div className="electric-charging-container">
          <h2 className="electric-charging-title">{t('electricChargingTitle')}</h2>
          <div className="electric-charging-content">
            <div className="electric-charging-image-container">
              <img
                src={bornesElectriquesImage}
                alt={t('electricChargingAlt')}
                className="electric-charging-image"
              />
            </div>
            <div className="electric-charging-text">
              <p className="electric-charging-description">{t('electricChargingDescription')}</p>
              <a href="/contact" className="electric-charging-button">{t('seeMore')}</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Professionel;