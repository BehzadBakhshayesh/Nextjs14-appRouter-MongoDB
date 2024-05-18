import React from "react";
import { handleGithubLogin } from "@/lib/action";
import styles from "./login.module.css";
import LoginForm from "@/components/loginForm/loginForm";

const page = () => {
  // const session = await auth();
  // console.log({ session });

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form className={styles.form} action={handleGithubLogin}>
          <button className={styles.github}>Login with GitHub</button>
        </form>
        <LoginForm />
      </div>
    </div>
  );
};

export default page;
