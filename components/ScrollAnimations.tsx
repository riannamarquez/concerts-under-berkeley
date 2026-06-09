'use client';

import { useEffect } from 'react';

export default function ScrollAnimations() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    const els = document.querySelectorAll(
      '.about-card, .event-card, .gallery-item, .join-content, .section-header'
    );
    els.forEach((el, i) => {
      el.classList.add('fade-in');
      (el as HTMLElement).style.transitionDelay = `${(i % 4) * 0.1}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
