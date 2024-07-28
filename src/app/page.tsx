// Home.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/theme';
import ErrorBoundary from '../components/ErrorBoundary';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import About from '../components/About';
import WhatIDo from '../components/WhatIDo';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Preloader from '../components/Preloader'; // Import the Preloader component

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay or fetch data
    const timer = setTimeout(() => setLoading(false), 1000); // Adjust the timeout as needed

    // Clean up the timeout
    return () => clearTimeout(timer);
  }, []);

  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('home');
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;

        if (window.scrollY > heroHeight) {
          setShowHeader(true);
        } else {
          setShowHeader(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        {loading && <Preloader />} {/* Show the preloader while loading */}
        <GlobalStyle />
        <Header show={showHeader} />
        <section id="home"> <Hero /></section>
        <section id="about"> <About /></section>
        <section id="whatido"> <WhatIDo /></section>
        <section id="skills"> <Skills /></section>
        <section id="experience"> <Experience /></section>
        <section id="projects"> <Projects /></section>
        <section id="contact"> <Contact /></section>
        <Footer />
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default Home;
