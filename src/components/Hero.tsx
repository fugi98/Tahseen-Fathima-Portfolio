"use client";

import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import Image from 'next/image';

const lineDisappear = keyframes`
  0% {
    width: 100%;
    opacity: 1;
  }
  100% {
    width: 0;
    opacity: 0;
  }
`;

const textAppear = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeroSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 4rem 2rem;
  color: #ecf0f1;
  height: 100vh;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('../images/bg1.png') no-repeat center center;
    background-size: cover;
    opacity: 0.5;
    z-index: -1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 5px;
    background: #ffffff;
    transform: translate(-50%, -50%);
    animation: ${lineDisappear} 3s ease-out forwards;
    z-index: 1;
  }

  h1,
  p {
    position: relative;
    display: inline-block;
    font-size: 4rem;
    overflow: hidden;
    z-index: 2;
    animation: ${textAppear} 4s ease-out forwards;
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  h1 {
    margin-top: -10vh;
  }

  p {
    font-size: 1.9rem;
    max-width: 800px;
    margin-top: 1rem;
    @media (max-width: 768px) {
      font-size: 1rem;
      margin-top: 0.5rem;
    }
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const AnimatedImageContainer = styled.div`
  position: absolute;
  bottom: 2rem; /* Adjust this value to position near the bottom */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 2rem;
  color: #1abc9c;
  transition: transform 1.6s ease, color 1.6s ease;

  &:hover {
    color: #16a085;
    transform: translateY(-10px);
  }

  img {
    width: 3rem;
    height: auto;
    transition: transform 0.3s ease;
  }

  .tooltip {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #1abc9c;
    color: #fff;
    padding: 0.5rem;
    border-radius: 5px;
    font-size: 0.9rem;
    transition: opacity 0.3s ease;
    white-space: nowrap;
    margin-bottom: 0.5rem;
  }

  &:hover .tooltip {
    visibility: visible;
    opacity: 1;
  }
`;

const HeroSection = () => {
  useEffect(() => {
    const element = document.getElementById('about');
    const scrollToAbout = () => {
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const button = document.getElementById('scroll-button');
    if (button) {
      button.addEventListener('click', scrollToAbout);
    }

    return () => {
      if (button) {
        button.removeEventListener('click', scrollToAbout);
      }
    };
  }, []);

  return (
    <HeroSectionContainer >
      <h1>Tahseen Fathima</h1>
      <div><p>Front-End Software Developer</p></div>
      <AnimatedImageContainer id="scroll-button">
        <Image src="/images/learn-more.png" alt="Scroll down" width={48} height={48} />
        <div className="tooltip">Learn More</div>
      </AnimatedImageContainer>
    </HeroSectionContainer>
  );
};

export default HeroSection;
