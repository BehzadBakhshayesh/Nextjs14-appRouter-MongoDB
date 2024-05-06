import React from "react";
import styles from "./contact.module.css";
import Image from "next/image";
// import dynamic from "next/dynamic";

// 2
// const HydrationTestNoSSR = dynamic(() => import("@/components/hydrationTest"), {
//   ssr: false,
// });

export const metadata = {
  title: "contact page",
  description: "contact description",
};

const page = () => {
  // 1
  //   const [isClient, setisClient] = useState(false);
  //   useEffect(() => {
  //     setisClient(true);
  //   }, []);
  const num = Math.random();

  return (
    <div className={styles.container}>
      {/* <HydrationTestNoSSR /> */}
      {/* 3 */}
      <div suppressHydrationWarning>{num}</div>
      <div className={styles.imageContainer}>
        <Image
          src="/images/hero.jpg"
          alt="hero"
          fill={true}
          className={styles.image}
        />
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <input type="text" placeholder="name" />
          <input type="text" placeholder="email" />
          <input type="text" placeholder="phone" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default page;
