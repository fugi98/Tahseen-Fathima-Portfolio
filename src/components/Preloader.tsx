"use client"; // Add this line at the top

import React from 'react';
import styles from '../styles/Preloader.module.css'; // Optional: Add your own styles

const Preloader = () => {
  return (
    <div className={styles.preloader}>
      <div className={styles.spinner}></div>
      <div className={styles.loadingText}>LOADING</div>
    </div>
  );
};

export default Preloader;
