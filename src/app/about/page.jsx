import Image from "next/image";
import React from "react";
import styles from "./about.module.css";

export const metadata = {
  title: "about page",
  description: "about description",
};

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1> About Page</h1>
        <p>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before the final copy is available.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image
            src="/images/brands.jpg"
            alt="brands"
            fill={true}
            className={styles.brandImage}
          />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/images/hero.jpg"
          alt="brands"
          fill={true}
          className={styles.heroImage}
        />
      </div>
    </div>
  );
};

export default page;
