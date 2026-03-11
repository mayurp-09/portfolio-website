import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Mayur</h1>

        <p className={styles.description}>
          I am a frontend engineer with a specialty in web accessibility, focused on building pixel-perfect, 
          intuitive user interfaces. I enjoy working at the intersection of design and engineering, 
          where great user experience meets robust, clean, and scalable code.
        </p>

        <div className={styles.btnContainer}>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mayurgpande@gmail.com" 
          target="_blank" rel="noopener noreferrer" className={styles.contactBtn}>Hire Me</a>
          <a
            href=".Resume.pdf"
            target="_blank"
            download="Mayur_Pande_Resume.pdf"
            rel="noopener noreferrer"
            className={styles.contactBtn}
          >
          Resume
          </a>
        </div>
      </div>

      <img
        src={getImageUrl("hero/img.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};