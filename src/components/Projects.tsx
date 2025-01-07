"use client"; // Add this line at the top

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const ProjectsSection = styled.section`
  padding: 4rem 2rem;
  color: #e0e0e0;
  margin: 1rem auto;
  max-width: 1200px;
  position: relative;
  overflow: hidden;
  text-align: center; /* Center-aligns the button */

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    margin: 2rem auto;
  }
`;

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 2rem;
  text-align: justify;

  &::after {
    content: '';
    display: block;
    width: 70px;
    height: 2px;
    background-color: #1abc9c;
    margin-top: 0.5rem;
  }

  @media (max-width: 1200px) {
    font-size: 2.5rem;
  }

  @media (max-width: 992px) {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
  }
`;

const Project = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;
  padding: 1.5rem;
  box-sizing: border-box;
  position: relative;
  flex-direction: row;
  gap: 1.5rem;
  justify-content: flex-start; /* Aligns content to the left */

  .screenshot {
    width: 50%;
    max-width: 400px; /* Increased max-width */
    height: auto;
    border-radius: 8px;
    overflow: hidden;

    .button-container {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
      justify-content: center;
    }

    @media (max-width: 768px) {
      img {
        width: 100%;
        height: auto;
        object-fit: cover;
      }
    }
  }

  .content {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start; /* Aligns content to the left */
    text-align: left; /* Ensures text starts from the left */
  }

  h3 {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
    color: #3498db;

    @media (max-width: 1200px) {
      font-size: 1.6rem;
    }

    @media (max-width: 992px) {
      font-size: 1.4rem;
    }

    @media (max-width: 768px) {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1rem;

    @media (max-width: 1200px) {
      font-size: 0.95rem;
    }

    @media (max-width: 992px) {
      font-size: 0.9rem;
    }

    @media (max-width: 768px) {
      font-size: 0.85rem;
      margin-bottom: 0.75rem;
    }
  }

  .details {
    font-size: 0.9rem;
    margin-top: 1rem;
    color: #bdc3c7;
    padding-top: 1rem;
    width: 100%;
    border-top: none;
    border: none;
    padding: 0;

    @media (max-width: 768px) {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    text-align: left;

    .screenshot {
      width: 100%;
      max-width: none;
    }

    .content {
      width: 100%;
    }

    h3 {
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 1rem;
    }

    .button-container {
      flex-direction: row;
      align-items: center;
      margin-top: 1rem;
    }
  }
`;

const ButtonLink = styled.a`
  background-color: #3498db;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-decoration: none;
  font-size: 0.9rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2980b9;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.5rem 0.75rem;
  }
`;

const MoreProjectsLink = styled.a`
  display: inline-block;
  text-align: center;
  margin: 2rem auto; /* Centering with auto margins */
  padding: 0.75rem 1.5rem;
  border: 2px solid #1abc9c;
  color: #1abc9c;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1rem;
  position: relative;
  transition: color 0.3s, border-color 0.3s;
  font-weight: bold;

  &:hover {
    color: #16a085;
    border-color: #16a085;
  }

  &:before {
    content: '→'; /* Replace with 'VV' or any desired arrow character */
    display: inline-block;
    margin-left: 0.5rem;
    transition: transform 0.3s;
  }

  &:hover:before {
    transform: translateX(5px);
  }

  @media (max-width: 1200px) {
    font-size: 0.95rem;
  }

  @media (max-width: 992px) {
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
    padding: 0.5rem 1rem;
  }
`;

const Projects = () => (
  <ProjectsSection >
    <Title>Some Of My Projects</Title>
    <Project>
      <div className="screenshot">
        <Image src="/images/project-1.png" alt="React-Js-Anime-Website-using-API Screenshot" width={400} height={300} style={{ width: 'auto', height: 'auto' }} />
        <div className="button-container">
          <ButtonLink href="https://anitrends.netlify.app" target="_blank" rel="noopener noreferrer">Demo</ButtonLink>
          <ButtonLink href="https://github.com/fugi98/React-Js-Anime-Website-using-API" target="_blank" rel="noopener noreferrer">Github</ButtonLink>
        </div>
      </div>
      <div className="content">
        <h3>Anime-Website-using-API</h3>
        <p>This website lets users get updates related to popular, upcoming, and airing top 25 anime, and allows them to search for anime.</p>
        <div className="details">
          <p><strong>Features:</strong> Real-time anime updates, search functionality, and filter options.</p>
          <p><strong>Challenges:</strong> Handling large datasets and implementing responsive design.</p>
          <p><strong>Role:</strong> Developed the entire front-end using React.js, including integration with an anime API.</p>
          <p><strong>Technologies used:</strong> JavaScript</p>
        </div>
      </div>
    </Project>
    <Project>
      <div className="screenshot">
        <Image src="/images/project-2.png" alt="Astrology Screenshot" width={400} height={300} style={{ width: 'auto', height: 'auto' }} />
        <div className="button-container">
          <ButtonLink href="https://astrol-demo.netlify.app" target="_blank" rel="noopener noreferrer">Demo</ButtonLink>
          <ButtonLink href="https://github.com/fugi98/Astrology" target="_blank" rel="noopener noreferrer">Github</ButtonLink>
        </div>
      </div>
      <div className="content">
        <h3>Astrology</h3>
        <p>A demo astrology website design.</p>
        <div className="details">
          <p><strong>Features:</strong> Astrological sign information, daily horoscopes, and personalized predictions.</p>
          <p><strong>Challenges:</strong> Creating a user-friendly UI and ensuring data accuracy.</p>
          <p><strong>Role:</strong> Designed and developed the layout and interactive elements.</p>
          <p><strong>Technologies used:</strong> CSS</p>
        </div>
      </div>
    </Project>
    <Project>
      <div className="screenshot">
        <Image src="/images/project-3.png" alt="firstgame Screenshot" width={400} height={300} style={{ width: 'auto', height: 'auto' }} />
        <div className="button-container">
          <ButtonLink href="https://firstgame1.netlify.app/" target="_blank" rel="noopener noreferrer">Demo</ButtonLink>
          <ButtonLink href="https://github.com/fugi98/firstgame" target="_blank" rel="noopener noreferrer">Github</ButtonLink>
        </div>
      </div>
      <div className="content">
        <h3>firstgame</h3>
        <p>A simple game developed using JavaScript.</p>
        <div className="details">
          <p><strong>Features:</strong> Basic game mechanics, scoring system, and interactive gameplay.</p>
          <p><strong>Challenges:</strong> Implementing smooth animations and user controls.</p>
          <p><strong>Role:</strong> Coded the game logic and designed the game interface.</p>
          <p><strong>Technologies used:</strong> JavaScript</p>
        </div>
      </div>
    </Project>
    <Project>
      <div className="screenshot">
        <Image src="/images/project-4.png" alt="funanimepage Screenshot" width={400} height={300} style={{ width: 'auto', height: 'auto' }} />
        <div className="button-container">
          <ButtonLink href="https://fun-anime-page.netlify.app/" target="_blank" rel="noopener noreferrer">Demo</ButtonLink>
          <ButtonLink href="https://github.com/fugi98/funanimepage" target="_blank" rel="noopener noreferrer">Github</ButtonLink>
        </div>
      </div>
      <div className="content">
        <h3>funanimepage</h3>
        <p>An anime page with details about various anime.</p>
        <div className="details">
          <p><strong>Features:</strong> Anime descriptions, image galleries, and user ratings.</p>
          <p><strong>Challenges:</strong> Managing image galleries and user reviews.</p>
          <p><strong>Role:</strong> Developed the front-end and integrated API for fetching anime data.</p>
          <p><strong>Technologies used:</strong> CSS</p>
        </div>
      </div>
    </Project>
    <Project>
      <div className="screenshot">
        <Image src="/images/project-5.png" alt="Weatherforecasting-app Screenshot" width={400} height={300} style={{ width: 'auto', height: 'auto' }} />
        <div className="button-container">
          <ButtonLink href="https://myweatherwatch.vercel.app/" target="_blank" rel="noopener noreferrer">Demo</ButtonLink>
          <ButtonLink href="https://github.com/fugi98/WeatherWatch" target="_blank" rel="noopener noreferrer">Github</ButtonLink>
        </div>
      </div>
      <div className="content">
        <h3>WeatherWatch</h3>
        <p>A weather forecasting app created using React.js.</p>
        <div className="details">
          <p><strong>Features:</strong> Current weather updates, 7-day forecasts, and location-based services.</p>
          <p><strong>Challenges:</strong> Integrating weather API and displaying accurate data.</p>
          <p><strong>Role:</strong> Developed the entire app using React.js and integrated the weather API.</p>
          <p><strong>Technologies used:</strong> JavaScript</p>
        </div>
      </div>
    </Project>
    <Project>
      <div className="screenshot">
        <Image src="/images/project-6.png" alt="React-Crypto-Project Screenshot" width={400} height={300} style={{ width: 'auto', height: 'auto' }} />
        <div className="button-container">
          <ButtonLink href="https://blocksavvy.netlify.app/" target="_blank" rel="noopener noreferrer">Demo</ButtonLink>
          <ButtonLink href="https://github.com/fugi98/React-Crypto-Project" target="_blank" rel="noopener noreferrer">Github</ButtonLink>
        </div>
      </div>
      <div className="content">
        <h3>React-Crypto-Project</h3>
        <p>A React.js project providing cryptocurrency-related information and content.</p>
        <div className="details">
          <p><strong>Features:</strong> Real-time cryptocurrency prices, news updates, and market trends.</p>
          <p><strong>Challenges:</strong> Handling real-time data updates and user interactions.</p>
          <p><strong>Role:</strong> Designed and implemented the entire front-end using React.js and integrated API for crypto data.</p>
          <p><strong>Technologies used:</strong> JavaScript</p>
        </div>
      </div>
    </Project>
    <MoreProjectsLink href="https://github.com/fugi98" target="_blank" rel="noopener noreferrer">More Projects</MoreProjectsLink>
  </ProjectsSection>
);

export default Projects;
