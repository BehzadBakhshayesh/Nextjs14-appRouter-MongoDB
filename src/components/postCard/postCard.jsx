import React from "react";
import styles from "./postCard.module.css";
import Image from "next/image";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imageContainer}>
          {post.img ? (
            <Image
              src={post.img}
              alt="hero"
              fill={true}
              className={styles.image}
            />
          ) : (
            <Image
              src="/images/hero.jpg"
              alt="hero"
              fill={true}
              className={styles.image}
            />
          )}
        </div>
        <span className={styles.date}>
          {post?.createdAt?.toString().slice(4, 16)}{" "}
        </span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.desc}</p>
        <Link href={`/blog/${post.slug}`} className={styles.link}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
