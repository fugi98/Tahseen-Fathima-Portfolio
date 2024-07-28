"use client"; // Add this line at the top

import styled, { keyframes } from 'styled-components';
import { FaCodepen, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

// Keyframes for the icon hover effect
const hoverEffect = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-10px);
  }
`;

const FooterContainer = styled.footer`
  padding: 4rem 2rem;
  text-align: center;
  background: linear-gradient(45deg, #0f6c5a, #1d5a87); /* Darker gradient colors */
  color: white;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

const IconContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
  
`;

const IconLink = styled.a`
  color: white;
  font-size: 2.5rem;
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    color: #2ecc71;
    animation: ${hoverEffect} 0.3s forwards;
  }

  &:hover::after {
    content: attr(data-title);
    position: absolute;
    background: black;
    color: white;
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
    top: -2rem;
    font-size: 0.8rem;
    white-space: nowrap;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
  @media (max-width: 600px) {
    font-size: 1.7rem;
  }
`;

const Footer = () => (
  <FooterContainer>
    <IconContainer>
      <IconLink href="https://codepen.io/makoto56" target="_blank" data-title="CodePen">
        <FaCodepen />
      </IconLink>
      <IconLink href="https://github.com/fugi98" target="_blank" data-title="GitHub">
        <FaGithub />
      </IconLink>
      <IconLink href="https://www.linkedin.com/in/tahseen-fathima/" target="_blank" data-title="LinkedIn">
        <FaLinkedin />
      </IconLink>
      <IconLink href="mailto:sawa.seido08@gmail.com" data-title="Email">
        <FaEnvelope />
      </IconLink>
    </IconContainer>
    <FooterText>© 2024 Tahseen Fathima. All rights reserved.</FooterText>
  </FooterContainer>
);

export default Footer;
