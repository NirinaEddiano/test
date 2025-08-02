import React from 'react';
import { useTranslation } from 'react-i18next';
import recruitmentImage from '../assets/recruitment.jpg';
import job1 from '../assets/job1.jpg';
import job2 from '../assets/job2.jpg';
import job3 from '../assets/job3.jpg';
import job4 from '../assets/job4.jpg';
import job5 from '../assets/job5.jpg';
import job6 from '../assets/job6.jpg';
import './recrutement.css';

const Recrutement = () => {
  const { t } = useTranslation();

  const jobOffers = [
    {
      photo: job1,
      alt: t('job1PhotoAlt'),
      title: t('job1Title'),
      text: t('job1Text'),
      buttonLink: '/recrutement/electricien',
      buttonText: t('learnMore'),
    },
    {
      photo: job2,
      alt: t('job2PhotoAlt'),
      title: t('job2Title'),
      text: t('job2Text'),
      buttonLink: '/recrutement/charpente-metallique',
      buttonText: t('learnMore'),
    },
    {
      photo: job3,
      alt: t('job3PhotoAlt'),
      title: t('job3Title'),
      text: t('job3Text'),
      buttonLink: '/recrutement/chef-equipe',
      buttonText: t('learnMore'),
    },
    {
      photo: job4,
      alt: t('job4PhotoAlt'),
      title: t('job4Title'),
      text: t('job4Text'),
      buttonLink: '/recrutement/conducteur-travaux',
      buttonText: t('learnMore'),
    },
    {
      photo: job5,
      alt: t('job5PhotoAlt'),
      title: t('job5Title'),
      text: t('job5Text'),
      buttonLink: '/recrutement/ingenieur-etude',
      buttonText: t('learnMore'),
    },
    {
      photo: job6,
      alt: t('job6PhotoAlt'),
      title: t('job6Title'),
      text: t('job6Text'),
      buttonLink: '/recrutement/charge-direction',
      buttonText: t('learnMore'),
    },
  ];

  return (
    <div className="recrutement-page">
      <section className="recrutement-hero">
        <div className="recrutement-hero-container">
          <div className="recrutement-hero-image">
            <img src={recruitmentImage} alt={t('recruitmentImageAlt')} />
          </div>
          <div className="recrutement-hero-content">
            <h1 className="recrutement-title">{t('recruitmentTitle')}</h1>
            <p className="recrutement-description">{t('recruitmentDescription')}</p>
          </div>
        </div>
      </section>
      <section className="job-offers">
        <div className="job-offers-container">
          <h2 className="job-offers-title">{t('jobOffersTitle')}</h2>
          <p className="job-offers-description">{t('jobOffersDescription')}</p>
          <div className="job-offers-grid">
            {jobOffers.map((job, index) => (
              <div className="job-offer-card" key={index}>
                <img
                  src={job.photo}
                  alt={job.alt}
                  className="job-offer-photo"
                />
                <h3 className="job-offer-title">{job.title}</h3>
                <p className="job-offer-text">{job.text}</p>
                <a href={job.buttonLink} className="job-offer-button">
                  {job.buttonText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Recrutement;