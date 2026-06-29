'use client';
import { useState, useRef } from 'react';
import { useReveal } from '@/hooks/useReveal';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import FilmSlate from '@/components/FilmSlate';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Work from '@/components/Work';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Lightbox from '@/components/Lightbox';

export default function Home() {
  const [lightbox, setLightbox] = useState({ open: false, src: '', alt: '' });
  const scrollLockY = useRef(0);

  useReveal();

  function openLightbox(src, alt) {
    scrollLockY.current = window.scrollY;
    setLightbox({ open: true, src, alt });
    document.body.style.overflow  = 'hidden';
    document.body.style.position  = 'fixed';
    document.body.style.top       = `-${scrollLockY.current}px`;
    document.body.style.left      = '0';
    document.body.style.right     = '0';
  }

  function closeLightbox() {
    setLightbox(prev => ({ ...prev, open: false }));
    document.body.style.overflow  = '';
    document.body.style.position  = '';
    document.body.style.top       = '';
    document.body.style.left      = '';
    document.body.style.right     = '';
    window.scrollTo(0, scrollLockY.current);
  }

  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <Nav />
      <main id="main">
        <Hero />
        <FilmSlate />
        <Services />
        <Process />
        <Work onOpenLightbox={openLightbox} />
        <About />
        <Contact />
      </main>
      <Footer />
      <Lightbox {...lightbox} onClose={closeLightbox} />
    </>
  );
}
