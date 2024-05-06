import React from "react";
import styles from "./blog.module.css";
import PostCard from "@/components/postCard/postCard";
import { getPosts } from "@/lib/data";

// const getDate = async () => {
//   //   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   //   const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//   //     cache: "force-cache",
//   //   });
//   // const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//   //   cache: "no-store",
//   // });
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     next: { revalidate: 3600 },
//   });
//   if (!res.ok) {
//     throw new Error("Somthing went wrong");
//   }
//   return res.json();
// };

export const metadata = {
  title: "blog page",
  description: "blog description",
};

const page = async ({ params, searchParams }) => {
  console.log({ params, searchParams });
  // const posts = await getDate();
  const posts = await getPosts();
  return (
    <div className={styles.container}>
      {posts.map((post) => {
        return (
          <div className={styles.post} key={post.id}>
            <PostCard post={post} />
          </div>
        );
      })}
    </div>
  );
};

export default page;
