import React from "react";

import styles from "./About.module.css"
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutimg.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
              I'm a frontend developer with experience in building responsive and dynamic web interfaces using HTML, CSS, JavaScript and React.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>SQL</h3>
              <p>
              Designing and managing efficient data storage and retrieval using SQL. 5 Star rating in SQL on HackerRank. 
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Java Programmer</h3>
              <p>
              Familiar with core Java concepts and building simple programs. 4 star rating in java on HacerRank.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
