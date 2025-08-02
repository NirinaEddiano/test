import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSolarPanel, faParking, faLeaf, faTractor } from '@fortawesome/free-solid-svg-icons';
import './realisation.css';

const Realisation = () => {
  const { t } = useTranslation();

  const expertiseDomains = [
    {
      icon: faSolarPanel,
      title: t('rooftop'),
      description: t('rooftopDescription'),
      buttonText: t('viewProjects'),
      buttonLink: '/toiture',
    },
    {
      icon: faParking,
      title: t('shadeStructure'),
      description: t('shadeStructureDescription'),
      buttonText: t('viewProjects'),
      buttonLink: '/ombriere',
    },
    {
      icon: faLeaf,
      title: t('solarFields'),
      description: t('solarFieldsDescription'),
      buttonText: t('viewProjects'),
      buttonLink: '/champs-solaires',
    },
    {
      icon: faTractor,
      title: t('agrivoltaism'),
      description: t('agrivoltaismDescription'),
      buttonText: t('viewProjects'),
      buttonLink: '/agrivoltaisme',
    },
  ];

  return (
    <div className="realisation-page">
      <section className="realisation-hero">
        <div className="realisation-hero-overlay">
          <h1 className="realisation-title">{t('realizationsTitle')}</h1>
          <p className="realisation-description">{t('realizationsDescription')}</p>
        </div>
      </section>
      <section className="expertise">
        <div className="expertise-container">
          <h2 className="expertise-title">{t('expertiseTitle')}</h2>
          <div className="expertise-grid">
            {expertiseDomains.map((domain, index) => (
              <div className="expertise-card" key={index}>
                <FontAwesomeIcon icon={domain.icon} className="expertise-icon" aria-label={domain.title} />
                <h3 className="expertise-subtitle">{domain.title}</h3>
                <p className="expertise-description">{domain.description}</p>
                <a href={domain.buttonLink} className="expertise-button">
                  {domain.buttonText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Realisation;