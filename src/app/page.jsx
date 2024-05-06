import Image from "next/image";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1> Creative Thoughts Agency.</h1>
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
}
