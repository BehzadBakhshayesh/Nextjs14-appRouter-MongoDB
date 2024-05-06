import React from "react";
import styles from "./style.module.css";
import Image from "next/image";
import PostUser from "@/components/postUser/postUser";
import { getPost } from "@/lib/data";

// const getDate = async (slug) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
//   if (!res.ok) {
//     throw new Error("Somthing went wrong");
//   }
//   return res.json();
// };
export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.desc,
  };
};

const page = async ({ params }) => {
  // const post = await getDate(params.slug);
  const post = await getPost(params.slug);
  console.log({ post });
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
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
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          {post && (
            <React.Suspense fallback={<>loading...</>}>
              <PostUser userId={post.userId} />
            </React.Suspense>
          )}
          <div className={styles.detailsText}>
            <span className={styles.detailTitle}>Published :</span>
            <span className={styles.detailValue}>
              {post?.createdAt?.toString().slice(4, 16)}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  );
};

export default page;
