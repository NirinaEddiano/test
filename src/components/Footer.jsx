import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import logoImage from '../assets/107946_agpeoexu12qb2y2au4a8xgvi.jpg';
import './footer.css';

const Footer = () => {
  const { t } = useTranslation();

  const footerLinks = [
    { name: t('home'), path: '/' },
    { name: t('professional'), path: '/professionnel' },
    { name: t('individual'), path: '/particulier' },
    {
      name: t('realizations'),
      path: '/realisation',
      subItems: [
        { name: t('rooftop'), path: '/toiture' },
        { name: t('shadeStructure'), path: '/ombriere' },
        { name: t('solarFields'), path: '/champs-solaires' },
        { name: t('agrivoltaism'), path: '/agrivoltaisme' },
      ],
    },
    { name: t('recruitment'), path: '/recrutement' },
    { name: t('contact'), path: '/contact' },
    { name: t('blog'), path: '/blog' },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column footer-logo">
          <img src={logoImage} alt={t('footerLogoAlt')} className="footer-logo-image" />
        </div>
        <div className="footer-column footer-links">
          <h3 className="footer-title">{t('footerLinksTitle')}</h3>
          <ul>
            {footerLinks.map((item, index) => (
              <li key={index} className={item.subItems ? 'has-submenu' : ''}>
                <a href={item.path}>{item.name}</a>
                {item.subItems && (
                  <ul className="footer-submenu">
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <a href={subItem.path}>{subItem.name}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-column footer-legal">
          <h3 className="footer-title">{t('footerLegalTitle')}</h3>
          <ul>
            <li><a href="/confidentialite">{t('footerConfidentiality')}</a></li>
            <li><a href="/mentions-legales">{t('footerLegalNotices')}</a></li>
            <li><a href="/politique-confidentialite">{t('footerPrivacyPolicy')}</a></li>
            <li><a href="/contact">{t('contact')}</a></li>
          </ul>
        </div>
        <div className="footer-column footer-contact">
          <h3 className="footer-title">{t('footerContactTitle')}</h3>
          <p>{t('footerPhone')}: <a href="tel:+33666085965">06 66 08 59 65</a></p>
          <p>{t('footerEmail')}: <a href="mailto:contact@tsb-enr.fr">contact@tsb-enr.fr</a></p>
          <p>{t('footerAddress')}: 52 Boulevard Koenigs, 31300 Toulouse</p>
        </div>
        <div className="footer-column footer-social">
          <h3 className="footer-title">{t('footerSocialTitle')}</h3>
          <div className="footer-social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label={t('footerFacebookAlt')}>
              <FontAwesomeIcon icon={faFacebookF} className="footer-social-icon" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label={t('footerInstagramAlt')}>
              <FontAwesomeIcon icon={faInstagram} className="footer-social-icon" />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label={t('footerTiktokAlt')}>
              <FontAwesomeIcon icon={faTiktok} className="footer-social-icon" />
            </a>
          </div>
        </div>
        <div className="footer-column footer-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.028848605075!2d1.406664315509627!3d43.59999997912272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebb6d8f4f2b7b%3A0x406f6a29f6a6a2a!2s52%20Bd%20Koenigs%2C%2031300%20Toulouse%2C%20France!5e0!3m2!1sen!2sus!4v1698765432100!5m2!1sen!2sus"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title={t('footerMapAlt')}
          ></iframe>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} TSB Énergie. {t('footerRights')}</p>
      </div>
    </footer>
  );
};

export default Footer;