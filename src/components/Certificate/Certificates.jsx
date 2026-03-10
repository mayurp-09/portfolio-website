import React, { useState } from "react";
import styles from "./Certificates.module.css";
import certificates from "../../data/certificates.json";
import { getImageUrl } from "../../utils";

export const Certificates = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? certificates.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === certificates.length - 1 ? 0 : current + 1);
  };

  return (
    <section className={styles.container} id="certificates">
      <h2 className={styles.title}>Certificates</h2>

      <div className={styles.slider}>
        <button className={styles.arrow} onClick={prevSlide}>
          ❮
        </button>

        <div className={styles.card}>
          <img
            src={getImageUrl(certificates[current].image)}
            alt={certificates[current].title}
          />
          <h3>{certificates[current].title}</h3>
        </div>

        <button className={styles.arrow} onClick={nextSlide}>
          ❯
        </button>
      </div>
    </section>
  );
};