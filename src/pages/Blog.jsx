import React from 'react';
import { useTranslation } from 'react-i18next';
import './blog.css';

const Blog = () => {
  const { t } = useTranslation();

  const blogPosts = [
    {
      date: t('blog1Date'),
      title: t('blog1Title'),
      alt: t('blog1PhotoAlt'),
      buttonLink: '/blog/role-energie-solaire',
      buttonText: t('readMore'),
    },
    {
      date: t('blog2Date'),
      title: t('blog2Title'),
      alt: t('blog2PhotoAlt'),
      buttonLink: '/blog/debuter-solaire',
      buttonText: t('readMore'),
    },
    {
      date: t('blog3Date'),
      title: t('blog3Title'),
      alt: t('blog3PhotoAlt'),
      buttonLink: '/blog/avenir-energies',
      buttonText: t('readMore'),
    },
  ];

  return (
    <div className="blog-page">
      <section className="blog-hero">
        <div className="blog-hero-container">
          <h1 className="blog-title">{t('blogTitle')}</h1>
          <p className="blog-description">{t('blogDescription')}</p>
        </div>
      </section>
      <section className="blog-posts">
        <div className="blog-posts-container">
          <div className="blog-posts-grid">
            {blogPosts.map((post, index) => (
              <div className="blog-post-card" key={index}>
                <p className="blog-post-date">{post.date}</p>
                <h3 className="blog-post-title">{post.title}</h3>
                <a href={post.buttonLink} className="blog-post-button">{post.buttonText}</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;