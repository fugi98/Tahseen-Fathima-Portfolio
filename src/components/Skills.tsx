"use client"; // Add this line at the top

import React from 'react';
import { FaCog, FaPaintBrush, FaWrench, FaLightbulb } from 'react-icons/fa';
import Image from 'next/image';
import styles from '../styles/SkillsSection.module.css';

const SkillsSection = () => {
  return (
    <section className={styles.skillsSection} >
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.skillsContent}>
        <div className={styles.column}>
          <div className={styles.category}>
            <FaCog className={styles.categoryIcon} />
            <h3>DEVELOPMENT</h3>
            <div className={styles.skills}>
              <span className={`${styles.skill} ${styles.skillCurved}`}>React</span>
              <span className={`${styles.skill} ${styles.skillEllipse}`}>Next.js</span>
              <span className={`${styles.skill} ${styles.skillCurved}`}>Three.js</span>
              <span className={`${styles.skill} ${styles.skillEllipse}`}>Node.js</span>
              <span className={`${styles.skill} ${styles.skillCurved}`}>Tailwind</span>
              <span className={`${styles.skill} ${styles.skillEllipse}`}>Sass</span>
              <span className={`${styles.skill} ${styles.skillCurved}`}>JavaScript</span>
              <span className={`${styles.skill} ${styles.skillEllipse}`}>BootStrap</span>
              <span className={`${styles.skill} ${styles.skillCurved}`}>HTML5</span>
              <span className={`${styles.skill} ${styles.skillEllipse}`}>CSS</span>
              <span className={`${styles.skill} ${styles.skillCurved}`}>Python</span>
            </div>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.category}>
            <FaPaintBrush className={styles.categoryIcon} />
            <h3>DESIGN</h3>
            <div className={styles.designTools}>
              <Image src="/images/figma.svg" alt="Figma" width={50} height={50} />
              <Image src="/images/canva.svg" alt="Canva" width={50} height={50} />
              <Image src="/images/invision.svg" alt="InVision" width={50} height={50} />
            </div>
          </div>
          <div className={styles.rowCategories}>
            <div className={styles.category}>
              <FaWrench className={styles.categoryIcon} />
              <h3>TOOLS</h3>
              <ul className={styles.list}>
                <li>Git + Github</li>
                <li>Command Line</li>
                <li>Chrome DevTools</li>
                <li>Visual Studio</li>
                <li>Postman</li>
              </ul>
            </div>
            <div className={styles.category}>
              <FaLightbulb className={styles.categoryIcon} />
              <h3>KNOWLEDGE</h3>
              <ul className={styles.list}>
                <li>CSS Debugging</li>
                <li>SEO</li>
                <li>ECMAScript 6</li>
                <li>Usability</li>
                <li>Responsive design</li>
                <li>TDD</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
