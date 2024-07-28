import React from "react";
import styles from "../styles/ExperienceSection.module.css";
import { FaBriefcase } from "react-icons/fa";

interface Experience {
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string;
}

const experiences: Experience[] = [
  {
    title: "Freelance Website Developer",
    company: "BrandOverMoon",
    duration: "Jan - Apr 2022",
    location: "Remote, India",
    description:
      "Developed and designed websites for clients. Managed and updated the main company website. Interacted with clients twice a week to update them on project progress.",
  },
  {
    title: "Junior Front End Developer",
    company: "Makos Infotech",
    duration: "Sep - Dec 2021",
    location: "Remote, India",
    description:
      "Developed and designed an interactive official website using PHP. Worked on other development-stage projects. Initially joined as an intern but later became a full-time part of the company.",
  },
  {
    title: "Front End Developer Intern",
    company: "BrandsOverMoon",
    duration: "July - Sep 2021",
    location: "Remote, India",
    description:
      "Improved the official website, enhancing interactivity and SEO. Assisted in backend development and dynamic website features. Created UI/UX post designs for social media.",
  },
  {
    title: "Web Development Intern",
    company: "TechEra",
    duration: "Mar - May 2021",
    location: "Remote, India",
    description:
      "Assisted in improving and completing the official website. Mentored students in their web development course.",
  },
  {
    title: "Frontend Developer Intern",
    company: "The Renal Project",
    duration: "Nov 2020 - Feb 2021",
    location: "Remote, India",
    description:
      "Developed and maintained the official website using HTML, CSS, Sass, JavaScript, and jQuery. Tested for cross-browser compatibility, mobile responsiveness, and SEO.",
  },
  {
    title: "Frontend Developer Intern",
    company: "Tata Steel",
    duration: "Nov 2019 - Feb 2020",
    location: "Jamshedpur, India",
    description:
      "Developed and designed a help center website using .Net. Tested for compatibility, mobile responsiveness, and SEO.",
  },
];


const ExperienceSection = () => {
  return (
    <section  className={styles.experienceSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Experience</h2>
        <div className={styles.experienceIntro}>
          <p className={styles.description}>
            Presently I am working as a freelancer from March 2023.
          </p>
        </div>
        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`${styles.timelineItem} ${
                index % 2 === 0 ? styles.left : styles.right
              }`}
            >
              <div className={styles.timelineContent}>
                <span className={styles.date}>{exp.duration}</span>
                <h3 className={styles.title}>
                  <FaBriefcase className={styles.icon} />
                  {exp.title}
                </h3>
                <h4 className={styles.company}>{exp.company}</h4>
                <h5 className={styles.location}>{exp.location}</h5>
                <p className={styles.description}>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;