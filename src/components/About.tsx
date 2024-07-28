"use client";

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

// Styled components
const AboutSection = styled.section`
  background-color: #1a1a1a;
  color: #f5f5f5;
  padding: 4rem 2rem;
  border-radius: 8px;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 4.5rem;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: justify;
    padding: 2rem 1rem;
    margin: 2rem auto;
  }
`;

const IntroTextContainer = styled.div`
  max-width: 60%;
  position: relative;
  transform: translateX(-30px);

  @media (max-width: 768px) {
    max-width: 100%;
    transform: none;
  }
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const IntroText = styled.p`
  font-size: 1.4rem;
  line-height: 1.7;
  margin: 0;
  position: relative;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Underline = styled.span`
  display: block;
  width: 160px;
  height: 4px;
  background-color: #f5f5f5;
  margin-top: 0.5rem;
  position: absolute;
  bottom: -5px;
  left: 0;

  @media (max-width: 768px) {
    width: 120px;
  }
`;

const AboutContent = styled.div`
  font-size: 1.2rem;
  line-height: 1.7;
  margin-top: 2rem;
  color: grey;

  strong {
    color: white;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ContentSection = styled.div`
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const ImageContainer = styled.div`
  max-width: 30%;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

// About component
const About = () => (
  <AboutSection >
    <IntroTextContainer>
      <AboutTitle>Hey, I&apos;m Tahseen</AboutTitle>
      <IntroText>
        I&apos;m a design-minded, detail-oriented front-end developer passionate about combining beautiful code with beautiful design.
        <Underline />
      </IntroText>
      <AboutContent>
        <ContentSection>
          I&apos;m a Front-End Developer with a solid background in JavaScript, React, and UI/UX design. <strong>My educational journey</strong> includes a Bachelor&apos;s and a Master&apos;s degree in Computer Applications from Indira Gandhi Open University.
        </ContentSection>
        <ContentSection>
          With experience across various roles, from freelancing to full-time positions, I focus on creating dynamic, responsive web applications and enhancing user experiences. I&apos;m always exploring new technologies to refine my skills.
        </ContentSection>
        <ContentSection>
          <strong>Outside of coding,</strong> I enjoy crocheting, baking, spending time with my pet, reading, learning new languages, and going out. These hobbies help me stay creative and maintain a well-rounded perspective, enriching my work and daily life.
        </ContentSection>
        <ContentSection>
          I&apos;m an open-minded individual who embraces new ideas and perspectives. I believe that staying curious and adaptable is key to personal and professional growth.
        </ContentSection>
      </AboutContent>
    </IntroTextContainer>
    <ImageContainer>
      <Image src="/images/arcade.png" alt="Abstract Design" width={500} height={300} />
    </ImageContainer>
  </AboutSection>
);

export default About;
