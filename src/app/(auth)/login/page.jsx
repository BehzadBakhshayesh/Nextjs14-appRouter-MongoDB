import React from "react";
import { handleGithubLogin, login } from "@/lib/action";
import styles from "./login.module.css";

const page = async () => {
  // const session = await auth();
  // console.log({ session });

  return (
    <div>
      <div className={styles.wrapper}>
        <form className={styles.form} action={handleGithubLogin}>
          <button className={styles.button}>Login with GitHub</button>
        </form>
        <form className={styles.form} action={login}>
          <input type="text" placeholder="username" name="username" />
          <input type="password" placeholder="password" name="password" />
          <button className={styles.button}>Login with Credentials</button>
        </form>
      </div>
    </div>
  );
};

export default page;
