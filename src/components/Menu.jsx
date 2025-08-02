import React, { useState, useEffect } from 'react';
import './menu.css';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUserTie,
  faUser,
  faCogs,
  faBriefcase,
  faEnvelope,
  faBlog,
  faQuoteRight,
  faTimes,
  faBars,
  faAngleDown,
} from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/107946_agpeoexu12qb2y2au4a8xgvi.jpg';

const Menu = () => {
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isRealizationsOpen, setIsRealizationsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Handle scroll effect only on homepage
  useEffect(() => {
    if (window.location.pathname === '/') {
      const handleScroll = () => {
        setHasScrolled(window.scrollY > 20);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isRealizationsOpen) setIsRealizationsOpen(false);
  };

  const toggleRealizationsMenu = () => {
    setIsRealizationsOpen(!isRealizationsOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const menuItems = [
    { name: t('home'), path: '/', icon: faHome },
    { name: t('professional'), path: '/professionnel', icon: faUserTie },
    { name: t('individual'), path: '/particulier', icon: faUser },
    {
      name: t('realizations'),
      path: '/realisation',
      icon: faCogs,
      subItems: [
        { name: t('rooftop'), path: '/toiture' },
        { name: t('shadeStructure'), path: '/ombriere' },
        { name: t('solarFields'), path: '/champs-solaires' },
        { name: t('agrivoltaism'), path: '/agrivoltaisme' },
      ],
    },
    { name: t('recruitment'), path: '/recrutement', icon: faBriefcase },
    { name: t('contact'), path: '/contact', icon: faEnvelope },
    { name: t('blog'), path: '/blog', icon: faBlog },
  ];

  return (
    <nav className={`menu ${window.location.pathname === '/' && hasScrolled ? 'scrolled' : ''} ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
      <div className="menu-container">
        <a href="/" className="menu-logo">
          <img src={logo} alt="TSB Énergie Logo" />
        </a>
        <button className="menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle menu">
          <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
        </button>
        <div className={`menu-links-wrapper ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul className="menu-items">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`${window.location.pathname === item.path ? 'active' : ''} ${
                  item.subItems ? 'has-submenu' : ''
                }`}
              >
                <div className="menu-item-wrapper">
                  <a href={item.path}>
                    <FontAwesomeIcon icon={item.icon} className="menu-icon" />
                    {item.name}
                  </a>
                  {item.subItems && (
                    <>
                      <FontAwesomeIcon
                        icon={faAngleDown}
                        className={`submenu-toggle ${isRealizationsOpen ? 'open' : ''}`}
                        onClick={toggleRealizationsMenu}
                      />
                      <ul className={`submenu ${isRealizationsOpen && item.name === t('realizations') ? 'open' : ''}`}>
                        {item.subItems.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <a href={subItem.path}>{subItem.name}</a>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="menu-actions">
          <div className="language-switcher">
            <button
              onClick={() => changeLanguage('fr')}
              className={i18n.language === 'fr' ? 'active' : ''}
            >
              FR
            </button>
            <button
              onClick={() => changeLanguage('en')}
              className={i18n.language === 'en' ? 'active' : ''}
            >
              EN
            </button>
          </div>
          <a href="/devis" className="quote-button">
            <FontAwesomeIcon icon={faQuoteRight} className="button-icon" />
            {t('getQuote')}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Menu;