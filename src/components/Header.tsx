// Header.tsx
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

interface HeaderProps {
  show: boolean;
}

const HeaderContainer = styled.header<{ $show: boolean }>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem 2rem;
  background: ${({ $show }) => ($show ? 'rgba(0, 0, 0, 0)' : 'transparent')};
  color: #f0f0f0;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 1000;
  transition: opacity 0.3s ease, transform 0.3s ease;
`;

const DotContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  position: fixed;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  transition: opacity 0.3s ease;

  &.hidden {
    opacity: 0;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Dot = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: rgba(240, 240, 240, 0.3);
  cursor: pointer;
  position: relative;
  transition: background-color 0.3s ease;

  &:hover::after {
    content: attr(data-name);
    position: absolute;
    top: -2rem;
    left: 50%;
    transform: translateX(-50%);
    background-color: #1abc9c;
    color: #fff;
    padding: 0.5rem;
    border-radius: 5px;
    white-space: nowrap;
    font-size: 0.8rem;
  }
`;

const ToggleButton = styled.div`
  display: none;
  font-size: 2rem;
  cursor: pointer;
  z-index: 1001;
  color: #f0f0f0;
  opacity: 0.8;
  position: fixed;
  left: 2rem;
  top: 1rem;
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Menu = styled.div<{ $isOpen: boolean }>`
  display: none;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  background: rgba(34, 34, 34, 0.9);
  width: 100vw;
  height: 100vh;
  padding: 2rem;
  z-index: 1000;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease, transform 0.3s ease;

  @media (max-width: 768px) {
    display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    li {
      font-size: 1.5rem;
      font-weight: 500;
      cursor: pointer;
      padding: 1rem;
      text-align: center;
      width: 100%;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #1abc9c;
        color: #fff;
      }
    }
  }
`;

const Header: React.FC<HeaderProps> = ({ show }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('home');
      const heroHeight = heroSection ? heroSection.offsetHeight : 0;
      const heroTop = heroSection ? heroSection.offsetTop : 0;
      const scrollPosition = window.scrollY;

      if (scrollPosition >= heroTop && scrollPosition <= heroTop + heroHeight) {
        setIsHeroVisible(false);
      } else {
        setIsHeroVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call the function once on mount to set initial visibility
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <HeaderContainer ref={headerRef} $show={show}>
      {isClient && (
        <>
          <DotContainer className={isHeroVisible ? '' : 'hidden'}>
            <Dot data-name="Intro" onClick={() => scrollToSection('home')} />
            <Dot data-name="About" onClick={() => scrollToSection('about')} />
            <Dot data-name="WhatIDo" onClick={() => scrollToSection('whatido')} />
            <Dot data-name="Skills" onClick={() => scrollToSection('skills')} />
            <Dot data-name="Experience" onClick={() => scrollToSection('experience')} />
            <Dot data-name="Projects" onClick={() => scrollToSection('projects')} />
            <Dot data-name="Contact" onClick={() => scrollToSection('contact')} />
          </DotContainer>
          <ToggleButton onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? '✕' : '☰'}
          </ToggleButton>
          <Menu $isOpen={isOpen}>
            <ul>
              <li onClick={() => scrollToSection('home')}>Intro</li>
              <li onClick={() => scrollToSection('about')}>About</li>
              <li onClick={() => scrollToSection('whatido')}>What I Do</li>
              <li onClick={() => scrollToSection('skills')}>Skills</li>
              <li onClick={() => scrollToSection('experience')}>Experience</li>
              <li onClick={() => scrollToSection('projects')}>Projects</li>
              <li onClick={() => scrollToSection('contact')}>Contact</li>
            </ul>
          </Menu>
        </>
      )}
    </HeaderContainer>
  );
};

export default Header;
