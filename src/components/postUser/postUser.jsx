import React from "react";
import styles from "./postUser.module.css";
import { getUser } from "@/lib/data";
import Image from "next/image";

// const getDate = async (userId) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`,
//     { cache: "no-store" }
//   );
//   if (!res.ok) {
//     throw new Error("Somthing went wrong");
//   }
//   return res.json();
// };

const PostUser = async ({ userId }) => {
  //   const user = await getDate(userId);

  const user = await getUser(userId);
  return (
    <div className={styles.container}>
      <Image
        src={user.img ?? "/images/noavatar.png"}
        alt="avatars"
        width={50}
        height={50}
        className={styles.avatar}
      />
      <div className={styles.texts}>
        <span className={styles.title}> Author: </span>
        <span className={styles.username}>{user.username}</span>
      </div>
    </div>
  );
};

export default PostUser;
