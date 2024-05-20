import React from "react";
import { getPosts } from "@/lib/data";
import Image from "next/image";
import { deletePosts } from "@/lib/action";
import styles from "./adminPosts.module.css";

const AdminPosts = async ({ id }) => {
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id} className={styles.post}>
          <div className={styles.detail}>
            <Image
              src={post.img || "/noAvatar.png"}
              alt=""
              width={50}
              height={50}
            />
            <span className={styles.postTitle}></span>
          </div>
          <form action={deletePosts}>
            <input type="hidden" name="id" value={post.id} />
            <button className={styles.postButton}>Delete</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminPosts;
