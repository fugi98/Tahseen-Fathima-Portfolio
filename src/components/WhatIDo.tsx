"use client"; // Add this line at the top

import React from 'react';
import styled from 'styled-components';

const WhatIDoSection = styled.section`
  position: relative;
  padding: 6rem 5rem; /* Increased padding to increase height */
  background-image: url('./images/what-I-Do-Bg.jpg');
  background-size: cover;
  background-position: center;
  color: white;
  opacity: 0.87;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }

  @media (max-width: 768px) {
    padding: 4rem 2rem; /* Adjusted padding for smaller screens */
  }

  @media (max-width: 600px) {
    padding: 3rem 1rem; /* Adjusted padding for mobile screens */
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 2rem;
  
  &::after {
    content: '';
    display: block;
    width: 50px;
    height: 3px;
    background-color: #1abc9c;
    margin-top: 0.5rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 2px;
    background: #ffffff;
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 2px;
    background: #ffffff;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    &::after, &::before {
      display: none;
    }
  }
`;

const GridItem = styled.div`
  padding: 1.5rem;
  border-radius: 8px;
`;

const ItemTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const ItemDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: calc(100% - 3px);
  }
`;

const WhatIDo = () => (
  <WhatIDoSection >
    <Content>
      <Title>What I Do</Title>
      <Grid>
        <GridItem>
          <ItemTitle>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/>
            </svg>
            Web Development
          </ItemTitle>
          <ItemDescription>
            With a solid background in JavaScript (ES6), TypeScript, HTML, and CSS/Sass, I specialize in creating interactive websites and applications. My expertise includes working with modern frameworks like React.js, Next.js, and Node.js. I strive to write clean, maintainable, and efficient code while ensuring optimal user experiences through responsive and SEO-friendly design practices.
          </ItemDescription>
        </GridItem>
        <GridItem>
          <ItemTitle>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"/>
            </svg>
            Responsive UI Design
          </ItemTitle>
          <ItemDescription>
            I am dedicated to developing and implementing responsive, aesthetically pleasing interfaces that adapt seamlessly to any device, platform, or browser. My approach ensures that the user interface is intuitive and engaging, enhancing the overall user experience.
          </ItemDescription>
        </GridItem>
        <GridItem>
          <ItemTitle>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z"/>
            </svg>
            Experience Design
          </ItemTitle>
          <ItemDescription>
            I have extensive experience in designing user experiences that are both functional and enjoyable. My goal is to create products that users love to use, reducing frustration and enhancing satisfaction. By focusing on the user journey, I ensure that the end product is intuitive and easy to navigate.
          </ItemDescription>
        </GridItem>
        <GridItem>
          <ItemTitle>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
            Continuous Learning
          </ItemTitle>
          <ItemDescription>
            I am deeply committed to staying updated with the latest trends and advancements in the tech industry. My passion for continuous learning drives me to explore new technologies and methodologies, ensuring I bring innovative solutions to the projects I work on.
          </ItemDescription>
        </GridItem>
      </Grid>
    </Content>
  </WhatIDoSection>
);

export default WhatIDo;
