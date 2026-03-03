import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Mayur</h1>

        <p className={styles.description}>
          Entry level Software Developer with hands-on experience in React,
          JavaScript, SQL, and Core Java. Understanding of Data Structures,
          OOP and DBMS with practical exposure to building front-end projects
          and writing optimized SQL queries.
        </p>

        <div className={styles.btnContainer}>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mayurgpande@gmail.com" 
          target="_blank" rel="noopener noreferrer" className={styles.contactBtn}>Hire Me</a>
          <a
            href="/resume.pdf"
            target="_blank"
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