import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillWave, faHome, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import individualSolutionImage from '../assets/individualSolution1.jpg';
import solarBenefitsImage from '../assets/solarBenefits.jpg';
import electricChargingImage from '../assets/bornesElectriques.png';
import financialIncentivesImage from '../assets/financialIncentives.jpg';
import realization1Image from '../assets/realization1.jpg';
import realization2Image from '../assets/realization2.jpg';
import realization3Image from '../assets/realization3.jpg';
import realization4Image from '../assets/realization4.jpg';
import realization5Image from '../assets/realization5.jpg';
import realization6Image from '../assets/realization6.jpg';
import './particulier.css';

const Particulier = () => {
  const { t } = useTranslation();

  const solarOffers = [
    {
      title: t('solarBenefitsTitle'),
      image: solarBenefitsImage,
      alt: t('solarBenefitsAlt'),
      features: [
        { icon: faMoneyBillWave, text: t('solarBenefitsFeature1') },
        { icon: faHome, text: t('solarBenefitsFeature2') },
        { icon: faShieldAlt, text: t('solarBenefitsFeature3') },
      ],
      buttonText: t('learnMore'),
      buttonLink: '/contact',
    },
    {
      title: t('electricChargingTitle1'),
      image: electricChargingImage,
      alt: t('electricChargingAlt1'),
      description: t('electricChargingDescription1'),
      buttonText: t('seeMore'),
      buttonLink: '/contact',
    },
    {
      title: t('financialIncentivesTitle'),
      image: financialIncentivesImage,
      alt: t('financialIncentivesAlt'),
      description: t('financialIncentivesDescription'),
      buttonText: t('discoverIncentives'),
      buttonLink: '/contact',
    },
  ];

  const realizations = [
    { image: realization1Image, alt: t('realization1Alt'), title: t('realization1Title') },
    { image: realization2Image, alt: t('realization2Alt'), title: t('realization2Title') },
    { image: realization3Image, alt: t('realization3Alt'), title: t('realization3Title') },
    { image: realization4Image, alt: t('realization4Alt'), title: t('realization4Title') },
    { image: realization5Image, alt: t('realization5Alt'), title: t('realization5Title') },
    { image: realization6Image, alt: t('realization6Alt'), title: t('realization6Title') },
  ];

  return (
    <div className="particulier-page">
      <section className="particulier-header">
        <div className="particulier-content">
          <h1 className="particulier-title">{t('individualPageTitle')}</h1>
          <p className="particulier-description">{t('individualDescription')}</p>
        </div>
        <div className="particulier-image-container">
          <img
            src={individualSolutionImage}
            alt={t('individualSolutionAlt1')}
            className="particulier-image"
          />
        </div>
      </section>
      <section className="solar-offer">
        <div className="solar-offer-container">
          <h2 className="solar-offer-title">{t('solarOfferTitle')}</h2>
          <div className="solar-offer-grid">
            {solarOffers.map((offer, index) => (
              <div className="solar-offer-card" key={index}>
                <div className="solar-offer-image-container">
                  <img src={offer.image} alt={offer.alt} className="solar-offer-image" />
                </div>
                <div className="solar-offer-content">
                  <h3 className="solar-offer-subtitle">{offer.title}</h3>
                  {offer.features ? (
                    <ul className="solar-offer-features">
                      {offer.features.map((feature, idx) => (
                        <li key={idx}>
                          <FontAwesomeIcon icon={feature.icon} className="solar-offer-icon" />
                          {feature.text}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="solar-offer-description">{offer.description}</p>
                  )}
                  <div className="solar-offer-button-container">
                    <a href={offer.buttonLink} className="solar-offer-button">
                      {offer.buttonText}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="realizations">
        <div className="realizations-container">
          <h2 className="realizations-title">{t('realizationsTitle')}</h2>
          <div className="realizations-grid">
            {realizations.map((realization, index) => (
              <div className="realization-card" key={index}>
                <div className="realization-image-container">
                  <img src={realization.image} alt={realization.alt} className="realization-image" />
                  <div className="realization-overlay">
                    <h3 className="realization-overlay-title">{realization.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Particulier;